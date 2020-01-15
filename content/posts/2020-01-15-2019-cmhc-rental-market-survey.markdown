---
title: 2019 CMHC Rental Market Survey
author: Jens von Bergmann
date: '2020-01-15'
slug: 2019-cmhc-rental-market-survey
categories:
  - cancensus
  - CANSIM
  - cmhc
  - rental
  - Vancouver
tags: []
description: "Checking in with the new Rms data."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-01-15-2019-cmhc-rental-market-survey_files/figure-html/moving-penalty-2019-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
math: true
blackfriday:
  fractions: false
  hrefTargetBlank: true
---






Finally the new 2019 CMHC Rms data is out. As expected, the high-level numbers are pretty bleak. For Metro Vancouver the vacancy rate inched up a tiny bit from 1.0% in October 2018 to 1.1% in October 2019. In the City of Vancouver the vacancy rate similarly crept from 0.8% in October 2018 to 1.0% in October 2019.

With the slight uptick in vacancy rate, both areas saw somewhat lower rents increases, with the (nominal) fixed-sample rent increase in the year before October 2019 clocking in at  4.7% and 4.6% for the Metro Vancouver and the City of Vancouver, respectively. That compares to 6.1% and 6.0% in the year before that. But the vacancy rate is still very low and the rent increase is high.


## Rent change and vacancy rates
Time to update our [rent change vs vacancy rate](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/) graph that explores how those to variables relate throughout Canada. All we need to do is copy-paste the code from last year and re-run it to pull in the new data point.

<img src="/posts/2020-01-15-2019-cmhc-rental-market-survey_files/figure-html/vacancy-rent-change-2019-1.png" width="864" />

That's just one more data point [compared to last year](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/), but we tight, and generally tightening, vacancy rates across the country, with only Calgary and Edmonton exhibiting vacancy rates conducive to stable or slightly dropping inflation-adjusted rents. While Vancouver's fixed-sample rent increase is not any more as extreme as in the previous three periods, Toronto's climbing fixed-sample rent increase is troubling. 

## Moving penalty
The [moving penalty](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/) is the difference the average renter can expect to pay if they were looking to, or were [forced to move](https://doodles.mountainmath.ca/blog/2019/11/23/canadian-housing-survey-a-first-look/). This year we are opting for a different way to visualize the data that keeps the total rents in perspective, and also takes note of the quality of the CMHC rent estimates.

<img src="/posts/2020-01-15-2019-cmhc-rental-market-survey_files/figure-html/moving-penalty-2019-1.png" width="864" />

We notice big jumps in the "hot" rental market of the greater Toronto area and the BC metros. This should not be unexpected as a tight rental market, together with rent control with vacancy decontrol, is a recipe for a heightened moving penalty. 

Having a higher moving penalty is problematic for many reasons, it reduces renter mobility, so renters may be less inclined to downsize or move for a new job. And it incentivises landlords to evict tenants to bring rents in rent controlled units up to market rents. The combination of lower overall mobility, together with landlord incentives to evict, may explain part of the [high number of "forced moves" in BC that we have discussed before](https://doodles.mountainmath.ca/blog/2019/11/23/canadian-housing-survey-a-first-look/).

In general, the sample of the units with "vacant rents" is comparatively small, especially in markets with high vacancy rates. This may affect the overall quality of the estimates, and especially numbers with lower CMHC quality indicators should be viewed with extra caution.

As discussed before, [the mix of vacant units may not be representative of the mix of occupied units](https://doodles.mountainmath.ca/blog/2019/10/16/rents-and-vacancy-rates/) so this is not a clean apples-with-apples comparison. But it still gives us a decent overall overview of the moving penalty.

## Upshot
There is still lots of things to look at in this Rms release, this is just scratching the surface. But it will have to do for a quick morning post. As usual, the code is [available on Github](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-01-15-2019-cmhc-rental-market-survey.Rmarkdown) for those wanting to reproduce the analysis or build on it. The data with rents for vacant units is a custom extract kindly provided by Keith Stewart  at CMHC, and [I posted it on online](/data/occupied vs rented rents 2019.csv) if others also want to play with it.
