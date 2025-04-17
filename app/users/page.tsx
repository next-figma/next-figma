import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import UsersTable from "@/components/users/UsersTable/UsersTable";

export default async function UsersPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 border border-gray-500">
        <h1 className="my-10 text-xl font-medium text-center uppercase">
          Users
        </h1>
        <HydrationBoundary state={dehydrate(queryClient)}>    
          <UsersTable />
        </HydrationBoundary>
      </div>
    </div>
  );
}
