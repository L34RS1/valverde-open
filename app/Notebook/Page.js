'use client'
import { Grid } from "../components/Grid";
import { Cards } from "./Cards";

export const Notebook = () => {
  return (
    <Grid>
      <Cards col={2} row={2} />
    </Grid>
  );
};