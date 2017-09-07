---
title: On Teardowns
author: Jens von Bergmann
date: 2016-01-18
categories:
  - Vancouver
  - zoning
  - teardowns
  - geeky
slug: redevelopment
author: Jens von Bergmann
tags: []
description: "Digging into teardowns"
featured: 'teardowns.png'
images: ["https://doodles.mountainmath.ca/images/teardowns.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

On the heels of the [new assessment data](http://doodles.mountainmath.ca/blog/2016/01/17/updated-vancouver-assessment-data/) we
can start to slice the data in different ways to understand various aspects of the real estate landscape in Vancouver. The
fact that [Vancouver Open Data](http://vancouver.ca/your-government/open-data-catalogue.aspx) makes historic data available
gives the ability to look for changes over time.

[Our maps](https://mountainmath.ca/map/assessment) explore this by visualizing some aspects of these changes for all
properties, but it might also be useful to filter the properties we show to focus in on specific criteria. 

"Teardowns" always triggers lots of emotions in Vancouver. Without looking at the emotional side and trying to avoid any
judgement we will
investigate the data to understand what buildings have been torn down recently and predict which buildings will get torn
down next. And map them. Long story short, we predict that
1 in 6 buildings [on this map](https://mountainmath.ca/map/special/17?layer=4) (and then some more with lower teardown probability)
will get torn down and rebuilt by 2026.

## Building age temporal distribution
<!-- more -->
To start understanding teardowns and rebuilds let's look at the [age of the building stock](https://mountainmath.ca/map/assessment?layer=7).

To get a better overview of the building stock through time we can graph the number of buildings by age. We look at buildings, not units. So a stratified
building with 100 units would still count as one building in our graph. And it is not looking at how many buildings were
built in each year, but how many buildings that were built in a given year are still standing today.

We still have 7 buildings in Vancouver that were built before 1900 (the earliest from 1800). Skipping these we graph the
rest to get:
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_age" style="height:200px;max-width:640px;" data-url="/data/building_age.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> Number of Buildings by Building Age <span style="float:right;margin-right:10px;" id="building_age_value"></span></p>
</div>
</div>
Starting with 1950 the distribution of buildings by age is quite uniform, with a short peak around the early 1990s.

The dip at the end is due to some lag in new buildings showing up in the property dataset. Looking at the more recent history
it is safe to assume that the number of buildings still standing corresponds well to the buildings of units built in that year.
So the pace of new buildings right now seems to fit in quite well with the recent history and is a little lower than the
peak in the early 1990s.
 
## Recent Building stock (and recent teardowns) spatial distribution
[<img  src="/images/rebuilds.png" style="width:50%;float:right">](https://mountainmath.ca/map/special/15) 
The next question is to focus on the spatial distribution of recent redevelopment by filtering out older buildings.
Being too lazy to add a bush for dynamic selection of time ranges I just made a static (in time) view only showing the 
[6883 properties built after 2006](https://mountainmath.ca/map/special/15?zoom=13). It is quite safe to assume that most
of those new buildings replaced older ones that were torn down. So this map of new buildings is also a map of locations
of buildings that were torn down in the last 10 years.
 
What's interesting is when selecting
[relative building value view](https://mountainmath.ca/map/special/15?zoom=16&lat=49.2341&lng=-123.1824&layer=4) that
there are some properties that have been recently re-developed with increadibly low building value, like the property
at 5649 Dunbar St. <strike>This gives a window into some of the imperfections of the BC Assessment process where the building
value after re-development is not properly reflected in their dataset.</strike> In this case it seems to be
[a property whose only "improvement" seems to be the pavement on it](https://www.google.ca/maps/@49.2351182,-123.1853038,3a,75y,264.36h,81.1t/data=!3m6!1e1!3m4!1s_weW4bEWpmcKGA-Ppk0d_Q!2e0!7i13312!8i6656).

It also shows that recent building (or teardown) activity is fairly uniform across the city, with only some areas standing out as having little
development like the West End, parts of Kitsilano and Strathcona. 

## What gets torn down and rebuilt next?
The big question is of course where new buildings get built next. In a built up space like Vancouver there are few sites
left where building a new building does not mean tearing down an old one. So another way to ask that question is: What
gets torn down next?

## Teardown Probability
Predicting which building will get torn down next is of course impossible. So what we try to do is assign a "teardown
probability" to each building.

Let's first try to understand why a particular building might get torn down as opposed to the one next door. Typically
buildings get torn down at the time when they change ownership. So if a building is not sold, it is far less likely to
get torn down. So what makes a building more likely to get torn down when it is sold? One hypothesis would be that the
value of the building relative to the land should play an important factor. Let's test this hypothesis using the data.

We take the 2006 tax dataset as a baseline and check how many of the buildings have been torn down by 2016. Refer to the
Methodology and Data section at the botton for the messy details. We only
count buildings, so we count a strata lot with 100 units in the same building as one building. Then we use the 2016 dataset
to check how many of them are still around, identifying them by their tax coordinate and again asking they be marked as
being built no later than 2006. 

These criteria capture well what we are looking for, but they are not perfect. As a predictive variable we use the

<div style="padding:5px;border: 1px solid grey;border-radius:4px;width:80%;margin:0 auto;">
<h5 style="text-align:center;">Teardown Coefficient</h5>
The *teardown coefficient* is the percentage of the total assessed value that is attributed to the building. More formally
it's the ratio of the building value by the sum of the building and land values.
</div>

So we sort the properties by their *teardown coefficient* using the 
2006 tax assessment data and we check how each group fares.

First up a graph of the distribution of buildigs in 2006 by their *teardown coefficient*. 
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_buildings_by_teardown" style="height:200px;max-width:640px;" data-url="/data/buildings_by_teardown.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> Number of Buildings by *teardown coefficient* <span style="float:right;margin-right:10px;" id="buildings_by_teardown_value"></span></p>
</div>
</div>

Next up the number of buildings in each category that got torn down and rebuilt by 2016:
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_teardowns" style="height:200px;max-width:640px;" data-url="/data/teardowns.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> Number of Torn Down Buildings by *teardown coefficient* <span style="float:right;margin-right:10px;" id="teardowns_value"></span></p>
</div>
</div>
We see that our initial hypothesis seems to hold up quite well. The number of buildings that got torn down and rebuilt
decreases as the *teardown coefficient* increases. Remember that we defined the *teardown coefficient* to be the percentage
of the building value out of the total value of the property. 

Refer to the methodology and data section for further information on how these numbers were extracted.

To explore this further let's graph the frequency with which a building in a given *teardown coefficeint* range gets torn down.
To keep things cleaner where we only plot up to a *teardown coefficient* of 50%:
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_teardown_probability" style="height:200px;max-width:640px;" data-url="/data/teardown_probability.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> Probability of Building being torn down<span style="float:right;margin-right:10px;" id="teardown_probability_value"></span></p>
</div>
</div>
We see that the *teardown coefficient* has high predictive value for a building to be torn down and
being rebuilt in the following 10 years. Buildings with a *teardown coefficient* below 5% have about an 18% chance, and the
probability declines exponentially down to zero at a *teardown coefficient* of about 50%. 

If we were more serious about this
we would fit and exponential curve to the data and compute how well it fits the data, repeat the computation for
other time frames, run it on individual neighbourhoods and maybe also on [data from other municipalities](https://data.surrey.ca)
to properly validate our model. We could also refine the model by refining our filters, see the methodology and data section for
more details.

And we could add other factors that likely effect the teardown probability, like building age, proximity to arterials and
others. Of course these are not independent factors, so this kind of analysis requires more time.

## Predicting Teardowns
Now to the main part: Predicting teardowns. How many buildings will get torn down and rebuilt in the next 10 years? Let's
use what we have just learned to extrapolate.

First up the graph of the 2016 building stock by *teardown coefficient*:
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_buildings_by_teardown_2" style="height:200px;max-width:640px;" data-url="/data/buildings_by_teardown_2.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> 2016 Building stock by *teardown coefficient* <span style="float:right;margin-right:10px;" id="buildings_by_teardown_2_value"></span></p>
</div>
</div>

To estimate how many buildings will get torn down and rebuilt in each category we simply multiply each bin with the teardown probability
from the frequency graph above:
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_teardowns_2" style="height:200px;max-width:640px;" data-url="/data/teardowns_2.json"></div>
<div class="legend no-margin">
  <p><i style="background:steelblue"></i> Estimate of Buildings rebuilt by 2026 <span style="float:right;margin-right:10px;" id="teardowns_2_value"></span></p>
</div>
</div>
Bottom line, we predict around 8,000 buildings to be torn down and rebuilt by 2026. That's significantly more than the
around 5,900 buildings that we identified as going through this process during the prior 10 years.

## Open Question
There are lots of assumptions that went into this estimate. While we are confident in our analysis
that properties with low *teardown coefficient* are the ones most likely to be torn down, it is less clear if the number
of properties being torn down grows linearly as the properties with low *teardown coefficient* grow. In our case the number
of properties with *teardown coefficient* below 5% grew from 20492 (21% of the 2006 stock) to 32509 (33.5% of the 2016) stock,
which may be out of the range where our simplistic extrapolation holds. One could try to understand this by carefully
analyzing all available tax years, and not just the two extremes of the available spectrum.

###Mapping Teardowns
[<img  src="/images/teardowns.png" style="width:50%;float:right">](https://mountainmath.ca/map/special/17)Now that we 
understand how to assign a teardown probability to buildings, let's map them! To keep things as simple as
possible let's focus in on the homes with a *teardown coefficient* below 5%. They make up the bulk in our prediction and
have the simple interpretation that a little more than 1 in 6 of these will get replaced by something else by 2026. So
[here is the interactive map](https://mountainmath.ca/map/special/17) of just these 31301 buildings, where we have
filtered out some parks, marinas and rail lines. And this only accounts
for the 5,700 buildings predicted to be torn down with a *teardown coefficient* below 5% cutoff and neglects the roughly 2,000 more that
are predicted to be torn down that have a *teardown coefficient* above 5%.


## Methodology and Data
Only for people who love getting their hands dirty or who want to reproduce or expand on the analysis.

First thing to note is that there is no way to detect "teardowns" in the dataset, the only way is to look at what has been
rebuilt and what has 'dropped off'. To be more precise, there data fields to look at is the "land coordinate", which links
a taxable property to a physical structure, and the "year built". And both fields have problems. 

The "land coordinate"
gets de-commissioned and re-assigned during certain re-develpments. And the city dataset provides no way to link the
old one to the new one. One way to do that is through the polygons that mark the property boundaries, that would allow
tracking of complex re-assemblies of land. But the city does not publish historic records of property polygons.

The "year built" also has lots of issues. Sometimes it is blank even though it records the value of the building as
greater than zero. Sometimes the "year built" will be set to a date later than the date of the dataset, for example the
2006 tax dataset has buildings with "year built" all they way up to 2013.

Then comes the issue of filtering. We decided to filter out parks, rail lines and marinas without structures on them. The
algorithm is somewhat simplistic, it's the same one that was used to filter properties for the maps. Additionally we
filter out properties from the heritage dataset. There is definitely
room for improvement here, but without a clear question of what exactly to measure
(only single family homes, or also condos or apartments, treat commercial separately, ...)
it does not make much sense to invest energy into this. After all, this is just looking for a rough model.

So how do we detect rebuilds? We take the land coordinates from properties identified as park or heritage and sieve through
the 2006 tax data to retrieve all records that don't match these land coordinates and have a "year built" column set
as 2006 or earlier or don't have a "year built" set at all but change from zero to non-zero building value from 2006 to 2016.

Pretty messy. We mapped [about 6,900 buildings were built after 2006](https://mountainmath.ca/map/special/15),
but only traced 5,869 buildings in the 2006 tax dataset as
being torn down and rebuilt. That difference is largely explained by different selection criteria. The map only considers
properties with a "year built" field set, but for the analysis we also added properties that don't have that field set
but go from zero building value in 2006 to non-zero building value in 2016 which gets us to 7,784 "rebuilds". On the other hand
in the analysis we don't consder the roughly 140 heritage buildings that would pass our filter of being built after 2006, and
the 2016 tax dataset has 2,422 more buildings than the 2006 dataset, some of which can be seen
[on this map](https://mountainmath.ca/map/special/13) and are due to subdivisions being split off of the original
property.

Anyway, if you want to get your hand dirty on this shoot me a message and I will hook you up with my scripts.


<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
<script>


function bar_graph(div,shiftAxis,domainFormatter,rangeFormatter,domainLabelFormatter){
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

d3.json(data_url, function(error, json) {
  if (error) throw error;
  var graphData=json[0];
  var data=graphData.data;
  x.domain(data.map(function(d) { return d.date }));
  y.domain([0, d3.max(data, function(d) { return d.count; })]);
  
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

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", graphData.class + " bar")
      .attr("fill", graphData.color)
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); })
      .on('mouseover',function(d){
         d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeFormatter(d.count)) 
      }).on('click',function(d){
       d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeFormatter(d.count)) 
      }).on('touch',function(d){
         d3.select('#'+this.classList[0]+'_value').text(domainLabelFormatter(d.date) + ': ' + rangeFormatter(d.count)) 
      }).on('mouseout',function(){d3.select('#'+this.classList[0]+'_value').text('')});

      
});

}

var percentageFormatter=d3.format(".1%");
var binFormatter=function(d){return percentageFormatter(d-0.025) + ' - ' + percentageFormatter(d);}
//ready_for_graph(d3.select("#graph"));
bar_graph(d3.select("#graph_age"),false);
//ready_for_graph(d3.select("#graph_buildings_by_teardown"),percentageFormatter);
//ready_for_graph(d3.select("#graph_teardowns"),percentageFormatter);
bar_graph(d3.select("#graph_buildings_by_teardown"),true,percentageFormatter,null,binFormatter);
bar_graph(d3.select("#graph_teardowns"),true,percentageFormatter,null,binFormatter);
bar_graph(d3.select("#graph_teardown_probability"),true,percentageFormatter,percentageFormatter,binFormatter);
bar_graph(d3.select("#graph_buildings_by_teardown_2"),true,percentageFormatter,null,binFormatter);
bar_graph(d3.select("#graph_teardowns_2"),true,percentageFormatter,null,binFormatter);
</script>
