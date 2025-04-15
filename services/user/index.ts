import { httpClient } from "..";
import { IUser } from "@/interfaces/user.interface";

const PATH_PREFIX = "/api/users";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = async (): Promise<IUser[]> => {
  const { data } = await httpClient.get(PATH_PREFIX);
  return data;
};

export const UPDATE_USER_BY_ID = "UPDATE_USER_BY_ID";

export const updateUser = async (id: string, updatedData: Partial<IUser>): Promise<IUser> => {
  const { data } = await httpClient.patch(`${PATH_PREFIX}/${id}`, updatedData);
  return data;
};
