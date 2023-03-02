import d3 from 'd3';

interface LineChartOption {
  x: (d: any) => any;
  y: (d: any) => any;
}

const MockData = [
  {
    name: '2022-01-01',
    value: 1
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
];

const LineChartFactory = (data: { name: string; value: number }[]) => {
  const X = d3.map(data, d => d.name);
  const Y = d3.map(data, d => d.value);
  const xType = d3.scaleUtc;
  const yType = d3.scaleLinear;
  const xDomain = d3.extent(X);
  const yDomain = [0, d3.max(Y)];
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

  const range = d3.range(data.length)
  const line = d3.line().curve(d3.curveLinear).x((d, i) => i).y((d, i) => i);
  const svg = d3.create('svg')
    .attr("width", 320)
    .attr("height", 320)
    .attr("viewBox", "0 0 320 320")
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "#d31027")
    .attr("stroke-width", 2)
    .attr("stroke-linecap", "round")
    .attr("stroke-linejoin", "round")
    .attr("stroke-opacity", 1)
    .attr("d", line(range));

  return svg.node;
}

export default function LineChart({ data }: { data: { name: string; value: number }[] }) {
}