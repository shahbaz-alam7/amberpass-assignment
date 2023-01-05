import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
const LineChart = ({ data }) => {
  const svgRef = useRef();
  useEffect(() => {
    const w = 480;
    const h = 160;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaleLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale);
    svg.append("g");

    svg.append("g");

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaleLine(d))
      .attr("stroke", "#2c70f5")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }, [data]);

  return (
    <div>
      <div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default LineChart;
