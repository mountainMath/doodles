---
title: Mobi -- a First Look
author: Jens von Bergmann
date: 2016-08-16
categories:
  - OSM
  - Mapzen
  - bikes
slug: mobi-a-first-look
tags: []
description: 'Scraping Mobi data.'
featured: 'mobi_main.png'
images: ["https://doodles.mountainmath.ca/images/mobi_main.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Vancouver finally has a bikeshare system. And everyone is hoping it will succeed, despite the obstacles BC's mandatory
helmet law poses for the system. So we are eager to find out how things are going with Mobi.
  
To set the background, consider that
[Seattle's Pronto is getting less than 1 ride per bike per day](http://www.seattlemet.com/articles/2016/3/21/the-rise-and-fall-and-possible-rise-again-of-pronto)
after half a year in operation. In comparison, bike shares that are considered 'successful' in North America get 3 to 5
rides per bike per day. Taipei's system, which I am particularly fond of, gets over 11 rides per bike per day.

So how about Mobi? It barely started, and it's not really fair to run the numbers right now. But we just couldn't hold
our curiosity back.

<!-- more -->
## Data
<a href="http://mountainmath.ca/mobi#14.287582005629245/49.2742/-123.1277" target="_blank"><img  src="/images/mobi_main.png"  style="width:50%;float:right;margin-left:10px;"></a>
First off, some caveats. Mobi does not have an official API for their system. In fact, they only provide a barely usable
[map of station statuses at the bottom of their landing page](https://www.mobibikes.ca). So we decided to
jump in and scrape their data to [make our own map](http://doodles.mountainmath.ca/blog/2016/07/26/bike-share-map/). In
absence of better alternatives, the *official* Mobi smartphone app is still not released, the map has gotten quite popular.
And in absence of an official Mobi API there are now others, like [TransitApp](http://transitapp.com/), that are consuming our
[station data shadow API](http://mountainmath.ca/mobi/stations).

What that means in terms of data quality is that while we get fairly accurate station bike counts at about a 1-minute
interval, there are some issues with using the data for rigorous analysis. If a bike gets checked in while another one
gets checked out at about the same time there is a good chance that we will miss it. And we can't distinguish rebalancing
from a group of people checking out or dropping off a bunch of bikes at the same time. And we don't have individual bike
data to look at travel patterns, for example what popular trip patterns are. Moreover we currently don't collect and store
weather data, an important variable that should be included in any bike share analysis.

That pretty much rules out anything but high level analysis.

## Station History
To get an initial idea we started to look at station history. We only started recording Saturday 13th. For the fun of it
we added one day history to our [Mobi bike station and bike infrastructure map](https://mountainmath.ca/mobi). Drop me
a line if you are interested in longer timeframes. 

Taking a look at the daily overall usage patterns
<div style="padding:2px;border: 1px solid black;border-radius:5px;">
<div id="graph_mobi_hourly" style="height:200px;max-width:640px;" data-url="/data/mobi_hourly.json"></div>
</div>
things are pretty much as expected. Nice Gaussians for the weekend usage, and some commute spikes for the weekday usage.
Squinting really hard one might want to make out a slight lunchtime boost, we will have to collect more data to confirm
that.

Another thing we see is that usage seems to hit a low point around 4am, so that's a good time to divide up the days when
looking at daily usage. Adding up the rides we get around 1400 rides a day. At around 3am we detect 490 bikes in the
stations, so that makes about 3 rides per bike per day. On average. That a pretty impressive number for a system that is
just getting off the ground. And that's while still in "members only" mode. The nice weather has helped, but there is no
getting around the fact that Mobi is off to a great start!
 

Of course not every bike is getting 3 rides. Some get more, some get less. For example, a bike parked at the
[Ontario & Seawall](http://mountainmath.ca/mobi#17/49.27147/-123.10407) station has been very popular, here is live data
on the most recent days of usage.
 <div id="station_graph_os" style="height:150px;"></div>

<a href="http://mountainmath.ca/mobi#19/49.26084/-123.11418" target="_blank"><img  src="/images/yukon_12.png"  style="width:50%;float:right;margin-left:10px;"></a>
On the other hand, bikes at [Yukon & 12th](http://mountainmath.ca/mobi#19/49.26084/-123.11418) have been having a hard
time to find riders. Both stations are at the
current boundary of the system, it is hard to say what makes the difference. The particular location of the least used
station is sure to get some people talking.


Mobi is undoubtedly carefully
analyzing their station usage and incorporating that into their strategic planning how to expand their network. And
hopefully publish a useful API for all the data geeks out there.


<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
<script>

function graphBikeStation(selector,station_id){
  var outerHeight=$(selector).height(),
      outerWidth=$($(selector)[0].parentNode).width();
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom;

  var formatDate = d3.time.format("%X");
  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis().scale(x).orient('bottom');

  var yAxis = d3.svg.axis().scale(y).orient('left').ticks(5);

  var line = d3.svg.line()
      .x(function(d) { return x(d.created_at); })
      .y(function(d) { return y(d.available_bikes); })
      .interpolate('step-after');
  var bikeArea = d3.svg.area()
      .x(function(d, i) { return x(d.created_at); })
      .y0(function(d) { return y(d.available_bikes); })
      .y1(function(d) { return height; })
      .interpolate('step-after');
  var dockArea = d3.svg.area()
      .x(function(d, i) { return x(d.created_at); })
      .y0(function(d) { return 0; })
      .y1(function(d) { return y(d.available_bikes); })
      .interpolate('step-after');


  var svg = d3.select(selector).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  d3.json('http://mountainmath.ca/bike_providers/1/bike_stations/' + station_id + '.json?days=7',function(error,data){
  data=data[0].stations[0].statuses;
  data.forEach(function(d){type(d)});
  var last=data[data.length-1];
  var lastTime=new Date(d3.time.format.iso.parse(last.updated_at).getTime() + 5*60000);
  data.push({id:last.id,available_bikes:last.available_bikes,free_docks:last.free_docks,created_at:lastTime,updated_at:lastTime});

  x.domain(d3.extent(data, function(d) { return d.created_at; }));
  y.domain([0,data[0].available_bikes+data[0].free_docks]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
//      .append("text")
//      .attr("transform", "rotate(-90)")
//      .attr("y", 6)
//      .attr("dy", ".71em")
//      .style("text-anchor", "end")
//      .text("Available Bikes");

  svg.append("path")
      .datum(data)
      .attr("class", "area bike")
      .style("fill",'rgba(33, 139, 51, 0.7)')
      .attr("d", bikeArea);
  svg.append("path")
      .datum(data)
      .attr("class", "area dock")
      .style("fill",'rgba(212, 10, 44, 0.7')
      .attr("d", dockArea);


  function type(d) {
    d.created_at = d3.time.format.iso.parse(d.created_at);
    d.available_bikes = +d.available_bikes;
    return d;
  }
  });
}



function bar_graph(div,shiftAxis,domainFormatter,rangeFormatter,domainLabelFormatter,rangeLabelFormatter){
    if (!domainFormatter) domainFormatter=d3.format("d");
    if (!rangeLabelFormatter) rangeLabelFormatter=rangeFormatter;
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

d3.json(data_url, function(error, json) {
  if (error) throw error;
  var graphData=json[0];
  var data=graphData.data;
  
  data.forEach(function(d,i){d.date= d3.time.format.iso.parse(d.date)});
  
  var container=d3.select(div.node().parentNode);
  container.selectAll('.legend.no-margin').remove();
  var legend=container.append('div').attr('class',"legend no-margin");
  legend.append('p').html('<i style="background:'+graphData.color + '"></i>' + graphData.label +  '<span style="float:right;margin-right:10px;" id="' + graphData.class+'_value"></span>');
  
  x.domain(data.map(function(d) {return d.date }));
  y.domain([0, d3.max(data, function(d) { return d.count; })]);
  
  var domainTickValues=[];
  var skip=Math.round(60/x.rangeBand());
  if (skip<=0) skip=1;
  for (var i=0;i<x.domain().length;i++) {
    if (i % skip==0) domainTickValues.push(x.domain()[i]);
  }
  //if (x.domain().length % 5 !=0) domainTickValues.push(x.domain()[x.domain().length-1]);
  xAxis.tickValues(domainTickValues);

  var xShift=shiftAxis ?  -x.rangeBand()/2.0 * 1.1 : 0;
  
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

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", graphData.class + " bar")
      .style("fill", graphData.color)
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); })
      .on('mouseover',function(d){
         d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeLabelFormatter(d.count)) 
      }).on('click',function(d){
       d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeLabelFormatter(d.count)) 
      }).on('touch',function(d){
         d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeLabelFormatter(d.count)) 
      }).on('mouseout',function(){d3.select('#'+this.classList[0]+'_value').text('')});

      
});

}



var numberFormatter=d3.format(",");
var dateFormatter=d3.time.format("%a %I%p");//d3.time.format("%a %H:%M"); //d3.format(",");//
bar_graph(d3.select("#graph_mobi_hourly"),true,dateFormatter,numberFormatter);

graphBikeStation('#station_graph_os',1);
</script>
