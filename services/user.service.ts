import { Country, Department } from "@/interfaces/metaData.interface";
import { User } from "@/interfaces/user.interface";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const UserService = {
  async getUsers() {
    const { data } = await axios.get<User[]>(API_URL);
    return data;
  }
};

export const MetaService = {
  async getMetaData() {
    const [countriesRes, departmentsRes] = await Promise.all([
      axios.get<Country[]>("/countries"),
      axios.get<Department[]>("/departments"),
    ]);

    return {
      countries: countriesRes.data,
      departments: departmentsRes.data,
    };
  }
};
