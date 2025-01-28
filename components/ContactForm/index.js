"use client"
import { Formik, Field, Form } from 'formik';
import { ErrorMessage } from 'formik';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import validationSchema from '@/objects/formValidationSchema';
import TitleAndText from '../TitleAndText';
import InputField from '../InputField';
import styles from "./index.module.css";


export default function ContactForm() {
    const [status, setStatus] = useState(""); // For showing submission status (success or error)
    const [isSuccess, setIsSuccess] = useState(false); // To track success or error

    // Retrieve the environment variables 
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const handleSubmit = (values, { resetForm }) => {
        emailjs
            .send(serviceID, templateID, values, userID)
            .then(
                (response) => {
                    console.log("SUCCESS:", response);
                    setStatus("Thank you for your message! I’ll get back to you soon.");
                    setIsSuccess(true); 
                    resetForm(); 
                },
                (error) => {
                    console.log("FAILED:", error);
                    setStatus("Something went wrong. Please try again.");
                    setIsSuccess(false); 
                }
            );
    };

    return (
        <section className={styles.formSection}>
            <div className={styles.formContainer}>
                <hr />
                <TitleAndText
                    title="h2"
                    titleContent="Get in Touch"
                    alignment="center"
                    color="boldBlack"
                    fontSize="big"
                />

                <TitleAndText
                    text="Looking for a Front-End Developer? Let’s chat about your project!"
                    alignment="center"
                    color="regularBlack"
                    fontSize="medium"
                />

                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        message: '',
                    }}
                    onSubmit={handleSubmit} 
                    validationSchema={validationSchema}
                >
                    <Form className={styles.contactForm} id="contact">
                        <InputField 
                            styles="styles.formField"
                            stylesError="styles.errorMessage"
                            label="Full Name" 
                            name="fullName" 
                            type="text"
                            placeholder="Jane Doe" />

                        <InputField 
                            styles="styles.formField"
                            stylesError="styles.errorMessage"
                            label="Email" 
                            name="email" 
                            placeholder="jane@email.com" 
                            type="email" />

                        <div>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" className={`${styles.formField} ${styles.formFieldMessage}`} id="message" name="message" placeholder="Hi Carol, I have a project for you..." />
                            <ErrorMessage className={styles.errorMessage} name="message" component="div" />
                        </div>

                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </Form>
                </Formik>

                {status && (
                    <p className={isSuccess ? styles.formConfirmation : styles.formError}>
                        {status}
                    </p>
                )}
            </div>
        </section>
    );
}

