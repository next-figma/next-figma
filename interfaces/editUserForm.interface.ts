import { IUser } from "./user.interface";
import { IStatus } from "./status.interface";
import { ICountry } from "./country.interface";
import { IDepartment } from "./department.interface";

export interface IEditUserForm {
  user: IUser | null;
  statuses: IStatus[];
  countries: ICountry[];
  departments: IDepartment[];
}
