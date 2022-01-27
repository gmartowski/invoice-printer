import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputs } from "./IForm";
import { FormSchema } from "./FormSchema";
import Input from "./Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { createInvoice } from "./FormSlice";
import { formInitialState } from "./FormInitialState";
import { formData, FormInputData } from "./FormData";
import SelectData from "../../components/Select/SelectData";
import { vendors } from "../../components/CompanyDetails/VendorData";
import AdapterDateFns from '@mui/lab/AdapterMoment';
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { IVendorData } from "../../components/CompanyDetails/IVendorData";

interface IInvoiceQuotas {
  nettQuota: number,
  vatInPercents: 0 | 0.05 | 0.08 | 0.23,
  vatQuota: number,
  grossQuota: number
}

export default function Form() {
  const reduxState = useSelector((state: RootState) => state.invoice);
  const dispatch = useDispatch();

  const [state, setState] = useState(formInitialState);

  const handleChanges = (value: string | number, id: string) => {
    setState({ ...state, [id]: value });
    dispatch(createInvoice({ ...reduxState, [id]: value }));
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(FormSchema)
  });

  const handlePurchaser = (value: number) => {
    const { nip, name, account, address, postal, city, email, phone } = getVendor(value);
    setState({ ...state, purchaserId: value })
    dispatch(createInvoice({
      ...reduxState,
      purchaserNIP: nip,
      purchaserName: name,
      purchaserAddress: address,
      purchaserPostal: postal,
      purchaserCity: city,
      purchaserAccount: account,
      purchaserEmail: email,
      purchaserPhoneNumber: phone
    }))
  }

  const handleSeller = (value: number): void => {
    const { nip, name, account, address, postal, city, email, phone } = getVendor(value);
    setState({ ...state, vendorId: value })
    dispatch(createInvoice({
      ...reduxState,
      vendorNIP: nip,
      vendorName: name,
      vendorAddress: address,
      vendorCity: city,
      vendorPostal: postal,
      vendorAccount: account,
      vendorEmail: email,
      vendorPhoneNumber: phone,
    }))
  }

  const handleVat = (value: number): void => {
    handleChanges(value, "vatPercentage");
  }

  // @ts-ignore
  const getVendor = (id: number): IVendorData => vendors.find(item => item.id === id);

  return (
    <form>

      <Grid container spacing={2}>

        <Grid item xs={6}>
          <SelectData id="seller"
                      labelId="seller-label"
                      label="Sprzedający" list={vendors}
                      handleChange={handleSeller}
          />
        </Grid>

        <Grid item xs={6}>
          <SelectData id="purchaser"
                      labelId="purchaser-label"
                      label="Nabywca"
                      list={vendors}
                      handleChange={handlePurchaser}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={8}>

          <Input
            error={errors['productName'] && true}
            id="productName"
            label="Nazwa produktu"
            helperText="Nazwa produktu"
            variant={"outlined"}
            register={{
              ...register("productName", { required: true })
            }}
            handleValue={handleChanges}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "10px" }}>

        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Data zakupu"
              value={reduxState.dateOfIssue}
              onChange={(newValue) => {
                dispatch(createInvoice({ ...reduxState, dateOfIssue: newValue.format("DD-MM-YYYY") || "DD-MM-YYYY" }));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Data wystawienia"
              value={reduxState.dateOfCreation}
              onChange={(newValue) => {
                dispatch(createInvoice({
                  ...reduxState,
                  dateOfCreation: newValue.format("DD-MM-YYYY") || "DD-MM-YYYY"
                }));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Termin płatności"
              value={reduxState.paymentDeadline}
              onChange={(newValue) => {
                dispatch(createInvoice({
                  ...reduxState,
                  paymentDeadline: newValue.format("DD-MM-YYYY") || "DD-MM-YYYY"
                }));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "10px" }}>

        <Grid item xs={4}>
          <SelectData id="vat"
                      labelId="vat-percentage"
                      label="Stawka VAT"
                      list={[
                        { id: 0, name: "0%" },
                        { id: 0.05, name: "5%" },
                        { id: 0.08, name: "8%" },
                        { id: 0.23, name: "23%" }
                      ]}
                      handleChange={handleVat}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        {
          formData.map((item: FormInputData, index: number) => (

            <Grid item xs={3} key={index}>
              <Input
                error={errors[item.id] && true}
                id={item.id}
                label={item.placeholder}
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
      </Grid>
    </form>
  );
}