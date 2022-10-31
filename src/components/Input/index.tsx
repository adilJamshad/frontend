import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface InputProps {
  name: string;
}

const Input = ({ name }: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <TextField
      {...field}
      error={!!meta.error}
      helperText={meta.error && meta.touched && meta.error}
    />
  );
};

export default Input;
