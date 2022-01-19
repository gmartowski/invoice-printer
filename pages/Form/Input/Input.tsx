import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import React, { ChangeEvent } from "react";
import { IInputProps } from "./IInputProps";

const Input = (props: IInputProps) => {
  const { id, helperText, error, register, variant, label } = props;

  const handleChange = (value: string, id: string) => {
    props.handleValue(value, id);
  }

  return (
    <FormGroup>
      <TextField
        error={error && true}
        id={id}
        label={label}
        helperText={error && helperText}
        variant={variant}
        {...register}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e.target.value, e.target.id)}
      />
    </FormGroup>
  )
}

export default Input;