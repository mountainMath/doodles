---
title: Bike Share Map
author: Jens von Bergmann
date: 2016-07-26
categories:
  - OSM
  - Mapzen
  - bikes
slug: bike-share-map
tags: []
description: "We weren't fond of Mobi's map, so we made our own."
featured: 'bike-share-image-large.png'
images: ["https://doodles.mountainmath.ca/images/bike-share-image-large.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

It is no secret that we at MountainMath like bikes. And maps. And open data and sharing. We guess you know where
this is going.

Vancouver has finally gotten a bike share system, and we are loving it. So we took the occasion to take our
[old bike infrastructure maps](http://doodles.mountainmath.ca/blog/2016/05/16/my-global-bike-map/), polished them up a
bit using [Mapzen's bike map style](https://mapzen.com/blog/targeted-editing-cycleways/) and adapted it for our purposes.

The result is our <a href="https://mountainmath.ca/mobi" class="btn btn-primary">Vancouver Bike Share Map</a>. (Fair
warning. While this map works great on your iOS and Android phone, it may not work on old desktop computers.)

Add it to your phone home screen, and it will be right at your fingertips when you need it!

<!-- more -->

<a href="https://mountainmath.ca/mobi" target="_blank"><img  src="/images/bike-share-image-large.png"  style="width:50%;float:right;margin-left:10px;"></a>
And we threw the [Mobi Bike Share](https://www.mobibikes.ca/) station data on top. That last part turned out a little
more messy than expected, the API that was [linked at the Bike Share Research website](https://bikeshare-research.org/#bssid:vancouver)
is broken, and the Mobi redirects are malformed and no guesswork would yield a working API. Luckily
the [bike share map wizard](https://twitter.com/oobr) on 
Twitter [had the answer](https://twitter.com/oobr/status/756211668141547520) how to tease out the station data. And some
of the stations are duplicate, so it took some time to clean up the data properly.

We tried to keep our map as simple as possible. This iteration highlights three types of infrastructure, separated, bike lanes and
shared lanes. The map has some hill-shading for reference, and at high zoom level it shows some bike points-of-interest.
The rest is kept clean and simple.

For the stations, we weren't fans of the icons and presentation used on many other maps. We decided on a simple
donut-style presentation to visualize available bikes to check out and empty slots to return them. This is the most crucial
information for a bike share user. Where can I check out a bike, and where can I return one. There is nothing more frustrating
than having to go to a meeting and being unable to check the bike back into a station because it is full. The map gives
a quick visual guide for this, although the Mobi data lags quite a bit right now. Hopefully that will change in the future
once they get their API up and running.

On touch/hover the bike stations expand to give exact counts and the station name. Station sizes vary and counts can be
useful at times. We opted to keep the icon size independent of station size, trading added information for a cleaner
presentation by only revealing it on user interaction.

This map focuses on the bike share user. If you are more interested in stats and overview of various bike share systems
you want to head over to [Oliver O'Brien's excellent bike share map](http://bikes.oobrien.com).

## Bike Infrastructure
The bike data we are using comes straight out of [OpenStreetMap](http://www.openstreetmap.org/search?query=vancouver%2C%20bc#map=12/49.2497/-123.1193).
That has some disadvantages as it can be less accurate
as the city bike data. But it also has a huge advantage. Anyone can edit OpenStreetMap to fix incorrect or missing
infrastructure designations. We kept some of the targeted editing capabilities intact on our map, if you view it on desktop
and *shift-click* anywhere, it will take you right into the OpenStreetMap editor at the position you clicked so you can
edit the infrastructure there.

If you are planning on helping out and improve OpenStreetMap bike data, you may want to read the
[excellent targeted editing post from Mapzen](https://mapzen.com/blog/targeted-editing-cycleways/) and use their
[map to brouse OSM tags](https://mapzen-data.github.io/te-bike-lrm-mapzen/#point0lat=49.2820&point0lng=-123.1204&point1lat=49.2708&point1lng=-123.1341&mode=bicycle).
You may notice the similarity to our map, we borrowed heavily from that one. Updates you make will take between 1 to 4
hours before they percolate through into our map.

Data in OpenStreetMap is automatically accessible to other services too, so improving OSM will help out everyone. And not
just by making the maps better, routing gets better too!

And the other big advantage of OpenStreetMap is that our map is automatically global. Right now we still focus on
Vancouver, and we restrict the search function to Vancouver addresses. But in principle the infrastructure part of the
map works for anywhere on the planet. 

## Next Steps
Adding bike routing is an obvious next step. And there are lots of other refinements we can think of. 

Hill shading has some issues right now, only some
hill aspects are visible right now. We may have to add some colour to hill shading to visualize all hill aspects better,
but that requires care to ensure the map retains it's clean looks. 

The next step in the map evolution is to make a multi-modal map, toghet with multi-modal routing. The map will highlight
infrastructure based on what modes are preferred, and routing will do routing for these modes.

Using the great work of the [Bike Share Research website](https://bikeshare-research.org) we can also parse the feeds
for all global bike share systems registered there and expand the bike share map to other systems around the world. 

## Feedback
Got ideas how to make the map better? Want some pointers how to adapt this map for your own purposes? Send us a tweet
or a message!
