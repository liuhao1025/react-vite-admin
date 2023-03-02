import { Grid, Card } from "@mui/material";

export default function Home() {
  return <Grid container columns={16} rowSpacing={1} columnSpacing={1}>
    <Grid xs={8} item><Card>1</Card></Grid>
    <Grid xs={8} item><Card>2</Card></Grid>
  </Grid>;
}
