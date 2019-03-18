---
title: City density patterns
author: Jens von Bergmann
date: '2019-03-17'
slug: city-density-patterns
categories:
  - density
tags: []
description: 'How do city densities compare around the globe?'
images: ["https://doodles.mountainmath.ca/posts/2019-03-17-city-density-patterns_files/figure-html/vancouver_comparison-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---



  
  

I saw the [tanaka package](https://github.com/rCarto/tanaka) [fly by on twitter](https://twitter.com/rgeomatic/status/1105477591601987584), and in particular liked the application to the [world population grid](http://data.jrc.ec.europa.eu/dataset/jrc-ghsl-ghs_pop_gpw4_globe_r2015a). Cities are interesting beasts, and I like exploring the extent of cities free from political boundaries. I am travelling right now, but I like [looking at different ways to calculate and visualize density](https://doodles.mountainmath.ca/categories/density/) and could not resist running some inter-city density comparisons.

For this, we only show areas with at least 4 people per hectare (or about 1000 people per square mile, the [cutoff used by US Census to designate areas as *urban*](https://www2.census.gov/geo/pdfs/reference/ua/Defining_Rural.pdf)), and pick some population density cutoffs above that to show grades of population density. We graph the cities on a 40km radius around the city centre to get an indication of the spatial extent of the functional metropolitan area. We are using the global 250m GHS 2015 population grid and smooth the data with a Guassian kernel with standard deviation 0.5km.

<img src="/posts/2019-03-17-city-density-patterns_files/figure-html/vancouver_comparison-1.png" width="864" />
  
Starting out with a selection of 9 cities, with selection influenced by cities I like to compare Vancouver to, we notice stark differences in the makeup. North American San Francisco, Toronto and Seattle look quite similar, they appear stretched out and bump with medium density centres.

The European Vienna and Athens are compact with uniform density. Hong Kong, Taipei and Singapore have much higher density, and the 40km radius includes other cities, with Shenzhen to the north of Hong Kong, Malaysian and Indonesian cities to the north and south of Singapore, and Taoyuan to the west of Taipei showing up as separate metropolitan areas. In Taipei, the MRT, rail and HSR lines accumulate enough density to show the connection between different cities, drawing lines toward Taoyuan, as well as Tamsui to the north and Keelung to the east.

## More cities
The coverage of the dataset we are using is world wide, so let's take a look at other cities around the world.

<img src="/posts/2019-03-17-city-density-patterns_files/figure-html/world_comparison-1.png" width="864" />
  

The images highlight how different the cities are arranged. European cities tend to have fairly uniform density centres, with Paris and maybe Copenhagen (and Malmö across the Øresund) showing density gradually declining away from the centre. Tehran and Casablanca seem quite European this way too. Cairo density highlights how important the Nile is to the region, with a very-high density centre and lower density areas assembled along the river and delta.

Melbourne, Sydney and New York fit better into the North American cities we have looked at earlier, although the central part of New York does have noticeably higher density. 

The large Asian cities of Beijing, Shanghai, Chongqing, Chengdu and Seoul have very high density centres supported by high large high density surrounding areas. Tokyo and Jakarta are different in that they are lacking the very high density spikes but have uniform high density throughout the city. Mexico City, as well as the South American cities on our list follow a similar pattern of fairly uniform high density. Cape Town looks almost North American like a smaller version of New York. Lagos has some fairly large very-high density areas, which sets it apart from the Asian giants that typically have smaller very-high density spikes.
  
## Other cities
We have to cut somewhere, sorry if a city you are interested in did not appear. But you can always [grab the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-03-17-city-density-patterns.Rmarkdown) and trow in other cities you like to see.
  

