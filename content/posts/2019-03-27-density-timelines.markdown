---
title: Density timelines
author: Jens von Bergmann
date: '2019-03-27'
slug: density-timelines
categories:
  - density
tags: []
description: 'Global city density patterns across time.'
images: ["https://doodles.mountainmath.ca/posts/2019-03-27-density-timelines_files/figure-html/shanghai-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

In the [last post](https://doodles.mountainmath.ca/blog/2019/03/17/city-density-patterns/) we compared international city density patterns. While travelling and reading [Alain Bertaud's excellent book Order without Design](https://mitpress.mit.edu/books/order-without-design) I decided to slightly expand on the initial images and add bar graphs showing radial density to get an aggregate understanding of density patterns, as well as adding timelines to show how densities have developed over time. I am getting increasingly interested in modelling urban economics, and understanding and quantifying urban densities is a part of that.

This aims to reproduce some of the results of Chapter 4 in Bertaud's book. There are differences in data processing, I am making use of the 250m GHS global population model for 1975, 1990, 2000 and 2015. To compute the population density in 1km wide annuli around city centres I decided to only count areas with densities higher than 1 person per hectare, thus eliminating large parks, bodies of water or otherwise uninhabited (or sparsely inhabitated) areas. This will lead to different results, especially in coastal cities or cities otherwise constrained. One may wish to modify this, as usual the [code for this post is available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-03-27-density-timelines.Rmarkdown) in case someone wants to modify the assumptions.






This time around we need to be a little more careful in correctly determining the **centre* of cities in order for the inner density annuli to make sense, so we will hand-pick the city centre locations instead of just grabbing them from the `maps` package.

## Density Annuli
To quantify city densities we focus on 1km concentric annuli emanating from the city centres. Bertaud explains that the basic urban model suggests that the densities decrease exponentially from the city centre. While a crude simplification, this works surprisingly well across metropolitan areas. Distance serves as an easily available stand-in for travel time to access jobs and amenities. We also added concentric rings for every 5km to the overview plots to make it easier to related them to the bar graphs for the radial density.

Let's take a look at what this gives for various cities.

### Vancouver


```r
st_sf(name="Vancouver",st_sfc(st_point(c(-123.1244,49.2819)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=30)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/vancouver-1.png" width="1152" />

We fit an exponential density model to the data, and are in particular interested in the gradient given by the exponent coefficient. Bertaud noted that the gradient typically flattens over time, but in Vancouver we see the opposite. In 1975 our model estimates a coefficient of -0.14, which gradually increases (in magnitude) to -0.19 in 2015. We also note how the actual density distribution is not very well approximated by our density model. Vancouver starts out with fairly high densities in the city centre that drop off very fast to suburban densities just a couple of kilometres out.

### Paris


```r
st_sf(name="Paris",st_sfc(st_point(c(2.3575,48.8554)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/paris-1.png" width="1152" />

Here we notice a very good fit to our density model, with slightly flattening density gradient over time.

## New York


```r
st_sf(name="New York",st_sfc(st_point(c(-73.9956,40.7295)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/new-york-1.png" width="1152" />

New York City, together with the surrounding New Jersey cities, shows a density pattern similar to Vancouver, just at a higher density level. Densities are very high around downtown Manhattan, dropping of fast to uniformly high densities between 100 and 150 people per hectare until about 12km out where densities drop off.

## Shanghai


```r
st_sf(name="Shanghai",st_sfc(st_point(c(121.4857,31.2456)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/shanghai-1.png" width="1152" />

Shanghai has undergone spectacular growth, fitting our urban density model fairly well throughout. We note how the density initially decreased on the far outskirts of the city, which is likely a function of how we cut off areas with density below 1 person per hectare. In the density plot we notice a couple of separate cities in the 35km to 40km band in 1973, which subsequently grow and accumulate lower density bands around them, dragging down the overall density.


## Moscow


```r
st_sf(name="Moscow",st_sfc(st_point(c(37.6226,55.7526)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/moscow-1.png" width="1152" />

In Moscow we can observe a city that evolved under a planning economy for a good portion of time, which can lead to odd density patterns where the centre is surrounded by a higher density band.

## Brasilia

```r
st_sf(name="Brasilia",st_sfc(st_point(c(-47.9014,-15.7881)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/brasilia-1.png" width="1152" />

Brasilia, city that got designed by planners from the beginning rather than growing by market forces, shows peculiar density patterns. 


## Beijing


```r
st_sf(name="Beijing",st_sfc(st_point(c(116.3912,39.9176)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/beijing-1.png" width="1152" />

Beijing has similar growth like Shanghai, but the population in the central part is lower, possibly due to government, cultural and commercial functions crowding out residential space. We centred the map on the imperial palace.

## Los Angeles


```r
st_sf(name="Los Angeles",st_sfc(st_point(c(-118.2554,34.0441)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/los-angels-1.png" width="1152" />

Los Angeles is an example of a city with a consistently low density gradient. We notice some increase in density in the centre and some small changes in density patterns in some more outlying areas. 


## Barcelona


```r
st_sf(name="Barcelona",st_sfc(st_point(c(2.1767,41.3856)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=20)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/barcelona-1.png" width="1152" />

Barcelona stands out as having fairly high density throughout, that drops off dramatically once one leaves the central region.

### Bangkok

```r
st_sf(name="Bangkok",st_sfc(st_point(c(100.4979,13.7517)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/bangkok-1.png" width="1152" />


Bangkok is another city that experienced strong growth, all the while maintaining a fairly constant density gradient.

### London

```r
st_sf(name="London",st_sfc(st_point(c(-0.1132,51.5056)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=40)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/london-1.png" width="1152" />

The commercial and cultural uses in the inner city keep population density low in the central parts, with population density peaking around the 5km radius around the centre and declining from there on.

## Tokyo

```r
st_sf(name="Tokyo",st_sfc(st_point(c(139.7536,35.6851)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=50)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/tokyo-1.png" width="1152" />

Tokyo is a good example of the population density inversion we often see in city centres. We placed the *centre* into the imperial palace, the low density dip clearly visible in the maps. But that's not what's driving the low density at the centre, it's the concentration of office buildings crowding out (nighttime) residential density. This also highlights some of the problems when focusing exclusively on (nighttime) population density and neglecting commercial density.

## Taipei

```r
st_sf(name="Taipei",st_sfc(st_point(c(121.5437,25.0416)),crs=4326)) %>% 
  plot_density_facet(.,radius_km=30)
```

<img src="/posts/2019-03-27-density-timelines_files/figure-html/taipei-1.png" width="1152" />

In large cities in can be hard to select the *centre* of the city. In Taipei we went with the Zhongxiao Fuxing station as the centre, which is probably more a personal preference than anything scientific. We can clearly notice the density bump around 25km out, where nearby cities of Taoyuan and Keelong kick in.


## Upshot
We could go on forever, there are many other interesting cities to look at. The code for this post [is available](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-03-27-density-timelines.Rmarkdown) in case people are interested in other cities. Fair warning, the scripts will download a couple of gigabytes of data the first time the scripts are run, and the water layer in the maps expect a tile source with API keys to be set for the `rmapzen` package.

It would be nice to add a function that locates the *centre* for any given city simply by analyzing the population density. But that did not fit into our blog post time budget that was confined to our flight home. Unfortunately that also means there was no time to clean up the code or speed it up a bit.

We could also refine out model to account for cases where the inner city has lower (nighttime) population density, surrounded by a higher density ring. Similarly, we could add provisions where density increases again further out as we reach neighbouring cities as we have seen for example in case of Taipei. As a related project, one could try and delineate regions that function as separate metropolitan areas just by population density patterns.

