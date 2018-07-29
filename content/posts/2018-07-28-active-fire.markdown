---
title: Active Fire
author: Jens von Bergmann
date: '2018-07-28'
slug: active-fire
categories:
  - OSM
  - geeky
tags: []
description: 'A quick look at active fire satellite data.'
images: ["https://doodles.mountainmath.ca/posts/2018-07-28-active-fire_files/figure-html/redding_fire_all-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---









The other day I saw a link to NASA active fire data fly by on Twitter. It's a satellite-derived world wide dataset at 375m resolution, where one (or several) polar orbiting satellites scan earth in the infrared band from which fire and fire intensity is computed.

With the [Redding fire in the news](http://www.latimes.com/local/lanow/la-me-carr-fire-redding-20180728-story.html) I decided to take the data for a test drive. And also try out the [gganimate package](https://github.com/thomasp85/gganimate) to watch the fire evolve over time.


![Animated Fire Map](/images/redding_fire-1.gif)

We highlighted the water features, it is interesting to see the fire jump the river. We also notice what looks like fire activity right on the water, this may be due to hot air and smoke being blown over the water and picked up by the satellite.

Lastly we layer all time slices on top of each other to get an idea of the total burnt area.

<img src="/posts/2018-07-28-active-fire_files/figure-html/redding_fire_all-1.png" width="864" />


As usual, the code is [abailable on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-07-28-active-fire.Rmarkdown) and should be easily adaptable to other locations.
