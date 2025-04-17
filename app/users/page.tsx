import UsersTable from "@/components/users/UsersTable/UsersTable";

export default async function UsersPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 border border-gray-500">
        <h1 className="my-10 text-xl font-medium text-center uppercase">
          Users
        </h1>
        <UsersTable />
      </div>
    </div>
  );
}
