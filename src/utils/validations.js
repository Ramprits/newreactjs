import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
  userName: Yup.string()
    .required()
    .max(10),
  password: Yup.string()
    .required()
    .max(15)
});

const RegisterValidation = Yup.object().shape({
  userName: Yup.string()
    .required()
    .max(100),
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .max(15)
});

export { LoginValidation, RegisterValidation };
