---
title: Renting in Toronto
author: Jens von Bergmann
date: '2017-11-07'
slug: renting-in-toronto
categories:
  - craigslist
tags: []
description: 'How much space to you get for $1500 in Toronto.'
images: ["https://doodles.mountainmath.ca/posts/2017-11-07-renting-in-toronto_files/figure-html/rental_treemap-1.png"]
featured: 'rental_treemap-1.png'
#featuredalt: ""
featuredpath: "/posts/2017-11-07-renting-in-toronto_files/figure-html"
linktitle: ''
type: "post"
---

Earlier today I came across [Gil Meslin's tweet](https://twitter.com/g_meslin/status/927681384835141632) suggesting to reproduce [this rent graph](https://twitter.com/simongerman600/status/927587422149447681) for neighbourhoods in Toronto. <a href="https://twitter.com/simongerman600/status/927587422149447681" target="_blank"><img src="https://pbs.twimg.com/media/DN9z1-jWkAcqLAw.jpg", style="width:50%;float:right;margin-left=10px;"/></a>

I agree that this would be fun to do. All it requires is mixing the Toronto neighbourhoods with renal listings data, which I happen to have handy. So time to get working.

# Neighbourhoods
To do this we need to grab the Toronto neighbourhoods [which can be found on Toronto's open data website](https://www1.toronto.ca/wps/portal/contentonly?vgnextoid=04b489fe9c18b210VgnVCM1000003dd60f89RCRD).






<img src="/posts/2017-11-07-renting-in-toronto_files/figure-html/unnamed-chunk-3-1.png" width="288" />

# Rental Listings Data
With that in hand, we need to turn to rental data. The tweet is asking what property we can "get", for that we should use *turnover* rents, so how much people would likely have to pay if they wanted to rent today. We turn to scrapes of a popular rental listings platform to answer that, while broadening our time frame to the past 3 months to make sure we get a decent sample. The per square foot price skews lower for higher bedroom listings, so we restrict ourselves to studios, 1 or 2 bedroom listings.


```r
library(rental)
listings <- get_listings("2017-08-06","2017-11-06",st_union(nbhds$geometry),beds=c("0","1","2"),filter = 'unfurnished')
listings %>% as.data.frame %>% group_by(beds) %>% summarize(count=n()) %>% kable
```



|beds | count|
|:----|-----:|
|0    |  1936|
|1    |  8345|
|2    |  7308|

Next we sort the listings into their neighbourhoods and compute some quantities of interest, including rent per square foot and the average size of the unit we can expect to rent for CA$1,500 per month.


```r
nbhd_rpsf <- st_join(listings,nbhds) %>% as.data.frame %>% 
  group_by(AREA_NAME) %>% 
  summarize(count=n(), rpsf=mean(price/size, na.rm=TRUE)) %>%
  mutate(size_for_1500=round(1500/rpsf))
```

# Rental Tree Map
Perfect, all that's left to do is to make a tree map graph for the neighbourhoods, restricting ourselves to the ones with at least 100 listings.

<img src="/posts/2017-11-07-renting-in-toronto_files/figure-html/rental_treemap-1.png" width="672" />

# Geographic Distribution
To round things up we quickly map the data to see the geographic distribution, where we map all neighbourhoods with at least 10 data points.

<img src="/posts/2017-11-07-renting-in-toronto_files/figure-html/rental_map-1.png" width="672" />

As always, the R Notebook that generated this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-11-07-renting-in-toronto.Rmarkdown). Unfortunately in this case it requires access to non-public listings data, so the reproducibility of the post is limited to people with access to rental data of some sort that will have to substitute their own `get_listings` logic.
