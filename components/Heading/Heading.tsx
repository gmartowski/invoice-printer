import styled from "styled-components";
import { Grid } from "@mui/material";

interface IHeading {
  title: string,
  content: string,
}

const Heading = (props: IHeading) => (
  <Grid container>
    <Grid item xs={12}>
      <h1>{props.title} {props.content}</h1>
    </Grid>
  </Grid>
)

const SHeading = styled(Heading)`
  background-color: grey;
  border: 1px solid black;
`;


export default SHeading;
