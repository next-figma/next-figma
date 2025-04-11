import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import EditUser from "@/components/EditUser/EditUser";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import { getAllStatuses, GET_ALL_STATUSES } from "@/services/status";
import { getAllCountries, GET_ALL_COUNTRIES } from "@/services/country";
import { getAllDepartments, GET_ALL_DEPARTMENTS } from "@/services/department";

export const queries = [
  { queryKey: [GET_ALL_STATUSES], queryFn: getAllStatuses },
  { queryKey: [GET_ALL_COUNTRIES], queryFn: getAllCountries },
  { queryKey: [GET_ALL_DEPARTMENTS], queryFn: getAllDepartments },
];

export default async function EditUserPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  await Promise.all(
    queries.map(({ queryKey, queryFn }) => {
      queryClient.prefetchQuery({ queryKey, queryFn })
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditUser />
    </HydrationBoundary>
  );
}
