---
title: Census Week
date: 2016-05-02
categories:
  - CensusMapper
slug: census-week
author: Jens von Bergmann
tags: []
description: 'New data is on the way.'
featured: 'census.jpg'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---
At CensusMapper we are super excited about Census Week 2016. Data is increasingly getting incorporated into local and
regional decision making. At CensusMapper we have been working to facilitate this by making this wealth of information
more accessible to everyone. To celebrate Census Week 2016 we have updated CensusMapper with 2006 census data for easy
comparisons with the 2011 data. And we have given CensusMapper a face lift by adding a histogram widget that interacts
with the mapping data. Watch for more exciting updates this week or read on for a sneak peak!

<!-- more -->

## 2006 Census
<a href="http://http://censusmapper.ca/maps/37" target="_blank"><img  src="/images/affordability2011.png"  style="width:50%;float:right;margin-left:10px;"></a>
<a href="http://http://censusmapper.ca/maps/293" target="_blank"><img  src="/images/affordability2006.png"  style="width:50%;float:left;margin-right:10px;"></a>
We re-worked the backend to make it easy to add and map older censuses. And of course the 2016 census, once it becomes
available. At the first step, this allows side-by-side comparisons between different census years through our map-based
interface. As we explore this further we will add better ways to simultaneously browse two difference censuses, and we
will add a way to map data from two censuses on one the same map. Apart from some technical challenges that we know how
to handle, this also presents challenges when directly comparing the long form census to the 2011 NHS, which had different
collection methods that introduced biases that can be of the same magnitude as the changes one may want to measure.

## Widgets
At CensusMapper we are all about interaction. We love exploring data visually, and our dynamic zoomable maps make browsing
census data very easy. But the maps are just scratching the surface. Often it is also usefuly to view a simple graph. That's
where the graph widgets come in, the first of which is the histogram that dynamically shows a histogram of the data visible
in the current map view.
<a href="http://censusmapper.ca/maps/76" target="_blank"><img  src="/images/animated_rent.gif" style="margin:10px;"></a>

And of course the widget is fully linked with the map. Hover over a map region, and it will show where the mapped value fits into
histogram. Pan and zoom and the histogram updates automatically. The other way around, hover over a histogram bin and the
corresponding regions on the map get highlighted. That makes exploring the data so much easier.

## Make your own maps
We will roll out basic map making capabilities for everyone later this week. How will this work? Census data is huge, so
it won't go completely without pain. But we try to make it as easy as possible. Once the new "Make a Map" option becomes
available you can browse through the list of census variables and simply select which one you want to map. You will have
the option to map the value or, if it makes sense, the value as a percentage of a "parent" variable.
<a href="http://censusmapper.ca" target="_blank"><img  src="/images/animated_simple.gif" style="margin:10px;"></a>

A click of the mouse and you have a new map. Head over to the colour scheme picker and select the colour cutoffs to customize it.
You can even log in and save the map and write your own map story for the side bar, so that you can share and interactive
version of your map online. We can't wait getting census data into everyone's hands!

<script>
function resetImages(){
    $('img').each(function(img){
        imgsrc = $(img).attr('src');
        if (imgsrc.slice(imgsrc.length-4)=='.gif') {
            $(img).attr('src', '');
            $(img).attr('src', imgsrc);
            
        }
    });
    setTimeout(function(){
        resetImages();
    },25000);
}
setTimeout(function(){
    resetImages();
},25000);
</script>
