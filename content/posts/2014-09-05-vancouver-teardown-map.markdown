---
title: Vancouver Teardown Map
author: Jens von Bergmann
date: 2014-09-05
categories:
  - Vancouver
  - Assessment Data
  - teardowns
slug: vancouver-teardown-map
tags: []
description: "Playing with Assessment Data"
featured: 'map_of_teardowns.png'
images: ["https://doodles.mountainmath.ca/images/map_of_teardowns.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

There has been lots of talk about old homes being torn down and replaced in Vancouver. The likeliest targets are houses
of relatively low value sitting on expensive land. So how many teardown candidates are there in Vancouver, and where
in Vancouver are they located? 

To answer this we use data from [Vancouver's open data catalogue](http://vancouver.ca/your-government/open-data-catalogue.aspx) 
to build an interactive map to explore the low end of the building stock. More specifically, we set a somewhat arbitrary
ratio of (assessed) house value to total (assessed) property value (house + land) of 5% and label everything below that
a "teardown candidate". 

The short answer is that almost one in three properties in Vancouver fall into this category. And they are distributed 
quite evenly across all of Vancouver with some areas like downtown looking a little better.

<!-- more -->

On the level of the individual property the "teardown candidate" designation might be unfair and somewhat inflammatory.
By our above definition, a million dollar house sitting on a 20 million dollar property is a "teardown candidate". In
some cases BC Assessment may have failed to properly account for recent renovations resulting in the building being
undervalued and more likely to show up as a "teardown candidate". And of course not every "teardown candidate" will be
torn down, other options may be preferable. Depending on circumstance extensive renovations may be the better option,
and the pervasiveness of "teardown candidates" suggest that many people in Vancouver are happy living in a house that
is worth less than 5% of the overall assessed value of the property.

To aid a more individualized look at properties we included the address, the assessed land and improvement values, the 
tax levy (CoV just added this information a couple of days ago), zoning information, the land area and the relative land
value. To display this information just hover your mouse over a property (or touch it on your mobile device). Opening a
second browser with a map with satellite imagery (or Apple maps) can provide additional context.

Take a look at the map and explore for yourself. You will need a reasonably fast computer and modern 
browser to enjoy the map, it contains lots of data and may feel quite slow on mobile devices.

<iframe src="/html/teardown_map.html" width="100%" height="500"></iframe>

[Full screen view](/html/teardown_map.html) 
