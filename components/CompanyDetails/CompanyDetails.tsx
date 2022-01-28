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
        <h3>{isPurchaser ? "Nabywca" : "Sprzedawca"}: </h3>
        {
          name &&
          <Box>
            <Text>{name}</Text>
          </Box>
        }
        {
          address &&
          <Box>
            <Text>{address},{postal},{city}</Text>
          </Box>
        }
        {
          Boolean(nip) === true &&
          <Box>
            <Text>NIP {nip}</Text>
          </Box>
        }
        {
          phone &&
          <Box>
            <Text>{phone}</Text>
          </Box>
        }
        {
          Boolean(account) === true &&
          <Box>
            <Text>{account} (mBank)</Text>
          </Box>
        }
        {
          email &&
          <Box>
            <Text>{email}</Text>
          </Box>
        }
      </Grid>
    </Grid>
  )
}

export default CompanyDetails
