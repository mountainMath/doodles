---
title: How to make a bike map
author: Jens von Bergmann
date: 2015-12-13
categories:
  - OSM
  - bikes
  - Mapzen
slug: how-to-make-a-bike-map
tags: []
description: "Modern Web Mapping Technology Meets Bikes"
featured: 'bike-map.png'
images: ["https://doodles.mountainmath.ca/images/bike-map.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Here come some general thoughts on bike maps. Not throught through yet, just jotting down some ideas so that I don't
forget and maybe to start a discussion.

Bike enthusiasts, OSM folks and mapping technology wonks read on!
<!-- more -->

## Why make a new bike map?
Plainly put, I don't like a lot of the bike maps out there. Time for my little bike map rant:
 
1. Lots of maps don't accomplish their core mission:
accurately map bike infrastructure. For example, when in real life a bike lane vanishes 100m in front of an intersection
and reappears 100m after the intersection, leaving cyclists exposed right where protection is needed the most, most
bike maps will mark the entire section as having a bike lane. 
2. Most bike maps focus on the wrong issue. They focus on physical infrastructure, as a cyclist I am interested in
cycling comfort level. Can I take my 6 year old along that route? Can I cycle leisurely or will I feel hastened by a
car breathing down my neck? Will I arrive at my destination relaxed or will I be riled up by 3 near misses and 5 drivers
swearing at me? Some of these questions can be answered by mapping infrastructure. A physically separated bike path will
give me the comfort I need to bing my 6 year old and enjoy my ride. But when it comes to "bike lane" or "shared road"
designations, I have no idea what it will feel like until I get there.
3. Most bike maps have not yet made the transition from paper/PDF based maps to clickable and zoomable maps that can be
easily consumed on the go.
4. Most maps are static, they don't adapt to the needs of the user. Why do I have to deal with 5 different colors and
3 types of shading when reading a bike map, when all I want to know is if I can bring my 6 year old along for the ride.
I want an "AAA" button that fades out all routes that are not suitable for all ages and abilities. For that purpose I
don't care if a road has infrastructure like a bike lane wedged between parked cars and 50km/h traffic. If we absolutely
have to ride that way it will be on the sidewalk.

## How to make a new bike map?
First let's start with examples of how other have tried to solve these problems. Probably one of the best maps out there
is the [Capital Regional District Bike Map](https://www.crd.bc.ca/docs/default-source/crd-document-library/maps/transportation/bikemap2014-frontback-web.pdf?sfvrsn=8).
I chatted with [Corey](https://twitter.com/Burgundavia) who worked for CRD on these maps on how it was done. They collected all the bike infrastructure
in the region by contacting all the municipalities. <img  src="/images/victoria.png" style="width:50%;float:left"> Then they meticulously
checked that what the municipalities reported actually existed on the ground.  Consider Fort road on their bike map where they accurately show the bike lane
cutting out. And they added in shortcuts and connections
that the municipalities did not report on, like a short section of footway that may technically require walking the bike
but shortcuts out of a suburban cul-de-sac maze.

Next the CRD map does not only map infrastructure, but color-codes it to show cycling comfort. <img  src="/images/victoria-legend.png" style="width:50%;float:right">
This gives me a good idea how comfortable the rider will feel. Unfortunately all that complexity starts to make it difficult to
read the bike map.
 
That's where technology could come to the rescure. The CRD map is a PDF map and suffers the usual limitations that come
with it. The map cannot adapt to the needs of the reader. So how about moving the map online and letting the user decide
how to display it?

## Bike maps that adapt to the user
The [Washington Post Wonkblog](http://www.washingtonpost.com/blogs/wonkblog/wp/2015/04/01/bleak-maps-of-how-cities-look-using-only-their-bike-lanes/)
had an excellent feature mapping only the bike infrastructure, nothing else. And for good measure, they removed the
shared streets bike infrastructure. The rational was that in most cases, comfort level on shared street bike routes is really no different from
cycling on a parallel road. Inspired by that I decided [map Vancouver and a couple of other cities](/blog/2015/04/01/bike-paths/)
and I added in some button to allow selectively turning on or off typed of infrastructure.
<iframe src="/html/bike_paths.html?fh=50&nh=true" width="50%" height="300" style="float:left;"></iframe>
That's getting one step closer to adaptable bike maps, but it is still missing the main point that as a cyclist I am
most interested in comfort level, and infrastructure type is only a proxy for that. And a poor one in many cases.

## Inspiration
Not convinced we need a new bike map? Let's draw on some local (for me) maps that inspired this effort. 

UBC Campus Planning [keeps tweeting out a bike map](https://twitter.com/ubc_candcp/status/662027568204357633)
that lists several dangerous roads as "designated on street cycling routes", including an unlit divided 4 lane highway
with a posted speed limit of 60km/h and typical traffic speeds significantly exceeding that. And all of that apparently
aimed at people that don't cycle to campus yet but are considering doing so.
  
TransLink just [updated their bike map](http://www.translink.ca/-/media/Documents/cycling/cycling_routes/full_maps/TransLink%20Regional%20Cycling%20Map%20West.pdf)
and marks said highway as "recommended by cyclists". The do acknowlege that the road "does not have special treatment
for cyclists". So why include it on the map? Filling in the the gaps in the cycling network should happen in real life,
not just on the map.

Even HUB keeps [marking Wesbrook Mall north of Agronomy as "existing cycling route"](https://bikehub.ca/about-us/our-positions/ungapthemap)
when in real life it is everything but that.

## How to make a bike map
So how should we make a bike map? I was always thinking about setting up my own database and somehow adding and rating
infrastructure. Then [Alex](https://twitter.com/alexwarrior) decided to start making a bike
map for the UBC area. And he chose the most straight-forward path: Editing Open Street Map data. That way the edits are
immediately (better: after their map tile refresh cycle) available online, for example on
[OpenCycleMaps](http://www.opencyclemap.org/). The map is easily accessible
on the go, it zooms and scrolls. It is missing a 'locate me' button (which is easy to fix). The look and feel is a little
dated. But most importantly, it does not adapt to the user's needs. I can't ask it to display the "dad's version" of the
cycle network, showing me only pieces that I will be comfortable cycling with my 6 year old.

Technology has moved along since that map was built. A very easy way to solve these issues is to
utilized the awesome tools built by the folks at [Mapzen](https://mapzen.com). Their
[tangram mapping engine](https://mapzen.com/projects/tangram) taps into their 
[OSM vector tile service](https://mapzen.com/projects/vector-tiles) to make flexible mapping of bike data a breeze. And
to top things off, they offer very easy to use and extremely powerful ways to style the map. Only problem: Mapzen's
OSM extracts don't have cycling information. Not a big problem though, we can just pull them out separately and add
them on by hand. Here is an example where only the bike routes near UBC are added.

<iframe src="/html/bike_map.html" width="100%" height="550"></iframe>
[Full screen view](/html/bike_map.html)


One small drawback is that WebGL, the technology Tangram is based on, is not available for much of the windows world.
WebGL requires modern browsers (IE9 does not count) and also modern hardware/graphics card drivers. A couple of years
old windows machine will likely not be able to render WebGL no matter what browser you use. But the main target is
mobile, and iOS and most android won't have a problem with WebGL. If really needed, could add a fallback or use older
and web technology to make the map, but Mapzen's Tangram makes it so ridiculously easy to make and style nice maps...

## The main problem left to solve
One major problem left. OSM does not have and "cycling comfort" tags right now. There are tags for physical infrastructure,
and in some cases the comfort level can be correctly inferred from those. But in many cases it can't.

There are two ways around that. One could
keep those tags in a separate file, but that becomes difficult to maintain when OSM features change. Or one can add the
tag to the OSM data. That way better bike maps can scale easily, and the information can also be used in OSM-based
routing services where their real value lies.

Not sure which is the way to go here, a similar tag
[has been proposed before](http://wiki.openstreetmap.org/wiki/Proposed_features/bike_safety) but apparently did not
go anywhere. Looking at the [tag guidelines](http://wiki.openstreetmap.org/wiki/Any_tags_you_like) the fact they these
new tags are very useful for routing seems to speak for adding them to OSM, but the fact that they are measuring
something explicitly non-geographic by going beyond the already existing physical infrastructure markers might mean
they are better kept in an external database. Will have to think this over, feedback appreciated.


## Where to go from here.
The logical next step is to add routing. Again, Mapzen's [flexible routing service](https://mapzen.com/projects/valhalla/)
seems to be a natural match. Also, adding editing capabilities right onto the map would be quite useful. The bike map is
where data issues are best seen, and saving the step to head over to OSM to fix it (after creating an account) and then
waiting for the data to update on the map seems like a workflow that will discourage wide participation.

We follow up by [exploring routing](http://doodles.mountainmath.ca/blog/2015/12/14/routing/)
and [data quality](http://doodles.mountainmath.ca/blog/2015/12/15/bike-data/).
