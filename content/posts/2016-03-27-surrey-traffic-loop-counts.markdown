---
title: Surrey Traffic Loop Counts
date: 2016-03-27
categories:
  - Surrey
  - Transportation
slug: surrey-traffic-loop-counts
author: Jens von Bergmann
tags: []
description: 'Exploring induction loop counter data.'
featured: 'surrey_traffic.png'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Surrey published a [beta version of their traffic loop counts](http://data.surrey.ca/dataset/ff9c223a-57e2-49b8-900f-e4b9d9423b4b),
which is pretty awesome. Real life traffic data is very exciting, and there are lots of fun things one could do with that.
So last night I decided to take a look and make a quick map. Nothing exciting yet, just to feel may way around
what's there.
<!-- more -->
To keep things simple I again took advantage of the [awesome Tangram mapping enginge](https://mapzen.com/projects/tangram/)
and turned it onto the traffic loop data. All I did was plot circles for each traffic loop with the area proportional to
the count. Just to get an idea what the traffic data looks like.

<iframe src="/html/surrey_traffic_map.html" width="100%" height="550"></iframe>
[Full screen view](/html/surrey_traffic_map.html)

## What do we see?
Really not much at this point, it's just a snapshot of one hour of traffic on March 24 between 9am and 10am. But it's pretty
obvious where to go from here. One should add some dynamic way to select the time frame. And add some animations to better
represent car traffic and the direction in which it is moving. The cool [tron demo](https://tangrams.github.io/carousel/?tron#15/49.1055/-122.8244)
simulates traffic movement, maybe the loop count data could be massaged in a way to give a more accurate representation
of actual traffic.

And of course one could start to run some analysis. The fifteen minute aggregates which the server sends down are a little rough for doing some
traffic flow analysis, but I am sure that together with the lane direction information attached to the traffic loop geographic
data something interesting can be done.

## Hickups and feedback
There were a couple of hickups along the way. The Surrey Open Data API sends down GeoJSON data in NAD 83 UTM Zone 10
instead of the default WGS84. Which is just fine, but when using the Mapzen Tangram engine we need to transform
it into WGS84. The fancy way would be to do that dynamically after directly consuming the Surrey API, but we were lazy
and just downloaded and transformed the file. So now we have the loop counter locations and can map them.

Next up, we want to add the traffic count data to the loop counter locations. Ideally we want to consume the Surrey open
data API and link it with the geographic loop data, but the API does not set the `Access-Control-Allow-Origin: *`
http header to allow cross-origin requests to consume the API directly from their web app. Again, no big deal when building a small
testing app, we simply downloaded the traffic loop counts for noon on March 23 and threw them up on our server.

Pretty smooth overall for a first run. Timestamps are a little funny, they are in local time. While easy to interpret, this
will cause problems when analysing data around daylight savings time changes.

Lastly we needed to add a quick hack to the Tangram mapping engine. For some reason the [transform](https://mapzen.com/documentation/tangram/sources/#transform)
function does not get called when adding static (non-tiled) data sources. But that was easy to fix, although it took some
sloothing to track down.

At this point it seems that not all traffic loops are hooked up to the API yet. Going through the data, on the March 23
there are only a handful of traffic loops active, on the 24th the number of active loops jumps up significantly.
I also plotted the traffic loop locations without data (in yellow), just to give
and idea what will become available. Curious to see where this will go once out of beta mode.

## Want to make your own map?
It's pretty easy. Just grab the html file from the "full screen" link above and download the [Tangram scene file](/surrey_traffic_scene.yaml)
and add your own twist to the map. Also grab a copy of the tangram engine [with the quick-fix for the transform function](http://doodles.mountainmath.ca/javascripts/tangram.debug.js).

