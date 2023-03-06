import { Grid, Card } from "@mui/material";
import LineChart from '/@/components/LineChart'
import BarChart from '/@/components/BarChart'

export default function Home() {
  const MockData = [
    {
      name: '2022-01-01',
      value: 4
    },
    {
      name: '2022-01-02',
      value: 2
    },
    {
      name: '2022-01-03',
      value: 3
    },
    {
      name: '2022-01-04',
      value: 4
    },
    {
      name: '2022-01-05',
      value: 0
    },
    {
      name: '2022-01-06',
      value: 3
    },
    {
      name: '2022-01-07',
      value: 1
    },
    {
      name: '2022-01-08',
      value: 4
    },
  ];
  return <Grid container columns={16} rowSpacing={1} columnSpacing={1}>
    {/* <LineChart data={MockData} /> */}
    <BarChart data={MockData.map(i => i.value)} />
  </Grid>;
}
