"use client"
import { Formik, Field, Form } from 'formik';
import { ErrorMessage } from 'formik';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import validationSchema from '@/objects/formValidationSchema';
import TitleAndText from '../TitleAndText';

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
        <section>
            <TitleAndText
            title="h2"
            titleContent="Check Out Some of My Skills"
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
                <Form>
                    <label htmlFor="fullName">Full Name</label>
                    <Field id="fullName" name="fullName" placeholder="Jane Doe" />
                    <ErrorMessage name="fullName" component="div" />

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="jane@email.com" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="message">Message</label>
                    <Field id="message" name="message" placeholder="Hi Carol, I have a project for you..." />
                    <ErrorMessage name="message" component="div" />

                    <button type="submit">Send</button>
                </Form>
            </Formik>

            {status && <p>{status}</p>} 
        </section>
    );
}
