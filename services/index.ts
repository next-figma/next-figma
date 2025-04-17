import axios from "axios";
import { BASE_URL } from "./constants";

axios.interceptors.response.use((response) => {
  return response;
});

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
