---
title: Loss of Character
date: 2016-02-01
categories:
  - Vancouver
slug: loss-of-character
author: Jens von Bergmann
tags: []
description: 'What can open data say about condos?'
featured: 'strata.png'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

At the heart of the Vancouver affordability crisis is a phrase that comes up again and again. *Loss of Character*. To effectively
move forward I think it is important to look closely what it means and how it is used.

And what the data can tell us about *loss of character*.
<!-- more -->

## Loss of Character
Very broadly interpreted, *change of character* is how people describe the process when
the environment around them is changing in profound ways. And the neighbourhoods in Vancouver are indeed changing fast.
  
*Loss of character*, as opposed to *change of character*, adds a value judgement. It implies that the former "character"
was preferable to the new one.

I want to highlight two ways in which this change manifests itself in Vancouver: Change in buildings and change in demographics.

## Change in buildings
There has been a lot of focus on buildings getting torn down and rebuilt. When a city runs out of land to build new housing,
part of the existing stock will get increasingly cannibalized to make space for new buildings. It pays off to try and
understand how this renewal process works.

Let's take a look at the age distribution of Vancouver's single family homes.
<div style="margin:10px 50px;padding:5px;border: 1px solid black;border-radius:5px;">
<div id="graph_sfh" style="height:200px;max-width:640px;" data-url="/data/sfh_age.json"></div>
<div class="legend no-margin"></div>
</div>
We divided the building stock for each age into two groups, one with building value less than 5% of the total property
value, and one with building value greater than 5%. The significance of that number is that historically over the last
10 years, buildings with this percentage below 5% [had a 1 in 6 change of being torn down and rebuilt](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/)
over a 10 year time frame, with sharply dropping frequency of tear downs of buildings above that threshold. Check the link
for a more detailed analysis.
 
We interpret this graph as giving us a decent prediction of what part of our building stock will get torn down and rebuilt
in the next 10 years, 1 in 6 of the red is predicted to go.

What's remarkable is that essentially the entire SFH stock built between 1935 and 1965 is at high risk of being torn down,
while the period before that has a much better chance of surviving. This comes out of purely looking at the data, it would
be helpful if people out there that understand
the characteristics of the homes built at different times could shed some light onto why this maybe be the case.

Appreciating some of the economic drivers of this process, we can try to understand how people feel about the process.
There seem to be several different reactions to and thoughts on buildings being torn down
that can be summed up with the words 'heritage', 'waste' and 'McMansion'. 

### Heritage
[<img  src="/images/heritage.png" style="width:50%;float:left;margin-right:10px;">](https://mountainmath.ca/map/special/11?zoom=13&lat=49.264&lng=-123.1276&layer=4&filter=sfh)
Some feel strongly about 'heritage homes' which typically goes beyond the 
[City of Vancouver list of heritage sites](https://mountainmath.ca/map/special/11?zoom=13&lat=49.264&lng=-123.1276&layer=4)
or more specifically the [single family houses on that list](https://mountainmath.ca/map/special/11?zoom=13&lat=49.264&lng=-123.1276&layer=4&filter=sfh).
The term is used differently by different people and may be confined to offical heritage sites, or ones that have been
'overlooked' and should be part of that list, to houses of a certain age or style ("cottage homes"), to including pretty
much anything old or decent looking like this [1996 building that made the news recently](http://www.vancouversun.com/business/bulldozer+bait+million+mansion+just+another+vancouver+tear+down/11686111/story.html?__lsa=8524-b4e7).
Many of those heritage sites are well kept up, with a teardown coefficient well above 5%. But there are also some in quite desolate
state.

Most people see value in heritage, for this term to be a more usefuly driver in the discussion it would greatly help to
narrow it down.

### Waste
Another narrative is that of 'waste', when a house gets sent to the landfill. And waste is an issue everyone
is concerned about, land fill space is limited and the impact of the building industry is huge,
[as described in this 2011 article](http://www.bcbusiness.ca/real-estate/disposable-housing-vancouver-home-demolition).
The City of Vancouver has enacted some rules on [how much of a building needs to be recycled](http://vancouver.ca/home-property-development/demolition-permit.aspx),
but they are very weak. In particular, there are no binding recycling requirements at all for post 1940 houses beyond recycling drywall.
Generally the sentiment seems to be more concerned with the fact that a building is getting
torn down, rather than focused on how to improve the process of salvaging and recycling the old home.
                                                                                                                                                
The good news is that most of the teardown activity in Vancouver has been
[focusing on low relative building value properties](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/), so
cases like the demolition of [that 1996 building assessed at $1.9m](http://www.vancouversun.com/business/bulldozer+bait+million+mansion+just+another+vancouver+tear+down/11686111/story.html?__lsa=8524-b4e7)
are quite rare. That building has a teardown coefficient of 25%, and historically buildings in that range had a 1 in 200
chance of being torn down in a 10 year period.

What's concerning though is that as land values increase, so do the value (dollar amount) of the buildings that move into
the high-risk category of teardown coefficient below 5%.

  
### McMansion
The last important word is 'McMansion', which tackles the question of what the building gets replaced with. Typically 
the term 'McMansion' is used for a building whose primary concern is to maximize the allowable footprint.
Economically speaking, this is a rational reaction to the exorbitant land values. Esthetically it can be quite jarring. 

This is where the value judgement in "*loss* of character" becomes most apparent. While some people feel visually offended
by them, people that buy these properties clearly prefer them over what was there before. Either way, they serve as constant
reminders of the change the neighbourhoods are experiencing.


## Change in Demographics
Probably more important than the change in buildings is the change in demographics. Vancouver seems to be experiencing
a gentrification process where the traditional financial elite of 'high income' households is priced out of the market by the new
financial elite of 'high net worth' households. That change is dramatic and it has been going on for long enough now to
have left very visible signs in the 2011 Census data. 

[<img  src="/images/local_affordability.png" style="width:50%;float:right;">](http://censusmapper.ca/maps/37) 
Looking at the ['local affordability' in Vancouver](http://censusmapper.ca/maps/37) in 2011 we see that in many (not all)
neighbourhoods the people that live there could
not afford to buy again (based on their income). What that means is simply that the people moving in will be demographically
very different from the ones living there right now. And yes, this problem is much worse in Vancouver than in other places in
Canada, which can easily be seen by searching and panning in the map.

This problem has likely gotten much worse since, as housing prices continued to climb much more steeply than income since 2011.

[<img  src="/images/twiddling_thumbs.png" style="width:50%;float:left;margin-right:10px;">](http://mountainmath.ca/map/assessment?zoom=14&lat=49.253&lng=-123.1244&layer=12)
Another indicator of just how disconnected the property market, especially that of single family homes, is from the
local economy is that the combined rise of land value of all single family homes combined was $24.6bn, more than the entire
population of Vancouver combined income through work, investment (other than housing) or registered retirement income and
government transfer payments during that year. Even considering pre-tax income (although the housing price increase is tax free for all those
living in their house the year before they sell). [Read here more details on this](http://doodles.mountainmath.ca/blog/2016/01/24/work-vs-twiddling-thumbs/)
or [browse through the map](http://mountainmath.ca/map/assessment?zoom=14&lat=49.253&lng=-123.1244&layer=12) to see
just how much each Vancouver homeowner made last year twiddling thumbs and waiting for land values to rise.

So how can people still buy in this market? Except for the rare cases of people with very large salaries to be able to save
large sums for down payments and handle the mortgage payments, those purchases are founded in wealth, not income. Local wealth,
maybe inherited or handed down from parents when they cached out on their home, or money brought in from abroad.

What's clear is that this wealth-based gentrification process is real and rapidly changing the social character of the
neighbourhoods.


## Hard truths
1. We can't stop teardowns. The economic drivers are too strong. We can do better at designating and preserving heritage
sites and nudging the process in other ways. Naively projecting past data forward
[we predict around 8,000 properties will be torn down and rebuilt](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/)
in the next 10 years.
2. Affordable single family homes are a thing of the past. Demand is growing and supply is shrinking, so prices will
remain high and nothing short of Soviet-style interventions can change that.
3. Housing in many neighbourhoods is now out of reach for working professionals that can't rely on outside financial help
like inheritance or mortgages backed by the assets of their parents.
4. Foreign money may have played some role in getting us here, but any solution that solely revolves around dealing with
foreign money won't solve the problem. (Someone should run some
custom tabulations through Stats Canada to get a better handle on the signs of foreign money that can be picked up from the basic 2011
Census data.)

## Preserving and Restoring Character (my 2c)
Looking forward, how can the character of the neighbourhoods be preserved or restored? Most of the public discussion
focuses on the how to preserve the build form; the question how to preserve the
social structure of the neighbourhoods receives much less attention.

I don't have a good overview about what ideas are out there, so I won't attempt to summarize them. Usually I try to focus
on data and keep my opinions out of this, but I could not help myself on this one. So here comes my 2c on what should be done.

### Character of Buildings
For buildings, we need to focus on what's important to
preserve. We need better rules on building waste. And we need to create policies that guide what teardowns will replace.

### Social Character
To preserve and restore the social character of the neighbourhoods we need to create housing for the types of people that
used to be able to buy in the neighbourhood and are now being pushed out. That is working professionals. Given that single
family houses will remain out of reach, the only way to do that is to allow (low rise) condos in neighbourhoods. I don't know
if that means just upzoning arterials, or creating pockets of low-rise throughout neighbourhoods like it is common in my
<img  src="/images/arbutus-33.png" style="width:50%;float:right;">
native Germany. One example of this in Vancouver is the low-rise pocket at Arbutus and 33rd. 
That complex, when taken together with all of Quilchena park, still houses roughly 3 times more people per area than the typical
single family housing neighbourhood with the same total area. And it collects the same amount of property taxes
per square metre as the typical single family neighbourhood (without a park) while it is cheaper to service.

Alternatives, like encouraging laneway houses and secondary suites can also increase supply and help ease the housing crunch.
They are great at increasing rental stock. But they don't increase supply fast enough, don't serve the
demand for home ownership and scatter up the green space into lots of tiny yards instead of freeing up space for larger
parks that can be effectively used for kids to play and recreation. Focusing only on towers instead just intensifies the
gentrification process, but there probably are areas where they make sense. There is no doubt that increasing supply
has to be part of the solution, any ideas like ['downzoning'](https://pricetags.wordpress.com/2016/01/31/qa-on-the-toughest-topic-in-town/)
that fail to increase supply are counterproductive in restoring the social character of the neighbourhoods.

[<img  src="/images/child_household_density.png" style="width:50%;float:left;margin-right:10px;">](http://censusmapper.ca/maps/88?zoom=14&lat=49.2395&lng=-123.1518)
If we are concerned about creating space for families the question becomes where to house them. With land limited, let's
map the density of households with children, so the [number of households with children per km&sup2;](http://censusmapper.ca/maps/88?zoom=14&lat=49.2395&lng=-123.1518).
We immediately see that the existing pockets of mid and high-rise are very effective at housing children households. Using
Census data to model presence of children in households on physical housing parameters we see that having 3 or more bedrooms
is the single most determening factor. If accommodating families is a priority, then we need to ensure that all neighbourhoods
have 3 bedroom options, [which is currently not the case (2011 data)](http://censusmapper.ca/maps/97).
    
### Dealing with a Wealth-based market
Moving from a housing market supported by income to one supported by wealth, either of domestic or foreign origin, requires
new rules to ensure fairness and preserve the basic social contract that our society is founded on: That everyone starts
out with more or less the same opportunities, and work and grit can lead to social and economic upward mobility.

Wealth, especially foreign wealth, tends to be much more mobile and can decide on short notice to leave Vancouver. This introduces
enormous risks to the local economy, and smart policies are needed to guard against these risks.

In Canada, people don't pay capital gains on their primary residence. That works fine as long as increases
in land value are relatively low, but with current situation where people [earn more money sitting on their house than
actually working](http://doodles.mountainmath.ca/blog/2016/01/24/work-vs-twiddling-thumbs/) the idea that income from
work should be taxes and income from twiddling thumbs should not is just ludicrous. Let's tax all capital gains on housing.
We can deduct investments into improvements and can argue about details like indexing taxable gains to inflation. And
let's tax it at a rate that is higher than the one on income or investments in stocks to re-focus housing as being treated
primarily to house people and not as investment.

This train of thought is similar in nature to the
[Vacant Housing Tax](http://www.theglobeandmail.com/news/british-columbia/bc-professors-call-for-property-surtax-on-vacant-vancouver-housing/article28235302/)
in that it would have minimal direct impact
on the market (so it in itself won't bring prices down in a meaningful way), but it would generate substantial amounts of revenue
that could be used to provide relief. And the revenue is large enough that, if spent strategically (for example on building
affordable rental), could have a meaningful impact on the overall property market. And restore fairness in a market where
initial capital barriers are so high only the rich can participate.

Next, with the property market driven by wealth (especially for single family houses), while the way we finance
public services is based on income, we need to ask the question if our current taxation system is still adequate. A capital
gains tax on housing is just one part of this, the proposal to tax vacant properties is another. We could strengthen
legislation and enforcement on foreign income, assuming that this is a big enough issue (Give us better data!).
Other options that should get discussed are a higher property transfer tax, progressive property taxes
(possibly discounted against income tax) and other measures that pay more attention to the role of wealth vs income in
the Vancouver property market. This discussion is important, but requires better data to be meaningful and effective.

### Data
The profound lack of data is a major problem to find effective ways to fix the affordability crisis. Lack of clear data
can provide a convenient excuse for inaction.

But data does not need to be perfect.  
Much can be learned from the data at hand. A good list of data sources and reproducible findings would be a great way
to establish a baseline, build better arguments and keep the discussion focused on the "big fish".
  
Maybe a dedicated GitHub repo could provide a suitable format for this.

<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
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
