import * as yup from "yup";

const registrationFormSchema = yup.object({
    name: yup.string().required().min(2, 'Name must be at least 2 letters long'),
    email: yup.string().email().required('Email cannot be empty'),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/).min(6, 'Password must be at least 6 characters long!'),
    repeat: yup.string().required().oneOf([yup.ref('password')], 'Passwords don\'t match'),
    avatar: yup.string()
})

export type RegistrationFormData = yup.InferType<typeof registrationFormSchema>

export default registrationFormSchema