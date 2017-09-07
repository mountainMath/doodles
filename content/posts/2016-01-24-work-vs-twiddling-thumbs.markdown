---
title: Work vs Twiddling Thumbs
date: 2016-01-24
categories:
  - Vancouver
  - Assessment Data
  - CensusMapper
slug: work-vs-twiddling-thumbs
author: Jens von Bergmann
tags: []
description: "Vancouver land works harder than it's people"
featured: 'sfh_rise.png'
images: ["https://doodles.mountainmath.ca/images/sfh_rise.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

In the ongoing debate on affordability of housing in the City of Vancouver we regularly
hear voices expressing concern for ["elderly folks of modest means who had been counting
on using their home as a pension"](http://news.nationalpost.com/full-comment/andrew-coyne-dont-blame-chinese-billionaires-for-vancouver-housing-prices) to argue against doing anything to ease the housing
affordability problems many (younger) people are facing. In these arguments the concern
for "elderly folks of modest means" seems curiously focused to those who own property as
opposed to, for example, the 20% of the elderly people in Vancouver that live in poverty (15k total).

Which got me a little thinking about “earning money” in this day and age.

<!-- more -->

## Work
Most people earn money by working. We are interested in after tax household income,
for simplicity we will look at 2010 income data reported in the 2011 census. The median
after-tax household income in Vancouver was $50k (the average was $65k), although there is
[large regional variability](http://censusmapper.ca/maps/224).
The pre-tax households incomes were $56k for the median and $80k for the average income.

Incomes have grown a bit since then, median income levels in Vancouver grew by 7% from
2010 to 2013 ([the latest year Stats Canada reports on](http://www5.statcan.gc.ca/cansim/a47))
and will have grown a little more
since then, but these are relatively small changes compared to other numbers I want to talk about.

[Most of this income stems from employment income](http://censusmapper.ca/maps/189) which also includes self-employment,
but 22% of pre-tax income in Vancouver came from outher sources, mostly investment income
but also government transfer payments like child benefits.

Cumulative, the after tax income put $17.8bn into Vancouverite’s pockets.

## Twiddling Thumbs
Let's compare this to how much Vancouver home owner households earned last year by twiddling thumbs while sitting on their
property. For simplicity we focus on SFH ("Single Family" or "Single Detached") homes. We
will consider the change in land value only, changing the building value because of renovation or rebuilding certainly
does not happen by twiddling thumbs.

The typical SFH household made $262,000 last year by twiddling thumbs (so that's the median land value rise for SFH homes between 2015 and 2016
property tax assessment years, the average was $318,877), for a tidy total of $24,651,312,001. Not too shabby. 
And considering that the typical owner household
lives in their home, these are tax-free earnings once the owners sell. That's substantially more than what the typical household
in Vancouver takes home. The total land value increase for just the SFH properties amounts to $24bn out of
[the $45.2bn by which land values in Vancouver increased overall](http://doodles.mountainmath.ca/blog/2016/01/17/updated-vancouver-assessment-data/). For context,
recall that the overall income earned by all Vancouverites in 2010 was $17.8bn after tax (21.3bn before tax). 
  
In other words, <span style="font-weight:bolder;">just the SFH property owners alone earned more by twiddling their thumbs than the entire population of the
City of Vancouver did by -- actually working</span>. And in most cases homeowners don't even have to pay taxes on their thumb-twiddle earnings. Yet another
indication of how [out of touch the property market is with the local enconomy](http://censusmapper.ca/maps/37).


The numbers are just meant to provide a general frame of reference, they are not adjusted for inflation, and costs like
property taxes and property transfer tax are not taken into account.

## Mapping the Result of Thumb Twiddling
[There is a map for this](https://mountainmath.ca/map/assessment?filter=sfh&zoom=14&lat=49.253&lng=-123.1244&layer=12).
(I probably would not take the time to write about this otherwise.) Last year's assessment
increase was quite large, not every year is like this (although it looks like the coming one will also be substantial).
To even things out a little I mapped the average yearly gross land value increase for each property. For properties that I
could not trace back all the way to 2006 I averaged over as many years as I could find.

[<img  src="/images/sfh_rise.png" style="width:50%;float:right;">](https://mountainmath.ca/map/assessment?filter=sfh&zoom=13&lat=49.2494&lng=-123.1241&layer=12)
[Looking at the map](https://mountainmath.ca/map/assessment?filter=sfh&zoom=13&lat=49.2494&lng=-123.1241&layer=12) we see that
the average yearly increase depends to a large extend on the square footage of the property. Large properties naturally stand
out, unless they are stratified where the land value increase gets distributed across all the owners. 

Averaged over 10 years, the yearly land value increase for the typical SFH property in Vancouver was $79,800. Using Main as
a divider the numbers are $66,700 for the
typical east of Main and $141,700 for the typical west of Main property (using median increases).

A good portion of the east-west difference is due to larger lot size, but even the land values increase per m&sup2; for properties
on the west side was 35% higher than that of properties on the
east side. These are yearly increases, to be accumulated and collected tax free in most cases when the property is sold.

## Twiddling in 3D
<a href="http://mountainmath.ca/assessment/split_map?zoom=17&lat=49.2362&lng=-123.1365&type=1&use3D=1&year=2015" target="_blank"><img  src="/images/s_vanre.gif" loop="0" style="width:50%;float:left;margin-right:10px;"></a>
We can get even more fancy and show the effect the thumb-twiddling has on land values by [animating the land and building
value rise over time](http://mountainmath.ca/assessment/split_map). You will need a modern computer to view this.

If you are interested there is [more background](http://doodles.mountainmath.ca/blog/2016/04/01/on-dirt-and-houses/)
on the visualization. I put a little more work into this, the numbers in the animation are inflation adjusted and it also
includes duplexes and stratified condo units. There is a slider to filter by number of strata units in each building to
explore the effects of stratifying a standard lot into several units has on affordability.

## Hourly Rate for Twiddling Thumbs
Just for fun we can work out the hourly rate for twiddling thumbs. All we need to do is divide by the number of work
hours by year. We can look up the average work weeks for a Vancouver worker in the 2011 census and, for style points also consider the
number of household maintainers. After all, when we compare household income with land value increases we should consider how many
people in the household work. 63% of Vancouver households have only one household maintainer, but
[33% have two and 4% three or more household maintainers](http://censusmapper.ca/maps/223) contributing to household income.
On average a Vancouver household [worked a total of 62 person-weeks per year](http://censusmapper.ca/maps/222) to earn
that income. Assuming a 40 hour work week, we compute the average after-tax earning to be $26 per hour from regular work
and average after tax earnings of $126 per hour from twiddling thumbs. That's assuming all household maintainers are twiddling
the same amount of time that they dedicate to regular work. (In this calculation we use average not median income and land value
increases, medians don't lend themselves well to these kind of reasoning.)

Using the 10 year averaged numbers instead of focusing on just the last year we still get a healthy average after-tax twiddling thumbs rate of $44 per hour.

I am not entirely sure why anyone would want twiddling thumbs to stay so lucrative. Unless maybe the super self-centered thumb-twiddlers.
Or why earnings from thumb-twiddling should remain tax-free. While employment income is taxed (as it should be).

Considering to change your line work to thumb twiddling? To bad thumb twiddling is so unaffordable!

 

## Data Dump
Here is the raw output of the stats run on the single family properties for ayone interested.

### SFH Land Value Rise (2015 - 2016)

* City Wide: Average $313,072 Median $262,000, Count: 78740, Total: $24,651,312,001, Hourly: $126
* East of Main: Average $230,106 Median $230,000, Count: 46014, Total: $10,588,122,001, Hourly: $92
* West of Main: Average $429,725 Median $375,000, Count: 32726, Total: $14,063,190,000, Hourly: $173

### SFH Land Value Rise (2006 - 2016)

* City Wide: Average $109,969 Median $79,800, Count: 77981, Total: $8,575,547,711, Hourly: $44
* East of Main: Average $68,656 Median $66,700, Count: 45647, Total: $3,133,947,703, Hourly: $27
* West of Main: Average $168,293 Median $141,700, Count: 32334, Total: $5,441,600,008, Hourly: $67

The total number of units for the 2006 to 2016 analysis are a little lower since not all properties can be traced over that time
period without resorting to more tedious analysis.

<script>
function resetImages(){
    $('img').each(function(img){
        imgsrc = $(img).attr('src');
        if (imgsrc.slice(imgsrc.length-4)=='.gif') {
            $(img).attr('src', '');
            $(img).attr('src', imgsrc);
            
        }
    });
    setTimeout(function(){
        resetImages();
    },25000);
}
setTimeout(function(){
    resetImages();
},25000);
</script>
