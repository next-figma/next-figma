import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser, GET_ALL_USERS } from "@/services/user";
import { IEditUserForm } from "@/interfaces/editUserForm.interface";

interface IFormData {
  name: string;
  status: string;
  country: string;
  department: string;
}

export const useUpdateUser = ({ user, statuses, countries, departments }: IEditUserForm) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: IFormData) => {
      const { _id } = user || {};

      if (!_id) {
        throw new Error("User ID is missing");
      }

      const status = statuses.find((s) => (s.name) === formData.status);
      const country = countries.find((c) => (c.name) === formData.country);
      const department = departments.find((d) => (d.name) === formData.department);

      if (!status || !country || !department) {
        throw new Error("Missing required data for user update");
      }

      return updateUser(_id, { ...formData, status, country, department });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_USERS] });
    },
    onError: (error) => {
      console.error("Failed to update user", error);
    },
  });
};
