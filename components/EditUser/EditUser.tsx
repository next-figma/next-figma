"use client";

import { useState } from "react";
import { SingleValue } from "react-select";
import { MetaData } from "@/interfaces/metaData.interface";
import { User } from "@/interfaces/user.interface";
import styles from "./EditUser.module.css";
import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

interface IEditUser {
  users: User[];
};

function EditUser({ users }: IEditUser ) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const userData = users.find((user) => user.name === selectedOption?.value);
    setSelectedUser(userData || null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.editUserBox}>
        <h1 className={styles.editUserTitle}>
          Edit User
        </h1>
        <UserSelector users={users} onChange={handleUserChange} />
        <EditUserForm user={selectedUser} />
        <ActionButtons />
      </div>
    </div>
  );
}

export default EditUser;
