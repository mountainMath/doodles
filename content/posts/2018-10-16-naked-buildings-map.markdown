---
title: Naked Buildings Map
author: Jens von Bergmann
date: '2018-10-16'
slug: naked-buildings-map
categories:
  - Vancouver
tags: []
description: 'Just buildings.'
images: ["https://doodles.mountainmath.ca/images/naked-building-map.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---







The other day the New Your Times did a [really fun story on buildings in the US](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html), and I was chatting about that with someone at the VPL last night. Which reminded me that I wanted to replicate that for Vancouver. So here we go.

There are several datasets for building data, and we have worked quite a bit with the City of Vancouver LIDAR generated data of 2009. We have mapped this on several occasions in the past, for example [to show building heights](https://mountainmath.ca/vancouver_lidar/map), or just [residential buildings to map building values](https://mountainmath.ca/assessment/split_map?zoom=15&lat=49.2509&lng=-123.1243&type=3&use3D=0&year=2017&units=[1,1]), and have used the building heights data in Vancouver and Toronto to make [building heights profiles](https://doodles.mountainmath.ca/blog/2018/05/11/building-height-profiles/) by distance from downtown.

[Robert White did a really nice building map too](http://maps.nicholsonroad.com/heights/).

Another great source, in many ways better for this project, is OSM building data. It's not very good at 3D data, but the footprints are pretty up-to-date.

I really liked the simplicity of the NYT map, so why not make yet another building map? These kind of "naked maps" can be quite revealing, and it reminds of the [naked bike maps from the WaPo WonkBlog](https://www.washingtonpost.com/news/wonk/wp/2015/04/01/bleak-maps-of-how-cities-look-using-only-their-bike-lanes/?noredirect=on) that we [also imitated](https://doodles.mountainmath.ca/blog/2015/04/01/bike-paths/), although it seems that my live maps did not survive my blog update. The [WaPo even made a quiz to have people guess cities by the naked bike maps](https://www.washingtonpost.com/news/wonk/wp/2015/04/03/quiz-can-you-identify-these-cities-by-only-looking-at-their-bike-lanes/?utm_term=.37f20c402ce1).


## Vancouver building footprints
This is a good opportunity to use the excellent [mapdeck package](https://github.com/SymbolixAU/mapdeck) that provides R bindings to deck.gl. The maps are interactive, you can zoom and pan, but they only cover the City of Vancouver. It may take a moment for the data to load.



<iframe src="/widgets/m1.html" style="width: 100%; height: 700px; border:0;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If you want to enjoy this in detail, head over to the [fullscreen version](/widgets/m1.html).

If you want some context, [here is another one with streets and street names](/widgets/m2.html).



<!--iframe src="/widgets/m2.html" style="width: 100%; height: 700px; border:0;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe-->

## OSM buildings
We do have another source of buildings: Open Street Map. And that data comes tiled on most basemaps. With modern vector maps it's easy to make a map with [just the buildigns](/widgets/m3.html), but the disadvantage is that the buildings are only visible when zoomed in quite closely, vector tiles at higher zoom level typically don't come with the buildings data.




<!--iframe src="/widgets/m3.html" style="width: 100%; height: 700px; border:0;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe-->


The problem here is that the buildings disappear when zooming out, that's because the data is served as vector tiles, and buildings are omitted for higher zoom levels.

One way around that is to download the buildings from osm first. We quite like [Geoff Boeing](https://twitter.com/gboeing)'s [OSMnx package](https://github.com/gboeing/osmnx), so that gives us a chance to try out the better python integration in R notebooks in RStudio 1.2. Things are still not as smooth as one would like, and I could not figure out how to pass binary geographic data from python to R, but transforming to geojson gets the job done.












<iframe src="/widgets/m4.html" style="width: 100%; height: 700px; border:0;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Again, you can also [view this map fullscreen](/widgets/m4.html). The advantage of grabbing the data form OSM is that this immediately generalizes to everywhere where we have OSM building data.

As always, the code for this post is [on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-16-naked-buildings-map.Rmarkdown). If you want maps for other cities in Canada or elsewhere in the world, just grab the code and modify it to your liking.
