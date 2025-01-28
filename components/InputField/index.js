"use client"
import { Field } from 'formik';
import { ErrorMessage } from 'formik';
import styles from "./index.module.css";

// Reusable input field component
export default function InputField({ label, name, placeholder, type }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field className={styles.formField} id={name} name={name} placeholder={placeholder} type={type} />
            <ErrorMessage className={styles.errorMessage} name={name} component="div" />
        </div>
    )
};