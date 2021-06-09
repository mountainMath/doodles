---
title: Updated Vancouver Assessment Data
author: Jens von Bergmann
date: 2016-01-17
categories:
  - Vancouver
  - Assessment Data
slug: updated-vancouver-assessment-data
tags: []
description: "VanRE Madness Continues"
featured: 'relative_land.jpg'
images: ["https://doodles.mountainmath.ca/images/relative_land.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

[<img  src="/images/relative_land.jpg" style="width:50%;float:right">](https://mountainmath.ca/map/assessment?layer=4)
The friendly folks at 
[Vancouver Open Data](http://vancouver.ca/your-government/open-data-catalogue.aspx) just
[updated their property assessment data](https://twitter.com/VanOpenData/status/688060388190097408) with the fresh 2016
property tax assessments. Time to run the script to update the [Vancouver Assessment Map](https://mountainmath.ca/map/assessment)
with the new data. And for good measure I pasted over some of the thematic map engine from [CensusMapper](https://censusmapper.ca)
to improve the mapping performance.

## Maps
<!-- more -->
<img  src="/images/map_menu.png" style="width:25%;margin-left:5px;float:right">The [interactive assessment map](https://mountainmath.ca/map/assessment) offers several views. In the panel on the top
right we can select how to view the data. It offers standard thematic maps for value change, total value, building value
and building age and zoning. And there are some options that warrant more explanation:

* [*Relative Land Value*:](https://mountainmath.ca/map/assessment?layer=5) The colours on the map show each property by the
land value per m&sup2;. We can immediately spot the east-west land gradient, as well as how zoning affects land value.
When zooming in we also see the effect of lot size on land value.
* [*Tax Density*:](https://mountainmath.ca/map/assessment?layer=10) This map looks at the tax dollars collected
by the city by area. It tells us the relative rate at what each property is contributing to city services. We can again 
observe the impact of exclusionary zoning.
* [*Relative Value of Building*:](https://mountainmath.ca/map/assessment?layer=4)
[<img  src="/images/teardown.jpg" style="width:50%;float:right">](https://mountainmath.ca/map/assessment?layer=4)
This map simply divides the building value
by the total property value. There are many ways to interpret this map, my favourite is to use this as a "Teardown Predictor".
Essentially, as the percentage of the building value approaches zero the probability that it will get torn down in the
near future increases. Imagine someone spending $1.5m to buy a property with a house valued at $37k. Many people don't
mind living in a house worth $37k, but someone who is spending $1.5m would probably prefer to buy a different property
with a higher quality house. Or spend more money to upgrade the house. How will it be upgraded? Renovating is in most
cases economically unsound, most people will choose to tear down and rebuild. In fact, the *teardown threshold* is
likely higher than the 2.5% in the example given. The percentage of properties in Vancouver where the building value is
less than 2.5% of the total value has slightly decreaed in the last year from 17.9% to 17.8%, but the percentage of properties
with building value less than 5% of the total value has increased from 32% to 33.5% during the last year.

## The Data
The data originates with BC Assessment, which estimates land and building values of each property based on recent sales
of comparable properties. The assessment was done in summer 2015 and is based on sales before that, so at this point in
time the data lags the market by about one year. Values for individual properties may well be off, depending how well
renovations and improvements were reported and how well the BC Assessment estimates work for the given property. On
average they should reflect the market about half a year to one year ago.

Sadly, BC Assessment does not give out their data with a license that would allow mapping it the way I do, so we have
to rely on municipalities to release it through their open data portals. The format of the data from each municipality is
different, so lazy me is only importing data from City of Vancouver, although some other nearby municipalities are also releasing
there data.

The motivation behind the map was to understand the building stock. Some effort was made to filter out parks, but the
algorithm is far from perfect and will often includes parks that host building
structures, as well as marinas with structures on them.

The new city dataset does not include the 2016 tax levy, so we still only show the 2015 tax levies until CoV updated their dataset. 
 
## History
Here is a quick history of the overall land and building values aggregated for Vancouver between 2006 and 2016.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph" style="height:200px;max-width:640px;" data-lines="/data/vancouver_stats.json"></div>
<div class="legend no-margin">
  <p><i style="background:blue"></i> Land Value <span style="float:right;margin-right:10px;" id="land_value"></span></p>
  <p><i style="background:green"></i> Building Value <span style="float:right;margin-right:10px;" id="building_value"></span></p>
</div>
</div>
When looking at all properties in the city, the increase in land
value year over year was 21.4% ($45.2bn), while overall building values increased by 7.3% ($5bn). Hover, click or touch
the points in the graph to get the values for the corresponding year.

 
## Neighbourhoods
Lastly a quick overview over the neighbourhoods. Land and building values have not increased evenly throughout in the year.
I aggregated all tax data by neighbourhood and split it into land value and building value increases.
These numbers should be used as guidance only, they mix lots of different types of properties and include parks.


Here is the breakdown by neighbourhood:

* Renfrew-Collingwood: Land: 30.6% ($1.2bn), Building: 5.8% ($46.0m)
* Sunset: Land: 26.6% ($1.6bn), Building: 5.9% ($74.2m)
* Oakridge: Land: 17.6% ($1.2bn), Building: 12.6% ($207.4m)
* Downtown: Land: 16.9% ($0.8bn), Building: 3.2% ($91.2m)
* Kerrisdale: Land: 18.7% ($1.3bn), Building: 3.3% ($54.1m)
* Victoria-Fraserview: Land: 28.0% ($1.5bn), Building: 5.6% ($65.2m)
* Grandview-Woodland: Land: 24.9% ($1.7bn), Building: 0.7% ($17.4m)
* West End: Land: 22.6% ($2.5bn), Building: 3.5% ($188.4m)
* Hastings-Sunrise: Land: 25.1% ($1.1bn), Building: 4.9% ($63.8m)
* Killarney: Land: 17.8% ($0.3bn), Building: 14.1% ($241.6m)
* Marpole: Land: 17.8% ($0.3bn), Building: 14.1% ($241.6m)
* Kitsilano: Land: 21.6% ($3.3bn), Building: 4.3% ($134.5m)
* Shaughnessy: Land: 18.6% ($1.7bn), Building: 7.4% ($117.7m)
* West Point Grey: Land: 20.2% ($2.3bn), Building: 5.2% ($88.3m)
* Fairview: Land: 19.4% ($2.0bn), Building: -1.0% (-$52.4m)
* Downtown Eastside: Land: 21.9% ($2.6bn), Building: 4.9% ($194.9m)
* Kensington-Cedar Cottage: Land: 24.9% ($1.7bn), Building: 0.7% ($17.4m)
* Riley Park: Land: 26.4% ($1.0bn), Building: 4.0% ($40.2m)
* Mount Pleasant: Land: 21.9% ($2.6bn), Building: 4.9% ($194.9m)
* South Cambie: Land: 20.9% ($1.5bn), Building: 21.4% ($268.1m)
* Strathcona: Land: 21.9% ($2.6bn), Building: 4.9% ($194.9m)
* Dunbar Southlands: Land: 21.8% ($1.0bn), Building: 11.2% ($126.6m)
* Arbutus Ridge: Land: 21.4% ($1.6bn), Building: 1.1% ($17.3m)

It becomes immediately clear that the increase in property values is mostly driven by land, note that total value increases
for land and buildings are reported in billions and millions, respectively. The building stock does not
have time to catch up, with the exception of South Cambie. Fairview stands out with declining overall building values.

<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
<script>
var ready_for_graph = function() {
    var d3lines=[];
    var padding = {top: 20, right: 20, bottom: 30, left: 90};
    var prevChartWidth = 0, prevChartHeight = 0;
    var updateTransistionMS = 750; // milliseconds
    var sourceData, lineData, xScale, yScale, line;

    var symbol;
    var prefix;
    var numberFormatter = function (y) {
        return '$' + Math.round(prefix.scale(y*10))/10.0 + symbol;
    };

    var graphs=d3.select("#graph");
    var div=graphs[0][0];
    if (div==null|| div.childElementCount!=0) {return;}
    var data_url=div.dataset.url;

    // create svg and g to contain the chart contents
    var baseSvg = graphs.append("svg");
    var chartSvg=baseSvg
        .append("g")
        .attr("class", "chartContainer")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")");

    // create the x axis container
    chartSvg.append("g")
        .attr("class", "x axis");

    // create the y axis container
    chartSvg.append("g")
        .attr("class", "y axis");
    var line;
    var largest=null;
    var lineData;
    if (div.dataset.lines) {
        d3.json(div.dataset.lines,function(error,json){
        lineData=json;
        var domain=[null,null];
        var range=[null,null];
        for (var i=0;i<lineData.length;i++){
            lineData[i].data.forEach(function(d) {
                d.date = +d.date;
                d.count = +d.count;
                if (domain[0]==null || domain[0]> d.date) domain[0]= d.date;
                if (domain[1]==null || domain[1]< d.date) domain[1]= d.date;
                if (range[0]==null || range[0]> d.count) range[0]= d.count;
                if (range[1]==null || range[1]< d.count) range[1]= d.count;
            });
        }
        xScale=d3.scale.linear().domain(domain);
        var toAdd=(range[1]-range[0])/10;
        range[0]-=toAdd;
        range[1]+=toAdd;
        yScale=d3.scale.linear()
            .domain(range);

        line = d3.svg.line()
            .x(function(d) { return xScale(d.date); })
            .y(function(d) { return yScale(d.count); })
            .interpolate("linear");

        xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .tickFormat(d3.format("d"))
            .tickValues(domain);

        yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .tickFormat(numberFormatter)
            .ticks(5);

        prefix = d3.formatPrefix(range[1]);
        if (prefix.symbol=='K') {
            symbol='k'
        } else if (prefix.symbol=='M') {
                symbol='m'
        } else if (prefix.symbol=='G') {
            symbol='bn'
        } else if (prefix.symbol=='T') {
            symbol='tn'
        }
        updateChart(true);
        });

    }


    function updateChart(init)
    {
        // get the height and width subtracting the padding
//    var innerHeight = window.innerHeight - 20;
        var innerWidth = window.innerWidth - 20;
        var divWidth=$(div).width();
        if (divWidth==0) divWidth=$(div.parentElement.parentElement).width();
        var maxWidth=parseInt($(div).css('max-width'));
        if (divWidth==0) divWidth=innerWidth*0.8;
        if (divWidth>maxWidth) divWidth=maxWidth;
        var chartWidth = divWidth-padding.left-padding.right;//960 - margin.left - margin.right,
        var chartHeight = $(div).height()-padding.top-padding.bottom;//500 - margin.top - margin.bottom;


        // only update if chart size has changed
        if ((prevChartWidth != chartWidth) ||
            (prevChartHeight != chartHeight)) {
            prevChartWidth = chartWidth;
            prevChartHeight = chartHeight;

            //set the width and height of the SVG element
            chartSvg.attr("width", chartWidth + padding.left + padding.right)
                .attr("height", chartHeight + padding.top + padding.bottom);
            baseSvg.attr("width", chartWidth + padding.left + padding.right)
                .attr("height", chartHeight + padding.top + padding.bottom);

            // ranges are based on the width and height available so reset
            xScale.range([0, chartWidth]);
            yScale.range([chartHeight, 0]);

            if (init) {
                // if first run then just display axis with no transition
                chartSvg.select(".x")
                    .style({ 'stroke': 'grey', 'fill': 'none', 'stroke-width': '1px'})
                    .attr("transform", "translate(0," + chartHeight + ")")
                    .call(xAxis);

                chartSvg.select(".y")
                    .style({ 'stroke': 'grey', 'fill': 'none', 'stroke-width': '1px'})
                    .call(yAxis);
            }
            else {
                // for subsequent updates use a transistion to animate the axis to the new position
                var t = chartSvg.transition().duration(updateTransistionMS);

                t.select(".x")
                    .attr("transform", "translate(0," + chartHeight + ")")
                    .call(xAxis);

                t.select(".y")
                    .call(yAxis);
            }

            for (var i = 0; i < lineData.length; i++) {
                var sourceData=lineData[i].data;
                var color=lineData[i].color;
                var label=lineData[i].label;
                var className=lineData[i].class;

                // bind up the data to the line
                var lines = chartSvg.selectAll("path.line."+className)
                    .data([lineData[i].data]); // needs to be an array (size of 1 for our data) of arrays

                // transistion to new position if already exists
                lines.transition()
                    .duration(updateTransistionMS)
                    .attr("d", line);

                // add line if not already existing
                lines.enter().append("path")
                    .attr("class", "line")
                    .attr("stroke", color)
                    .attr("stroke-width", 2)
                    .attr('fill','none')
                    .attr("d", line);

                // bind up the data to an array of circles
                var circle = chartSvg.selectAll("circle."+className)
                    .data(sourceData);

                // if already existing then transistion each circle to its new position
                circle.transition()
                    .duration(updateTransistionMS)
                    .attr("cx", function (d) {
                        return xScale(d.date);
                    })
                    .attr("cy", function (d) {
                        return yScale(d.count);
                    });

                // if new circle then just display
                circle.enter().append("circle")
                    .attr("cx", function (d) {
                        return xScale(d.date);
                    })
                    .attr("cy", function (d) {
                        return yScale(d.count);
                    })
                    .attr("r", 4)
                    .attr('fill', 'transparent')
                    .style("stroke", color)
                    .style("stroke-width", 8)
                    .attr("class", className)
                    .on('mouseover',function(d){
                       d3.select('#'+this.classList[0]+'_value').text(d.date + ': ' + numberFormatter(d.count)) 
                    }).on('click',function(d){
                     d3.select('#'+this.classList[0]+'_value').text(d.date + ': ' + numberFormatter(d.count)) 
                    }).on('touch',function(d){
                       d3.select('#'+this.classList[0]+'_value').text(d.date + ': ' + numberFormatter(d.count)) 
                    }).on('mouseout',function(){d3.select('#'+this.classList[0]+'_value').text('')});

            }
        }
    }

    // look for resize but use timer to only call the update script when a resize stops
    var resizeTimer;
    window.onresize = function(event) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function()
        {
            updateChart(false);
        }, 100);
    }


};
ready_for_graph();
</script>
