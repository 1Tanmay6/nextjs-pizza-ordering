import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./LoginForm.module.css";
const LoginForm = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()

          .email("Invalid email addresss`")
          .required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: values.email,
            password: values.password,
          }),
        });
        if (res.ok) {
          localStorage.setItem("login-token", 1);
          localStorage.setItem("login-time", new Date().toISOString());
          router.push("/");
        }

        setSubmitting(false);
      }}
    >
      <Form>
        <div className={classes["input-div"]}>
          <label htmlFor="email">Email Address</label>

          <Field name="email" type="email" />

          <ErrorMessage name="email" />
        </div>

        <div className={classes["input-div"]}>
          <label htmlFor="password">Password</label>

          <Field name="password" type="password" />

          <ErrorMessage name="password" className={classes.errorText} />
        </div>

        <div className={classes["button-div"]}>
          <button type="submit" className={classes["btn-main"]}>
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
