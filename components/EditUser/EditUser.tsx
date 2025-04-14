"use client";

import { useState } from "react";
import { SingleValue } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/interfaces/user.interface";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import { useMetaData } from "@/hooks/useMetaData";
import styles from "./EditUser.module.css";
import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";

export default function EditUser() {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const {
    data: users,
    error: usersError, 
    isError: isUsersError,
  } = useQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  const {
    statuses,
    countries,
    departments,
  } = useMetaData();

  const hasError =
    isUsersError || statuses.isError || countries.isError || departments.isError;

  if (hasError) {
    const errors = [
      usersError,
      statuses.error,
      countries.error,
      departments.error,
    ]
      .filter(Boolean)
      .map((e) => (e as Error).message)
      .join(", ");

    return <div>Error: {errors}</div>;
  }

  const handleChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const user = users?.find((user) => user.name === selectedOption?.value);
    setSelectedUser(user || null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.editUserBox}>
        <h1 className={styles.editUserTitle}>
          Edit User
        </h1>
        <UserSelector users={users} onChange={handleChange} />
        <EditUserForm 
          user={selectedUser}
          statuses={statuses.data}
          countries={countries.data}
          departments={departments.data}
        />
      </div>
    </div>
  );
}
