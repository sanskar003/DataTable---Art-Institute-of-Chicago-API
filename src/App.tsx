import { PrimeReactProvider } from "primereact/api";
import DisplayDataTable from "./components/DisplayDataTable";
                        

const App = () => {
  return (
    <div>
      <PrimeReactProvider>
        <DisplayDataTable />
      </PrimeReactProvider>
    </div>
  );
};

export default App;
