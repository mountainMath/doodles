---
title: A First Look At Vancouver Housing Data
author: Jens von Bergmann
date: '2017-10-26'
slug: a-first-look-at-vancouver-housing-data
categories:
  - cancensus
  - CensusMapper
  - Vancouver
tags: []
description: 'Making sense of the new census data.'
featured: 'region_affordability-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/region_affordability-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html"
linktitle: ''
type: "post"
---

The 2016 census data on housing got released yesterday. We had the data imported and available on CensusMapper by 10am yesterday morning, after a slight delay due to the 40GB SSD space on the server running out and requiring additional disk space to be mounted for the data import. Lots of people have already used CensusMapper to dive into the data, but I had only just now found some time to take a look myself. This is a descriptive overview as a first step toward understanding what is happening. As always, the code for the analysis and graphs is embedded in this post and the underlying R notebook can be [downloaded from GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-10-26-a-first-look-at-vancouver-housing-data.Rmarkdown).

# The big question
One of the most anticipated parts of the release was data on the *shelter cost to income ratio*. The key affordability measure in census data. The *shelter cost to income ratio* is computed at the individual household level, which sets it apart from most other affordability measures that operate on aggregate data. The measure published in the census is the proportion of the households that spends more than 30% of their (pre-tax) income on running shelter costs, and the data can also be split up for owner and tenant households separately.

And the big surprise was that the affordability in the City of Vancouver improved by this measure. Yes, you heard that right, affordability improved when compared to 2006 or 2011. That had a lot of close observers perplexed as it seems to contradict the experience many people have on the ground.

Cases like this exemplify why careful analysis is needed.

# Improving Affordability
To start things off let's look at the numbers. We will use `cancensus` to load the data. It's a little cumbersome since we have to request the data separately for each census year. Sadly don't have the resources available to enable querying variables across several census releases.



<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-2-1.png" width="672" />


At first glance it looks like the share of owner and tenant households spending more than 30% of their income on shelter cost has increased between 2006 and 2011, and then dropped off by 2016. But we should remember that the 2011 data comes from the NHS, and unlike when dealing with the NHS income data that [performed admireably well for larger municipalities](https://doodles.mountainmath.ca/blog/2017/09/29/a-retrospective-look-at-nhs-income-data/), there is no reliable administrative data for this available that StatCan could have used in their post-processing to counter-act the NHS non-return bias as it was able to do for pure income data by comparing it to aggregate CRA data. It is quite possible that the 2011 NHS numbers somewhat over-estimate the proportion of households not meeting this affordability metric.

But even ignoring the 2011 data, there has been a slight drop in both owner and tenant households spending 30% or more of their pre-tax income on running shelter costs. Which is really remarkable.

As we dig deeper into this it is important to recall that just looking at median incomes is not sufficient for understanding affordability questions. We have to look at the change in the whole income distributions, [we have done in detail a month ago](https://doodles.mountainmath.ca/blog/2017/09/26/evolution-of-the-income-distribution/). We have seen that Vancouver lost households in all income groups below $60,000, and almost all gain occured in the $100,000 and over income bracket.

# A deeper look at 2016 numbers
To better understand how to interpret this we first look at some important contextual variables. 

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-3-1.png" width="672" />

Both owner and tenant households have grown over the years, but the number of tenant households made a jump. This means that the relative composition of owner and tenant households has changed, with proportionally more households renting now. This could skew the income of tenant households higher.

Next we look at subsidized housing, which is only available for the 2011 and 2016 years.
<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-4-1.png" width="672" />

We see that the share of tenant households in subsidized housing went. The overall number of subsidized units grew slightly, but to the number of tenant households grew faster. Overall this is unlikely to have a meaningful impact to explain the improvement in affordability we see in the data.

Lastly we compare the change in the median multiple metric for owner and tenant households combined.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-5-1.png" width="672" />

This development in this graph, which is using a variant of the often cited median multiple metric, seems to contradict the shelter cost to income ratio in the first graph. Although this does not split out owner and tenant households separately, this seems to indicate that the answer to our question lies in a more detailed look at the income and rent distributions that is obscured by only focusing on medians.

# Metro Vancouver
To get more spatial context we look at the region more broadly.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/region_affordability-1.png" width="672" />

We see that affordability by this measure hasn't gotten better in all municipalities in the region. Even if we ignore the 2011 NHS data, affordability decreased significantly in Coquitlam, Burnaby and Richmond.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-6-1.png" width="672" />

Looking at the split by tenure we see that the share of tenant households is up everywhere 2006 to 2016 except for Burnaby. The start contrast in share of tenant households in Vancouver compared to the rest of the region also becomes very clear.

Next we compare the share of tenant households in subsidized housing.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-7-1.png" width="672" />

This seems to indicate that the difference in affordability for tenant households can't be explained by different ratios of affordable housing.

Lastly we compare the average shelter cost to median income ratio.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-8-1.png" width="672" />

Again, the development of the the median multiple metric is inconsistent with the shelter cost to income ratio computed at the individual level.

# Shelter Cost, Income, Affordability, Tenure and Household Types in Metro Vancouver
We want to gain a deeper understanding what affordability looks like when separated out by different variables in Metro Vancouver. Stats Canada has a custom tabulation available that can do exactly that.



At the CMA level we can slice the data in many interesting ways. First we stratify the data by income groups and detailed tenure information.
<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-10-1.png" width="768" />

As expected, affordability improves with growing income. When keyed by income, tenant households fair better than owner households for incomes above $40,000, although owner households have a larger share falling below the 15% cutoff with the exception of the bracket over $100,000. Owner households are not uniform though, when split by those having a mortgage and those that don't it becomes apparent that owner households with a mortgage are the most strained group.

Next we look at the data by shelter cost and tenure.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-11-1.svg" width="1152" />

We see that affordability generally decreases with rising shelter costs, although this relationship seems less clear for subsidized tenant households.


Lastly we key the data by household type.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-12-1.png" width="768" />

We see a fairly uniform picture, with one-person, lone-parent and non-census-family households struggling a little more and multiple census family households showing higher levels of affordability. This may well be due to coops being generally classified as multi-family households.

# City of Vancouver



Let's focus back to the municipal level and understand how the makeup of households by tenure and and household type influences affordability. We changed the colours to avoid confusion that the 50% cutoff scale is not available in this data.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-14-1.svg" width="1152" />

When split by household type the data very much reflects the general situation in Metro Vancouver.


Comparing across municipalities in Metro Vancouver we can see how affordability breaks down by detailed tenure type.

<img src="/posts/2017-10-26-a-first-look-at-vancouver-housing-data_files/figure-html/unnamed-chunk-15-1.svg" width="768" />

Again, the patters are quite similar across the region when split by detailed tenure.

# Takeaway
From this descriptive overview there are no clear indicators why the affordability metric for Vancouver improved. The increase in tenant households, and with it possibly an improved mix of high income household among tenants may have contributed.

The discrepancy when comparing to the median multiple metric seems to indicate that the solution to the paradox lies in a more careful analysis of the development of the income and rent distributions, as well as how these two are matched up. 

If I get around to it I might try and unpack other aspects of this story. If anyone else would like to pick this up, the R notbook that built this [can be found on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-10-26-a-first-look-at-vancouver-housing-data.Rmarkdown).
