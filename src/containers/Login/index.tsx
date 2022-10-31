import React from "react";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";

interface LoginType {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: LoginType = { email: "", password: "" };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Formik initialValues={initialValues}>
          <Form></Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
