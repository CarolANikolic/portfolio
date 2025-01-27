"use client"
import { Formik, Field, Form } from 'formik';
import { ErrorMessage } from 'formik';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import validationSchema from '@/objects/formValidationSchema';
import TitleAndText from '../TitleAndText';
import styles from "./index.module.css";

export default function ContactForm() {
    const [status, setStatus] = useState(""); // For showing submission status (success or error)

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
                    resetForm(); 
                },
                (error) => {
                    console.log("FAILED:", error);
                    setStatus("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <section className={styles.formSection}>
            <div className={styles.formContainer}>
                <hr></hr>
                <TitleAndText
                title="h2"
                titleContent="Get in Touch"
                alignment="center"
                color="boldBlack"
                fontSize="big"/>

                <TitleAndText
                text="Looking for a Front-End Developer? Let’s chat about your project!"
                alignment="center"
                color="regularBlack"
                fontSize="medium"/>
                

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
                        <div >
                            <label htmlFor="fullName">Full Name</label>
                            <Field className={styles.formField} id="fullName" name="fullName" placeholder="Jane Doe" />
                            <ErrorMessage name="fullName" component="div" />
                        </div>
                        
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field className={styles.formField} id="email" name="email" placeholder="jane@email.com" type="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        
                        <div>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" className={`${styles.formField} ${styles.formFieldMessage}`} id="message" name="message" placeholder="Hi Carol, I have a project for you..." />
                            <ErrorMessage name="message" component="div" />
                        </div>

                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </Form>
                </Formik>

                {status && <p>{status}</p>} 
            </div>
        </section>
    );
}
