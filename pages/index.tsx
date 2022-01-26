import React from 'react';
import { NextPage } from "next";
import { Grid } from "@mui/material";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import Heading from "../components/Heading/Heading";
import { Provider } from "react-redux";
import { store } from "../store/store";

const Home: NextPage = () => (
  <Provider store={store}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Heading/>
      </Grid>
      <Grid item xs={4}>
        <Form/>
      </Grid>
      <Grid item xs={8}>
        <Preview/>
      </Grid>
    </Grid>
  </Provider>
)

export default Home
