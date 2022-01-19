import React from 'react';
import { NextPage } from "next";
import { Grid } from "@mui/material";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import Heading from "../components/Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Home: NextPage = () => {
  const data = useSelector((state: RootState) => state.invoice);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Heading/>
      </Grid>
      <Grid item xs={6}>
        <Form/>
      </Grid>
      <Grid item xs={6}>
        {JSON.stringify(data)}
        <Preview/>
      </Grid>
    </Grid>
  )
}

export default Home
