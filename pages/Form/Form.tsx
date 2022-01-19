import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputs } from "./IForm";
import { FormSchema } from "./FormSchema";
import Input from "./Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { createInvoice } from "./FormSlice";
import { formInitialState } from "./FormInitialState";
import { formData, FormInputData } from "./FormData";

export default function Form() {
  const reduxState = useSelector((state: RootState) => state.invoice);
  const dispatch = useDispatch();

  const [state, setState] = useState(formInitialState);

  const handleChanges = (value: string, id: string) => {
    console.log(value, id);
    setState({ ...state, [id]: value })
    dispatch(createInvoice({ ...reduxState, [id]: value }))
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(FormSchema)
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          formData.map((item: FormInputData, index: number) => (
              <Grid item xs={6} key={index}>
                <Input
                  error={errors[item.id] && true}
                  id={item.id}
                  label={item.label}
                  helperText={item.helperText}
                  variant={item.variant}
                  register={{
                    ...register(item.register.name, { required: item.register.isRequired })
                  }}
                  handleValue={handleChanges}
                />
              </Grid>
          ))
        }

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button type={"submit"} variant="outlined">Outlined</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}