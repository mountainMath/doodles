---
title: Building Height Profiles
author: Jens von Bergmann
date: '2018-05-11'
slug: building-height-profiles
categories:
  - density
  - land use
  - Vancouver
  - Toronto
tags: []
description: 'Building heights by distance from city centre.'
images: ["https://doodles.mountainmath.ca/posts/2018-05-11-building-height-profiles_files/figure-html/building_height_profile-1.png"]
featured: 'building_height_profile_dual-1.png'
featuredalt: ""
featuredpath: "/posts/2018-05-11-building-height-profiles_files/figure-html"
linktitle: ''
type: "post"
---







[Jim](https://twitter.com/geographyjim) has been using the Copernicus building height data for select European cities to understand the height profiles of cities.
{{<tweet 994949659461341184>}}

We thought these were pretty cool. Sadly we don't have a dataset like this for Canadian metro areas, but we can hack together something similar using LIDAR survey data. Vancouver and Toronto have LIDAR derived building data available. It only covers the respective cities, not cover the whole metro area, although the Vancouver data includes Musqueam 2, the UBC area and Mitchell Island.

Not much work is needed to get the height profiles, just a tiny bit of data wrangling and the distance computation. We take Granville/Robson and King/Bay as the locations of the respective city centres.

<img src="/posts/2018-05-11-building-height-profiles_files/figure-html/building_height_profile-1.png" width="768" />

We should remember that Toronto has about than 4 times the size of Vancouver, and these graphs have a different x-axis scale. While Toronto has higher buildings downtown than Vancouver, on average Vancouver has taller buildings in the core. To better compare the two we can plot them on the same graph.

<img src="/posts/2018-05-11-building-height-profiles_files/figure-html/building_height_profile_dual-1.png" width="768" />

Here we cut off the axis and added a lot of opacity to better discern how the buildings group together. A point of caution is that the further out we go the more the graph will be affected by being constrained to city limits. In Vancouver we notice a gap and then clear uptick in average building heights, which is due to the UBC area being included in the data. Another caveat is that some buildings might be misclassified in the data. I am somewhat familiar with the Vancouver data that [I mapped a couple of years ago](https://mountainmath.ca/vancouver_lidar/map), and garages are also captured in the mix. I have not dug into the Toronto data, might be worthwhile to do that at some point.

It's interesting to see that in Vancouver the buildings are on average higher in the core, but lower outside the core, when compared with Toronto.

As always, the underlying code is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-05-11-building-height-profiles.Rmarkdown) if you want to reproduce or adapt it for your own purposes.







