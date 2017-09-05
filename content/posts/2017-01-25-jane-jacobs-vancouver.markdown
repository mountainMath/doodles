---
title: Jane Jacobs' Vancouver
date: 2017-01-25
categories:
  - Vancouver
  - OSM
slug: jane-jacobs-vancouver
author: Jens von Bergmann
tags: []
description: 'Neigbourhood typologies within Metro Vancouver.'
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

Some time ago I saw [Geoff Boeing's excellent package](https://twitter.com/gboeing/status/816331801266262017)
to generate Jane Jacobs style street grid images. It's lots of fun to compare different cities that way.

It can be hard to represent one city by one square mile, so I thought it would be neat to use this
to compare different parts of Vancouver. Some common themes emerge for the central parts,
the more outlying areas display very differnet patterns.

<!-- more -->
<link rel="stylesheet" href="/css/custom.css">
So I [dropped a couple of points on a map](http://bl.ocks.org/d/88803d79ab2a3e637e2cce7fc151423d), downloaded
the geojson and ran the script below. These are the results:

<div class="jacobs"><img src="/images/jacobs/Downtown.png" ><p>Downtown</p></div>
<div class="jacobs"><img src="/images/jacobs/West%20End.png" ><p>West End</p></div>
<div class="jacobs"><img src="/images/jacobs/Grandview%20Woodlands.png" ><p>Grandview Woodlands</p></div>
<div class="jacobs"><img src="/images/jacobs/Kitsilano.png" ><p>Kitsilano</p></div>
<div class="jacobs"><img src="/images/jacobs/North%20Vancouver.png" ><p>North Vancouver</p></div>
<div class="jacobs"><img src="/images/jacobs/New%20West.png" ><p>New West</p></div>
<div class="jacobs"><img src="/images/jacobs/Surrey.png" ><p>Surrey</p></div>
<div class="jacobs"><img src="/images/jacobs/Metrotown.png" ><p>Metrotown</p></div>
<div class="jacobs"><img src="/images/jacobs/Richmond.png" ><p>Richmond</p></div>
<div class="jacobs"><img src="/images/jacobs/West%20Vancouver.png" ><p>West Vancouver</p></div>
<div class="jacobs"><img src="/images/jacobs/Langley.png" ><p>Langley</p></div>
<div class="jacobs"><img src="/images/jacobs/Port%20Moody.png" ><p>Port Moody</p></div>


If you want to make your own, just grab the [lightly adapted](https://github.com/gboeing/osmnx/blob/master/examples/09-example-figure-ground.ipynb) code below.
Yes, it is that easy.

### Code to generate the images

    # jane_jacobs.py
    import geojson
    import osmnx as ox
    from IPython.display import Image
    ox.config(log_file=True, log_console=True, use_cache=True)

    file="data/van_cities.geojson"
    img_folder = 'images'
    extension = 'png'
    size = 350
    dpi = 90

    cities=geojson.loads(open(file,"r").read())
    for city in cities.features:
        place = city.properties['name']
        point = (city.geometry.coordinates[1],city.geometry.coordinates[0])
        fig, ax = ox.plot_figure_ground(point=point, filename=place)
        Image('{}/{}.{}'.format(img_folder, place, extension), height=size, width=size)
