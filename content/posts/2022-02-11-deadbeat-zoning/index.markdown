---
title: Deadbeat zoning
author: Jens von Bergmann
date: '2022-02-11'
slug: deadbeat-zoning
categories:
  - affordability
  - CensusMapper
  - tongfen
  - Vancouver
  - cancensus
  - density
tags: []
description: "With the new 2021 census data out it's time for some analysis on how Vancouver has grown. For this time we will examine the role of low-density zoning.."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/02/11/deadbeat-zoning/index_files/figure-html/pop-growth-per-area-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---






With the first batch of data from the 2021 census we can start to answer some questions about how Vancouver has grown. One of these is how population growth relates to zoning. It would be very useful to have a custom tabulation available for that, but it will still take a lot of time before 2021 custom tabulations will become available.

In the meantime, we can get a pretty good idea how low-density zoning has or has not contributed to Vancouver's population growth by following a line of analysis [like we did back when the 2016 data came out](https://doodles.mountainmath.ca/blog/2017/03/06/rs-population-change/). The idea is quite simple, we are going to take block level population change data, and divided it into three categories. Block that lie entirely within low-density zones ("Core" blocks), blocks that have parts inside and parts outside of low-density zones ("Fringe" blocks), and blocks that are entirely outside of low-density zones ("Rest"). To refine this a little we will remove parks from the census data, and shrink the census blocks by 10m in all directions to avoid issues with boundaries along roads or other places being drawn slightly differently.

One minor complication is that we don't have population change at the census block level, StatCan only provides back-calculated 2016 population counts on 2021 census tract geographies or higher. But not to despair, our {tongefen} package is made for just this application and it automates the creation of a common custom geography based on dissemination blocks from 2016 and 2021 where we can get counts from both censuses.



however, nothing is perfect and during this process of taking out parks and messing with the geographies we are losing track of some. Most of these have zero population, but there are some caretaker residences in parks and some geocoding errors in StatCan Data like [the strech of beach north of English Bay](https://censusmapper.ca/maps/3053#16/49.2877/-123.1431) with a population of 15 people where clearly nobody lives. This kind of mixups happen. But overall regions that fall by the wayside in this analysis only account for 28 people in 2016 and 45 in 2021. Which we are happy to ignore for now.


Just like we did last time around when we ran this analysis we are also going to look separately at low-density "Core" and "Fringe" areas on the West and East sides of the city.

One last question we have to answer is what version of zoning we should look at. We could take the areas zoned for low density housing, specifically the RS, RT and FSHCA districts, as of the starting point in 2016, or as of the endpoint in 2021. Taking the zoning at the end point would focus on population growth low-density zoning via organic growth within the zones, e.g. through addition of suites and laneways. Taking zoning as of the beginning of the period would additionally allow growth via rezonings.

Ideally we would want to split specifically those rezoned areas, but our current data is not fine enough for this and this will require a custom tabulation.

So let's take a look how this shakes out.





<img src="{{< blogdown/postref >}}index_files/figure-html/deadbeat-zoning-1.png" width="1200" />

There is surprisingly little difference from the choice of vintage of the zoning fabric. Most of the difference will likely have been in the fringe for either of those two, just because that's how we most of our rezonings have worked out, our rezonings focus on areas that are already adjacent to higher density zones.

What stands out, just like last time we ran this analysis for the 2011-2016 period, that the Core areas don't grow much. Low-density zoning is deadbeat zoning, they take up lots of space but don't contribute to population growth. At least they are not losing population, adding suites and laneways manages to roughly balance out other demographic factors like declining household size. During the 2011-2016 cycle the core areas on the West side lost population and whereas the East side gained population. This time around it's reversed. Either way, the effects were small and we chalk this up to statistical noise and there isn't much of a difference.

There does seem to be a difference when it comes to fringe areas, which is likely due to the Cambie Corridor. The other big driver of growth in the fringe areas is C-2 zoning, which generally only extends half a block and will inevitably be caught in the fringe areas. We will need a custom tabulation to entangle this.

To underline that point, let's look at how much these various categories take up, after cutting out parks.

<img src="{{< blogdown/postref >}}index_files/figure-html/zoning-area-1.png" width="1200" />

This shows what we already know, the deadbeat core low-density areas take up a huge portion of our city, and the low-density parts of the fringe will add to that. We can combine the data from these last to graphs to see how much population change per area we got for each of these categories.

<img src="{{< blogdown/postref >}}index_files/figure-html/pop-growth-per-area-1.png" width="1200" />

This makes it very clear which land carries most of the weight when it comes to accommodating our population growth. 
Bottom line is that low density zoning does exactly what it was designed to do. Nothing. Unless it gets upzoned.



One last thing to do is a quick visual check which areas ended up in the Core, Fringe and Rest categories in relation to low-density zoning.


<img src="{{< blogdown/postref >}}index_files/figure-html/zoning-check-1.png" width="1200" />


As usual, the code for this post, including the code to scrape the data out of the PDFs, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-02-11-deadbeat-zoning/index.Rmarkdown) for anyone to reproduce or adapt.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-02-11 21:01:03 PST"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [2cb84c6] 2022-02-11: update image to properly include top and bottom range
```

```
## R version 4.1.2 (2021-11-01)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.1
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.1-arm64/Resources/lib/libRblas.0.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.1-arm64/Resources/lib/libRlapack.dylib
## 
## locale:
## [1] en_CA.UTF-8/en_CA.UTF-8/en_CA.UTF-8/C/en_CA.UTF-8/en_CA.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] sf_1.0-4                  mountainmathHelpers_0.1.3
##  [3] VancouvR_0.1.7            tongfen_0.3.4            
##  [5] forcats_0.5.1             stringr_1.4.0            
##  [7] dplyr_1.0.7               purrr_0.3.4              
##  [9] readr_2.1.1               tidyr_1.1.4              
## [11] tibble_3.1.6              ggplot2_3.3.5            
## [13] tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.8         lubridate_1.8.0    class_7.3-19       assertthat_0.2.1  
##  [5] digest_0.6.29      utf8_1.2.2         R6_2.5.1           cellranger_1.1.0  
##  [9] backports_1.4.0    reprex_2.0.1       evaluate_0.14      e1071_1.7-9       
## [13] httr_1.4.2         blogdown_1.6       pillar_1.6.4       rlang_0.4.12      
## [17] readxl_1.3.1       rstudioapi_0.13    jquerylib_0.1.4    rmarkdown_2.11    
## [21] urltools_1.7.3     triebeard_0.3.0    munsell_0.5.0      proxy_0.4-26      
## [25] broom_0.7.12       compiler_4.1.2     modelr_0.1.8       xfun_0.28         
## [29] pkgconfig_2.0.3    htmltools_0.5.2    tidyselect_1.1.1   bookdown_0.24     
## [33] fansi_1.0.2        crayon_1.4.2       tzdb_0.2.0         dbplyr_2.1.1      
## [37] withr_2.4.3        grid_4.1.2         jsonlite_1.7.3     gtable_0.3.0      
## [41] lifecycle_1.0.1    DBI_1.1.2          git2r_0.29.0       magrittr_2.0.1    
## [45] units_0.7-2        scales_1.1.1       KernSmooth_2.23-20 cli_3.1.0         
## [49] stringi_1.7.6      fs_1.5.1           xml2_1.3.3         bslib_0.3.1       
## [53] ellipsis_0.3.2     generics_0.1.1     vctrs_0.3.8        tools_4.1.2       
## [57] glue_1.6.1         hms_1.1.1          fastmap_1.1.0      yaml_2.2.1        
## [61] colorspace_2.0-2   classInt_0.4-3     rvest_1.0.2        knitr_1.36        
## [65] haven_2.4.3        sass_0.4.0
```
</details>




