import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";

import { fetchDataTable } from "../api/dataTableApi";
import type { Artwork } from "../interface/Artwork";

const DisplayDataTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [artwork, setArtwork] = useState<Artwork[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchDataTable(page, rows);
        setTotalRecords(response.pagination.total);
        setArtwork(response.data);
      } catch (error) {
        console.error("Error :", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [page, rows]);

  const selectedRowsForPage = artwork.filter((a) => selectedIds.includes(a.id));

  const handleSelectN = (count: number) => {
    if (isNaN(count) || count <= 0) {
      setSelectedIds((prev) =>
        prev.filter((id) => !artwork.some((a) => a.id === id))
      );
      return;
    }

    const idsFromPage = artwork.slice(0, count).map((a) => a.id);

    setSelectedIds((prev) => {
      const withoutPage = prev.filter(
        (id) => !artwork.some((a) => a.id === id)
      );
      return [...withoutPage, ...idsFromPage];
    });
  };

  return (
    <div>
      <div
        style={{
          padding: "0px 20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      >
        <p>selected rows : {selectedIds.length}</p>
        <input
          type="number"
          min={0}
          max={artwork.length}
          placeholder="Select N rows on this page"
          onChange={(e) => handleSelectN(Number(e.target.value))}
          style={{
            width: "200px",
            padding: "8px 5px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <DataTable
        loading={isLoading}
        value={artwork}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
        selection={selectedRowsForPage}
        selectionMode="multiple"
        onSelectionChange={(e) => {
          const pageSelected = (e.value as Artwork[]).map((a) => a.id);
          const pageIds = artwork.map((a) => a.id);

          setSelectedIds((prev) => {
            const withoutPage = prev.filter((id) => !pageIds.includes(id));
            return [...withoutPage, ...pageSelected];
          });
        }}
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />

        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Origin" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Start Date" />
        <Column field="date_end" header="End Date" />
      </DataTable>

      <Paginator
        className="custom-paginator"
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        template="CurrentPageReport PrevPageLink PageLinks NextPageLink"
        currentPageReportTemplate="Page {currentPage} of {totalPages}"
        onPageChange={(e) => {
          setFirst(e.first);
          setPage(e.page + 1);
          setRows(e.rows);
        }}
      />
    </div>
  );
};

export default DisplayDataTable;
