import { IStatus } from "./status.interface";
import { ICountry } from "./country.interface";
import { IDepartment } from "./department.interface";

export interface IUser {
  _id?: string;
  name: string;
  status: IStatus;
  country: ICountry;
  department: IDepartment;
}
