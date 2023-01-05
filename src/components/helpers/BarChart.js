import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
const BarChart = () => {
  const [data] = useState([50, 60, 45, 40, 30, 45, 75, 55]);
  const svgRef = useRef();
  useEffect(() => {
    const w = 470;
    const h = 80;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "10px");
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.3);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    svg.append("g");
    svg.append("g");

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", "35px")
      .attr("height", (val) => h - yScale(val))
      .attr("stroke", "#2c70f5")
      .attr("fill", "#2c70f5");
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
