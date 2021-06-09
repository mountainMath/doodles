---
title: Measuring Housing Affordability
author: Jens von Bergmann
date: 2016-09-14
categories:
  - Vancouver
slug: measuring-housing-affordability
tags: []
description: 'Affordable for whom?'
featured: 'sfh_price_2015.png'
images: ["https://doodles.mountainmath.ca/images/sfh_price_2015.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---


Housing affordability is a serious issue that deserves attention. Affordability is generally defined comparing incomes
to housing costs. And ideally also factoring in transportation cost, although that's seldom done and we will not attempt
today.

Recently we [took a detailed look at income data](http://doodles.mountainmath.ca/blog/2016/08/31/incomes/). Using what we
learned, together with our
[detailed data on the development of prices of single family properties in Vancouver](https://mountainmath.ca/assessment/split_map),
we turn to the never dying question of affordability of single family homes.
 
<!-- more -->
<a href="https://mountainmath.ca/assessment/split_map?year=2010" target="_blank"><img  src="/images/sfh_price_2010.png" style="width:50%;float:left;margin-right:10px;"></a> 
Let's go through the motions of how different choices in income data can lead to different stories. Some general choices of
what income to use is often pretty obvious. Others are more subtle and a matter of judgement. For simplicity we focus
entirely on the situation in 2010, because that's the last year we have detailed income data for the City of Vancouver
and we also have [detailed publicly available single family housing price data](https://mountainmath.ca/assessment/split_map?year=2010). 

When talking about housing, the starting point is to look at income of (private) households (as opposed to individual income).
We may also want to consider the owner-renter split in the region we are interested in. For simplicity we will skip this.

## Household Income
Households are as diverse as
dwelling types. If we write a story about single family housing, household income of all households is too broad to be
relevant. For example,
in the city of Vancouver there are about 75,500 single family lots, but 264,573 households. So at most 28% of households
can live in the main house on a single family lot. Taking the median household income makes no sense in this situation.
We need to narrow down the target group. In Calgary on the other hand,
59% of the dwelling stock is single detached (and there are more properties if we count the ones with suites like we
did for Vancouver), so in that case the assumption that the median household is looking to buy a single family home is
more reasonable. Although the median household probably won't be looking to buy the median single family home but a lower-priced one. 

## Family Income
So how should we measure the affordability of single family properties? That's not an easy question. A natural choice may
be to focus in on the 151,330 census families in Vancouver. Again, there are more than twice as many candidates as single
family properties. So maybe narrow it down even further an only look at the 88,515 census
families with children at home. Or the 63,790 couple families with children at home. Realistically speaking, even
going with couple families with children at home there just aren't enough single family properties to go around. Unless we
are willing to force out all of the roughly 45% of the occupants of the main house on single family lots that currently only have
1 or 2 people living in there. But overall, couple families with children is probably a better metric for affordability
for single family homes. Others will of course also buy single family homes, but maybe we will be less worried if
they can't afford one.

## Family with Children Income
To complete the example, in 2010 the median single family property cost $848,000 (average $1,133,000) and the median
couple family with children income in private households was $92,068 (average $123,252). 
That gives a dwelling value to income ratio of around 9.2, showing that the median single family property is not
affordable for the median couple family with children. By affordable we mean that with a 20% down payment the shelter
costs stay below 30% of pre-tax income, which requires a ratio of at most 6.6 assuming an interest rate of 3% and 25 
years amortization.

If we were to more realistically assume that the median income couple family with children were to look to buy a single
family property priced at the 10 percentile level of $606,100 we get a dwelling value to income ratio of 6.6, barely
squeezing in below our affordability cutoff. 

## Matching Income Quantiles with Housing Quantiles 
Another way to slice the data is to look at the household income distribution. By definition there are 37,750
single family homes more expensive than the median single family home. From the income distribution there are 44,215
households with income over $125,000. Taking $125,000 as our income we get a median dwelling value to income ratio of 6.8.
Only when throwing in some secondary suite rental income can we get to the
'barely affordable' 6.6 ratio. Adding rental income is double-dipping though, rental income should already be
included in our total income numbers. Assuming secondary suite rental income is correctly reported.  

## Using Median Household Income
Using the household income instead we would have gotten a ratio of 13.4, which is ridiculously unaffordable. But then
again, the notion that the median household should be able to purchase the median single family property
(or even a low-value single family property) is also ridiculous. 

<a href="https://censusmapper.ca/maps/37" target="_blank"><img  src="/images/local_affordability_index.png" style="width:50%;float:right;margin-left:10px;"></a> 
Somewhat more reasonable is to [compare household income to all housing](https://censusmapper.ca/maps/37),
not just single family. This still ignores that
half of the population in Vancouver is renting, but still can yield some interesting insights if one is interested in
more detailed spatial distribution of affordability and compare it to other cities.

Adding a scatter plot of local affordability index by proportion of owner households shows how in Vancouver, unlike
in comparable cities, the percentage of owner households is a weak determinant of local affordability. 

## What about Affordability Today?
This analysis assumes that all these households are comfortable to max out when buying a home and that there are no other
competing significant financial obligations like heavy student loans. And, just as a reminder, we were looking at 2010.
As of 2015 the price of the median single family home has increased 67%. We don't have 2015 income numbers for the City of
Vancouver (yet), but Couple Family median income for Metro Vancouver has increased 13% between 2010 and 2014, the last
year with available data. Extrapolating out that trend to 2015, and assuming that whatever other income metrics we were
looking at, we get an estimated income increase by 16%. So any affordability ratio is about 1.4 times worse in 2015 compared
to the 2010 ratio. What may have been 'barely affordable' in 2010 is clearly unaffordable in 2015.

So we used the detailed income data available for 2010 to get very good understanding of the affordability situation in 2010.
Then we used regional income trends to extrapolate that data to 2015 and matched it with 2015 housing data to get more up-to-date
estimates. This is generally an effective method that yields good results.
