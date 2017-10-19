---
title: 2017 Vancouver Assessment Data
date: 2017-01-16
categories:
  - Vancouver
  - Assessment Data
slug: 2017-assessment-data
author: Jens von Bergmann
tags: []
description: 'Visualizing the latest land value gains.'
featured: 'value_animated.gif'
images: ["https://doodles.mountainmath.ca/images/value_animated.gif"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

The friendly folks at
[Vancouver Open Data](http://vancouver.ca/your-government/open-data-catalogue.aspx) just
[updated their property assessment data](https://twitter.com/VanOpenData/status/688060388190097408) with the fresh 2017 property tax assessments. Time to run the script to update the
[Vancouver Assessment Map](https://mountainmath.ca/map/assessment)
with the new data, just [like we did last year](http://doodles.mountainmath.ca/blog/2016/01/17/updated-vancouver-assessment-data/).

For now we just updated our standard visuals and computed some overall statistics. We will take a closer look at the data over the coming days.

### Maps
<!-- more -->
[<img  src="/images/value_animated.gif" style="width:50%;float:right">](https://mountainmath.ca/map/values?filter=[sfh]&zoom=13&layer=9)
By now we have a variety of maps that highlight different aspects of Vancouver real estate, and after running the import scripts they
automatically serve the newest data. Our basic
[interactive assessment map](https://mountainmath.ca/map/assessment) offers a variety of ways to slice and display the data. It's
mostly focused on functionality, some of which we described in
[last year's post](http://doodles.mountainmath.ca/blog/2016/01/17/updated-vancouver-assessment-data/), as well as other posts like
the one on [twiddling thumbs vs working](http://doodles.mountainmath.ca/blog/2016/01/24/work-vs-twiddling-thumbs/).

We also have interactive views focusing on how real estate prices varied over time, for example the [houses and dirt map](http://doodles.mountainmath.ca/blog/2016/04/01/on-dirt-and-houses/)
that separates out (inflation adjusted) values of the structures and the land, and also allows to filter by type of housing, to animate changes over time.

For people that like simpler maps we also have a [plain total (nominal) value over time map](https://mountainmath.ca/map/values?filter=[sfh]&zoom=13&layer=9)
that allows to interactively step through the years and see how single family house values in Vancouver changed over time. Here we also
added the ability to visualize year-over-year value changes, which also hints at how BC Assessment changed their valuation
algorithm over the years.


### The Data
The data originates with BC Assessment, which estimates land and building values of each property based on recent sales
of comparable properties. The values are pegged at July 1 of each year, with the the most recent available now being July 1 2016.
The estimates for the values do not reflect changes in the market since then. Moreover, the estimates can be quite off on an individual
property level, but are unbiased. That means that any statistics derived from a large subsample should fairly accurately
reflect actual market conditions for July 1st. Lastly, the assessed values will still change a bit as some will be successfully appealed.

City of Vancouver, as well as the City of Surrey, make this data available for general use through their open data portal, which
allows us to create these maps. The format of the data the municipalities are giving out through their open data portal is
different, so lazy me is only importing data from City of Vancouver. Sadly, BC Assessment does not make this data
generally available province wide for us to make province wide maps.

While BC Assessment makes this data available on their [eValue website](https://evaluebc.bcassessment.ca) for browsing individual
properties and also provides it in bulk to researchers, the attached license does not allow the thematic mapping of individual properties.

The motivation behind the map was to understand the building stock, so in the maps as well as the summary statistics below
we filter out parks and some other properties.

The new city dataset does not include the 2017 tax levy, so our maps still only show the 2016 tax levies until CoV updated their dataset.

### History
In the spirit of [last year's post](http://doodles.mountainmath.ca/blog/2016/01/17/updated-vancouver-assessment-data/) we ran some
quick summary statistics to break down the numbers by neighbourhood. Instead of listing the most recent land and building value
increases by neighbourhood we stuck everything into an interactive graph for the entire time span between 2006 and 2017 tax years.
Use the dropdown menus to drill down
into city neighbourhoods, view values for all properties or just residential properties and display as total value or year-over-year
percentage change.

The last year again
saw an huge increase in property values. For the City of Vancouver land values were up 35% and building values 10%, with the land
value increase setting a record for the timeframe for which we have data. The increases become even more pronounced when we zero in
on residential property only.

<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<select id="nbhd-select"></select>
<select id="keys-select"></select>
<select id="type-select">
<option value='total'>Total Value</option>
<option value='percent'>Percentage Change</option>
</select>
<div id="graph" style="height:200px;max-width:640px;" data-lines="/data/detail_history.json"></div>
<div class="legend no-margin">
</div>
</div>


<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script>
var ready_for_graph = function() {
    var d3lines=[];
    var padding = {top: 20, right: 20, bottom: 30, left: 90};
    var prevChartWidth = 0, prevChartHeight = 0;
    var updateTransistionMS = 750; // milliseconds
    var jsonData, xScale, yScale, line,neighbourhoods;

    var currentValue='City of Vancouver';
    var currentKeys=['land','building'];
    var currentModePercentage=false;

    var hash={
            land: {label:"Land Value", color:"green"},
              building: {label:"Building Value", color:"blue"},
              res_land: {label:"Residential Land Value", color:"darkgreen"},
              res_building: {label:"Residential Building Value", color:"darkblue"},
              land_p: {label:"Land Value Increase", color:"green"},
              building_p: {label:"Building Value Increase", color:"blue"},
              res_land_p: {label:"Residential Land Value Increase", color:"darkgreen"},
              res_building_p: {label:"Residential Building Value Increase", color:"darkblue"}
                };
    var keys=Object.keys(hash);

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
        jsonData=json;
        neighbourhoods=Object.keys(jsonData);
        var keyHash={all:{label: 'All Properties',data:['land','building']},res:{label: 'Residential Properties',data:['res_land','res_building']}};
        var keyOptions=Object.keys(keyHash);
        d3.select('#nbhd-select').selectAll('option').data(neighbourhoods).enter().append('option').attr('value',function(d){return d}).text(function(d){return d});
        $('#nbhd-select').on('change',function(d){
            currentValue=this.value;
            updateChart({init:true,keys:currentKeys,data:jsonData[currentValue],percentage:currentModePercentage})
        });
        d3.select('#keys-select').selectAll('option').data(keyOptions).enter().append('option').attr('value',function(d){return d}).text(function(d){return keyHash[d].label});
        $('#keys-select').on('change',function(d){
            currentKeys=keyHash[this.value].data;
            updateChart({init:true,keys:currentKeys,data:jsonData[currentValue],percentage:currentModePercentage})
        });
        $('#type-select').on('change',function(d){
            currentModePercentage=this.value=='percent';
            updateChart({init:true,keys:currentKeys,data:jsonData[currentValue],percentage:currentModePercentage})
        });
        lineData=json[currentValue];
        var domain=[null,null];
        var range=[null,null];
        lineData.forEach(function(d) {
             d.date = +d.date;
             if (domain[0]==null || domain[0]> d.date) domain[0]= d.date;
             if (domain[1]==null || domain[1]< d.date) domain[1]= d.date;
             keys.forEach(function(k){
                d[k]=+d[k];
                if (range[0]==null || range[0]> d[k]) range[0]= d[k];
                if (range[1]==null || range[1]< d[k]) range[1]= d[k];
            });
        });
        xScale=d3.scale.linear().domain(domain);
        var toAdd=(range[1]-range[0])/10;
        range[0]-=toAdd;
        range[1]+=toAdd;
        yScale=d3.scale.linear()
            .domain(range);

        line = d3.svg.line()
            .x(function(d) { return xScale(d.date); })
            .y(function(d) { return yScale(0); })
            .interpolate("linear");
        xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .tickFormat(d3.format("d"));
            //.ticks(5);
            //.tickValues(domain);

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
        updateChart({init:true,keys:currentKeys,data:jsonData[currentValue],percentage:currentModePercentage});
        });

    }


    function updateChart(options)
    {
        var lineData=options.data;
        var init=options.init;
        var keys=options.keys;

        lineData.forEach(function(d,i) {
             keys.forEach(function(k){
                d[k]=+d[k];
                if (i>0) d[k+'_p']=d[k]/lineData[i-1][k]-1;
             });
        });

        if (options.percentage) {
            keys=keys.map(function(k){return k+'_p'});
            lineData=lineData.slice(1);
        }

        var domain=[null,null];
        var range=[null,null];
        lineData.forEach(function(d,i) {
             d.date = +d.date;
             if (domain[0]==null || domain[0]> d.date) domain[0]= d.date;
             if (domain[1]==null || domain[1]< d.date) domain[1]= d.date;
             keys.forEach(function(k){
                if (range[0]==null || range[0]> d[k]) range[0]= d[k];
                if (range[1]==null || range[1]< d[k]) range[1]= d[k];
            });
        });

        //if (options.percentage) domain[0]+=1;

        var toAdd=(range[1]-range[0])/10;
        range[0]-=toAdd;
        if (!options.percentage) range[0]=Math.max(0,range[0]);
        range[1]+=toAdd;
        yScale.domain(range);
        xScale.domain(domain);
        var formatter;
        if (options.percentage) {
            formatter=d3.format('.1%');
        } else {
            formatter=numberFormatter;
        }
        yAxis.tickFormat(formatter);

        var legend=d3.select('.legend');
        legend.empty();
        legend.selectAll('.item').data(keys)
            .enter().append('p').attr('class','item')
            .html(function(k){return '<i style="background:'+hash[k].color+'"></i> '+hash[k].label+' <span style="float:right;margin-right:10px;" id="'+k+'_value"></span>'});
        //legend.selectAll('.item').exit().remove();


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
        if (true || (prevChartWidth != chartWidth) || (prevChartHeight != chartHeight)) {
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

                chartSvg.select('.x.axis path').style('display','inherit');
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

            var sourceData=lineData;

            function addSeries(key){
                var g=d3.select(this);
                var color=hash[key].color;
                var label=hash[key].label;
                var className=key;

                // bind up the data to the line
                var lines = g.selectAll("path.line")
                    .data([sourceData]); // needs to be an array (size of 1 for our data) of arrays

                var valueFunction=function(d){return d[key]};
                var yFunction=function(d){return yScale(valueFunction(d))};
                var ff=key[key.length-1]=='p' ? d3.format('.1%') : numberFormatter;
                var formatFunction=function(d){return ff(valueFunction(d))};

                function tooltipFunction(d,el){
                  var key=d3.select(el.parentElement).datum();
                  var ff=key[key.length-1]=='p' ? d3.format('.1%') : numberFormatter;
                  return d.date + ': ' + ff(d[key]);
                }

                 var line=d3.svg.line()
                      .x(function(d) { return xScale(d.date); })
                      .y(yFunction)
                      .interpolate("linear");

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

                lines.exit().remove();

                // bind up the data to an array of circles
                var circles = g.selectAll("circle")
                    .data(sourceData);

                // if already existing then transition each circle to its new position
                circles.transition()
                    .duration(updateTransistionMS)
                    .attr("cx", function (d) {
                        return xScale(d.date);
                    })
                    .attr("cy", yFunction);

                // if new circle then just display
                circles.enter().append("circle")
                    .attr("class", className)
                    .attr("cx", function (d) {
                        return xScale(d.date);
                    })
                    .attr("cy", yFunction)
                    .attr("r", 4)
                    .attr('fill', 'transparent')
                    .style("stroke", color)
                    .style("stroke-width", 8)
                    .on('mouseover',function(d){
                       d3.select('#'+this.classList[0]+'_value').text(tooltipFunction(d,this))
                    }).on('click',function(d){
                       d3.select('#'+this.classList[0]+'_value').text(tooltipFunction(d,this))
                    }).on('touch',function(d){
                       d3.select('#'+this.classList[0]+'_value').text(tooltipFunction(d,this))
                    }).on('mouseout',function(){d3.select('#'+this.classList[0]+'_value').text('')});
                circles.exit().remove();
                }
            }

            var selection=chartSvg.selectAll('g.series').data(keys);
            selection.exit().remove();
            selection.enter().append('g').attr('class','series');
            chartSvg.selectAll('g.series').each(addSeries);
    }

    // look for resize but use timer to only call the update script when a resize stops
    var resizeTimer;
    window.onresize = function(event) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function()
        {
                updateChart({init:false,keys:currentKeys,data:jsonData[currentValue],percentage:currentModePercentage});
        }, 100);
    }


};
ready_for_graph();




</script>
