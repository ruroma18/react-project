import React from "react";
import { Formik, Form, Field } from "formik";

const SignInForm = () => {
  const submithandler = ({ login, password }, formikBag) => {
    console.log(`login: ${login}, password: ${password}`);

    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      onSubmit={submithandler}
    >
      {() => {
        return (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              gap: "10px",
              width: "350px",
            }}
          >
            <Field name="login" placeholder="login" />
            <Field name="password" type="password" placeholder="password" />
            <button type="submit">Sign In</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
