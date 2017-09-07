---
title: Physical SFH Form Over Time
date: 2016-03-05
categories:
  - Vancouver
  - zoning
slug: physical-sfh-form-over-time
author: Jens von Bergmann
tags: []
description: 'Digging into the data of SFH.'
featured: 'building_height.png'
images: ["https://doodles.mountainmath.ca/images/building_height.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---
I was curious how the physical parameters of Single Family Houses changed over time.

Using the [assessment dataset](https://mountainmath.ca/map/assessment) merged with the [land use dataset](https://mountainmath.ca/land_use/map)
allows to fairly accurately pick out single family houses, and also holds the age of most properies. Together with
the City of Vancouver LIDAR-generated building dataset [that I have played with before](https://mountainmath.ca/vancouver_lidar/map)
we can look at physical building parameters.

<!-- more -->
The city dataset is a little coarse, it only contains the main building and does not map things like garages. It's a little
rough and should probably be interpreted cautiously on an individual building level. One could spend the time and derive the
building data directly from the raw LIDAR dataset optimized for this purpose, but for some overview statistics the building
dataset that was derived by the city is just fine. The LIDAR was taken in 2009, so we only consider houses built before that time.


## Site coverage
<link rel="stylesheet" href="/css/custom.css">
One question is how the site coverage of the buildings have changed over time. We simply line up the buildings by the year
they were built, compute the site coverage of the main building relative to the parcel size and graph the quintiles for
each year. For good measure, we throw in the 10 and 90 percentile whiskers.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;" class="whiskers">
<div id="sfh_coverage" style="height:200px;max-width:640px;" data-url="/data/sfh_coverage.json"></div>
<div class="legend no-margin" style="padding-bottom:2em;">
</div>
</div>
What jumps out immediately is that around 1988 there apparently was a change in zoning law that reduced site coverage
of the main building. <strike>I don't know anything about the history of building codes, maybe someone that does could shed some
light onto this.</strike> [Twitter was fast to provide the answer](https://twitter.com/BrendanDawe/status/706737206484795392)
it appears that changes in building code were implemented to counteract the growing footprint of houses at the time, details
can be found in [Barbara Pettit's Ph.D. thesis](https://open.library.ubc.ca/cIRcle/collections/ubctheses/831/items/1.0086386).

## Building Height
The next obvious point of analysis is how building height, in meters, changed over time.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;" class="whiskers">
<div id="sfh_height" style="height:200px;max-width:640px;" data-url="/data/sfh_height.json"></div>
<div class="legend no-margin" style="padding-bottom:2em;">
</div>
</div>
We observe a similar jump in the data around 1988, with building height jumping up as site coverage decreases.

## Building Volumes
Now let's look at how "massive" the buildings are, measured by volume in cubic metres.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;" class="whiskers">
<div id="sfh_volume" style="height:200px;max-width:640px;" data-url="/data/sfh_volume.json"></div>
<div class="legend no-margin" style="padding-bottom:2em;">
</div>
</div>
The graph does show that in general houses have gotten more massive starting in the late 80s, but after that have more or less
maintained the same volume. It shows that the combined effect of the regulation change in the late 80s that resulted in
smaller building footprints and taller buildings was that buildings overall got bulkier.

## Roof Type
Lastly we see how the roof type changes over time, plotting the number of buildings with given roof type for each year.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;" class="whiskers">
<div id="sfh_roof" style="height:200px;max-width:640px;" data-url="/data/sfh_roof.json"></div>
<div class="legend no-margin" style="padding-bottom:2em;">
</div>
</div>
Flat roofs seem to have been quite popular between the mid 60s to mid 80s.

## Length to Width Ratio (Update)
A question about a regulation change in 1938 [came up on Twitter](https://twitter.com/GRIDSVancouver/status/706879555550613504),
so I thought I should check into the length-to-width ratio to see if anything can be seen there. A ratio of 1
would mean a square footprint, a ratio of 2 means the house is twice as long as wide.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;" class="whiskers">
<div id="sfh_square" style="height:200px;max-width:640px;" data-url="/data/sfh_square.json"></div>
<div class="legend no-margin" style="padding-bottom:2em;">
</div>
</div>
No obvious changes around 1938, but our houses became a lot more square after the late 80s zoning changes.

## Next Steps
After starting to see what kind of data can be derived from LIDAR data we can start to explore different questions. The
graphs open a small window into the physical parameters of single family homes over time and are only of limited general
interest.

For
more serious analysis we would most likely have to start from the raw LIDAR data, which takes a little bit of effort.

<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
<script src="/js/box.js"></script>
<script>

function stacked_bar_graph(div,shiftAxis,domainFormatter,rangeFormatter,domainLabelFormatter){
    if (!domainFormatter) domainFormatter=d3.format("d")
    if (!rangeFormatter)
     rangeFormatter = function (y) {
        return y;
     };
     if (!domainLabelFormatter) domainLabelFormatter=domainFormatter;

var margin = {top: 20, right: 20, bottom: 40, left: 70},
    width = parseInt(div.style("width")) - margin.left - margin.right,
    height = parseInt(div.style("height")) - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);


var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(domainFormatter)
    .orient("bottom");


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(rangeFormatter)
    .ticks(5, rangeFormatter);

var svg = div.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data_url=div[0][0].dataset.url;
var legend=d3.select(div.node().parentNode).select('.legend');


d3.json(data_url, function(error, json) {
  if (error) throw error;
  var graphData=json[0];
  var data=graphData.data;
  var color = d3.scale.ordinal().domain(graphData.colors.map(function(d,i){return i}))
  .range(graphData.colors);
  var domain=data.map(function(d){return d.date;});
  x.domain(domain);

  function graphValueId(i){
      return graphData.class + '_' + i + '_value'
  }

  graphData.labels.forEach(function(text,i){
    var color=graphData.colors[i];
    var html='<i style="background:' + color + '"></i> ' + text + ' <span style="float:right;margin-right:10px;" id="' + graphValueId(i) + '"></span>'
    legend.append('p').html(html);
  });
  
  data.forEach(function(d) {
      var y0 = 0;
      d.values = color.domain().map(function(i) { return {date: d.date, y0: y0, y1: y0 += +d.count[i]}; });
      d.total = d.values[d.values.length - 1].y1;
  });
  y.domain([0, d3.max(data, function(d) { return d.total; })]);

  var domainTickValues=[];
  var skip=Math.round(40/x.rangeBand());
  if (skip<=0) skip=1;
  for (var i=0;i<x.domain().length;i++) {
    if (i % skip==0) domainTickValues.push(x.domain()[i]);
  }
  if (x.domain().length % 5 !=0) domainTickValues.push(x.domain()[x.domain().length-1]);
  xAxis.tickValues(domainTickValues);

  var xShift=shiftAxis ?  x.rangeBand()/2.0 * 1.1 : 0;
  
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + xShift + "," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
//    .append("text")
//      .attr("transform", "rotate(-90)")
//      .attr("y", 6)
//      .attr("dy", ".71em")
//      .style("text-anchor", "end")
//      .text("Probability");

    function updateTooltip(d,i){
       color.domain().forEach(function(j){
             var value=d && i==j ? (domainLabelFormatter(d.date) + ': ' +rangeFormatter(d.y1-d.y0)) : '';
             d3.select('#'+graphValueId(j)).text( value);
       });
    }

  var year=svg.selectAll(".year")
    .data(data)
        .enter().append("g")
          .attr("class", "g");
  year.selectAll(".color-bar")
      .data(function(d) { return d.values; })
    .enter().append("rect")
      .attr("class", graphData.class + " color-bar")
      .attr("fill", graphData.color)
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("height", function(d) { return Math.max(0, y(d.y0) - y(d.y1)); })
      .attr("fill",function(d,i) {return color(i);})
      .on('mouseover',updateTooltip)
      .on('click',updateTooltip)
      .on('touch',updateTooltip) 
      .on('mouseout',function(){updateTooltip(null,i)});

      
});

}

var yearFormatter=d3.format();
stacked_bar_graph(d3.select("#sfh_roof"),true,yearFormatter,null,yearFormatter);
</script>
