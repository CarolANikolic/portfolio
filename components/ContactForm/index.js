"use client"
import { Formik, Field, Form } from 'formik';
import { ErrorMessage } from 'formik';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
    fullName: yup
    .string()
    .min(4, "Full Name must be at least 4 characters.")
    .required("This field is required."),

    message: yup
    .string()
    .min(10, "Message must be at least 10 characters.")
    .required("This field is required."),

    email: yup
    .string()
    .email("Please, enter a valid e-mail adress.")
    .required("This field is required."),
});

export default function ContactForm() {
    return (
        <section>
            <h1>Sign Up</h1>
            <Formik
            initialValues={{
                fullName: '',
                email: '',
                message: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(JSON.stringify(values, null, 2));
            }}
            validationSchema={validationSchema}
            >
                <Form>
                    <label htmlFor="fullName">FullName</label>
                    <Field id="fullname" name="fullName" placeholder="Jane Doe" />
                    <ErrorMessage name="fullName" component="div"/>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@email.com"
                        type="email"
                    />
                    <ErrorMessage name="email" component="div"/>

                    <label htmlFor="message">Message</label>
                    <Field id="message" name="message" placeholder="Hi Carol, I have a project for you..." />
                    <ErrorMessage name="message" component="div"/>

                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </section>
    );
}