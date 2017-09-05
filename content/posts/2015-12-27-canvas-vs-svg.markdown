---
title: Canvas vs SVG
author: Jens von Bergmann
date: 2015-12-27
categories:
  - CensusMapper
  - geeky
slug: canvas-vs-svg
tags: []
description: "Web performance tuning"
featured: 'chrome.png'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

## CensusMapper Behind the Scenes
The idea behind [CensusMapper](https://censusmapper.ca) is that it takes away all the technical barriers to dealing with census data. So how does
CensusMapper work behind the scenes?

## CensusMapper Data Workflow
<!-- more -->
The general setup is quite simple. We use the lean javascript open mapping platform [leaflet](http://leafletjs.com)
as the base for mapping information. Leaflet handles the logic of dealing with zoom and pan and keeping track of the
geographic boundaries that should be mapped. That information gets then passed on to the CensusMapper servers.

CensusMapper will then send the appropriate census geographic polygons to the browser for leaflet to display. Once the
geographic data is available for mapping, some custom code checks what kind of information the user wants to display and
requests the census data required to make the map. The census information is then assembled on the server, sent down
and attached to the polygons and drawn
on the browser window within leaflet. This two-tier process allows the highly dynamic mapping in CensusMapper where the
data-heavy geographic polygons are kept separately thus can be cached and re-used.

## Drawing Census Data
There are a number of ways how we can display census data in the browser. At CensusMapper we have played with three
different technologies to map data that vary in performance and browser support. They all have in common that they
won't run on Internet Explorer 8 or earlier, but we have just about reached the point in time where it is acceptable to
ignore IE8- in products meant for the "general internet audience".

### SVG
[SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) is what our maps have been using so far. SVGs are fairly high level, which means it's very little work 
to implement and map information. One simply passes a polygon to the browser, tells it how to color it, and the browser
takes care of the rest. SVG elements can easily be styled via CSS, so there is essentially no work involved to deal with
highlight on hover, scaling for retina displays, patterns for census data quality flags, etc. We use
[d3.js](https://github.com/mbostock/d3) to attach the geographic and census data right to the SVG elements for easy
manipulation.

While mapping data this way is very easy, for CensusMapper there are two problems. 

1. We are restricted in how we can display information by the capabilities of SVG. 
2. SVG rendering is done by the browser, and not all browsers are equal. Most importantly, SVG rendering in Internet
Explorer is excruciatingly slow. So slow, that CensusMapper becomes essentially useless within Internet Explorer. We
felt compelled to add a warning messeage that displayed when people opened CensusMapper with Internet Explorer. And
when you do that, that's a sure sign that your app has a serious problem.
![Browser Warning](/images/chrome.png)
So how to get around those issues? Enter Canvas.  


### Canvas
[Canvas](https://en.wikipedia.org/wiki/Canvas_element) offers a way to draw images in a browser. Unlike SVG, the drawing has to be done "by hand". And the result is just
an image, with no clear way to tell where it came from. There is no way to attach any information to individual
structures drawn on a canvas. All the logic for highlight on hover, figuring out what data is associated with the mouse
position, dealing with retina displays, etc. needs to be added by hand.

On the upside, a good canvas implementation is a lot faster than SVG. And it opens the door to changes in how the data
is handled that bring additional performance improvements. In particular, we can now chop up census polygons and render
the pieces separately, greatly cutting down on the size of the downloaded data, as well as the complexity of the
polygons that get rendered. And the performance improvements are noticeable across all browsers and platforms.

At the end of the day it is actually not that much work and we flipped the switch on this just before the Christmas
break. CensusMapper is now running using canvas instead SVG for
the main maps. We
kept the look and feel the same, so unless you dig into the code you won't notice the difference.
Some parts of CensusMapper still utilized SVGs, like the d3-based
[Census Wheel](http://doodles.mountainmath.ca/blog/2015/10/24/census-drilldown/).
  
### WebGL
[WebGL](https://en.wikipedia.org/wiki/WebGL) also draws on a canvas element, but the work is offloaded onto the GPU (graphics processor) giving enormous
speed improvements. Regular canvas rendering is fast enough for our purposes, but with WebGL we can do more complex
renderings that previously we could not even dream of: [Shaders](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)
and Interactive 3D data maps. We had previously
[toyed with 3D data visualization](https://mountainmath.ca/census3) to explore Vancouver's household density in 3D using Three.js,
but did not pursue this further because of the complexities of writing code for navigating a Canada-wide map. Then we came 
across the super-customizable 3D open mapping platform built by [Mapzen](https://mapzen.com/projects/tangram/), and that
suddenly made it extremely easy to do interactive 3D data mapping live in the browser. A quick test 
[using Vancouver's open LIDAR generated building height data](https://mountainmath.ca/vancouver_lidar/map) showed how easy Mapzen's
tangram engine is to use.
 
After digging deeper into tangram, and with help from the friendly people at Mapzen, we figured out a way to fit
CensusMapper's two-stage data workflow into tangram's mapping engine. The result are real-time 3D maps where height
and color of each geographic area can be independently (and dynamically) controlled. Here is an example where mouseover
trigged the area west of Coal Harbor to 'pop up'.
![webGL](/images/webGL.jpg)

At the same time we gain the ability to easily pull in all kinds of other data and map it. On our canvas or svg maps we
added regular image tiles, either a road and label's overlay or a base map (which then requires opacity to be added to
the census data that is mapped on top of that) as orientation aid. Short of baking our own image tiles we have very
little control over the look and feel of this. With Mapzen's tangram we can very easily pick and style individual
geographic objects from Mapzen's OSM vector tile server, resulting in crisp and clear maps. In the above example we
decide dynamically what level of roads to render, how to style them, what labels to display and we also added bodies of
water, where we filter by size depending on the zoom level. 

At this stage it is still an ongoing project to get this production-ready. One obvious obstacle is that WebGL browser
support is still lagging. And on top of that it also requires updated graphics card drivers, which is a big problem on
windows machines that are already a couple of years old. So for now we still need to have a plain canvas or svg fallback.

And then there are the details that need to get worked out. 3D maps sounds great, but it will take us some time to figure
out how to best utilize this in thematic maps. But even without utilizing 3D capabilities, the dynamic shaders and increased
rendering performance are already pushing the boundary of what's possible in web maps. 
