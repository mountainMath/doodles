---
title: Taxable Dwelling Density
author: Jens von Bergmann
date: '2018-02-24'
slug: taxable-dwelling-density
categories:
  - Vancouver
  - Empty Homes
  - Assessment Data
tags: []
description: 'Whem density maps mostly just show population density.'
images: ["https://doodles.mountainmath.ca/posts/2018-02-24-taxable-dwelling-density_files/figure-html/taxable_dwellings-1.png"]
featured: 'heatmap_2x.png'
featuredalt: ""
featuredpath: "https://imgs.xkcd.com/comics/"
linktitle: ''
type: "post"
---

Vancouver pushed out a heatmap of dwelling units that have so far failed to declare their empty homes tax status.
![Undeclared](/images/undeclared_homes.png)
With everyone eagerly awaiting data on the empty homes tax declaration we wonder what can be learned from the map.

Turns out not much, the city did not normalize by the number of dwelling units subject to the tax. So to first order, this is just a heatmap of where people live, which <pre>xkcd</pre> coined [pet peeve #208](https://xkcd.com/1138/).

Most people of course will read this as a map of an indication where people may not live, a textbook case of poor visualization. We don't have the data of the undeclared properties, but we do know roughly which the residential properties subject to the tax are. And we can map these to compare how close the city's map gets, while understanding that there will be some statistical noise in the city data.










<img src="/posts/2018-02-24-taxable-dwelling-density_files/figure-html/taxable_dwellings-1.png" width="864" />

As we can see, it gives a pretty good match of the city data, modulo the choice of finer granularity in the map the city did. As always, the code that made this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-02-24-taxable-dwelling-density.Rmarkdown). Go grab it if you want to refine the dwelling density map.

# Pet Peeve #209
And while I have your attention, the 2016 Census did not have "more than 25,500 empty homes in Vancouver" as [frequently claimed](http://vancouversun.com/news/local-news/empty-homes-tax-city-of-vancouver-releases-heat-map-showing-clusters-of-undeclared-properties), but only 21,820. The census counted 25,502 (yes, exactly 2 "more" than 25,500) homes not "occupied by usual residents", the difference between those two numbers being temporary or foreign residents. And about 4k of the actually unoccupied homes are secondary suites, [as we have discussed at length before](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/), and the tax does not apply to them. Then we should consider that the empty homes tax does not apply to homes that were recently completed or sold (and those also tend to show up as more heavily unoccupied in the census), plus moving vacancies. So anyone floating the 25k number in conjunction with the empty homes tax is purposefully misleading at this point.

