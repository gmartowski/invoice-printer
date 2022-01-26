import React from "react";
import { Box, Grid } from "@mui/material";
import { Text } from "@react-pdf/renderer";
import { ICompanyDetails } from "./ICompanyDetails";

const CompanyDetails = (props: ICompanyDetails) => {

  const { isPurchaser } = props;
  const { account, phone, nip, name, address, email, postal, id, city } = props.data;

  return (
    <Grid container>
      <Grid xs={12} spacing={2}>
        <h1>{isPurchaser ? "Nabywca" : "Sprzedawca"}</h1>
        {name && <Box><Text><strong>Nazwa: </strong>{name}</Text></Box>}
        {address && <Box><Text><strong>Adres: </strong>{address},{postal},{city}</Text></Box>}
        {nip && <Box><Text><strong>NIP: </strong>{nip}</Text></Box>}
        {phone && <Box><Text>Numer telefonu: <strong>{phone}</strong></Text></Box>}
        {account && <Box><Text>Numer konta: <strong>{account}</strong></Text></Box>}
        {email && <Box><Text>Adres email: <strong>{email}</strong></Text></Box>}
      </Grid>
    </Grid>
  )
}

export default CompanyDetails
