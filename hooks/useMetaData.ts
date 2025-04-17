import { useQueries } from "@tanstack/react-query";
import { getAllStatuses, GET_ALL_STATUSES } from "@/services/status";
import { getAllCountries, GET_ALL_COUNTRIES } from "@/services/country";
import { getAllDepartments, GET_ALL_DEPARTMENTS } from "@/services/department";

export const useMetaData = () => {
  const results = useQueries({
    queries: [
      { queryKey: [GET_ALL_STATUSES], queryFn: getAllStatuses },
      { queryKey: [GET_ALL_COUNTRIES], queryFn: getAllCountries },
      { queryKey: [GET_ALL_DEPARTMENTS], queryFn: getAllDepartments },
    ],
  });

  const [statuses, countries, departments] = results;

  return {
    statuses: {
      data: statuses.data ?? [],
      error: statuses.error,
      isError: statuses.isError,
    },
    countries: {
      data: countries.data ?? [],
      error: countries.error,
      isError: countries.isError,
    },
    departments: {
      data: departments.data ?? [],
      error: departments.error,
      isError: departments.isError,
    },
  };
};
