---
title: Sea Level Rise
author: Jens von Bergmann
date: 2016-10-02
categories:
  - Mapzen
slug: sea-level-rise
author: Jens von Bergmann
tags: []
draft: true
description: 'Playing with elevation data.'
featured: 'van_sea_level.png'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---


  Sea level rise comes up regularly in coastal cities. And nowadays every costal area,
[including Vancouver](http://www.env.gov.bc.ca/wsd/public_safety/flood/pdfs_word/cost_of_adaptation-final_report_oct2012.pdf)
has their flood assessment and detailed plans on how to deal with sea level rise, although some plans are
[more interesting than others](http://www.sfu.ca/rise/entries/Prescribe-mountains.html). 

The web is awash with sea level rise maps, some static, some interactive, [some global ones](http://geology.com/sea-level-rise/)
and some [national maps](https://coast.noaa.gov/slr/). Data sources range from high detail LIDAR data to satellite data
and other datasets. When Mapzen put out their [global elevation tiles](https://mapzen.com/blog/elevation/) I gave it a quick
test drive to check it out and then forgot about it. When the topic inevitably 
[bubbled up on my twitter feed](https://twitter.com/toddsmithdesign/status/782273909265620992) I decided to do some
minimal styling using Mapzen's [ridiculously easy to use Tangram map engine](https://mapzen.com/products/tangram/) and
added a search bar to make it easier to jump to different locations on the globe.
 
That's all there is to this. Check out <a class="btn btn-default" href="https://mountainmath.ca/elevation/map?sea_level=10&zoom=12&lat=49.2629&lng=-123.1176">yet another interactive global seal level rise map</a>.
<a href="https://mountainmath.ca/elevation/map?sea_level=10&zoom=12&lat=49.2629&lng=-123.1176" target="_blank"><img  src="/images/van_sea_level.png" style="width:50%;float:right;margin-left:10px;"></a> 

The preset for the sea level rise is 10m, which is a little excessive. Current predictions hover around 1m until 2100. But for hazard mapping we are not interseted in changes to normal null, but typically look at a king tide together with waves and possibly rain-based flooding, which can add up considerably and will get even higher with sea level rise.

Adjust the slider to see how the flooded areas change depending on the simulated sea level rise.

The map is global, and it's worthwhile to compare Vancouver's sea level threat to that of other places, for example
[Holland where 21% of the country is below current sea level](https://mountainmath.ca/elevation/map?sea_level=0&zoom=9&lat=52.8774&lng=5.5701),
not counting any future sea level rise.
