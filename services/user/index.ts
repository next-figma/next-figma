import { httpClient } from "..";
import { IUser } from "@/interfaces/user.interface";

const PATH_PREFIX = "/api/users";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = async (): Promise<IUser[]> => {
  const { data } = await httpClient.get(PATH_PREFIX);
  return data;
};
