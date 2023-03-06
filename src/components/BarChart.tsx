import * as d3 from "d3";
import { useEffect, useRef } from "react";
function drawElement() { }
function drawAxis() { }
function drawTooltip() { }
function drawLegend() { }
function drawCanvas() { }
function BarChartFc(container: HTMLElement, data: any[], option?: any): void {
  const width = 320;
  const height = 320;
  const svg = d3.select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewport", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")

  // 坐标轴
  // 柱状图
  svg.append("g")
    .attr("fill", "#d31027")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", 10)
    .attr("height", i => 320 - data[i] * 10)
    .attr("x", i => i * 20)
    .attr("y", i => data[i] * 10)

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