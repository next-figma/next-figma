import { httpClient } from "..";
import { IStatus } from "@/interfaces/status.interface";

const PATH_PREFIX = "/api/statuses";

export const GET_ALL_STATUSES = "GET_ALL_STATUSES";

export const getAllStatuses = async (): Promise<IStatus[]> => {
  const { data } = await httpClient.get(PATH_PREFIX);
  return data;
};
