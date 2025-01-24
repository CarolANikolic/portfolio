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

export default validationSchema