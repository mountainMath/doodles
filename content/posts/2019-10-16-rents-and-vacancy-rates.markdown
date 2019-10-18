---
title: Rents and vacancy rates
author: Jens von Bergmann
date: '2019-10-16'
slug: rents-and-vacancy-rates
categories:
  - cmhc
  - rental
  - Vancouver
tags: []
description: "Adding some context to vacancy rates by rent segment."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/vacancy_by_quintile-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
draft: false
blackfriday:
  fractions: false
  hrefTargetBlank: true
---




This post responds to a misconception about rental housing that has been making the rounds. Our housing crisis is fundamentally a rental crisis, so it’s important to keep the numbers straight so that we can better focus our energy and resources. 

The misconception originate from the [2019 Vancouver Housing Data Book](https://vancouver.ca/files/cov/2019-housing-vancouver-annual-progress-report-and-data-book.pdf). The data book is a huge effort to compile and has a host of valuable information. Vancouver has been doing this for the second year now, and it is successively getting better. But there are bound to be some hiccups on the road, and these are two of them.

At issue here is not the data presented, the data is correct. But the choice of data, and how it is presented, lends itself to misconceptions.

## Expensive rental units are vacant, (so we don’t need more)

This stat comes from [page 183 of the Vancouver Housing Data Book](https://vancouver.ca/files/cov/2019-housing-vancouver-annual-progress-report-and-data-book.pdf#page=183). It shows that the vacancy rate for apartments renting over $3,750 is 8.7%. That's out of the range of *reasonable vacancy* and at the bottom end of what the [Lincoln Institute of Land Policy considers a *Moderately High Vacancy*](https://www.lincolninst.edu/sites/default/files/pubfiles/empty-house-next-door-full.pdf#page=14). At that vacancy rate Canadian data shows that [rents are sure to drop](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/).  By Vancouver standards, that vacancy rate is astronomically high. But that's not the experience people have on the street. So what gives?



The key context for this number is that the is the $3,750 cutoff is [the 99.8 percentile rent level in the city](https://vancouver.ca/files/cov/2019-housing-vancouver-annual-progress-report-and-data-book.pdf#page=185), or roughly the 116 most expensive units.



Looking at the top 99.8 percentile is probably not very informative. Moreover, it's generally a good idea to at least slice the data by bedroom type, and if possible also by location. Let's take a look at rent quintiles by bedroom types in the City of Vancouver. That is we divide the purpose-built rental stock by bedroom type into five equally sized groups ordered by rent and check the vacancy rate in each of these groups.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/vacancy_by_quintile-1.png" width="768" />

The vacancy rate increases with the quintiles, with more expensive units being more likely to be empty. There are a number of reasons for this. The pool of people considering renting an expensive unit is naturally somewhat smaller than the pool of people considering to rent a unit priced in the middle quintiles, as there are fewer people able to pay those rents. But in Vancouver there are two other drivers that are more important for explaining the higher vacancy rates in the top quintile:

* Rent control leads to occupied units renting on average at below-market rents. Because of vacancy decontrol that changes the instant the unit turns vacant, and the "rent" for the vacant unit, that is the advertised rent, will be much higher than what the unit previously rented for. A while back we [looked into this in detail](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/). This means that vacant units will have higher rents than occupied ones, and will accordingly skew toward the higher quintiles. 
* When new buildings come online, it takes time to fully tenant the building. This is analogous to [new condo buildings taking time to fill in](https://doodles.mountainmath.ca/blog/2017/04/03/joyce-collingwood/), although the process is much faster in rental buildings. But it still takes time, especially in a rent controlled environment where landlords are willing to wait a little longer to fill the units rather than lower rents that will get locked in. And new units are generally more expensive and likely to fetch rents in the higher quintiles.

Looking at the previous years, we see that there has been some variation in the vacancy rates across quintiles, with 2017 mirroring 2018 higher vacancy rates in the top quintile within each bedroom category.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-4-1.png" width="768" />

We also notice quality concerns that have lead to removal of vacancy rates for 3 bedroom units in various quintiles and years, indicating that we probably should be careful interpreting the 3 bedroom vacancy rates.




To put that into relation to the numbers from the Vancouver Housing Data Book we take a look at the rent levels that break the rents into quintiles, and how these have evolved.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-6-1.png" width="768" />

We again notice quality issues in the 3 bedroom rent cutoffs, due to the low number of 3 bedroom units in the universe. The lower cutoff of the top quintile 3 Bedroom rent in 2018 was $3,300, a bit below the overall 99.8 percentile cutoff of $3,750 reported in the Vancouver Housing Data Book.

In summary, it seldom makes sense to report rent levels without first slicing at least by bedroom type. And it is more useful to slice by smaller groups like quintiles instead of reporting values for the top 0.2% rent level.

## Geographic distribution

Next to bedrooms, geography is the other important variable to consider. Most renters care about roughly where in the city they are renting. For example, here are the vacancy rates for 1 Bedroom apartments in the first rent quintile by survey zone. The rent quintiles are taken over the entire City of Vancouver stock.


<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-8-1.png" width="768" />

We see a large variation in the vacancy rate of 1 Bedroom units in the first city-wide rent quintile across survey zones. Part of that volatility can be explained by some survey zones having only relatively small number of units in the first rent quintile, as the following map shows.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-9-1.png" width="768" />

The number of units is suppressed in some regions for some years due to quality issues. Marpole has the highest number of 1 bedroom units in the lowest rent quintile, whereas the downtown peninsula has relatively few, given the large number of 1 bedroom units there.



To confirm this last point, we plot the total number of 1 Bedroom units in each survey zone.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-11-1.png" width="768" />

The share of the 1 bedroom units that are in the first rent quintile complete this picture.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-12-1.png" width="768" />

On the flip side, where can plot the share of 1 bedroom units in the top rent quintile in each regions.

<img src="/posts/2019-10-16-rents-and-vacancy-rates_files/figure-html/unnamed-chunk-13-1.png" width="768" />


This underscores the relative attractiveness of central (and West Side) as opposed to Marpole (and East Side) locations..


## Upshot
Looking at the very extremes of the rent quintiles is likely not going to generate much insight, it will be clouded by data quality issues and not have much relevance for broader questions. As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-10-16-rents-and-vacancy-rates.Rmarkdown) for those interested playing further with the numbers. The CMHC Rms custom extract is [also available on GitHub](https://github.com/mountainMath/doodles/raw/master/data/vacancy-rate-universe-by-quintile-apt-city-vancouver-csd-2014-2018.xlsx).




