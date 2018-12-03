// URL: https://beta.observablehq.com/@esp1/d3-zoomable-sunburst
// Title: D3 Zoomable Sunburst
// Author: Edwin Park (@esp1)
// Version: 365
// Runtime version: 1

const m0 = {
  id: "44cd104a7d283434@365",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# D3 Zoomable Sunburst

This variant of a [sunburst diagram](/@mbostock/d3-sunburst), a radial orientation of D3’s [hierarchical partition layout](https://github.com/d3/d3-hierarchy/blob/master/README.md#partition), shows only two layers of the [Flare visualization toolkit](https://flare.prefuse.org) package hierarchy at a time. Click a node to zoom in, or click the center to zoom out.`
)})
    },
    {
      name: "chart",
      inputs: ["partition","data","d3","DOM","width","color","arc","format","radius"],
      value: (function(partition,data,d3,DOM,width,color,arc,format,radius)
{
  const root = partition(data);

  root.each(d => d.current = d);

  const svg = d3.select(DOM.svg(width, width))
      .style("width", "100%")
      .style("height", "auto")
      .style("font", "10px sans-serif");

  const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${width / 2})`);

  const path = g.append("g")
    .selectAll("path")
    .data(root.descendants().slice(1))
    .enter().append("path")
      .attr("class", "wedge")
      .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
      .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
      .attr("pointer-events", d => arcVisible(d.current) ? "all" : "none")
      .attr("d", d => arc(d.current))
      .style("cursor", "pointer")
      .on("click", clicked)
      .on("mouseover", (d, i, nodes) => d3.select(nodes[i]).attr("fill-opacity", d => 1))
      .on("mouseout", (d, i, nodes) => d3.select(nodes[i]).attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0));

  path.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

  const label = g.append("g")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
    .selectAll("text")
    .data(root.descendants().slice(1))
    .enter().append("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", d => +labelVisible(d.current))
      .attr("transform", d => labelTransform(d.current))
      .text(d => d.data.name)
      .style("cursor", "pointer")
      .on("click", clicked);

  const parent = g.append("circle")
      .datum(root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("click", clicked);

  function clicked(p) {
    parent.datum(p.parent || root);

    root.each(d => d.target = {
      x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
      x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
      y0: Math.max(0, d.y0 - p.depth),
      y1: Math.max(0, d.y1 - p.depth)
    });

    const t = g.transition().duration(750);

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.
    path.transition(t)
        .tween("data", d => {
          const i = d3.interpolate(d.current, d.target);
          return t => d.current = i(t);
        })
      .filter(function(d) {
        return +this.getAttribute("fill-opacity") || arcVisible(d.target);
      })
        .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("pointer-events", d => arcVisible(d.target) ? "all" : "none")
        .attrTween("d", d => () => arc(d.current));

    label.filter(function(d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      }).transition(t)
        .attr("fill-opacity", d => +labelVisible(d.target))
        .attrTween("transform", d => () => labelTransform(d.current));
  }
  
  function arcVisible(d) {
    return d.y1 <= 2 && d.y0 >= 0 && d.x1 > d.x0;
  }

  function labelVisible(d) {
    return d.y1 <= 2 && d.y0 >= 0 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0;
  }

  function labelTransform(d) {
    const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
    const y = (d.y0 + d.y1) * radius * 0.8;
    return `rotate(${x - 90}) translate(${y},0) rotate(${90 - x})`;
  }

  return svg.node();
}
)
    },
    {
      name: "data",
      value: (function(){return(
fetch("https://raw.githubusercontent.com/lawrence-factual/Demo/master/sephora%20categories%20copy.json").then(response => response.json())
)})
    },
    {
      name: "partition",
      inputs: ["d3"],
      value: (function(d3){return(
data => {
  const root = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);
  return d3.partition()
      .size([2 * Math.PI, root.height + 1])
    (root);
}
)})
    },
    {
      name: "color",
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
)})
    },
    {
      name: "format",
      inputs: ["d3"],
      value: (function(d3){return(
d3.format(",d")
)})
    },
    {
      name: "width",
      value: (function(){return(
932
)})
    },
    {
      name: "radius",
      inputs: ["width"],
      value: (function(width){return(
width / 6
)})
    },
    {
      name: "arc",
      inputs: ["d3","radius"],
      value: (function(d3,radius){return(
d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius * 1.5)
    .innerRadius(d => d.y0 * radius)
    .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    }
  ]
};

const notebook = {
  id: "44cd104a7d283434@365",
  modules: [m0]
};

export default notebook;
