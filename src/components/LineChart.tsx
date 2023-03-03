import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const LineChartFactory = (container: HTMLElement, data: { name: string; value: number }[]) => {
  const top = 20;
  const left = 40;
  const right = 40;
  const bottom = 20;
  const width = 320;
  const height = 240;
  const X = d3.map(data, d => new Date(d.name as string));
  const Y = d3.map(data, d => d.value);
  const xType = d3.scaleUtc;
  const yType = d3.scaleLinear;
  const xDomain = d3.extent(X);
  const yDomain = [0, d3.max(Y)];
  const xRange = [left, width - right];
  const yRange = [height - bottom, top];
  const xScale = xType(xDomain as Date[], xRange);
  const yScale = yType(yDomain as number[], yRange);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40);
  const range = d3.range(data.length);

  const line = d3.line<number>()
    .curve(d3.curveLinear)
    .x((d, i) => xScale(X[i]))
    .y(i => yScale(Y[i]));

  const svg = d3.select(container).append('svg');

  svg.attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
    .attr("transform", `translate(0, ${height - bottom})`)
    .call(xAxis);

  svg.append("g")
    .attr("transform", `translate(${left}, 0)`)
    .call(yAxis);

  svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "#d31027")
    .attr("stroke-width", 1.5)
    .attr("stroke-linecap", "round")
    .attr("stroke-linejoin", "round")
    .attr("stroke-opacity", 1)
    .attr("d", line(range));

  return svg.node();
}

export default function LineChart({ data }: { data: { name: string; value: number }[] }) {
  const domRef = useRef(null);
  useEffect(() => {
    if (domRef.current) {
      LineChartFactory(domRef.current, data)
    }

    return () => {
      d3.select(domRef.current).selectAll("svg").remove();
    }
  }, [domRef])
  return <div ref={domRef}></div>
}