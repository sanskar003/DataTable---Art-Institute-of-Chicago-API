import axios from "axios"
import type { ApiResponse } from "../interface/ApiReponse";

const BASE_URL = "https://api.artic.edu/api/v1/artworks";


export const fetchDataTable = async(page: number, rows: number): Promise<ApiResponse> =>{
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}?page=${page}&limit=${rows}`);
        const data: ApiResponse = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error :", error);
        throw error;
    }
}