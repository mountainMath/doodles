---
title: No shortage in Housing BS
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2022-01-31'
slug: no-shortage-in-housing-bs
categories:
  - affordability
  - cancensus
  - CANSIM
  - CensusMapper
  - Empty Homes
  - newsfail
  - Vancouver
tags: []
description: "There is a special brain worm making the rounds that Vancouver supply has been outstripping demand. Which is obvious nonsense, but maybe still deserves a detailed takedown."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/01/31/no-shortage-in-housing-bs/index_files/figure-html/pop-change-decomposition-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2022/02/01/no-shortage-in-housing-bs/" target="_blank">HomeFreeSociology</a>)</i></p>



Say you built a bunch of housing in a cornfield in the middle of rural Iowa. Would people come to live in it? Maybe. But probably not. Let's imagine the same scenario scooted over to Vancouver. The conditions for our little field of dreams have changed. Here we're pretty comfortable predicting: [if you build it, they will come](https://en.wikipedia.org/wiki/Field_of_Dreams). Housing limits population growth here in a way it does not in rural Iowa.

![<Field of Dreams>](https://c.tenor.com/8DxYcrLiGJUAAAAd/field-of-dreams-baseball.gif)

But maybe we're wrong?

There is a special brain worm making the rounds that we somehow built a bunch of housing in Vancouver and then no one came to live in it. This despite decades of [extraordinary low rental vacancy rates](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/), and successive reports from an [Empty Homes Tax in place since 2017](https://vancouver.ca/home-property-development/empty-homes-tax.aspx) and a [Vacancy Tax since 2018](https://homefreesociology.com/2021/11/22/three-years-of-speculation-and-vacancy-tax-data/), both of which consistently demonstrate very few empty dwellings. 

So how would one, if one were so inclined, try to drum up support for such a position? Here is a good example:


<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Ten years roughly 55 thousand new units built in City of Vancouver. <a href="https://t.co/oQUx9yGF9S">https://t.co/oQUx9yGF9S</a><br><br>Ten year population growth roughly<br>55 thousand persons<a href="https://t.co/cLaPm22IEz">https://t.co/cLaPm22IEz</a><br><br>Supply double demand with average household size of 2<br><br>Meanwhile prices doubled</p>&mdash; Patrick Condon (@pmcondon2) <a href="https://twitter.com/pmcondon2/status/1487549637812633601?ref_src=twsrc%5Etfw">January 29, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The claim is that during 10 years roughly 55 thousand new units were built in the City of Vancouver, while the population grew by roughly 55 thousand people. Taking roughly 2 people per unit, that means we got twice as many units as we needed. That means, so the argument goes, that supply is double the demand, but prices still doubled. So this clearly shows that supply and demand don't matter when it comes to housing, right?

No. This is a **load of [data bullshit](https://www.callingbullshit.org)** that has been unleashed upon us. But if you bear with us, we will take this data bullshit as fertilizer and endeavour to grow from it something more useful. 

## TL;DR
For the purpose of a quick summary, here are all the elements that have gone into the data bullshit:

* The mixing of two different time frames, years 2010 through 2019 for new buildings and between the 2006 and 2016 censuses for population change.
* The use of building starts, when no one can live in a start. If anything, the relevant metric should be completions.
* The overlooking of demolitions, when no one can live a demolished unit.
* The ignorance of declining household size, necessitating additional units even just to keep population constant.
* The neglect of fluff. There needs to be some extra fluff in the housing market. If there aren't any extra vacant units it becomes logistically impossible for people to move. (And the more differentiated the housing market is, the more vacant units are needed.)
* The equating of population growth with demand. Population growth reflects only the part of the demand that managed to come to or stay in Vancouver, but it ignores the money they express their demand through as well as all the people that have been pushed out by not having enough of it.




## Population growth of 55 thousand 


This stat is pretty simple, and the tweet's author, Patrick Condon (Prof. of Landscape Architecture and all-around commentator-at-large), vaguely points to a [City of Vancouver report](https://vancouver.ca/files/cov/social-indicators-profile-city-of-vancouver.pdf), which cites census population counts, which has the City of Vancouver population changing by 53,445 between the 2006 and 2016 censuses. 

## 55 thousand new homes
This numbers is sourced from a [PDF posted on BC government website detailing aggregate annual housing starts for BC cities for the ten years 2010 through 2019](https://www2.gov.bc.ca/assets/gov/data/statistics/economy/building-permits/econ_housing_starts_urban_communities.pdf) These are just taken from the CMHC Scss, which makes it easier to get to the raw numbers.




<img src="{{< blogdown/postref >}}index_files/figure-html/starts-wrong-timeframe-1.png" width="1200" />

Aggregating to annual starts we see the sharp dip during the crash in 2009 and the bumper year in 2016 in response to rising prices. For reference we shade the ten years 2010 through 2019 that Condon picked out and aggregate the counts.

## Starts vs Completions
Starts are a poor metric for comparing to population growth, nobody can live in a building start. Let move on to look at completions, which is a much better metric for this and is readily available. 


<img src="{{< blogdown/postref >}}index_files/figure-html/completions-wrong-timeframe-1.png" width="1200" />

So we are left with about 50k newly constructed units. 

## Matching timeframes
But the time frame is off. Condon was using population numbers between 2006 and 2016 censuses, we should look at completions in that timeframe. We can think about what month we want to break the time series, but that won't change the numbers much. For simplicity we just take completions for the years 2006 through 2015.

<img src="{{< blogdown/postref >}}index_files/figure-html/completions-coorect-timeframe-1.png" width="1200" />

For that timeframe the total number of completions was around 42k. Breaking it out by type of dwelling we also notice that around 8 thousand of those completions were single detached, many of which which are likely one-for-one replacements. This points the issue that completions isn't really the right metric to use to compare against population growth, we need to account for demolitions and take net new units.

## Gross vs net new units
Unfortunately we don't have good data on demolitions, but there is some and we can fold that in. 



<img src="{{< blogdown/postref >}}index_files/figure-html/completions-demo-combo-1.png" width="1200" />

This leaves us with 33,217 completions net of demolitions. This is only a rough estimate, demolitions are prone to under-counting, and this does not account for conversions or de-conversions.

We can plot the quotient of demolitions to completions to better understand how these two relate.

<img src="{{< blogdown/postref >}}index_files/figure-html/completions-demo-ratio-1.png" width="1200" />

This tells us that as a heuristic for the City of Vancouver we should expect about 20% of completions to replace demolitions, and 80% of gross completions amounting to net new dwellings.


## Just use the census for both population and dwellings counts


Ultimately we should probably just go back to the census, which has estimates for dwelling units for exactly the timeframe we need. The census counted 35,614 more private dwelling units in 2016 than in 2006. This differed from our above estimate mostly because of problems with tracking demolitions, but also with failure to account for conversions and deconversions, as well as re-classifications of dwelling units in the census. 

## Relating population to dwelling change

Now that we have net counts of population and dwellings, we need to combine these two. The coupling depends on how people group up into households. For this kind of analysis it suffices to just look at the average household size, so the total population divided by the total number of households. But some dwellings are (necessarily) unoccupied as explained up top, so this gets complicated. We will have to take this slowly.

The above numbers leaves us naively with a net ratio of 1.5 net new people per net new dwelling unit. But what does that mean?

Before we move on, there is another problem. The census, as well as the construction numbers we have been using, only counts private dwellings, which excludes things like nursing homes. Which means we should not use the total population change, but only the change of population in private dwellings, which was 49,225 and brings our ratio to 1.38. (We will ignore the rabbit hole with dwellings having been [re-classified from private to collective between these censuses](https://doodles.mountainmath.ca/blog/2018/02/08/neighbourhood-level-census-data/).)



But what does this number mean? The average households size in the City of Vancouver in 2006 was 2.25, so have we been building too many dwellings? Not really. The average household size dropped to 2.18 by 2016. Which may not seem like much of a difference until one realizes that this change in household size means that if we had not built any extra dwelling we would have seen a population loss of 17,631! This effect can be seen by [looking at longer census timelines at fine geography, where for example much of the West Side of Vancouver has lost population](https://doodles.mountainmath.ca/blog/2019/06/15/census-custom-timelines/). That alone increases the population we effectively need to accommodate by new buildings by 36%.

We can take this calculus a step further and [break up the change in population into three factors](https://doodles.mountainmath.ca/blog/2017/02/10/2016-census-data/):

* population change due to a (net) change in dwelling units,
* population change due to a change in household size,
* population change due to a change in dwellings unoccupied by usual residents.

The latter of which can be split up into a change in dwellings that are split further into a change in dwellings that are occupied by temporarily present residents, for example students or seasonal workers, or change in truly unoccupied dwellings. We also made an [interactive map to visualize these components separately for the 2011 to 2016 timeframe](https://censusmapper.ca/maps/988).

This accounting identity allows us to better understand why population changed.

<img src="{{< blogdown/postref >}}index_files/figure-html/pop-change-decomposition-1.png" width="1200" />

If household size and share of unoccupied dwellings had remained constant, then Vancouver would have gained almost 75k people over this timeframe. But household size shrank, leading to a loss of 20k people. The share of dwelling units not occupied by usual residents also increased, leading to an additional loss of 5k people.

## Focusing in on dwellings not occupied by usual residents

So what all of this comes down to is the population loss due to an increase in the rate of dwelling units not occupied by usual residents. Now we at least have the numbers right, but this still requires some thoughtful analysis as we have learned from the [misinterpretations past](https://doodles.mountainmath.ca/blog/2020/01/27/mythical-oversupply/).

Let's see what's going on there. 




<img src="{{< blogdown/postref >}}index_files/figure-html/change-in-unoccupied-total-1.png" width="1200" />

This gives an accounting of the change in the total number of units not occupied by usual residents. Most of these are "duplex" units, which [as we know](https://doodles.mountainmath.ca/blog/2020/01/27/mythical-oversupply/) maps onto units in single family homes where the census has found a suite at some point in time, and suites are the most empty form of housing in Vancouver. And some of that addition is simply due to the census updating its methods to discover more suites between years, rather than owners becoming less willing to rent them out.

The second largest category is highrise apartments. But that's also the form of housing that we have been adding the most of, so it's hard to interpret this, as it is with the suites. To get a better sense we can see if the share of units not occupied by usual residents has changed between those two censuses.


<img src="{{< blogdown/postref >}}index_files/figure-html/change-in-unoccupied-pp-1.png" width="1200" />

Looking at the percentage point change we see that “duplex”, as well as “single detached” homes, have seen increases in the share of homes not occupied by usual residents. All other forms of housing have seen decreases. Which also underlines that housing is a system, and it’s not necessarily the new homes that end up being unoccupied (by usual residents), but could well be existing homes. And many of these suites in "duplexes" have probably just been re-absorbed for use by their owners rather than sitting empty.

## Population growth vs demand
The last point left is the equating of population growth with demand. In its balancing act with supply, demand contributes to prices. But we don't (and really can't) measure demand directly. Demand reflects more than simply population growth. It's also dependent upon the ease of financing, as well as wealth and incomes of the population here now. But - and this is key - there's still more to demand. There are people who continue to move to Vancouver, bringing their own wealth and income. We anticipate even more of them would come if prices and rents were lower. And there are others who invest in Vancouver, in part because prices and rents keep going up. All this works itself out through markets, matching supply to demand in setting prices.

Prices, as Condon points out, are very high. And if you think that prices are too high (we definitely do), you should certainly advocate for more social housing (we definitely do). You can also advocate for higher property taxes that would cut into investment profits (we certainly do). But if you also want housing to remain accessible via markets, you have to take demand seriously, and not think you're going to catch it all by the handy shortcut of looking at past population growth. Maybe you don't care so much about the abstract vastness of demand, and you just want to make sure the housing we have gets used for housing? Given concerns about all the stuff investors might get up to, that seems reasonable. Try putting in place an Empty Homes Tax like we have here in Vancouver! Where we know very few homes remain empty for long.

Given what we know about supply and demand and the lack of empty homes in Vancouver, there's no good path to lower prices that doesn't run through adding a lot more housing. There are still bad paths, of course. We could make Vancouver a much less desirable place to live by, say, plunking down an enormous chicken factory farm in Shaughnessy. But that's a topic for a different post. 

## But we have been building a lot, right?
Have we been building a lot? Well, not really. It's worth taking a step back to look at all of Metro Vancouver over longer timelines to put our current construction into context. The Vancouver of the 70s, or even earlier, was very different from the Vancouver of today, so we normalize by population.

<img src="{{< blogdown/postref >}}index_files/figure-html/housing-starts-completions-long-timeline-1.png" width="1200" />
This shows that while construction's gone up within the last decade, in historical context we aren't building nearly as much as we did in decades past. The last year per-capita housing completions have been above the long-run average was 1996. And this is before accounting for demolitions, the rate of which has likely increased over time as we are running out of greenfield and brownfield development sites.


## Upshot
When we built housing in Vancouver, people came to live in it. We knew this already because hardly any of our housing is empty. So it is likely to continue for the foreseeable future: if we build it, they will come. Indeed, for the most part [they're already here](https://homefreesociology.com/2022/01/26/a-brief-data-based-primer-on-mobility-and-housing/).

But maybe it's still worth wading through data bullshit suggesting otherwise, if only to fertilize more careful analysis. Hopefully we've managed to explain some of the complexities that render overly simplistic approaches to comparing dwelling growth to population growth useless. Given the many intersecting processes at work, it's tricky to figure out how people sort themselves into homes, even when using correct numbers and not some diffusely assembled non-matching numbers. 

If you take affordability and human hardship seriously, there is no question that we have a housing shortage. All data clearly point to this. Prominent commentators like Patrick Condon are now on the record attacking Housing Minister David Eby for taking this data seriously. Indeed, his tweet links back to his Tyee article with exactly this theme. But these attacks are largely based on data bullshit strung together with a bunch of faulty and rather idiosyncratic logic. When faced with this kind of housing shortage denial, coupled with demands we pause for a bespoke rethink of all our working models, we recommend [the Eby response](https://www.theglobeandmail.com/real-estate/vancouver/article-bc-housing-minister-eager-to-spur-supply/).

>   “Well, I’ll be sure to mention that to all the people sleeping in their cars, and lining up to find rental units; that we are going to study the problem more.”

As usual, the code for this post, including the code to scrape the data out of the PDFs, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-01-31-no-shortage-in-housing-bs/index.Rmarkdown) for anyone to reproduce or adapt.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-01-31 18:21:01 PST"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [4108e69] 2022-02-01: minor edits
```

```
## R version 4.1.2 (2021-11-01)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.1
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.1-arm64/Resources/lib/libRblas.0.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.1-arm64/Resources/lib/libRlapack.dylib
## 
## locale:
## [1] en_CA.UTF-8/en_CA.UTF-8/en_CA.UTF-8/C/en_CA.UTF-8/en_CA.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] cansim_0.3.10   cmhc_0.1.0      cancensus_0.4.8 forcats_0.5.1  
##  [5] stringr_1.4.0   dplyr_1.0.7     purrr_0.3.4     readr_2.1.1    
##  [9] tidyr_1.1.4     tibble_3.1.6    ggplot2_3.3.5   tidyverse_1.3.1
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.8       lubridate_1.8.0  assertthat_0.2.1 digest_0.6.29   
##  [5] utf8_1.2.2       R6_2.5.1         cellranger_1.1.0 backports_1.4.0 
##  [9] reprex_2.0.1     evaluate_0.14    httr_1.4.2       blogdown_1.6    
## [13] pillar_1.6.4     rlang_0.4.12     readxl_1.3.1     rstudioapi_0.13 
## [17] jquerylib_0.1.4  rmarkdown_2.11   munsell_0.5.0    broom_0.7.12    
## [21] compiler_4.1.2   modelr_0.1.8     xfun_0.28        pkgconfig_2.0.3 
## [25] htmltools_0.5.2  tidyselect_1.1.1 bookdown_0.24    fansi_1.0.2     
## [29] crayon_1.4.2     tzdb_0.2.0       dbplyr_2.1.1     withr_2.4.3     
## [33] grid_4.1.2       jsonlite_1.7.3   gtable_0.3.0     lifecycle_1.0.1 
## [37] DBI_1.1.2        git2r_0.29.0     magrittr_2.0.1   scales_1.1.1    
## [41] cli_3.1.0        stringi_1.7.6    fs_1.5.1         xml2_1.3.3      
## [45] bslib_0.3.1      ellipsis_0.3.2   generics_0.1.1   vctrs_0.3.8     
## [49] tools_4.1.2      glue_1.6.1       hms_1.1.1        fastmap_1.1.0   
## [53] yaml_2.2.1       colorspace_2.0-2 rvest_1.0.2      knitr_1.36      
## [57] haven_2.4.3      sass_0.4.0
```
</details>



