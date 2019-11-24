---
title: Canadian Housing Survey
author: Jens von Bergmann
date: '2019-11-23'
slug: canadian-housing-survey-a-first-look
categories:
  - CANSIM
  - rental
  - Vancouver
  - Toronto
tags: []
description: "Taking a first look at the new Canadian Housing Survey data"
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/reasons_for_move-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
math: true
blackfriday:
  fractions: false
  hrefTargetBlank: true
---




The long awaited first batch of data from the Canadian Housing Survey came out yesterday. The Canadian Housing Survey (CHS) is a new survey that aims give a better idea of well housing needs of Canadians are met.



Right now there are four tables publicly available, and we will give a quick tour of what's out there, with a focus on Metro Vancouver, Toronto, Montréal and Calgary. 

This post is meant as a quick overview of what's available right now, the code is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-11-23-canadian-housing-survey-a-first-look.Rmarkdown) for anyone that wants to explore this further.



## Dwelling and neighbourhood satisfaction
The first table looks at satisfaction with of households with the dwelling units and neighbourhood they live in.

<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-3-1.png" width="768" />

In this comparison, overall satisfaction with the dwelling is highest in Montreal and lowest in Vancouver. Satisfaction is generally higher in single-detached homes. 

<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-4-1.png" width="768" />

As one would expect, satisfaction is higher for owner households, and renters in subsidized housing have generally higher satisfaction with their dwelling units than renters in market housing.


It also gives a view at satisfaction with of households with the neighbourhood they live in.


<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-5-1.png" width="768" />

Households in Montréal are on average most satisfied with the neighbourhood they live in while those in Toronto are least satisfied with their neighbourhood.

<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-6-1.png" width="768" />

Again, owners show higher satisfaction with their neighbourhood compared to renters, but the situation for renters is reversed from dwelling satisfaction, with renters in market housing being in general more satisfied with their neighbourhood than those in non-market housing. 

## Waitlist status
<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-7-1.png" width="768" />

Predictably, only a very low share of owner-occupiers are on a wait list for social or affordable housing, and households already in subsidized housing have the highest share.

## Housing suitability and adequacy
<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-8-1.png" width="768" />


<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/unnamed-chunk-9-1.png" width="768" />




## Reasons for moving
The most exciting table is the reasons for the most recent move in the past 5 years, if the household moved. We have had that data form the US for a long time, but it was sorely missing in Canada.



<!--Alberta has the overall highest mobility rates. To better understand the individual reasons for moving we can split out each category separately.-->

<img src="/posts/2019-11-23-canadian-housing-survey-a-first-look_files/figure-html/reasons_for_move-1.png" width="768" />


The graph gets messy and people can report multiple reasons, but there are a few high-level takeaways.

* British Columbia has the highest shares of households forced to move by a landlord, a bank or other financial institution or the government.
* The most frequent reason for moving across all of our regions is for a larger or nicer dwelling, followed by moving to a better location.
* In Alberta people are becoming new homeowners at higher rates than in the other regions considered.

## Upshot
It's great to see this data finally making it out there, and hopefully micro data will become available too. It will take some time to weed through this in more detail, this can serve as a starting point. As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-11-23-canadian-housing-survey-a-first-look.Rmarkdown) for anyone to grab to reproduce or to jump-start their analysis.


