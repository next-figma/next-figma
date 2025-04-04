import { Status, Country, Department } from "./metaData.interface"; 

export interface IUser {
  name: string;
  status: Status;
  country: Country;
  department: Department;
}
