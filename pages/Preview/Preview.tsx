import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import CompanyDetails from "../../components/CompanyDetails/CompanyDetails";
import Image from 'next/image'
import logo from '../../public/logo.png';
import Heading from "../../components/Heading/Heading";


const Preview = (props) => {
  const data = useSelector((state: RootState) => state.invoice)

  return (
    <div ref={props.reff}>
    <Document>
      <Page size="A4">
        <View>

          <Grid container>
            <Grid item xs={6} spacing={2}>
              <Image src={logo} alt="Stabsoft Logo"/>
            </Grid>

            <Grid item xs={6} spacing={2}>
              <Box><Text>Miejsce wystawienia: <strong>{data.vendorCity}</strong></Text></Box>
              <Box><Text>Data wystawienia: <strong>{data.dateOfCreation} </strong></Text></Box>
              <Box><Text>Data sprzedaży / wykonania usługi: <strong> {data.dateOfIssue}</strong></Text></Box>
              <Box><Text>Termin płatności: <strong> {data.paymentDeadline}</strong></Text></Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} spacing={2}>
              <Heading title={"Faktura nr: "} content={data.invoiceNumber}/>
            </Grid>
          </Grid>

          <Grid container>

            <Grid item xs={6} spacing={2}>
              <CompanyDetails
                data={{
                  id: data.vendorId,
                  nip: data.vendorNIP,
                  address: data.vendorAddress,
                  postal: data.vendorPostal,
                  city: data.vendorCity,
                  name: data.vendorName,
                  account: data.vendorAccount,
                  phone: data.vendorPhoneNumber,
                  email: data.vendorEmail,
                }}
                isPurchaser={false}
              />
            </Grid>

            <Grid item xs={6} spacing={2}>
              <CompanyDetails
                data={{
                  id: data.purchaserId,
                  nip: data.purchaserNIP,
                  address: data.purchaserAddress,
                  name: data.purchaserName,
                  postal: data.purchaserPostal,
                  city: data.purchaserCity,
                  account: data.purchaserAccount,
                  phone: data.purchaserPhoneNumber,
                  email: data.purchaserEmail
                }}
                isPurchaser={true}
              />
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: "20px" }}>
            <Grid item xs={12} spacing={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" variant="head">Lp.</TableCell>
                      <TableCell align="center" variant="head">Nazwa towaru lub usługi</TableCell>
                      <TableCell align="center" variant="head">Ilość</TableCell>
                      <TableCell align="center" variant="head">Cena netto</TableCell>
                      <TableCell align="center" variant="head">Wartość netto</TableCell>
                      <TableCell align="center" variant="head">VAT %</TableCell>
                      <TableCell align="center" variant="head">Kwota VAT</TableCell>
                      <TableCell align="center" variant="head">Wartośc brutto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">{data.productName}</TableCell>
                      <TableCell align="center">{data.productAmount}</TableCell>
                      <TableCell align="center">{data.nettAmount}</TableCell>
                      <TableCell align="center">{data.nettSumAmount}</TableCell>
                      <TableCell align="center">{data.vatPercentage * 100}%</TableCell>
                      <TableCell align="center">{data.vatAmount}</TableCell>
                      <TableCell align="center">{data.grossAmount}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid container
                justifyContent="flex-end"
                alignItems="center"
                style={{ marginTop: "50px" }}>
            <Grid item xs={6} spacing={2}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th" scope="row" align="center">Stawka VAT</TableCell>
                      <TableCell align="center">Netto</TableCell>
                      <TableCell align="center">VAT</TableCell>
                      <TableCell align="center">Brutto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">{data.vatPercentage * 100}%</TableCell>
                      <TableCell align="center">{data.nettSumAmount}</TableCell>
                      <TableCell align="center">{data.vatAmount}</TableCell>
                      <TableCell align="center">{data.grossAmount}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: "30px" }}>
            <Grid item xs={6}>
              <Text>RAZEM: {data.grossAmount}</Text>
            </Grid>
          </Grid>
        </View>
      </Page>
    </Document>
    </div>
  )
}

export default Preview;