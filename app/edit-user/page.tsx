import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import EditUser from "@/components/EditUser/EditUser";

export default async function EditUserPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditUser />
    </HydrationBoundary>
  );
}
