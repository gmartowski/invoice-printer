import React from 'react';
import { NextPage } from "next";
import { Button, Grid } from "@mui/material";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import Heading from "../components/Heading/Heading";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Pdf from "react-to-pdf";
import moment from "moment/moment";
import 'moment/locale/pl'

const pdfRef = React.createRef();

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
        <Preview reference={pdfRef}/>
        <Pdf targetRef={pdfRef}
             filename={`gmartowski-${moment().locale("de").format('MMMM').toLowerCase()}-${moment().format('YYYY')}`}>
          {({ toPdf }) => (
            <Button variant="outlined" onClick={toPdf}>Generate Pdf</Button>
          )}
        </Pdf>
      </Grid>
    </Grid>
  </Provider>
)

export default Home
