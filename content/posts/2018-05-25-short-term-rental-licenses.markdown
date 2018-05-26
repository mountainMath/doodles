---
title: Short Term Rental Licenses
author: Jens von Bergmann
date: '2018-05-25'
slug: short-term-rental-licenses
categories:
  - Vancouver
tags: []
description: 'A first look at STR license data'
images: ["https://doodles.mountainmath.ca/posts/2018-05-25-short-term-rental-licenses_files/figure-html/str_map-1.png"]
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

# Update
Some [asked](https://twitter.com/yvryimby/status/1000123204747251718) for a version normalized by dwellings. The neighbourhood level census data provided by the City of Vancouver misses the dwelling variable, we we use the one for occupied dwellings instead. Which probably is just as well, as one cannot get a license for an unoccupied dwelling unit. Here is a quick update for share of STR license among occupied dwelling units.

<img src="/posts/2018-05-25-short-term-rental-licenses_files/figure-html/str_map_share-1.png" width="864" />


# Even later update
I probably should have thought this through earlier, but purpose-built rental buildings are unlikely to get short-term rented by their tenants. The same is true for tenants in secondary suites or laneway houses. To STR these the tenant needs explicit approval from the landlord, who has not much to gain by allowing this. So here is another way to normalize the data, only counting "taxable" dwelling units [like we in a previous post on the empty homes tax](https://doodles.mountainmath.ca/blog/2018/02/24/taxable-dwelling-density/). 



<img src="/posts/2018-05-25-short-term-rental-licenses_files/figure-html/unnamed-chunk-6-1.png" width="864" />


And lastly, we can also normalize the STR licenses by owner-occupied dwellings. Realistically speaking, those are the only people that can make the decision to STR their unit without having to ask anyone for permission. An owner household going on a two week vacation abroad can STR their unit to help pay for the trip, a renter household wanting to do the same will first have to ask for permission from their landlord.

<img src="/posts/2018-05-25-short-term-rental-licenses_files/figure-html/str_map_onwers-1.png" width="864" />

I think I got all my bases covered now. If you want to fine-tune this even further, maybe take out strata buildings that have STR restrictions, just go [grab the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-05-25-short-term-rental-licenses.Rmarkdown) and hack away. The taxable dwelling unit map requires access to my enriched CoV assessment database though, but if you comment that portion out it should pull in all the other data you need and reproduce everything else.
