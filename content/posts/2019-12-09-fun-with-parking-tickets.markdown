---
title: Fun with parking tickets
author: Jens von Bergmann
date: '2019-12-09'
slug: fun-with-parking-tickets
categories:
  - Vancouver
  - Transportation
tags: []
description: "Looking for excuses to showcase my {VancouvR} R package to access Vancouver Open Data."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/fire_hydrant_ticket_map-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
math: true
blackfriday:
  fractions: false
  hrefTargetBlank: true
---





Almost three years ago I ran the numbers to identify "Vancouver's most lucrative fire hydrant".

{{< tweet 826883926614421507 >}}

<img src="https://raw.githubusercontent.com/mountainMath/VancouvR/master/images/VancouvR-sticker.png" style="float:right;width:40%;">
Being a card-carrying Shoupista it's high time for me to do an update. And looking back I can't help but realize how my approach to data analysis, even about such trivial things as parking tickets, has changed since then. Back then I scripted makeshift analysis in a general purpose language. Nowadays I work in R or Python and am much more structured in my approach, with emphasis on reproducibility and transparency. And this included the entire pipeline, from data acquisition, to data cleaning, data analysis and visualization.


In this case, we are working with City of Vancouver Open Data, and data acquisition happens through my relatively new [`VancouvR` package](https://mountainmath.github.io/VancouvR/index.html) that ties into the new City of Vancouver Open Data API and is now on CRAN. Usually I hide the code from the post but make it available on GitHub in case people are interested, but this time around I am leaving some of the code blocks visible to showcase the `VancouvR` package and give people an idea what it looks like, and as advertisement for more people to come work with Vancouver data.

First up, let's check for parking ticket related datasets.

```r
library(tidyverse)
library(VancouvR)
ticket_datasets <- search_cov_datasets("parking tickets")
ticket_datasets %>% 
  select(dataset_id,title) %>%
  pretty_table()
```



|dataset_id                |title                     |
|:-------------------------|:-------------------------|
|parking-tickets-2017-2019 |Parking tickets 2017-2019 |
|parking-tickets-2010-2013 |Parking tickets 2010-2013 |
|parking-tickets-2014-2016 |Parking tickets 2014-2016 |

Before accessing the data it's often useful to take a peek at the metadata to get and overview of what to expect from the dataset.


```r
get_cov_metadata(ticket_datasets$dataset_id %>% first) %>%
  pretty_table() 
```



|name           |type |label          |description                                                                                                                                                                                           |
|:--------------|:----|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|block          |int  |Block          |Block level of the street where the infraction occurred.                                                                                                                                              |
|street         |text |Street         |Name of the street where the infraction occurred                                                                                                                                                      |
|entrydate      |date |EntryDate      |Date the infraction occurred                                                                                                                                                                          |
|bylaw          |int  |Bylaw          |Specific parking bylaw which the parking ticket was issued under                                                                                                                                      |
|section        |text |Section        |Specific section of the bylaw which the infraction pertains                                                                                                                                           |
|status         |text |Status         |Status of the parking ticket. -- CA = One time courtesy cancellation (no longer exists), IS = Issued, RA = Cancelled due to Paid by Phone, VA = Void, VR = Void request, VS = Auto-void, WR = Warning |
|infractiontext |text |InfractionText |Description of the infraction                                                                                                                                                                         |
|year           |text |Year           |Year the infraction occurred                                                                                                                                                                          |


We are only interested in parking tickets related to fire hydrants. One great feature of the new City of Vancouver Open Data API is that we can do some basic summary statistics on their server, greatly simplifying and speeding up the analysis. The API accepts some SQL-like dialect that allows to specify basic `where` and `group_by` clauses, as well `select` statements that in our R package default to simply counting the number of rows.


```r
agg <- aggregate_cov_data("parking-tickets-2017-2019",
                          where = "infractiontext LIKE 'FIRE'",
                          group_by = "bylaw,section,infractiontext,status")
agg %>% pretty_table()
```

<table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> infractiontext </th>
   <th style="text-align:left;"> status </th>
   <th style="text-align:left;"> section </th>
   <th style="text-align:right;"> bylaw </th>
   <th style="text-align:right;"> count </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> STOP WITHIN 5 METRES OF A FIRE HYDRANT </td>
   <td style="text-align:left;"> IS </td>
   <td style="text-align:left;"> 17.2(C) </td>
   <td style="text-align:right;"> 2849 </td>
   <td style="text-align:right;"> 9510 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> STOP WITHIN 5 METRES OF A FIRE HYDRANT </td>
   <td style="text-align:left;"> VA </td>
   <td style="text-align:left;"> 17.2(C) </td>
   <td style="text-align:right;"> 2849 </td>
   <td style="text-align:right;"> 1765 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> STOP WITHIN 5 METRES OF A FIRE HYDRANT </td>
   <td style="text-align:left;"> WR </td>
   <td style="text-align:left;"> 17.2(C) </td>
   <td style="text-align:right;"> 2849 </td>
   <td style="text-align:right;"> 14 </td>
  </tr>
</tbody>
</table>

We learn that 9510 non-voided or disputed tickets have been issued for "STOP WITHIN 5 METRES OF A FIRE HYDRANT". Armed with that knowledge, we now query more detailed data on all these tickets. One hiccup is that the datasets for different time frames are inconsistently formatted, turning off automatic type-casting based on the inconsistent metadata makes it easier to work with the data.


```r
fire_hydrant_tickets <- ticket_datasets$dataset_id %>%
  lapply(function(ds)get_cov_data(ds, where = "section = '17.2(C)' and status = 'IS'",cast_type=FALSE)) %>%
  bind_rows 

fire_hydrant_tickets %>% 
  ggplot(aes(x=year)) +
  geom_bar(fill="steelblue") +
  scale_y_continuous(labels=scales::comma) +
  plot_theme +
  labs(title="City of Vancouver parking tickets",x="",y="Number of issued tickets")
```

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-4-1.png" width="768" />

So the City has issued around 3,000 tickets a year for parking within 5 metres of a fire hydrant. The last data entry we have for 2019 is from 2019-09-30, so there is still time for that number to grow. The [Parking Bylaw](https://bylaws.vancouver.ca/2849c.PDF) calls for a $100 penalty for parking within 5 meteres of a fire hydrant, as measured along the curb from the closest point to the hydrant. So that comes out to about $300k a year in fines for blocking fire hydrants in the City of Vancouver.


Next up, lets check the top 5 most heavily ticketed fire hydrants in our 9 year period.


```r
fire_hydrant_tickets %>% 
  count(block,street) %>%
  top_n(5)  %>% 
  arrange(-n) %>%
  pretty_table()
```

<table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> block </th>
   <th style="text-align:left;"> street </th>
   <th style="text-align:right;"> n </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> 400 </td>
   <td style="text-align:left;"> Keefer St. </td>
   <td style="text-align:right;"> 707 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 </td>
   <td style="text-align:left;"> 40th Ave W. </td>
   <td style="text-align:right;"> 683 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 1100 </td>
   <td style="text-align:left;"> Haro St. </td>
   <td style="text-align:right;"> 671 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 </td>
   <td style="text-align:left;"> W 40TH AVE </td>
   <td style="text-align:right;"> 483 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 6200 </td>
   <td style="text-align:left;"> Ash St. </td>
   <td style="text-align:right;"> 302 </td>
  </tr>
</tbody>
</table>

Looking at the list we immediately notice something odd. Numbers 2 and 4 appear to be the same block and street, just written differently. The addresses aren't properly normalized, we will have to do some data cleaning work first. 麻煩! We hide the code for that behind a function call.


```r
top_hydrants <- fire_hydrant_tickets %>% 
  normalize_addresses() %>%
  count(Address) %>%
  top_n(5)  

top_hydrants %>% arrange(-n) %>%  pretty_table()
```

<table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> Address </th>
   <th style="text-align:right;"> n </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> 2100 W 40TH AV </td>
   <td style="text-align:right;"> 1166 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 1100 HARO ST </td>
   <td style="text-align:right;"> 770 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 400 KEEFER ST </td>
   <td style="text-align:right;"> 717 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 PINE ST </td>
   <td style="text-align:right;"> 337 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 5600 ORMIDALE ST </td>
   <td style="text-align:right;"> 332 </td>
  </tr>
</tbody>
</table>

<img src="/images/W_40th_fire_hydrant.png" style="width:50%;float:right">
The clear winner is the one on the 2100 block of W 40TH AVE. Checking [Google Street View](https://www.google.ca/maps/place/2150+W+40th+Ave,+Vancouver,+BC+V6M+1W5/@49.2355542,-123.155923,3a,75y,295.03h,84t/data=!3m6!1e1!3m4!1scoq6Uv8Vvi4qkn3j61Eb3Q!2e0!7i16384!8i8192!4m13!1m7!3m6!1s0x5486737a4fb01651:0xc469fd2de990469d!2s2150+W+40th+Ave,+Vancouver,+BC+V6M+1W5!3b1!8m2!3d49.2352754!4d-123.1566618!3m4!1s0x5486737a4fb01651:0xc469fd2de990469d!8m2!3d49.2352754!4d-123.1566618), there is only one on the block. It was hard to find because -- two cars blocked the view on it. 

Next up are the ones on the [1100 block of Haro St](https://www.google.ca/maps/@49.2846472,-123.1270377,3a,75y,180.87h,89.92t/data=!3m7!1e1!3m5!1s0LfohWAkdxHFE8zeGx8xgg!2e0!5s20150501T000000!7i13312!8i6656), closely followed by the [400 block on Keefer St](https://www.google.ca/maps/@49.2846587,-123.1270505,3a,75y,180.87h,89.92t/data=!3m6!1e1!3m4!1sUxShPIv9pAxcFUerFjX6aw!2e0!7i16384!8i8192).

To see how things have evolved over time we can check how they fared over the years.


```r
fire_hydrant_tickets %>% 
  normalize_addresses() %>%
  count(Address,year) %>%
  group_by(year) %>%
  top_n(1) %>%
  arrange(year,-n) %>%
  pretty_table()
```

<table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> Address </th>
   <th style="text-align:left;"> year </th>
   <th style="text-align:right;"> n </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> 1100 HARO ST </td>
   <td style="text-align:left;"> 2011 </td>
   <td style="text-align:right;"> 103 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 400 KEEFER ST </td>
   <td style="text-align:left;"> 2012 </td>
   <td style="text-align:right;"> 121 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 400 KEEFER ST </td>
   <td style="text-align:left;"> 2013 </td>
   <td style="text-align:right;"> 129 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 400 KEEFER ST </td>
   <td style="text-align:left;"> 2014 </td>
   <td style="text-align:right;"> 163 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 400 KEEFER ST </td>
   <td style="text-align:left;"> 2015 </td>
   <td style="text-align:right;"> 112 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 W 40TH AV </td>
   <td style="text-align:left;"> 2016 </td>
   <td style="text-align:right;"> 143 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 W 40TH AV </td>
   <td style="text-align:left;"> 2017 </td>
   <td style="text-align:right;"> 237 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2100 W 40TH AV </td>
   <td style="text-align:left;"> 2018 </td>
   <td style="text-align:right;"> 347 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 5600 ORMIDALE ST </td>
   <td style="text-align:left;"> 2019 </td>
   <td style="text-align:right;"> 168 </td>
  </tr>
</tbody>
</table>

The winner each year is from our overall top 5 list. Current front runner for 2019 is the one on the 5600 block of Ormidale St, which deserves a closer look.


```r
fire_hydrant_tickets %>% 
  normalize_addresses() %>% 
  filter(Address=="5600 ORMIDALE ST") %>%
  mutate(month=strftime(entrydate,"%m")) %>%
  mutate(Date=as.Date(paste0(year,"-",month,"-15"))) %>%
  ggplot(aes(x=Date)) +
  geom_bar(fill="brown") +
  plot_theme +
  labs(title="Fire hydrant on the 5600 block of Ormidale St",x="Month",y="Number of tickets")
```

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-8-1.png" width="768" />

It looks like the hydrant was a fairly low-key affair until 2014, when it dropped off the map and then took off around 2018. A [quick check with Google Street View](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.2332689,-123.0248187,3a,75y,66.64h,85.76t/data=!3m6!1e1!3m4!1susroxeU5VcCUA8FuH-KDvg!2e0!7i16384!8i8192!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) indicates that this sits in front of a new development. Checking through the timeline, the site [shows a house in May 2009](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.2332266,-123.0248471,3a,75y,66.64h,85.76t/data=!3m7!1e1!3m5!1sHjs5BZw_U3zbRxVIyNkOQg!2e0!5s20090501T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468), which has been [torn down by June 2012](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.2332058,-123.0248472,3a,75y,66.64h,85.76t/data=!3m7!1e1!3m5!1s_Can0hgwYMm21cA3YQ_nUg!2e0!5s20120601T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468), although it is still possible to illegally park in front of it. By [May 2014](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.2332318,-123.0248536,3a,75y,69.26h,82.76t/data=!3m7!1e1!3m5!1sRR2gC_GphGkZ1mRsGop3gw!2e0!5s20140501T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) and [July 2014](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.2332318,-123.0248536,3a,75y,69.26h,82.76t/data=!3m7!1e1!3m5!1sRR2gC_GphGkZ1mRsGop3gw!2e0!5s20140501T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) the neighbouring house is gone too and there is a hole in the ground with heavy machinery digging a foundation, but cars can still illegally park there. In [June 2015](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.233219,-123.0248525,3a,75y,81.67h,81.35t/data=!3m7!1e1!3m5!1sUVboNiTGz8TFUBdb-dR-QQ!2e0!5s20150601T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) and [May 2016](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.233219,-123.0248525,3a,75y,81.67h,81.35t/data=!3m7!1e1!3m5!1sUVboNiTGz8TFUBdb-dR-QQ!2e0!5s20160501T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) it's a full-on construction site with no options to park illegally any more. [August 2017](https://www.google.ca/maps/place/5650+Ormidale+St,+Vancouver,+BC+V5R+4P9/@49.233219,-123.0248525,3a,75y,81.67h,81.35t/data=!3m7!1e1!3m5!1sUVboNiTGz8TFUBdb-dR-QQ!2e0!5s20170801T000000!7i13312!8i6656!4m5!3m4!1s0x5486768d71570e31:0xf10ee71183a0f600!8m2!3d49.233085!4d-123.0245468) marks the end of construction and the first people seem to have moved in. And the parking tickets start ramping up, with many more people trying to park on the street now.

Lastly, let's get a high-level view on all the parking tickets issued throughout the city. But here things get a little ugly as we have to first geocode the blocks, and we will hide the code from now on.



<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/fire_fydrant_ticket_map-1.png" width="768" />

Especially the fire hydrants that are attracting lots of tickets should probably receive a review by the engineering department. While people should pay more attention to where they park, there are some straight-forward ways to make things easier. Simply paining the curb red will probably fix this for most hydrants and make sure they are free of obstructions and easy to access in case of a fire.


## More parking tickets
Fire hydrants are just one way to get a parking ticket. We can of course continue this and see what areas got the most overall tickets. And for what reason. We will concentrate on the tickets issued 2017 to 2019.






<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-11-1.png" width="768" />

The distribution of tickets across the city is fairly consistent across years, with total ticket counts peaking in downtown, as well as the central Broadway corridor and in Kits.

To understand these patterns better, it is useful to look at the top reasons parking tickets have been issued.

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-12-1.png" width="768" />

The presence of parking meters clearly plays a role in parking tickets with a total of 596,944 out of the 1,074,220 infractions referencing some kind of violation involving a parking meter.

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-13-1.png" width="768" />


There seems to be a clear relationship between the number of tickets and the number of parking meters in each area. We can normalize the meter-related parking tickets by the number of meters in each area to give us a count on the average number of tickets per meter in each of the areas.


<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-14-1.png" width="768" />

This shows a much more uniform pattern, with a clear outlier in Strathcona which might be worth looking into further.





Now that we have some understanding of meter-related tickets, we can take a look at the remaining non-meter related tickets.

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-16-1.png" width="768" />

The remaining tickets distribute quite well over a range of categories.

<img src="/posts/2019-12-09-fun-with-parking-tickets_files/figure-html/unnamed-chunk-17-1.png" width="768" />

Geographically, highly ticketed blocks cluster in the downtown core and surrounding areas, and spill out along commercial corridors. One can't help but notice the correlation with meter locations, possibly due to ticketing officers focusing their efforts on those areas.

## Next steps
That's a wrap for tonight's quick run-through on how to use our new-ish `VancouvR` package to easily access Vancouver Open Data. As usual, the code is [available for anyone to download and adapt for their own purposes](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-12-09-fun-with-parking-tickets.Rmarkdown).
