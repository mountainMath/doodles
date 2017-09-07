---
title: Millennials Redux
author: Jens von Bergmann
date: 2017-08-06
categories:
  - newsfail
  - CensusMapper
slug: millennials-redux
tags: []
description: 'Millennials are still not fleeing.'
featured: 'millennial_grap_2.png'
images: ["https://doodles.mountainmath.ca/images/millennial_grap_2.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---


Catching up with my local news reading last night I stumbled about another
[new report on millennials](https://beta.theglobeandmail.com/real-estate/vancouver/priced-out-of-downtown-vancouver-millennials-are-building-hipsturbia/article35884038/).

The notion that millennials are fleeing Vancouver is a recurring theme in the Vancouver press, and we have addressed
some of the [problems in the data used to support that claim before](http://doodles.mountainmath.ca/blog/2017/05/16/lifeblood/).

<link rel="stylesheet" href="/css/custom.css">
Sadly, this new article's use of data is no less problematic, and the topic, as well as the data misrepresentations, are serious enough that
I felt they need addressing so as not do distract from the actual real problems that millennials are facing. Problems that are quite
different from those the 25 to 39 year old age cohort was facing 20 years ago. Groups like Generation Squeeze
have done a good job nailing some of that down in the data.


### The Data Rabbit Hole Trap
<!-- more -->
To the data-minded person reading the article there are a number of red flags that go off throughout. Many of these can
be attributed to today's typical data-adverse journalism, but typically the actual hard numbers in the article hold up and are just
misrepresented to varying degrees. What got me stumbling in this article was the data chart at the bottom claiming that the 25 to 39 year old age cohort
in the "UEL" grew by 5% between 1996 and 2016. The UEL of course is a quasi-municipality that sits wedged between the City of Vancouver and UBC,
but many people less attuned to data and administrative details use the term to refer to various portions of the region west of the Pacific Spirit Park,
sometimes including "Little Australia" which is west of the Park but an actual part of the UEL and sometimes excluding it.

I took it to mean some version of UEL and UBC/UNA combined, and the 5% number looked suspicious to me. The population in that area more than tripled
during that period, one would expect the change in that age cohort to be much larger. So I started to dig into the numbers.

The first step was to look up the numbers for the City of Vancouver since there are no issues with administrative boundaries between 1996 and 2016,
just to make sure that the data was labelled correctly and it was really representing the percentage change in the number of millennials between 1996 and 2016.
But the number I got was different from the one in the article. The article lists a 10% increase, I calculated an 11% increase. 11.2% to be precise, so
there was no chance that this was a rounding issue.

And the data rabbit hole opens up, sucks me in and the trap closes.

### The Data
The data is, for the most part, reasonably straight forward. I just grabbed the 1996 count of 25 to 39 year olds, then the 2016 counts and compared them.
One problem is boundary changes. Administrative boundaries don't stay fixed. And boundary changes don't always show up when just looking at non-geographic
data, names or even the uniqe geographic identifiers don't necessarily change when census boundaries change. Looking that the geographic data for both
censuses one immediately notices that the UEL/UBC/UNA area changed a lot (and also got new geographic identifiers), and Coquitlam changed too.
That complicates things a little, the UEL/UBC/UNA part is easy enough to deal with. In 1996 that area was called the "University Endowment Area", in 2016
that same area can be obtained by adding to census tracts. Coquitlam is a little trickier and I wasn't interested enough in figuring out the details so
I decided to ignore it.

Step one, trying to reproduce the graph in the newspaper, is below with blue bars, with the graph from the newspaper in red bars for reference.

<div class="half-image"><a href="/images/millennial_grap_1.png"><img src="/images/millennial_grap_1.png" ><p>News Story</p></a></div>
<div class="half-image"><a href="/images/millennial_grap_2.png"><img src="/images/millennial_grap_2.png" ><p>Actual Data</p></a></div>

There is definitely a correspondence between the graphs, but the numbers don't quite match up. I have no idea how the "UEL" numbers were derived for
the article. But I have an explanation for the difference in the other municipality's numbers. Looking at the graphs
suggests that a larger denominator was used in the article, and indeed the numbers match up perfectly if I were to divide the
difference of population in the 25-39 year
old cohort by the 2016 number instead of the 1996 number. An embarrassing data mistake to be sure, but nothing out of the ordinary for today's
news stories.

I can't explain why Surrey, the city with the largest gain in millennials, was dropped from the data used for the story.

### Data Representation
But these data problems are really only a side show to the real issue.
The most important question is what data to use for what purpose. The article chose to use the change in the total number of millennials
to support the notion that the 25 to 39 year old cohort are shunning the City of Vancouver for some of the more outlying regions.
The obvious issue with that
is that that measure is confounded by population growth. If the population is growing, so will the number of millennials,
even if the share of millennials
in the population did not change. For this story, this is clearly a very poor choice of data representation.

<a href="/images/millennial_grap_3.png"><img  src="/images/millennial_grap_3.png" style="width:50%;float:right;margin-left:10px;"></a>
As a first approximation to understanding where that age cohort settles in 2016 compared to 1996 one can look at the respective shares of the
population in those age cohorts. The only problem, the pretext of the story goes away when one represents the data in this way.

What stands out is that the share of 25-39 year olds dropped in all areas. Some of that is just part of the
changing makeup of the population in general. And
one sees that the City of Vancouver not only has the highest share of 25-39 year olds, it also experienced the lowest drop.

One should probably also look at other age cohorts to better understand how the population is changing. And compare this to other regions
to try and distinguis Vancouver-specific trends from more general Canada-wide ones.

### Framing of the Data
The other part of the story that irks me is the deep confusion and free mixing of two different concepts. One is that of migration, that is
(the same) people moving from one area to another over some time period. The other is that of the number or share of (different)
people in a secific age cohort at two distinct points in time. Nathan Lauster has added some very
[good analysis](https://homefreesociology.wordpress.com/2016/02/12/is-the-lifeblood-of-vancouver-leaving/) to this topic, and has
followed up with a series of blog posts. And this was picked up in various news articles too.

This article not only lacks appreciation for this important distinction by talking about "migration" when really comparing age cohorts, but
it takes it to the next level by talking about "millennials" as being 25-39 year old in 1996 (as well as in 2016), which is
comically absurd.

Not sure what to make of the authors assertion that BC Assessment is in the business of enumerating 25 to 39 year olds between 1996 and 2016,
I wonder how people get stuff like this past their editors.

The larger storyline is still important here, as Vancouver grows up from a city with surrounding suburbs into an integrated metropolitan area.
And a new generation,
spurred on by new challenges, including housing affordability, accelerating that transformation and re-defining what some of these former suburbs into
hip local centres that are tied together by a growing transit system.
