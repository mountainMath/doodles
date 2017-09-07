---
title: Interactive Isochrones
date: 2016-11-18
categories:
  - Mapzen
  - Isochrones
  - OSM
slug: interactive-isochrones
author: Jens von Bergmann
tags: []
description: 'Exploring Isochrones.'
featured: 'isochrone.png'
images: ["https://doodles.mountainmath.ca/images/isochrone.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Mapzen again upped their game by publishing their [Mobility API](https://mapzen.com/documentation/mobility). This is
super exciting for anyone interested in a whole range of mobility questions. A [question I have seen](https://twitter.com/dnproulx/status/799644235720900608) is how to adapt that
to specific needs. So here is a quick example how to customize walksheds.

<!-- more -->
All we do is set up a quick map that computes the 5 and 10 minute
walksheds when the user clicks on the map.

<iframe src="/html/isochrone.html#14/49.2775/-123.1292" width="80%" height="450" style="margin: 5px 10%;"></iframe>

To get a better view you can also
<a href="/html/isochrone.html" target="_blank" class='btn btn-default'>take the map full-screen</a>.

Feel free to just <a href="/isochrone.html" download>grab the html</a> and adjust it for your needs. Please go and
register for your [free Mapzen API key](https://mapzen.com/developers/sign_in) and replace the key in the downloaded
html file with yours. Refer to the [Mobility API](https://mapzen.com/documentation/mobility) to customize this for your
needs.

Here is the relevant code to generate the isochrones:
```
    var mapzenApiKey="<your api key>";
    var marker,isochrone;

    function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        };
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    map.on('click',function(e) {
        if (marker) marker.removeFrom(map);
        marker = L.marker(e.latlng).addTo(map);
        var json={locations:[{lat:e.latlng.lat,lon:e.latlng.lng}],costing:"pedestrian",contours:[{time:5,color:"006400"},{time:10,color:"006400"},{time:15,color:"006400"}]};
        var url='http://matrix.mapzen.com/isochrone?json='+JSON.stringify(json)+'&api_key='+mapzenApiKey;
        httpGetAsync(url,function(data){
            var geojsonFeatures=JSON.parse(data);
            geojsonFeatures.features.forEach(function(f){
                f.geometry.type="Polygon";
                f.geometry.coordinates=[f.geometry.coordinates];
            });
            if (isochrone) isochrone.removeFrom(map);
            isochrone=L.geoJSON(geojsonFeatures, {style: function(feature){return {color:'#'+feature.properties.color, opacity:feature.properties.opacity}}}).addTo(map);
        });
    });
```

Happy mapping.
