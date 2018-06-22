---
title: Skytrain rents
author: Jens von Bergmann
date: '2018-06-21'
slug: skytrain-rents
categories:
  - cancensus
  - craigslist
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




A friend of mine is looking for a new rental, which reminded me that I always wanted to do a quick map of rents near skytrain stations. Should not be too hard. First we need to grab the skytrain stations, which we grab from TransitLand using our [transitland R package](https://github.com/mountainMath/transitland) that we used before to look at [transit frequency in Vancouver](https://doodles.mountainmath.ca/blog/2018/03/12/transit-data/).

<!--more-->

# Skytrain station data

```r
yvr <- get_census("CA16",regions=list(CMA="59933"),geo_format="sf",level="CSD")
bbox= st_bbox(yvr)
transit_routes <- simpleCache(get_transit_routes(list(bbox=bbox,per_page=1000),get_all = TRUE),"metro_yvr_routes")
skytrain <- transit_routes %>% filter(operated_by_name=="British Columbia Rapid Transit Company")
stops <- get_transit_stops(list(served_by=paste(skytrain$operated_by_onestop_id %>% unique,collapse = ",")),get_all = TRUE) %>%
  st_transform(26910) %>% st_buffer(800) %>% st_transform(4326) %>%
  filter(!duplicated(gsub(" PLATFORM \\d+$","",name)))
```

Here we decided to go with 800m radius around each station.

# Rental listins data
Next we need rental listings data, which we have used before to look at [how many square foot you can rent for $1,500/month in Toronto](https://doodles.mountainmath.ca/blog/2017/11/07/renting-in-toronto/), and compute median rents per station.


```r
listings <- get_listings("2018-03-01","2018-06-01",region=st_union(stops),beds=c(1,2),filter="unfurnished") 
station_rent_data <- st_join(stops,listings) %>% 
  group_by(onestop_id,beds) %>%
  summarize(ask=median(price),n=n()) %>%
  mutate(ask=ifelse(n<10,NA,ask))
```

Here we grey out stations with fewer than 10 observations.

That's it, now all that's left is to grab some background map data and graph the results. It makes sense to slice the data by bedrooms.


# 1 bedroom rents

<img src="/posts/2018-06-21-skytrain-rents_files/figure-html/one_bedroom_map-1.png" width="864" />

# 2 bedroom rents

<img src="/posts/2018-06-21-skytrain-rents_files/figure-html/two_bedroom_map-1.png" width="864" />

# Next steps
There are obvious next steps. We could see how asking rents have evolved over time near the stations. Or through in the B-Lines or other bus routes for comparison. Or get a little more technical and look at rent per square foot and run some more in-depth analysis. But for tonight this will have to do.

