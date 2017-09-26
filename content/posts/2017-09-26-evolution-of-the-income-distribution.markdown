---
title: Evolution of the Income Distribution
author: Jens von Bergmann
date: '2017-09-26'
slug: evolution-of-the-income-distribution
categories:
  - CensusMapper
  - cancensus
  - geeky
tags: []
description: "Digging deeper into the evolution of incomes"
featured: '2005-2015_rel_change-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2015_rel_change-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/"
linktitle: ''
type: "post"
---


Vancouver's median household income has grown. But there are many ways how this could have happened. We want to take a deeper look to understand how the income distribution changed. To that end, we will investigate the change in the number of people in each income bracket between the census years. And put that into context to what happened in the region and Canada wide.

This is a mixture of what we have done when comparing the [size of age groups](https://censusmapper.ca/maps/745) between censuses. But it also has a bit of the flavour [*net migration*](https://doodles.mountainmath.ca/blog/2017/05/16/lifeblood/) that looks at the inflow and outflow of people by age groups. It really is a mixture of the two. People do get pay rises and households move up income brackets. Or one person loses their job and the household income drops. But the bigger movements are from new households coming into a region, or forming in the region, and existing households leaving the region, or splitting up. Unfortunately we won't be able to separate these two processes without a custom tabulation.

To track income brackets across censuses we will resolve to using nominal incomes, not inflation adjusted ones. Adjusting this kind of analysis for inflation requires more time than our evening blog post budget allows for.

One caveat is that household incomes can be hard to compare across regions. Household composition plays a big role and can trick us into misleading comparisons as we have [pointed out previously](https://doodles.mountainmath.ca/blog/2017/09/14/income-a-first-look/) where we explained that the only reason the City of Vancouver has lower median household income than the City of Toronto is the different household composition. This means we should also track the the number of 1-person households across regions and time as that's the biggest factor that can skew household incomes.

As usual, the code for the analysis is embedded in this post and can be accessed [on Github](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-09-19-evolution-of-the-income-distribution.Rmarkdown) for anyone interested to replicate, re-run for a different region, correct or expand on this analysis. We do suppress most of the code for readability, don't hesitate to grab the full R notebook from GitHub to see the details. 

Using the [`cancensus` package](https://github.com/mountainMath/cancensus) we pick the 4 most populous municipalities within Metro Vancouver to compare the net migration by income brackets.

```r
#devtools::install_github("mountainmath/cancensus")
library(cancensus)
cma <- list_census_regions('CA16') %>% filter(level=='CMA', name=='Vancouver')
csds <- list_census_regions('CA16', use_cache=TRUE) %>% 
    filter(level=='CSD', CMA_UID==cma$region) %>%
    top_n(4,pop)
regions=as_census_region_list(rbind(cma,csds))
```




As a first step we graph how the composition of households by common income brackets changed over the years.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/distribution_overview-1.png" width="960" />

What stands out is the significant growth in the proportion of households with income over $100,000 throughout the region, much more than would be eaten up by inflation, which amounts to about 9% over each of these 5 year inter-census time frames. 

## Household Composition

Before we dive into more detail we take a look at household composition. The following graph shows the shares of 1 person households in these regions, as 1 person households generally have significantly lower incomes than 2+ person households. This effect can be quite sizable, in the City of Vancouver the median 1-person household income was $38,449 while the median 2+ person household income was $89,207. 
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/one_person_households-1.png" width="768" />

We see that the City of Vancouver has a significantly higher share of 1-person households, which will skew the income distribution downward when compared to other regions. Richmond has seen a marked rise in the share of 1-person households from 2011 to 2016, which puts downward pressure on the income growth for that time frame.




## Absolute Change in Households by Income Bracket
We will first take a look at the absolute change in households by income bracket. Looking at the absolute net change offers some information on the profile of marginal household between censuses in each region.


Taking the income brackets that are common in the 2005 and 2010 income data we get.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2010_total_change-1.png" width="960" />

In the 2005-2010 numbers we see Vancouver take the lead in dropping households in each of the income brackets below $60,000, while the other regions show more diversity there. What stands out is that almost all of the growth happened in the top income bracket of over $100,000.

Here we should keep in mind that while the 2010 NHS income data is overall quite robust for larger geographic regions, it may have some issues at some of the individual income brackets. Looking at the 2010 to 2015 time frame that has somewhat finer brackets available we see that this trend is consistent.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2010-2015_total_change-1.png" width="960" />

We have finer data for the 2010-2015 time frame. The numbers have the other regions follow Vancouver's lead in shedding households with income below $50,000. The common income brackets offer a little finer resolution at the top end, where again to top bracket dominating and households with income over $150,000 account for most of the net growth.

For completeness, also consider the change over the full 2005 - 2015 time frame that skips over the 2010 NHS numbers.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2015_total_change-1.png" width="960" />

Here we can clearly how CoV lead the region in dropping households in all income brackets below $50,000, with majority of added households in the $100,000+ bracket. 

The median income rises if we add more people above the old median income that we did below. The median income rises we have seen were substantial, and here we see that the majority of the growth didn't just happen a little above the median income line, but right at the top income bracket that we are able to track. 



## Normalized Change in Households by Income Bracket
To better understand how the makeup of households by income bracket is changing we normalize the change in each of these income brackets so that the sum of the net change, i.e. the total change in households, equals 1. All the regions we are considering have gained households, so we won't run into trouble by doing this. This gives a better way to compare the changes across regions with different total change in households.

<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2010_rel_change-1.png" width="960" />

Viewed this way, it really brings out just how much the income brackets in City of Vancouver has been changing.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2010-2015_rel_change-1.png" width="960" />

In the 2010 to 2015 time frame that change is a little more muted.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2015_rel_change-1.png" width="960" />

But when looking over the whole time frame from 2005 to 2015, jumping over the 2010 NHS numbers, we see how Vancouver stands out in the region in shedding households below $50,000 and gaining households above $100,000. In fact, the normalized change in households in the above $100,000 bracket is larger than 1, meaning that that bracket gained more households than the total change growth in households between these years.

## Other Regions
How does this compare to the rest of BC? To put this into context, let's look at BC and it's top four CMA, as well as all of Canada. As there is a large variation in the total gain in households will focus on the normalized change only.

```r
canada <- list_census_regions('CA16') %>% filter(level=='C')
pr <- list_census_regions('CA16') %>% filter(level=='PR', name=='British Columbia')
cma2 <- list_census_regions('CA16') %>% filter(level=='CMA',  PR_UID==pr$region) %>% top_n(4,pop)
regions=as_census_region_list(do.call(rbind,list(cma2,pr,canada)))
```








## Normalized Change
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2010_rel_change2-1.png" width="960" />

<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2010-2015_rel_change2-1.png" width="960" />

<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2005-2015_rel_change2-1.png" width="960" />

Looking at the normalized change for these time periods, we see that Metro Vancouver overall fits in quite nicely with broader trends. It is interesting to see that Abbotsford - Mission shows stronger growth in the top bracket than Metro Vancouver.

## How about Inflation?
Adjusting for inflation and comparing the result is tricky business, and we will leave that for another blog post. There are a variety of ways one could go about doing this, but all require some sort of assumption on the income distribution within each of these brackets. Probably the cleanest way to do this is to fit continuous distribution functions to the income bracket data. These can then easily be adjusted for inflation and subtracted to see how these distributions changed.

## Housing Affordability
How does this relate to housing affordability? The unadjusted (for inflation) numbers we have been working with lend themselves well to that comparison if we use unadjusted house prices or rents as a comparison. Or the HPI, which by definition is not adjusted for inflation. 




Changes in prices and rents are negotiated by the marginal buyers/renters. And those are overwhelmingly from the top income bracket. We don't know how the incomes are distributed within the open-ended top bracket. Looking at the 2015 income distribution we can infer that it skews high, the top $200k+ income bracket for 2015 contained 
23,310 people, or 
53% of the $150k+ bracket. This highlights that using median incomes to explain changes in the real estate market is too simplistic, and that incomes do play some role in the Vancouver real estate market. Both, in supporting prices as well as in segregating households. It lead some credence to the notion that lower income households feel the pressure to move out of the central region, and are being replaced by higher income households. We don't see the same dynamic at the metropolitan level, it still fits in well with movements in the rest of BC and Canada.

However, while these income gains are substantial, it is also clear that they simply cannot explain the rapid rise of Vancouver's real estate on their own. A quick comparison with [incomes needed to afford the luxury subset of our housing market consisting of single family homes](https://doodles.mountainmath.ca/blog/2017/09/18/zoned-for-who/) shows that the incredible rise in home prices in Vancouver can't be explained by incomes alone, even when splitting things up by movement in individual income brackets. It is inescapable that wealth plays a significant role in this market, at the very least at the upper end of it.

We will have to wait for the rest of the 2016 data to trickle in to dig down further.

## Update [for Mark](https://twitter.com/MarkAllerton/status/912791577067610112)
We re-run the analysis for the 2010 - 2015 adjusted after tax family income deciles. The advantage of this data is that it looks at *adjusted* income so the income is adjusted by family size. For details refer to the [census dictionary](http://www12.statcan.gc.ca/census-recensement/2016/ref/guides/004/98-500-x2016004-eng.cfm), essentially this takes into consideration that larger families need larger incomes to get by. Looking at deciles is a relative measure of how the composition by incomes changes compared to how things changed overall in Canada. The main disadvantage is that this data is not part of the standard release for 2006 so some degree of caution is advisable. The regions we chose are large enough that the NHS income numbers should be reasonably robust.



With a bit of copy-paste we can see how this pans out in Vancouver.
<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2010-2015_total_decile_change-1.png" width="960" />

Looking at the change in the total number of people per adjusted income decile we see that again Vancouver stands out with high gains in the top bracket and a significant drop in the second decile.

<img src="/posts/2017-09-26-evolution-of-the-income-distribution_files/figure-html/2010-2015_rel_decile_change-1.png" width="960" />

Normalizing the data so that the total net change adds to 1 for each region emphasizes the trends we observed in the data. Especially Richmond is curious with a large increase in the bottom decile and a drop in the top decile (and also the two below that), a patterned that is, to a lesser extent, mimicked by Burnaby.
