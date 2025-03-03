"use client";

import Select from "react-select";
import { SingleValue } from "react-select";
import { User } from "@/interfaces/user.interface";
import styles from "./UserSelector.module.css";

export default function UserSelector({
  users,
  onChange,
}: {
  users: User[];
  onChange: (
    selectedOption: SingleValue<{ value: string, label: string }>
  ) => void;
}) {
  const options = users.map((user) => ({ 
    value: user.name, 
    label: user.name,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <label htmlFor="user" className={styles.label}>
          User
        </label>
        <Select
          id="user"
          options={options}
          onChange={onChange}
          placeholder="Select a name"
          className={styles.selectInput}
        />
      </div>
    </div>
  );
}
