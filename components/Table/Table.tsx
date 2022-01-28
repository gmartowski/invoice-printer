import { Paper, Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const Table = ({ data }) => (
  <TableContainer component={Paper}>
    <MUITable sx={{ minWidth: 700 }} aria-label="spanning table">
      <TableHead>
        <TableRow sx={{ backgroundColor: "#eee" }}>
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
    </MUITable>
  </TableContainer>
)