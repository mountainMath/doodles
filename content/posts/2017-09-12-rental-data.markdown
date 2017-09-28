---
title: Rental Data
author: Jens von Bergmann
date: '2017-09-12'
slug: rental-data
categories:
  - cancensus
  - cmhc
tags: []
draft: true
description: "Trying to Make Sense of What we Have"
#featured: 'vancouver_fsr.png'
#images: ["https://doodles.mountainmath.ca/images/vancouver_fsr.png"]
#featuredalt: ""
#featuredpath: "/images"
linktitle: ''
type: "post"
---

Rental data is an important ingredient to understanding the housing market. Unfortunately we, or maybe just I, don't have good data on this. But we got some. I spent some time to make sense of what we got.

## Rental Data
Ideally we would like to know what people pay for rent, where they live, how much money they make, when they first moved in and signed the contract, the term of their contract, how many bedrooms and what size they live in, what kind of building they live in, their income, ...

Sadly we don't know these things, at least not at the individual tenant level. But we have various sources that tell differnt parts of the story.

### Census
The census comes closest in allowing us to cross-tabulate most of these variables, but it is only administred once every five years (and is only a ~1/4 subsample). Data for housing from the 2016 census won't get released until October 25.


### CMHC
CMHC has several surveys that can help us figure out what happens in between the censuses. They keep track of the size and makeup of the rental market, for example tracking purpose built rental construction and the purpose built rental stock, subsidized rentals and "secondary market" rentals. They also keep track of vacancy rates and rents in the purpose-built and secondary markets. Their data comes with a consisent methodology, but varying timelines, geographic resoltion, somtimes information on building type and number of bedrooms, and varying quality of the data. CMHC rental data measures "stock" rents, so average or median rents.

### Rental Listing Services
Rental listing services aren't strictly speaking a data source, but they can become one if one keeps track of the listings that are posted. This can be done manually or one can try to automate the "scraping" of these listings. These data sources exist, but the legality of "scraping" is not entirely clear, which means people are generally not willing to share data obtained this way and casues friction in the effort to understand the rental market.

Data obtained this way measures "turnover" rents, so the amount people pay at the time they sign the lease.

## Comparing Sources
Each of these sources comes with it's own advantages and limitations. To understand these, let's check how these different sources relate.

We start with CMHC and census data, both of these are freely available and both measure "stock" rents. We have convenient access to census data using our [`cancensus` package](https://github.com/mountainMath/cancensus) and CMHC data using our [`cmhc` package](https://github.com/mountainMath/cmhc).


```r
#devtools::install_github("mountainmath/cancensus")
library(cancensus)
#devtools::install_github("mountainmath/cmhc")
library(cmhc)
```



Let's read in the historical average rent data from CMHC.

```r
places=c("Vancouver","Toronto","Calgary","Victoria")
average_primary_rents <- do.call(rbind,lapply(places, function(place_name){
  get_cmhc(cmhc_timeseries_params(table_id = "2.2.11", geography_id = cmhc_geography_list[place_name])) %>%
  mutate(name=place_name)})) %>% prep
average_condo_rents <- do.call(rbind,lapply(places, function(place_name){
  get_cmhc(cmhc_timeseries_params(table_id = "4.4.2", geography_id = cmhc_geography_list[place_name])) %>%
  mutate(name=place_name)})) %>% prep
average_other_secondary_rents <- do.call(rbind,lapply(places, function(place_name){
  get_cmhc(cmhc_timeseries_params(table_id = "4.6.2", geography_id = cmhc_geography_list[place_name])) %>%
  mutate(name=place_name)})) %>% prep
```

And plot the time series.

```r
plot_data <- #do.call(rbind,
  rbind(rbind(average_primary_rents %>% rename(`Total Primary` = Total) %>% melt(id=c("Date","name")), 
  average_condo_rents %>% 
    rename(`Bachelor Condo`=`Bachelor`,
           `1 Bedroom Condo`=`1 Bedroom`,
           `2 Bedroom Condo`=`2 Bedroom`,
           `3 Bedroom + Condo`=`3 Bedroom +`,
           `Total Condo` = Total) %>% 
    melt(id=c("Date","name"))), 
  average_other_secondary_rents %>% rename(`Total Other` = Total) %>% melt(id=c("Date","name"))
  )
  #gather(key=c("Bachelor","1 Bedroom","2 Bedroom","3 Bedroom +","Total"),value="Bedrooms")
ggplot(plot_data %>% arrange(Date) %>% filter(name=="Vancouver"), 
       aes(x=Date, y=value, colour=variable)) + 
  geom_line() +
  geom_point() +
  scale_y_continuous(labels=currency_format) +
  labs(title="Vancouver Stock Median Rents", x="Year", y="Monthly Rent")
```

<img src="/posts/2017-09-12-rental-data_files/figure-html/unnamed-chunk-4-1.png" width="960" />



