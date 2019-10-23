---
title: Elections fun
author: Jens von Bergmann
date: '2019-10-22'
slug: elections-fun
categories:
  - geeky
tags: []
description: "Playing with Canadian 2019 federal elections data."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-10-22-elections-fun_files/figure-html/province_fptp_pr-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
draft: false
blackfriday:
  fractions: false
  hrefTargetBlank: true
---



Canada is a large country, with some reasonably densely populated regions, and large areas that are sparsely populated. That makes it hard to map things. CensusMapper, [our project to flexibly map Canadian census data](https://censusmapper.ca), struggles with that. The choropleth maps can be quite misleading. The same problem comes up when mapping Canadian election data.



<img src="/posts/2019-10-22-elections-fun_files/figure-html/unnamed-chunk-2-1.png" width="768" />

This map makes it virtually impossible to get a good reading of the distribution of votes. There are a couple of ways around this. 

For example, one could break out the areas with electoral districts too small to make a visible impact on the map, or use a cartogram, like the following two examples taken from the [Wikipedia page of the 2019 federal election](https://en.wikipedia.org/wiki/2019_Canadian_federal_election#/media/File:Canadian_Federal_Election_Cartogram_2019.svg).

<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Canada_2019_Preliminary.png/1280px-Canada_2019_Preliminary.png" style="width:45%;">
<span style="width:8%;display:inline-block;"></span>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Canadian_Federal_Election_Cartogram_2019.svg/1782px-Canadian_Federal_Election_Cartogram_2019.svg.png" style="width:45%;">
</div>

The first keeps the overall geographic context, although the metropolitan areas that are broken out are hard to interpret unless one if very familiar with each region. The cartogram distorts the areas to give each electoral district the same amopunt of space, and thus gives a proportional view of the number of seats each party won. In this version, the labels and breaks help delineate familiar geographies, but it can be hard to properly place them on a map.


To bridge the divide between overall geography and emphasis on treating each district separately, one can also animate the cartogram between the familiar map view and the cartogram view. In the following example that we built [as an observable notebook](https://observablehq.com/@mountainmath/canadian-election-bubble-animiation) we move between a map of Canada and a cartogram where each electoral district is a dot with size given by the total number of votes cast. 



We include a video clip of the animation for convenience, it's just a screenshot from the interactive live [observable notebook](https://observablehq.com/@mountainmath/canadian-election-bubble-animiation).

<video width="100%" controls="controls">
<source src="https://mountainmath.s3.ca-central-1.amazonaws.com/vsb/canada_election_2019.mp4" type="video/mp4">
</video>



This still loses a lot of nuance. The colour is determined by who won the district, the animation reveals no information on how wide or narrow the margin of victory was. Or how the other candidates performed. 

## Winning vote share
With more than 2 candidates in each riding, one does not necessarily require a plurality of votes to win. Only 123 out of the 338 candidates won with over 50% of the vote in their district.
The largest vote share any winning candidate got was 85.5%, the lowest was 28.5%. 

<img src="/posts/2019-10-22-elections-fun_files/figure-html/unnamed-chunk-5-1.png" width="768" />



It stands out that the top 36 spots were taken by the Conservatives. 

## Distribution of votes
We can expand this view to show the vote share by party for each district.

<img src="/posts/2019-10-22-elections-fun_files/figure-html/unnamed-chunk-7-1.png" width="768" />

## Wasted votes
With our first-past-the-post system, we can also take a look at "wasted" votes. We define these as votes that have no bearing on the outcome. For winners it's the vote margin by which they won, for the ones that did not win their district it's the entirety of their votes. 


<img src="/posts/2019-10-22-elections-fun_files/figure-html/unnamed-chunk-8-1.png" width="768" />

Wasted votes is a somewhat artificial system that does not necessarily reflect how parties would have performed under a different voting system. We will need to take a closer look for that.

## First-past-the-post vs proportional representation
How would the parties have fared under a proportional representation system (PR) instead of first-past-the-post (FPTP)? There are many different kinds of proportional representation systems out there, but they generally try to approximate a seat distribution that mirrors the overall vote share. For simplicity we will simply take the overall vote share as a proxy for what a proportional representation system might have yielded.



<img src="/posts/2019-10-22-elections-fun_files/figure-html/unnamed-chunk-10-1.png" width="768" />

The Liberals are the big winner of FPTP, as is Bloc Québécois. The Conservatives fair equally well under either system, and NDP and the Green Party are the losers under the current FPTP system.

We can run this by individual province to see how well each province is represented in terms of first-past-the-post vs proportional representation.

<img src="/posts/2019-10-22-elections-fun_files/figure-html/province_fptp_pr-1.png" width="768" />

This reveals that Alberta and Manitoba voters are a lot more diverse than the FPTP vote system may suggest, and the while the Conservatives got shut out of a couple of provinces, they still have sizeable support there. This kind of outcome is fairly typical for first-past-the-post systems, where the representation in parliament does not match the overall population well, especially when looking by province.

## Upshot
There is endless fun to be had with elections data. As usual, the code for this post, including the pre-processing for the animation, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-10-22-elections-fun.Rmarkdown) for anyone to adapt and dig deeper into elections data.
