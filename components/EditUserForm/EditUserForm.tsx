"use client";

import Form from "next/form";
import Select from "react-select";
import styles from "./EditUserForm.module.css";
import ActionButtons from "../ActionButtons/ActionButtons";
import { useState, useEffect, useRef, useMemo } from "react";
import { IEditUserForm } from "@/interfaces/editUserForm.interface";

export default function EditUserForm({
  user, 
  statuses, 
  countries, 
  departments,
}: IEditUserForm) {
  const [formValues, setFormValues] = useState({
    name: "",
    status: "",
    country: "",
    department: "",
  });

  const initialFormValues = useRef(formValues);

  useEffect(() => {
    if (user) {
      const newFormValues = {
        name: user.name || "",
        status: user.status?.name || "",
        country: user.country?.name || "",
        department: user.department?.name || "",
      };
      setFormValues(newFormValues);
      initialFormValues.current = newFormValues;
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

  const handleUndo = () => {
    setFormValues({ ...initialFormValues.current });
  };

  const hasChanges = useMemo(() => {
    return JSON.stringify(formValues) !== JSON.stringify(initialFormValues.current);
  }, [formValues]);

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

      <ActionButtons hasChanges={hasChanges} onUndo={handleUndo} />
    </div>
  );
}
