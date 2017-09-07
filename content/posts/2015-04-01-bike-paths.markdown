---
title: Vancouver Bike Paths
author: Jens von Bergmann
date: 2015-04-01
categories:
  - Vancouver
  - bikes
slug: bike-paths
author: Jens von Bergmann
tags: []
description: "Naked bike maps"
featured: 'naked_bike_map.png'
images: ["https://doodles.mountainmath.ca/images/naked_bike_map.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Motivated by the excellent [Washington Post Wonkblog](http://www.washingtonpost.com/blogs/wonkblog/wp/2015/04/01/bleak-maps-of-how-cities-look-using-only-their-bike-lanes/) I
mapped Vancouver's bike infrastructure. Looks good at first, but when you take out the 'fake' "Local Street" bikeways more in line with Wonkblog's methodology it's looking pretty
bleak in large portions of the city.

Of course the devil is in the details and infrastructure cannot just be judged by how it's labeled. If one were to look for 8-80 infrastructure, then the separated lanes
would make the cut. Some of the bike lanes would be marginal, but most would probably make the cut. Although I can't say that I would be particularly keen to let an 8yo cycle on
some of them.

Vancouver's "Shared Lanes" are not for the faint of heart. They have 50 speed limits on multi-lane roadways
and feature sharrows to make it a little easier for cyclists to 'take the lane'. In some cases cyclists share a lane with
the buses, which is a little better.

The local streets are mostly car tunnels like the 'Off-Broadway' and won't qualify as 8-80, but there are some exceptions like
the local street portion of Pt. Grey Rd, where cycling is rather pleasant.

<iframe src="/html/bike_paths.html?fh=50&nh=true" width="100%" height="580"></iframe>

[Full screen view](/html/bike_paths.html)

Methodology is simple, it's just the city's bike path data from [their open data catalogue](http://vancouver.ca/your-government/open-data-catalogue.aspx). The data
comes with two fields, 'name' and 'type'. The 'type' was used for the checkboxes at the bottom to selectively turn different
bike lane types on or off and the 'name' will be displayed on hover.

## Update

### Some more <strike>Canadian</strike> cities:

[Calgary on street](http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary,street&type=BICYCLE_CL&dataUrl=http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson),
[Calgary pathways](http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary,pathways&type=PRIORITY&name=LOCATION_D&dataUrl=http://doodles.mountainmath.ca/data/YYC_Path_BikeRoutes.geojson),
[Calgary trails](http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary,trails&type=TYPE_DESCR&name=LOCATION_D&dataUrl=http://doodles.mountainmath.ca/data/YYC_Trail_BikeRoutes.geojson),
[Victoria](http://doodles.mountainmath.ca/html/bike_paths.html?city=Victoria&type=FullDescr&dataUrl=http://doodles.mountainmath.ca/data/VicBikeRoutes.geojson),
[Montreal](http://doodles.mountainmath.ca/html/bike_paths.html?city=Montreal&name=PROJET_NOM&dataUrl=http://doodles.mountainmath.ca/data/MontrealBikeRoutes.geojson),
[Toronto](http://doodles.mountainmath.ca/html/bike_paths.html?city=Toronto&type=CP_TYPE&dataUrl=http://doodles.mountainmath.ca/data/TorontoBikeRoutes.geojson)
[Portland](http://doodles.mountainmath.ca/html/bike_paths.html?city=Portland&type=FACILITYDE&name=SEGMENTNAM&dataUrl=http://doodles.mountainmath.ca/data/PDXBikeRoutes.geojson)
[NYC](http://doodles.mountainmath.ca/html/bike_paths.html?city=NYC&type=TF_Facilit&name=Street&fh=65&dataUrl=http://doodles.mountainmath.ca/data/NYCBikeRoutes.geojson)
[Amsterdam](http://doodles.mountainmath.ca/html/bike_paths.html?city=Amsterdam&type=HIGHWAY&name=WIDTH&dataUrl=http://doodles.mountainmath.ca/data/AmsterdamBikeRoutes.geojson)
[Taipei](http://doodles.mountainmath.ca/html/bike_paths.html?city=Taipei&name=RDNAME&dataUrl=http://doodles.mountainmath.ca/data/TPEBikeRoutes.geojson)

A word of caution. I have done zero data cleaning or verification. Some of these maps are missing some type of infrastructure.
I am familiar with cycling conditions in Calgary, and their the extensive network along the river and other areas are missing in their main file.
I added two more separate maps for their trails and pathways, but was too lazy to merge them. For Taipei, I noticed that
the off-street paths along streets are missing, for example the one on Dunhua Bei Lu that I was using a lot a year ago. Not sure if or where these are available.
So some more ground truth is needed for proper interpretation. But fun anyway.

Want to map another city's data? No problem, just read on.
<!-- more -->

1. Locate the city's bikeway data and download it.
2. Convert the data to geojson, with coordinates in latitude and longitude.
3. Put the geojson file online somewhere, e.g. your public dropbox folder.
4. Optionally look at the geojson file for a bikeway type descriptor and bikeway name, if available.
5. Build a url for your map by using [http://doodles.mountainmath.ca/html/bike_paths.html] as a base url and add query strings
    * `dataUrl=<url to your geojson>`
    * `city=<city name>`
    * optionally `type=<bikeway type property>`
    * optionally `name=<bikeway name property>`
    * optionally `zoom=true` if you want to be able to zoom and pan on the map


For example, to map Calgary's bike network you need to [got to their open data website](https://data.calgary.ca/opendata/Pages/DatasetListingAlphabetical.aspx#C) and
download the Tranportation Bikeways shapefiles (SHP). To convert them go geojson using `ogr2ogr`

    ogr2ogr -f GeoJSON -simplify 1 -s_srs CALGIS_TRAN_BIKEWAY.prj -t_srs "EPSG:4326" CALGIS_TRAN_BIKEWAY.geojson CALGIS_TRAN_BIKEWAY.shp

from the [GDAL package](http://trac.osgeo.org/gdal/wiki/DownloadingGdalBinaries).

I uploaded the geojson to `http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson`, so that will be the value of the `dataUrl` query string.

Looking at the resulting geojson file you will see that the data does not include bikeway names, but it does include
types and the property is called `BICYCLE_CL`.

The rather lengthy link to the map would then be
[http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary&type=BICYCLE_CL&dataUrl=http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson](http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary&type=BICYCLE_CL&dataUrl=http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson)

<iframe src="/html/bike_paths.html?city=Calgary&type=BICYCLE_CL&fh=50&nh=true&dataUrl=/data/CALGIS_TRAN_BIKEWAY.geojson" width="100%" height="580"></iframe>


Or if you want to zoom into Calgary's sprawling suburbs, you could also enable zooming (using double-click) and panning
[http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary&type=BICYCLE_CL&zoom=true&dataUrl=http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson](http://doodles.mountainmath.ca/html/bike_paths.html?city=Calgary&type=BICYCLE_CL&zoom=true&dataUrl=http://doodles.mountainmath.ca/data/CALGIS_TRAN_BIKEWAY.geojson)



Happy Mapping!
