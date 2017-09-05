---
title: Character Retention
date: 2016-11-26
categories:
  - Vancouver
slug: character-retention
author: Jens von Bergmann
tags: []
description: 'Abuse of Character.'
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---
Today I went to the City of Vancouver Character Retention open house. It was quite informative, city staff were helpful and knowledgeable,
and the display board and feedback form asked many good questions. But I came away with a couple of points that I think need to be addressed further:



<ul class="indented">
<li>Faux character retention vs character design guidelines.
</li>
<li>Understanding economic drivers of teardown decisions.</li>
<li>Evaluation of RT character retention policies.</li>
<li>Need to separate character retention from gentle ground-oriented density.
</li>
<li>New Carrots</li>
</ul>

## TL;DR
It gets a little wonky, so here the very short version:
<ul class="indented bordered">
<li>
Current and proposed "character retention" is hollow, just retains shell. Should be handled in design guidelines.
</li>
<li>
Real character (or heritage) retention should take closer look at underlying economic drivers to become more effective.
</li>
<li>
Gentle, ground-oriented density like 4-plexes is desperately needed in RS and RT, should be decoupled from "character retention".
</li>
</ul>
<!-- more -->


## Faux Retention
<img  src="/images/4-plex.png" style="width:50%;float:right;margin-left:10px;">
The existing character retention guidelines in RT, which seem to serve as a model for the expansion of character retention
to RS, often don't "retain" all that much.


What the existing character retention process entails is essentially a "character home"
being gutted down to the studs (in most cases), potentially moved to a corner of the property and a foundation added. Then
the entire house, including structural elements, gets build up again and infill added to the back.



The result of the process is a main house with exterior form resembling a character home, and infill in the back matching
the style. This process is almost indistinguishable from a new built to "character design guidelines". The difference in
landfill waste is minimal (and much better addressed through recycing policies) and there is no difference to the eye,
as can easily be seen when comparing the new built infill to the "retained" front house, like in the Mt Pleasant 4-plex pictured above.



## Economics
Character retention is hard to do. It takes incentives to make it happen. The more the character retention process
can leverage some underlying economic drivers, the more effective it will be.



A while back [we ran some analysis](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/)
on 11 years of property-level assessment data in the City of Vancouver that was made available
through the open data catalogue. The upshot is that the single most important factor that predicts if a building gets
torn down is the (assessed) value of the building alone relative to the total value of the property. We call this
quotient the "teardown coefficient" and found that if it is below 5%, the building has a 1/6 chance to get torn down
within 8 to 10 years. More details and background on this
[can be found here](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/), a refinement of this analysis is works in progress.


Currently, 34% of the SFH building stock in Vancouver fall into that category. Often people assume that the risk of a
building getting torn down simply depends on the building age. But the relationship is not that simple as the following graph shows.


<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_sfh" style="height:200px;max-width:640px;" data-url="/data/sfh_age.json"></div>
<div class="legend no-margin"></div>
</div>



The blue denotes properties facing little teardown pressure, the red is for properties with high teardown pressure.
We can see that the pre-1920 building stock holds up reasonably well. In fact, 33% of the pre-1920 building stock with
high teardown risk. For the 1920 to 1935 stock we have 59% of buildings in teardown territory, and for 1935 to 1965
buildings that number jumps to 78%. This makes the particular choice of the character cutoff year 1940 a bit of a head-scratcher.



<a href="https://mountainmath.ca/map/assessment?filter=[sfh,teardowns]&layer=100&zoom=13&lat=49.2489&lng=-123.1081&mapBase=2" target="_blank"><img  src="/images/teardowns2.png" style="width:50%;float:right;margin-left:10px;"></a>
This informs the scale of the teardown pressure the building stock of a particular vintage is facing. We can similarly
map the individual properties to understand their geographic distribution. One should note that assessment data, while
unbiased in aggregate, can be quite off when looking at specific buildings. So when mapping for example
[all single family homes with high teardown pressure](https://mountainmath.ca/map/assessment?filter=[sfh,teardowns]&layer=4)
it might mis-identify some buildings as teardown candidates, or miss others. However, in aggregate the data will be
quite robust and one can easily see that there are no obvious geographic biases in teardown risk. To quantify some of
this, 31% of eastside SFH vs 39% of westside SFH face high teardown risk.



Understanding the teardown pressure, as well as the geographic distribution and the pressures by vintage, gives an
important baseline to the heritage and the character discussions. Houses far above the 5% threshold face little
teardown pressure, and they need little, if any, policy protection to retain them. On the other hand, for houses
below the teardown cutoff it makes very little economic sense to retain a building, and will require a
lot of effort and policy protection to try and retain them. And even with these protections, there is a good chance
that the building will eventually go or face "demolition by neglect".



<img  src="/images/demo_by_neglect.png" style="width:40%;float:left;margin-right:10px;">
One example of this is the property at 4755 Belmont Ave, which the city lists as heritage building of primary significance.


Effective retention policies are likely going to aim at the building stock around and somewhat above the teardown
threshold of 5%. Ideally character retention policies should aim to strengthen the economic viability of buildings with
character merit so that they don’t fall into the range where the teardown pressure becomes overwhelming.
With this in mind, and setting the age cutoff to 1935 instead of 1940, we can investigate the existing pre-1935 building
stock by teardown pressure, separating out the stock that faces
[high teardown pressure](https://mountainmath.ca/map/assessment?filter=[sfh,years_1935,tdc__0.05]&layer=100&zoom=13&lat=49.2489&lng=-123.1081&mapBase=2)
from the [stock with moderate teardown pressure](https://mountainmath.ca/map/assessment?filter=[sfh,years__1935,tdc_0.05_0.1]&layer=101&zoom=13&lat=49.2489&lng=-123.1081&mapBase=2)
and the [stock with low teardown pressure](https://mountainmath.ca/map/assessment?filter=[sfh,years__1935,tdc_0.1]&layer=102&zoom=13&lat=49.2489&lng=-123.1081&mapBase=2).



<a href="https://mountainmath.ca/map/assessment?filter=[sfh,years__1935]&layer=110&zoom=13&lat=49.2489&lng=-123.1148&mapBase=2" target="_blank"><img  src="/images/teardown_pressure.png" style="width:50%;float:right;margin-left:10px;"></a>
And we can view [all three at the same time](https://mountainmath.ca/map/assessment?filter=[sfh,years__1935]&layer=110&zoom=13&lat=49.2489&lng=-123.1148&mapBase=2).




Without taking these underlying economic factors into consideration, character (as well as heritage) retention policies are
likely to be less effective at retention than they otherwise would be. And have broader adverse effects on buildings
without significant heritage or character merit.
The city’s approach to deal with heritage retention seems to be to target all properties built before 1940,
indiscriminate of what shape the buildings are in. In the next days the consultant report the city ordered will become
available, maybe there are some nuggets in there that make this whole endeavour sound reasonable.


## RT

The current character retention effort is entirely focused on RS. 
This seems to be motivated by the fact that RT already
has character retention guidelines. The way it works is that much of RT is downzoned, with extra density conditional on
character retention. This seems to be the basic blueprint of the proposal for RS, so let's take a close look how this works.



<a href="https://mountainmath.ca/map/assessment?filter=[zone_RT-6]&layer=20&zoom=16&lat=49.2587&lng=-123.1063&mapBase=2" target="_blank"><img  src="/images/rt-6.png" style="width:50%;float:right;margin-left:10px;"></a>
Mount Pleasant gives a good example of what this can look like. In
[RT-6 zoning](https://mountainmath.ca/map/assessment?filter=[zone_RT-6]&layer=20&zoom=16&lat=49.2587&lng=-123.1063&mapBase=2)
we have allowed stratified 4 and 5-plexes on single family lots under the character retention policies. We have
[looked at this before](http://doodles.mountainmath.ca/blog/2016/08/04/rt/), this results in the property getting sliced up and stratified into
3 to 5 family-sized ground-oriented units. In terms of prices, the assessments pegged at July 2015
(which became surprisingly accurate again) puts RT-6 single family lots between $1m and $6m (median $1.9m), and units in those
multiplexes between $300k and $1.8m (median $800k).



<a href="https://mountainmath.ca/map/assessment?filter=[zone_RT-7]&layer=20&zoom=15&lat=49.2636&lng=-123.1706&mapBase=2" target="_blank"><img  src="/images/rt-7.png" style="width:50%;float:left;margin-right:10px;"></a>
This kind of development is great. We need more of that, much more.
But this same model can't be immediately taken and expanded across the city. One look across town to
[RT-7](https://mountainmath.ca/map/assessment?filter=[zone_RT-7]&layer=20&zoom=15&lat=49.2636&lng=-123.1706&mapBase=2),
where similar guidelines are in place, shows that multi-plexes only appear in the pocket at 16th and Arbutus. That's
mainly because the Mt Pleasant model of character "retention" requires large lots, and most of RT-7 is on smaller lots
that make the process of "retention" into multi-plexes according to current city rules unattractive. The rules need to
be amended to take lots size (and other parameters) into account to unlock this kind of development across the city.



This resulted in RT-6 only having 12% of the building stock currently facing high teardown pressure, compared to 34% of
RT-7. In the pocket of RT-7 east of MacDonald, where lots are larger and more properties underwent the character retention
process, only 17% of the building stock faces high teardown pressure. And yes, RT-6 started out with buildings in a
better state than RT-7. Which is another part of the reason why the character retention program was more successful in RT-6.



We can try to understand better where the character retention program was utilized and where it wasn't by looking at
[all the properties that have been built since 2000 in RT](https://mountainmath.ca/map/assessment?filter=[zone_RT,years_2000,nzone_RT-11]&layer=20&zoom=13&lat=49.2497&lng=-123.1232&mapBase=2),
keyed by whether it was a single family, duplex or multi-plex that got built. We removed RT-11 from the map, it is too
new to be meaningful. It's amazing to me how in some pockets almost no multi-plexes get built. We should try and fine-tune
this process before transplanting it to RS.
RT-11 offers a cautionary tale. Looking at what got
[built in current RT-11 after 2000](https://mountainmath.ca/map/assessment?filter=[zone_RT-11,years_2000]&layer=20&zoom=15&lat=49.2393&lng=-123.0509&mapBase=2)

we see lots of single family homes. A huge missed opportunity. If we had upzoned that area a decade earlier we could
have allowed for homes that suit our families much better.


In summary, we should look carefully at how character retention performed in RT and going forward devise policies for RS and RT.
It’s time to drop that artificial divide that has been overtaken by the reality that RS already allows 3 units on each property, more than RT.


## Hostage Taking

The display boards suggests that the current plan for "character retention" in RS is essentailly to copy over the RT
blueprint with some fine-tuning. Downzone RS and give density for undergoing "character retention".

In essence that's holding gentle, ground-oriented density hostage to character retention, and it's a terrible thing to do. Whatever the
question is, downzoning can't be part of the answer any more. Vancouver is starved for gentle, sensible, ground-oriented
family-friendly development.

Originally, when the character retention guidelines for RT were made, this kind of gentle density came in the Trojan horse
of character retention. And even if much of that was faux character, I don't mind. I take that kind of density any way I can.


But we are quite a bit further along now. Unaffordability skyrocketed. Families are starved for housing options.


We need to scale this process up. And just expanding
 the area where we deploy it to also cover RS won't do the trick.
We average about 10 RT character retention projects
a year. Out of 11k RT properties. If we scale that up to all 68k RS properties, we will increase that number to about 70
a year. Just for perspective to see how inadequate that is, we tear down around 1000 single family homes a year.
And replace them with single family homes.

What we need is a program that brings this type of density to RS and RT independent of the character retention program.
And let’s drop the "retention" pretence. If the character home look is what Vancouverites want in return for gentle
density, then let's prescribe the exterior look of new-builts and let the design review process
 handle it.

## New Carrots

If density won't be the main carrot (or a stick) for character retention, than what can pull up the slack? Property taxes is an obvious one.
The owner could be allowed to re-claim property taxes against improvements and maintenance that aim to maintain or
underline the character merit of the home. And these re-claimed taxes become cumulatively payable, with interest, in the
event of demolition. Of course this would raise everyone else's property taxes, but I think that's only fair in return
for the community dictating character-homeowners the exterior look of their home.



The idea behind this is that this aims to directly strengthen the economic viability of the building, thus removing the
economic drivers that favour tearing down the building. And over time accumulating a penalty that dissuades from
tearing down the building.



Density can still be part of the mix, but not in a way that it precludes smart gentle density to be built without

it. The reality is that much of our building stock will go, the economic drivers are just too strong. And we all know that
we should not replace those single family homes with yet another single family home that at best the top 5% income households

can afford. We should allow these houses to be replaced with ground-oriented units a much larger portion of Vancouver
families can afford.



Smarter people than me have probably though about this for quite some time now. I would love to hear more ideas how
character retention can be structured so that it does not get in the way of gentle density for new builts.




<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
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


var priceFormatter2=d3.format("$,");
    var priceFormatter = function (y) {
        return y>=1000000 ? (priceFormatter2(y/1000000) + 'm') : (priceFormatter2(y/1000) + 'k');
    };
    var brackets=[100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000,2000000,10000000,20000000,40000000]

var binFormatter=function(top){
    var bottom=0;
    if (top<=1000000) bottom=top-100000;
    else if (top==2000000) bottom= 1000000;
    else if (top==10000000) bottom= 2000000;
    else if (top=20000000) bottom= 10000000;
    else bottom=20000000;
    return priceFormatter(bottom) + ' - ' + priceFormatter(top);
}
var numberFormatter=d3.format(",");
var numberBinFormatter=function(top){
    var     bins=[0,1,2,4,8,10,16,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,300,400,500,700];
    var index=0;
    while (bins[index]<top && index<bins.length) index ++;
    bottom=bins[index-1]+1;
    return (bottom == top) ? numberFormatter(bottom) : numberFormatter(bottom) + ' - ' + numberFormatter(top);
}
stacked_bar_graph(d3.select("#graph_sfh"));
</script>
