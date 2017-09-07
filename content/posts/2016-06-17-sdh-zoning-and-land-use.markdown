---
title: SDH Zoning and Land Use
date: 2016-06-17
categories:
  - Vancouver
  - land use
  - zoning
  - density
slug: sdh-zoning-and-land-use
author: Jens von Bergmann
tags: []
description: 'How much land do single detached and duplex houses consume?'
featured: 'land_use_van.png'
images: ["https://doodles.mountainmath.ca/images/land_use_van.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Recently the question around the amount of space taken up (exclusively) by single detached houses has show up on my
Twitter feed citing that
SFH take up [70%](https://twitter.com/WayneFougere/status/743211599821844481),
[66%](https://twitter.com/MitchellReardon/status/739957295564476416),
and [57%](https://twitter.com/karensawa/status/743235428011020288), 
[56% (timestamp 3:50)](http://www.cknw.com/2016/06/02/the-lynda-steele-show-bob-rennie-on-supply-and-demand/).
I personally have thrown in
[34%](https://twitter.com/vb_jens/status/738608945741238272) as a contender. And, just for the fun of it, by the end of
this post I will have thrown 33% and 28% and my favorite, 81%, into the mix.

What's going on, how can there be such a large range of estimates for what seems to be a simple question? The answer
lies in the details of what exactly the question is asking, all of the above numbers are correct answers to one particular
version of very similar questions.

## TL;DR
The takeaway I think is most useful for general purposes:

>    35% of all households live on single family and duplex properties making up 81% of Vancouver's residential land, while the remaining 65% of households live on 19% of the residential land. 


<!-- more -->
There are two fundamental ways to attack the question. One is through zoning, that is to look at area where only SDH can
be built. The other is through land use, that is looking at what area is currently occupied by SDH lots.

## Single Detached Houses
First we need to understand what we mean by single detached house. There are two common, but quite different definitions
out there. One stems from the zoning code and refers to a property that is not stratified and has a single main structure
on it, possibly with one suite, and possibly a laneway house. This is the definition most commonly used. When someone says
they own a single family house, this is what they are talking about. Let's call them *single detached properties*.
There are around 75,000 of these in the City of Vancouver.

Stats Canada employs a different definition. To them a *single detached dwelling* is single dwelling unit comprised of a
free-standing (detached) structure. A *single detached property* may contain exactly one dwelling unit, in which case
Stats Canada would also call it a *single detached dwelling*. If the house has a secondary suite, Stats Canda would
classify it as a *duplex*. If it has a laneway house, Stats Canada would classify the laneway house as a separate
*single detached dwelling*. Stats Canada reports 47,530 *single detached dwellings* in the City of Vancouver.

Because of this discrepancy, sometimes it is useful to look as single family houses and duplexes combined. Especially
if one wants to mix in census data to for example look at the number of households that live in these dwellings. While
there are about 75,000 *single detached properties* in Vancouver, it is fair to assume that there are significantly more
than 75,000 households living on these properties once we account for secondary suites and laneway houses.

## Zoning
<a href="http://vancouver.ca/files/cov/Zoning-Map-Vancouver.pdf" target="_blank"><img  src="/images/zoning_van_pdf.png" style="width:50%;float:right;margin-left:10px;"></a> 
Vancouver is divided up into zones that determine what can (and cannot) be legally built on the land. 
If one is primarily concerned with the area of land that where only single detached houses can be built, then zoning is
the right metric to look at.
 
There are two zones that essentially only allow single family houses as residential properties, the RS zones and,
to some extent, First Shaughnessy. Each of these has it's own pitfalls. The first issue is that parks are generally zoned
RS, but one cannot build single family homes in parks. Moreover, while RS does not allow residential land uses other
than single detached houses, it does allow for other land uses, like parks, schools, assisted living and other institutional
uses. So RS zoned land area is a poor proxy for the question of where single family houses could be built. At the very
<a href="https://mountainmath.ca/map/assessment?zoom=13&lat=49.2517&lng=-123.1232&layer=6" target="_blank"><img  src="/images/zoning_van.png" style="width:50%;float:left;margin-right:10px;"></a> 
least we should exclude parks from the equation, but probably also schools and other institutional land uses. After all,
it is delusional to think that even if a school were to close down and the land be sold for development that single
detached dwelling would be built on that land. Next comes the question if we should only include the lots that single
family homes could be built on, or also include the surrounding roads. After all, the roads are needed to serve the lots.
But they also serve the schools and parks, so maybe only a certain portion of the roads should be included? It gets messy,
the second image shows only non-institutional and non-park properties (no roads) coloured by zone, interactive version
[here](http://mountainmath.ca/map/assessment?zoom=14&lat=49.2517&lng=-123.1232&layer=6).

The numbers between 70% and 56% mentioned up top are (probably) derived using some version of zoned area, possibly excluding
parks or schools for some, but including roads within RS zoning. It is easy to underestimate
the space roads take up in the City of Vancouver, overall roads right of ways make up 28% of City of Vancouver land.

At the end of this though process, we are starting to gravitate away from zoning and toward land use.

## Land Use
We can simplify the discussion by asking how much space currently is taken up by single family properties. The answer
to this is 33%. I have previously written about the
[land use breakdown](http://doodles.mountainmath.ca/blog/2016/02/29/land-use/) for Metro Vancouver municipalities, but
single detached homes were not broken out separately, single detached and duplex properties combined take up 34% of
Vancouver's land. One can play the numbers a little more, maybe only look at single detached properties within RS zoning.
That puts the number at 28%. Throw in Shaugnessy and it rises to 29%. Recall that this excludes roads right of way.

<a href="https://mountainmath.ca/land_use/map?zoom=13&lat=49.2544&lng=-123.1268&mu_filter=[%22VA%22]&lu_filter_n=[]" target="_blank"><img  src="/images/land_use_van.png" style="width:50%;float:right;margin-left:10px;"></a> 
Here is an interactive (data-heavy) map that shows the land use for 
[just for the City of Vancouver (plus Musqueam 2)](https://mountainmath.ca/land_use/map?zoom=13&lat=49.2544&lng=-123.1268&mu_filter=[%22VA%22]&lu_filter_n=[]).



## Multi-Unit Housing
One can ask the same question about other housing types, and we can read off the numbers from the
[land use breakdown](http://doodles.mountainmath.ca/blog/2016/02/29/land-use/). 3.2% of land is taken up with low rise
apartments, 1.9% with townhouses, 1.2% with high rise, 0.3% by non-market housing, 0.9% by mixed use low rise and 0.7%
by mixed use high rise. Adding all of this up we get that 8.2% of land is taken up by housing that is not single detached
or duplex. And it also includes some commercial space in the mixed use developments.
 
That means that overall in Vancouver 42.2% of the land is used for residential purposes, 81% of which is occupied by
single detached and duplex properties and the remaining 19% is occupied by all other building forms.
 
## Share of Households in Different Land Uses
We may be interested in the population density these different land use patterns entail. That's where things get a little
tricky, we will turn to the census for answers. From the standard census releases we can only discern the share of
dwellings that are single detached and duplex properties combined, and that number is 93,370 dwelling units. Overall
there are 264,575 dwelling units, so single family and duplex units make up 35% of all dwelling units in CoV. Glossing
over the issue that some of these may not be occupied we conclude that 35% of all households live on single family and
duplex properties making up 81% of Vancouver's residential land,
while the remaining 65% of households live on 19% of the residential land. 
  
## Fine Print
There are a number of issues with the data that might change the numbers slightly, but not by much. The first is that
the land use dataset I use lump the City of Vancouver together with Musqueam 2. That slightly changes the land use mix
and areas reported, but the effect on all numbers mentioned here is very small. Next up is the number of dwelling units
on single detached or duplex properties. The census number is likely to under report some secondary suites (although it
captures more than BCAssessment does), and properties with more than one secondary suite (so some illegal suites) will
show up as an apartment building in census data. Moreover, the census data is from 2011, the land use data we used is
about a year old, and we have manually adjusted for some recent upzoning. So there is some give or take in the numbers,
I would not expect more than a one percent move in the numbers I reported as a result.

## Further Questions
This does not answer the question what percentage of the population lives on single family or duplex properties. To
estimate that one would have to first estimate the number of people per houshold for the different land uses, as we
expect them to differ significantly. One can start exploring how the number of people per dwelling unit varies
[on CensusMapper](https://censusmapper.ca/maps/391).

