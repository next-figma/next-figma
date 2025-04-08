import { httpClient } from "..";
import { IDepartment } from "@/interfaces/department.interface";

const PATH_PREFIX = "/api/departments";

export const GET_ALL_DEPARTMENTS = "GET_ALL_DEPARTMENTS";

export const getAllDepartments = async (): Promise<IDepartment[]> => {
  const { data } = await httpClient.get(PATH_PREFIX);
  return data;
};
