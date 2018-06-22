---
title: Skytrain rents
author: Jens von Bergmann
date: '2018-06-21'
slug: skytrain-rents
categories:
  - cancensus
  - rental
  - Transportation
  - Vancouver
tags: []
description: 'How much is it to rent a 1 or 2 bedroom near a skytrain station?'
images: ["https://doodles.mountainmath.ca/posts/2018-06-21-skytrain-rents_files/figure-html/one_bedroom_map-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




A friend of mine is looking for a new rental, which reminded me that I always wanted to do a quick map of rents near skytrain stations. Should not be too hard. 

# Skytrain station data
First we need the skytrain stations, which we grab from [TransitLand](https://transit.land) using our [transitland R package](https://github.com/mountainMath/transitland) that we used before to look at [transit frequency in Vancouver](https://doodles.mountainmath.ca/blog/2018/03/12/transit-data/).
<!--more-->


```r
library(cancensus)
yvr <- get_census("CA16",regions=list(CMA="59933"),geo_format="sf",level="CSD")

library(transitland)
routes <- get_transit_routes(list(bbox=st_bbox(yvr),per_page=1000), get_all = TRUE) %>% 
  filter(operated_by_name=="British Columbia Rapid Transit Company")
stops <- get_transit_stops(list(served_by=unique(routes$operated_by_onestop_id)),get_all = TRUE) %>%
  st_transform(26910) %>% st_buffer(800) %>% st_transform(4326) %>%
  filter(!duplicated(gsub(" PLATFORM \\d+$","",name)))
```

Here we decided to go with 800m radius around each station.

# Rental listings data
Next we need data on rents. CMHC or census rent data give overall stock rents, for people like my friend that are moving we should turn to rental listings data, which we have used before to look at [how many square foot you can rent for $1,500/month in Toronto](https://doodles.mountainmath.ca/blog/2017/11/07/renting-in-toronto/). My friend is interested in an unfurnished one or two bedroom unit near rapid transit, so that's the data we will grab and compute median rents per bedroom and station.


```r
library(rental)
listings <- get_listings("2018-03-01","2018-06-01",region=st_union(stops),
                         beds=c(1,2),filter="unfurnished") 
station_rent_data <- st_join(stops,listings) %>% 
  group_by(onestop_id,beds) %>%
  summarize(ask=median(price),n=n()) %>%
  mutate(ask=ifelse(n<10,NA,ask))
```

Here we grey out stations with fewer than 10 observations.

That's it, now all that's left is to grab some background map data and graph the results.


# 1 bedroom rents

<img src="/posts/2018-06-21-skytrain-rents_files/figure-html/one_bedroom_map-1.png" width="864" />

# 2 bedroom rents

<img src="/posts/2018-06-21-skytrain-rents_files/figure-html/two_bedroom_map-1.png" width="864" />

# Next steps
There are obvious next steps. We could see how asking rents have evolved over time near the stations. Or through in the B-Lines or other bus routes for comparison. Or get a little more technical and look at rent per square foot and run some more in-depth analysis. But for tonight this will have to do.

# Update
Another interesting metric is the availablility of rentals. So we round this off with the number of 1-bedrooms listings per month in each area.

<img src="/posts/2018-06-21-skytrain-rents_files/figure-html/one_bedroom_listings_map-1.png" width="864" />

This shows that especially the Millennium line is under-served when it comes to 1-bedroom rentals, with fewer than 5 rental units becoming available each month along stretches of the line.
