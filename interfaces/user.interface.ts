import { Status, Country, Department } from "./metaData.interface"; 

export interface User {
  name: string;
  status: Status;
  country: Country;
  department: Department;
}
