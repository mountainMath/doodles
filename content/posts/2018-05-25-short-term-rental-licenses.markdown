---
title: Short Term Rental Licenses
author: Jens von Bergmann
date: '2018-05-25'
slug: short-term-rental-licenses
categories:
  - Vancouver
tags: []
description: 'A first look at STR license data'
images: ["https://doodles.mountainmath.ca/posts/2018-05-25-short-term-rental-licenses_files/figure-html/str_map-1.png-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---







In the City of Vancouver operators of short term rentals now need to obtain a license from the city to legally operate. There are restrictions on what units can be rented out short term. I won't get into the nitty-gritty, but here is the main point. Licenses are only available for people that want to rent out their primary residence, that is the place where they reside at least half a year. Secondary suites or laneway houses count as separate residences for this purpose, so e.g. a person living in the main unit of a house can only STR the main unit, but not the secondary suite or the laneway house. However, long term tenants that claim the secondary suite as their primary residence can STR their suite if the landlord permits it.

My favourite part about licensing is that we get licence data. Yay. Time for a quick blog post using the data we have so far on the [City of Vancouver Open Data Catalogue](http://data.vancouver.ca/datacatalogue/businessLicence.htm). 



Up to now we have 849 STR licenses issued, excluding a handful of cancelled licenses. The data comes with license number, name of the holder, issue and expiry dates. Addresses and location data is stripped, but it does identify the neighbourhood the STR is in. Here are the current counts by neighbourhood.


<img src="/posts/2018-05-25-short-term-rental-licenses_files/figure-html/str_map-1.png" width="864" />

We can also take a quick look at the issue date, there was a big spike on April 20, that quickly petered off to a steady but low stream.

<img src="/posts/2018-05-25-short-term-rental-licenses_files/figure-html/unnamed-chunk-4-1.png" width="864" />

We might update the post at some later point in time, but those that want more regular updates are welcome to [grab the code on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-05-25-short-term-rental-licenses.Rmarkdown) and run it regularly. It will pull in the latest data and automatically update.
