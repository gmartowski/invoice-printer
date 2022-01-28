import styled from "styled-components";
import { Grid } from "@mui/material";
import { IHeading } from "./IHeading";

const Heading = ({ content, title }: IHeading) => (
  <Grid container>
    <Grid item xs={12}>
      <h2>{title} {content}</h2>
    </Grid>
  </Grid>
)

const SHeading = styled(Heading)`
  background-color: grey;
  border: 1px solid black;
`;


export default SHeading;
