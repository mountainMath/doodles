---
title: Vacancy rate and rent change
author: Jens von Bergmann
date: '2018-11-28'
slug: vacancy-rate-and-rent-change
categories:
  - cmhc
  - CANSIM
  - Vancouver
  - Toronto
  - rental
tags: []
description: 'The relationship between rent change and vacancy rates in Canada.'
featured: 'vacancy-rent-change-1.png'
images: ["https://doodles.mountainmath.ca/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/vacancy-rent-change-1.png"]
featuredalt: ""
featuredpath: "/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html"
linktitle: ''
type: "post"
---




Today the new CMHC Rental Market Survey data came out, which is a good opportunity to refine my musings on the rental vacancy rate and rent increases. I view this as the renter version of the relationship between [months of inventory and changes in resale prices in the for sale market](https://twitter.com/YVRHousing/status/940663306511048705).






CMHC surveys purpose-built (market) rental apartments every October and reports on a variety of metrics, including statistics about the total stock, median and average rents, vacancy rates, and fixed-sample average rent change among others. I have grown quite font of the fixed-sample rent change metric, because it naturally lends itself to use in analysis. Fixed sample rent change keeps the rental buildings used for comparison fixed from one year to the next, so it is not polluted by changes in composition when a new building comes online or an old one gets torn down. In that sense, it's the Case-Shiller metric for rents, with the caveat that in rent-controlled environments the change in rent may be capped, although in Canada rents are usually constrained at turnover (vacancy decontrol).

A point that sometimes get forgotten is that the CMHC purpose-built stock only includes market rentals (modulo messy details on data collection and classification), so subsidized rentals are generally not included in this.

## Purpose-built (market) rental stock
To start off, let's look at the purpose-built rental stock in Canada. 


<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-3-1.png" width="768" />

The list of CMAs with the largest purpose-built rental stock is naturally dominated by larger cities, but we immediately notice that the ordering does not correspond to population. Nor to the number or share of renter households in each city. The following graph relates the size of the purpose-built rental stock to the number of renters in each area.

<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-4-1.png" width="768" />

Sliced this way, we notice a lot of smaller CMAs dominating the list, but some larger CMAs, in particular Montréal, also feature prominently. For comparison, here is how the shares look for the CMAs with the largest stock.

<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-5-1.png" width="768" />

## Vacancy rate vs rent change
What we are really interested in is the vacancy rate and rent change. The purpose-built market is only one portion of the rental market, the other two are the subsidized rental market and the individual ("artisanal") rental market. The subsidized market functions very differently, but the purpose-built and artisanal markets are somewhat fungible. 









<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/vacancy-rent-change-1.png" width="768" />

With a renewed focus on renters and public discussions about rent control, this graph highlights the relationship of the vacancy rate to inflation adjusted fixed-sample rent changes in market purpose-built rental units.

The graphs validate the rule of thumb of a three percent vacancy rate as being considered as healthy. When the vacancy rate climbs above three percent, inflation-adjusted rents generally flattens and go negative. When the vacancy rate drops below three percent, inflation-adjusted rents tends to climb. 

The natural vacancy rate, the rate when inflation-adjusted rent stays flat, varies somewhat across cities and possibly across time. Vancouver appears to have a lower natural vacancy rate, with inflation-adjusted rent dipping in the negative while the vacancy rate maxes out at 2.7%. On the other hand, Sherbrooke, Montréal and Halifax appear to have slightly higher natural vacancy rates. 

# Correlations and causation
The graphs do suggest a correlation between vacancy rates and fixed-sample rent changes. But does one cause the other or are both simply driven by the same hidden factor? Economics 101 gives a plausible mechanism for vacancy rates driving rent changes. When landlords have a lot of competition in the rental market and vacancy rates are high, they can't hike the rents or might even have to drop rents to fill their units. When the rental market is tight with low vacancy rates and several renters are bidding on the same apartment, landlords can be more aggressive in hiking their rents.

But nailing down causality is tricky, especially when we only have annual data when the timeframe of effects is likely shorter. One way to start exploring causality further is to understand the relative timing of the two time series. For this we consider lagged correlations, where we correlate time-shifted time series.

<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-8-1.png" width="768" />

The correlations show out general observation that vacancy rate and rent changes anti-correlate. In most cases the correlations peak at zero lag, but the main mode seems slightly shifted toward rent changes trailing vacancy rates. As we would expect from our Economics 101 reasoning. 

In the cases of Winnipeg and Waterloo the lag seems unplausably large, in Sherprook the correlation looks quite weak, and in Hamilton it appears that rent changes lead the vacancy rate, possibly because the Hamilton market does not operate in isolation. Given the temporal resolution of the data there is not much more we can do here, but overall the lagged correlations support our hypothesis of vacancy rates driving fixed-sample rent changes.

## The rest of the rental supply
So far we have only talked about purpose-built market rentals. The main reason for this is that we have longer time lines and better quality data for purpose-built rental, and the idea is that purpose-built and "artisanal rentals" are fungible, so there should not be too much of a different. But in e.g. Vancouver that's only a small fraction of the rental market. How representative is this really? 

To understand that, we start by comparing the purpose-built vacancy rate to the condo vacancy rate.


<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-9-1.png" width="768" />

We have much shorter time lines for the condo vacancy rate, but the two track fairly well. Next, let's look at rents. For "artisanal" rentals, we don't have the luxury of a fixed sample rent change series, so we use the year over year change in average rent to stand in.


<img src="/posts/2018-11-28-vacancy-rate-and-rent-change_files/figure-html/unnamed-chunk-10-1.png" width="768" />

And looking at the data, it's a real mess. The high volatility in the graphs suggest poor data quality, and the quality indicators provided by CMHC. In Vancouver for example, only the latest two points in the Series come with an uncertainty below 2 percentage points. Probably not too much useful can be learned from this.

One could pull census data to try and understand rents in "artisanal" setting better, but they are only available every 5 years. And the census only allows to filter by condominium units since 2011.

As always, the code for the analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-11-28-vacancy-rate-and-rent-change.Rmarkdown) for anyone to reproduce, adapt or appropriate for their own purposes.
