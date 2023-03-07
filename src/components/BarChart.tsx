import * as d3 from "d3";
import { useEffect, useRef } from "react";
function drawElement() { }
function drawAxis() { }
function drawTooltip() { }
function drawLegend() { }
function drawCanvas() { }
function BarChartFc(container: HTMLElement, data: any[], option?: any): void {
  const width = 320;
  const height = 240;
  const barWidth = 10;
  const barCap = 10;
  const marginTop = 20;
  const marginBottom = 20;
  const marginLeft = 20;
  const marginRight = 20;
  const svg = d3.select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewport", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")

  const yDomain = [0, d3.max(data)];
  const yRange = [height - marginBottom, marginTop]
  const yScale = d3.scaleLinear(yDomain, yRange)

  const xDomain = new d3.InternSet(data.map((_, i) => i));
  const xRange = [marginLeft, width - marginRight];
  const xScale = d3.scaleBand(xDomain, xRange).padding(0.9);
  // 坐标轴
  svg.append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .call(d3.axisBottom(xScale))

  // 柱状图
  svg.append("g")
    .attr("fill", "#d31027")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", xScale.bandwidth())
    .attr("height", d => yScale(0) - yScale(d))
    .attr("x", (_, i) => xScale(i)!)
    .attr("y", d => yScale(d))

}

export default function BarChart({ data }: { data: number[] }) {
  const domRef = useRef(null);
  useEffect(() => {
    if (domRef.current) {
      BarChartFc(domRef.current, data);
    }

    return () => {
      if (domRef.current) {
        d3.select(domRef.current).selectAll("svg").remove();
      }
    }
  }, [domRef])
  return <div ref={domRef}></div>
}