"use client";

import { useState } from "react";
import { SingleValue } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/interfaces/user.interface";
import { getAllUsers, GET_ALL_USERS } from "@/services/user";
import styles from "./EditUser.module.css";
import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

export default function EditUser() {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const {
    data: users,
    error, 
    isError,
  } = useQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: () => getAllUsers(),
  });

  if (isError) return <div>Error: {error.message}</div>;

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
        <EditUserForm user={selectedUser} />
        <ActionButtons />
      </div>
    </div>
  );
}
