"use client"
import { Formik, Field, Form } from 'formik';
import { ErrorMessage } from 'formik';
import validationSchema from '@/objects/formValidationSchema';


export default function ContactForm() {
    return (
        <section>
            <h1>Get in touch</h1>
            
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