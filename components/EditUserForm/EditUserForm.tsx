"use client";

import { User } from "@/interfaces/user.interface";
import { useState, useEffect } from "react";
import Form from "next/form";
import Select from "react-select";
import countries from "@/data/countries.json";
import departments from "@/data/departments.json";
import statuses from "@/data/statuses.json";
import styles from "./EditUserForm.module.css";

interface IEditUserForm {
  user: User | null;
};

export default function EditUserForm({ user }: IEditUserForm ) {
  const [formValues, setFormValues] = useState({
    name: "",
    status: "",
    country: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      setFormValues({
        name: user.name || "",
        status: user.status?.name || "",
        country: user.country?.name || "",
        department: user.department?.name || "",
      });
    }
  }, [user]);

  const handleChange = (field: string, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const dataSources = {
    statuses,
    countries,
    departments,
  };

  const options = Object.fromEntries(
    Object.entries(dataSources).map(([key, values]) => [
      key,
      values.map((item) => ({ value: item.name, label: item.name })),
    ])
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        User Information
      </h2>

      <Form action="" className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input 
            type="text"
            id="fullName"
            className={styles.input}
            disabled={!user}
            value={formValues.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="department" className={styles.label}>
            Department
          </label>
          <Select
            id="department"
            placeholder=""
            options={options.departments}
            className={styles.selectInput}
            isDisabled={!user}
            value={options.departments.find(
              (option) => option.value === formValues.department
            )}
            onChange={(selectedOption) =>
              handleChange("department", selectedOption?.value || "")
            }
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="country" className={styles.label}>
            Country
          </label>
          <Select
            id="country"
            placeholder=""
            options={options.countries}
            className={styles.selectInput}
            isDisabled={!user}
            value={options.countries.find(
              (option) => option.value === formValues.country
            )}
            onChange={(selectedOption) =>
              handleChange("country", selectedOption?.value || "")
            }
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="status" className={styles.label}>
            Status
          </label>
          <Select
            id="status"
            placeholder=""
            options={options.statuses}
            className={styles.selectInput}
            isDisabled={!user}
            value={options.statuses.find(
              (option) => option.value === formValues.status
            )}
            onChange={(selectedOption) =>
              handleChange("status", selectedOption?.value || "")
            }
          />
        </div>
      </Form>
    </div>
  );
}
