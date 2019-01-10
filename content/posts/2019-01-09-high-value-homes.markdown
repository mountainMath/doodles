---
title: High-value homes
author: Jens von Bergmann
date: '2019-01-09'
slug: high-value-homes
categories:
  - cancensus
  - Vancouver
  - CANSIM
tags: []
description: "Who lives in Metro Vancouver's high-value homes?"
featured: 'shelter-cost-mortgage-1.png'
images: ["https://doodles.mountainmath.ca/posts/2019-01-09-high-value-homes_files/figure-html/shelter-cost-mortgage-1.png"]
featuredalt: ""
featuredpath: "/posts/2019-01-09-high-value-homes_files/figure-html"
linktitle: ''
type: "post"
---






High-value homes frequently make the news in Vancouver, most recently in the wake of the [extra school tax for homes valued over $3M](https://doodles.mountainmath.ca/blog/2018/02/28/extra-school-tax/). The province will have looked at the data before introducing the legislation, but none of this seems to have filtered out to the general public. So maybe there is a need to take a closer look using Census data.

The census is a couple of years old now, and things have changed a bit since then. Nonetheless, it should give a basic overview of who lives in high-value homes. Throughout we will only look at owner-occupied homes and ignore investors that don't live in their homes.

Dwelling values in the census are self-reported. That introduces some noise, in particular it is not clear how owners estimate their dwelling value. Some may look at market conditions at the time of the census, especially if they just bought the place. Others will rely on property assessments, which were one year out of date at the time of the census. And that year saw [spectacular gains](https://doodles.mountainmath.ca/blog/2017/01/18/bumper-year-for-thumb-twiddlers/).

With that in mind, we call a home **high value** if it's self-reported value in the 2016 census was **at least $2.5M**. To better zoom in on these homes, and to filter by metrics we are interested in, we are employing a custom tabulation. Unfortunately, we are not at liberty to share the raw data, which means this post is not reproducible without obtaining a similar custom tabulation from Statistics Canada. But the [code is available](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-01-09-high-value-homes.Rmarkdown) as always, which contains all the information needed on what variables the custom tabulation contains. Hopefully we will be able to share the underlying data at a later point.

To get started, let's take an inventory of high-value homes in Metro Vancouver.


<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-2-1.png" width="768" />

As a sanity-check the number of self-reported owner-occupied high-value homes in the City of Vancouver in the 2016 Census roughly matches the number of homes above $3M in the City of Vancouver [based on July 2017 assessed value](https://doodles.mountainmath.ca/blog/2018/02/28/extra-school-tax/). Which means that our $2.5M cutoff we are using is likely a bit too low as we should account for some homes being empty or rented out. But we aren't off by much.

Some of the grouping of municipalities is due to the way the custom tabulation was done, for this particular purpose it would probably be better to treat West Vancouver and Electoral A separately instead of mixing them with other municipalities. In particular the grouping of Electoral A with North Vancouver is unfortunate. The bulk of the area of Electoral A is indeed on the North Shore, but very few people live there and the vast majority of the population lives in the UEL and UNA near UBC. Grouping into the "Rest of Metro Vancouver" was informed by trying to avoid running into problems later on when slicing the data further.

For this we are focused entirely on owner households, and it is helpful to also understand what proportions of owner-occupied homes are "high-value".

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-3-1.png" width="768" />

West Vancouver stands out, but The City of Vancouver also has 15.7% of owner-occupied homes that are high-value.

## Types of homes
<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-4-1.png" width="768" />

As expected, the majority of high-value homes are single-family. Some condos also fall into this category (including land strata), but the fairly large portion of non-condo apartments is surprising on first view, the data counts 8,060 of these. To understand this we need to unravel the definition of "apartment" used here. This category is the sum of three census categories, Apartment with five or more storeys, Apartment with fewer than five storeys, and Apartment or flat in a duplex. The latter category is essentially units in a suited single family home, so these are owner-occupiers in homes that the census has identified as having a suite. (It does not mean that the suite is rented out, we know that [suites are the dwelling types most likely to show up as "empty" in the census](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/).)

## Mortgage
Next we look at how many of these homes carry a mortgage or require other regular payments like interest-only payments that are mandated on on many HELOCs.

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-5-1.png" width="768" />

This shows that roughly half of high-value homes carry a mortgage, slightly more in Richmond.

## Shelter-cost
Being mortgage-free does not necessarily means people are not stretched for shelter cost payments, but it certainly helps.

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/shelter-cost-mortgage-1.png" width="768" />

Indeed, the vast majority of owners without a mortgage can cover their shelter costs very comfortably. The same is not the case for households with a mortgage, and Richmond stands out with over half of households in mortgaged high-value homes spending over half of their income on shelter costs.

## Age of primary household maintainer

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-6-1.png" width="768" />


Older owners are much more likely to have no mortgage, although 19.9% of seniors do carry a mortgage or HELOC with regular payments.

## Household Type
To understand better how these high-value homes are used we look at their household type.


<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-8-1.png" width="768" />


48.1% of these are occupied by families with children, with another 16.8% complex households including multi-generational households. When looking at all owner-occupied homes we see a higher portion of one-person households, but the rest of the makeup is similar.


## Household income
We have already seen in the income-to-shelter-cost ratios that income must vary considerably. People in a $3M home with a $2M mortgage would look toward monthly mortgage payments around $10k. Add to that property taxes and utilities, we should expect a household income reaching $500k to stay below the fairly comfortable 30% of income on housing cutoff. Unfortunately our data only has $200k as the top bracket cutoff.

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-10-1.png" width="768" />



Owners with a mortgage have generally higher incomes, but not by much. And curiously this tendancy is reversed in Richmond, where owners with a mortgage tend to have lower household incomes.

Overall 58.6% of high-value owner-occupiers have household income over $100k, and 9.75% have less than $25k, with Richmond high-value owner-occupiers leaning heavier on the low side when it comes to income.

At this point we should fold in age groups of the primary household maintainer.


<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-12-1.png" width="768" />


We dropped the under 25 year old group as it was not large enough to give robust results. The top income bracket is the largest one in all age groups except for 25 to 34 year olds, where the bottom bracket is the largest. At the same time, all age groups have fairly large segments of income that is low in comparison to the high value of the home. Some of that may be explained by income and shelter data being offset by a year, by [income volatility](https://td-capa.s3.amazonaws.com/prod/default/0001/02/a5a362538f70b81df4ae6ea6d66e8171cbd444ca.pdf) and by income sources like capital gains that don't show up in census income numbers. Metro Vancouver residents declared $6.56 billion in capital gains income in 2016. This interpretation jives with [data from the 2011 NHS showing areas with high value homes registering high captial gains income](https://censusmapper.ca/maps/480#11/49.2387/-123.1444), but these possibilities are unlikely to explain all of the low-income households.

## Extra School Tax
When looking specifically at the impact of the Extra School Tax, we have often heard concerns about seniors, in particular seniors that might have a mortgage or HELOC against their home and that are already stretched for shelter costs. So let's consider seniors with a mortgage that pay 30% or more of their income on shelter before the extra school tax.

<img src="/posts/2019-01-09-high-value-homes_files/figure-html/unnamed-chunk-14-1.png" width="768" />


In total we have 1,200, seniors in high-value homes in Metro Vancouver that are shelter-cost burdened. That's 10.1% of all senior owner-occupiers in high-value homes and  1.56% of all high-value homes. Those proportions are small, but not trivial. These seniors might have to make use of the [property tax deferral](https://www2.gov.bc.ca/gov/content/taxes/property-taxes/annual-property-tax/defer-taxes) program.

In this context it is good to keep in mind that there are 27,665 seniors in Metro Vancouver that are renting and spending more than 50% (not just more than 30%) of income on shelter, that's 23 times the number of seniors owning high value housing with a mortgage that pay 30% or more of income on shelter. And they have no option to defer rent increases or sell and cash out of their home.




That rounds off the overview of high-value owner-occupiers. As mentioned at the beginning, unfortunately I am not able to share the data for this post. The [code is available](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-01-09-high-value-homes.Rmarkdown) as usual in case people have question on details or want more information on the variables used. Hopefully we will find time to take a look into other aspects of the data sometime in the near future.




