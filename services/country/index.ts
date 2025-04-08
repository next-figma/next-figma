import { httpClient } from "..";
import { ICountry } from "@/interfaces/country.interface";

const PATH_PREFIX = "/api/countries";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const getAllCountries = async (): Promise<ICountry[]> => {
  const { data } = await httpClient.get(PATH_PREFIX);
  return data;
};
