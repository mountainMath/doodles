---
title: Canada's 2021 census, part 1
author: Jens von Bergmann
date: '2022-02-09'
slug: canada-s-2021-census-part-1
categories:
  - CensusMapper
  - cancensus
tags: []
description: "The first tranche of the 2021 census data has arrived. Here is a quick rundown."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/02/09/canada-s-2021-census-part-1/index_files/figure-html/pop-change-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---





Today we are getting the first release of the 2021 census data. For now, it's just population, household, and dwelling counts. As well as Census Metropolitan Area and Census Tract boundaries. Census data is a snapshot in time, the reference day for the 2021 census is May 11, 2021. The rest of the data will [follow over the coming year](https://www12.statcan.gc.ca/census-recensement/2021/ref/prodserv/release-diffusion-eng.cfm).

## CensusMapper
The data is now available on CensusMapper for anyone to [view](https://censusmapper.ca/maps/3053), [download](https://censusmapper.ca/api), and map themselves. As of the writing of this post, the CMA and CT level geographies are still processing, and will be uploaded as that gets done. But the rest of the geographies are available for browsing, down to dissemination area level.

In this round we opted to process the StatCan geographies to remove larger rivers and water features, depending on zoom level. This aids orientation on the maps by providing context.

## What do those numbers mean?
Now is a good time as any to review the concepts of today's data release. The [census dictionary](https://www150.statcan.gc.ca/n1/en/catalogue/98-301-X2021001) is the go-to guide for definitions, we will try to explain the three variables that are being released today.

* **Population**: The population counts in a region refers to the people having their usual residence there. The census counts every person only once, at their *usual residence*. Some people might be away from their usual residence for a while and live elsewhere on census day. This may include people living elsewhere for work for a couple of weeks or months, or students attending university but returning to their usual residence (e.g. their parent's home) at the end of the semester. These people will not be counted where they reside on census day, but only at their usual place of residence.
* **Dwellings**: The dwelling counts released today are only for *private dwellings*, which excludes things like nursing homes or prisons or student dorms. These are called *collective dwellings*, and while these aren't part of the *dwellings* release today, people living in collective dwellings will be counted if the collective dwelling is their usual residence. This can lead to interesting effects like regions with no private dwellings but non-zero population.
* **Households**: The census defines a *household* simply as an occupied dwelling unit where at least one of the occupants has their usual residence there. The household counts in this release only count private households, so households in private dwellings.

## Derived metrics
With those three variables there is not all that much we can do. Adding in area we can divide to obtain densities, like population density. But that's an imperfect metric as it depends to a large extent on the choice of census geographies that are used to aggregate the data at. For example, one highrise on geographic area narrowly cut around it will result in a very high population density, but if we also enclose a nearby large park into the area the population density will drop considerably.

Another way to combine the data is to subtract households from dwellings. That gives us the [dwellings *not occupied by usual residents*](https://censusmapper.ca/maps/3055), which is often taken as a proxy for unoccupied dwellings. That's problematic in two ways. One is that some of these dwellings are occupied, just not by usual residents. Students need housing during the semester. Workers on short term housing need temporary places to live too. The other problem is that homes that are vacant on census day aren't a good proxy for how many problematic vacancies there are. The majority of these are likely moving vacancies, units for rent or already rented that aren't moved in yet, and the same on the ownership side. And of course recent completions, where buildings completed close to census day but have not filled in yet, which [hapless users of census data trip over with every census data release](https://doodles.mountainmath.ca/blog/2017/04/03/joyce-collingwood/). The other big part in this is [secondary suites](https://doodles.mountainmath.ca/blog/2021/06/08/basement-confidential-vancouver-s-informal-housing-stock/), which the census considers as separate dwelling units but owners may well consider as part of their house that they are using for their own needs. Anecdotally owners have increasingly absorbed suites back into their main unit during COVID times to use them as home offices and in general keep more distance from others. Some vacancies are also problematic longer-term vacancies, although [we know from administrative data that these are quite low](https://doodles.mountainmath.ca/blog/2021/11/21/three-years-of-speculation-vacancy-tax-data/). We have [written at length about this](https://doodles.mountainmath.ca/blog/2020/12/07/what-to-expect-from-an-empty-homes-tax/), but misconceptions around this concept don't seem to die.


## CensusMapper API and {cancensus}
The data on CensusMapper is also available via the CensusMapper API and the [{cancensus} R package](https://mountainmath.github.io/cancensus/index.html). Cancensus has been updated to now include better control of caching and version information. This makes it easier to recall data, which was necessary during the 2016 release when StatCan recalled and updated some of the previously released data. The CensusMapper API sever now sends version information for each data request, and starting with {cancensus} version 0.5.0 this version information is stored in the local cache. This enables the selective deletion/update of data in the local cache, if this will become necessary during this census release cycle.


## Change over time
The other interesting question is how these numbers have changed over time. In which neighbourhoods has population grown, where has it shrunk?  The current data comes with 2016 population, households and dwelling counts down to the ADA/CT level, which makes it easy to compare change over time. For DA level data things get more complicated.

The fine granularity of census data can offer great insight in how our cities have changed. One slight complication in this is that census geographies change over time, making small-area comparisons a little less straight forward than one might think. The best way to solve this issue is to get a [custom tabulation to aggregate several censuses on the same geography](https://doodles.mountainmath.ca/blog/2019/06/15/census-custom-timelines/). But those won't be available for a while and for many applications that's overkill. Sometimes we just want a quick way to compare fine-geography census data across several censuses.

At the same time we will likely continue to refine the geographies over the next couple of days, especially the CT and CMA level that only got released today. Geographic data is also tagged with a version number when downloading via {cancensus} and can thus be updated if needed.

Fortunately we have solved this problem via [tongfen](https://mountainmath.github.io/tongfen/), which takes fine geography census data across several census years and automatically re-aggregates it to a "least common denominator geography". This is the same as pulling a custom tabulation on the least common denominator geography, so it represents real census counts as opposed to area-weighted (dasymetric) interpolation that people sometimes employ and that generally should be avoided whenever possible.

<img src="{{< blogdown/postref >}}index_files/figure-html/pop-change-1.png" width="672" />



## Upshot
It's exciting that the 2021 data is finally making it's way into the hands of users. With CensusMapper, {cancensus}, and {tongfen} it's becoming increasingly easy to put this data to use.

As usual, the code for this post, including the code to scrape the data out of the PDFs, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-02-09-canada-s-2021-census-part-1/index.Rmarkdown) for anyone to reproduce or adapt.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-02-10 16:54:48 PST"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [862b66b] 2022-02-09: census 2021 post
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
##  [1] mountainmathHelpers_0.1.3 tongfen_0.3.4            
##  [3] forcats_0.5.1             stringr_1.4.0            
##  [5] dplyr_1.0.7               purrr_0.3.4              
##  [7] readr_2.1.1               tidyr_1.1.4              
##  [9] tibble_3.1.6              ggplot2_3.3.5            
## [11] tidyverse_1.3.1           cancensus_0.5.0          
## 
## loaded via a namespace (and not attached):
##  [1] fs_1.5.1           sf_1.0-4           lubridate_1.8.0    bit64_4.0.5       
##  [5] RColorBrewer_1.1-2 httr_1.4.2         rmapzen_0.4.3      tools_4.1.2       
##  [9] backports_1.4.0    bslib_0.3.1        utf8_1.2.2         R6_2.5.1          
## [13] KernSmooth_2.23-20 lazyeval_0.2.2     rgeos_0.5-8        DBI_1.1.2         
## [17] colorspace_2.0-2   withr_2.4.3        sp_1.4-6           tidyselect_1.1.1  
## [21] git2r_0.29.0       bit_4.0.4          curl_4.3.2         compiler_4.1.2    
## [25] cli_3.1.0          rvest_1.0.2        geojsonsf_2.0.1    xml2_1.3.3        
## [29] bookdown_0.24      sass_0.4.0         scales_1.1.1       classInt_0.4-3    
## [33] proxy_0.4-26       digest_0.6.29      foreign_0.8-81     rmarkdown_2.11    
## [37] pkgconfig_2.0.3    htmltools_0.5.2    highr_0.9          dbplyr_2.1.1      
## [41] fastmap_1.1.0      rlang_0.4.12       readxl_1.3.1       rstudioapi_0.13   
## [45] httpcode_0.3.0     farver_2.1.0       jquerylib_0.1.4    generics_0.1.1    
## [49] jsonlite_1.7.3     vroom_1.5.7        magrittr_2.0.1     s2_1.0.7          
## [53] Rcpp_1.0.8         munsell_0.5.0      fansi_1.0.2        lifecycle_1.0.1   
## [57] stringi_1.7.6      yaml_2.2.1         jqr_1.2.2          maptools_1.1-2    
## [61] grid_4.1.2         parallel_4.1.2     crayon_1.4.2       geojsonio_0.9.4   
## [65] lattice_0.20-45    haven_2.4.3        geojson_0.3.4      hms_1.1.1         
## [69] knitr_1.36         pillar_1.6.4       crul_1.2.0         wk_0.5.0          
## [73] reprex_2.0.1       glue_1.6.1         evaluate_0.14      blogdown_1.6      
## [77] V8_3.6.0           modelr_0.1.8       vctrs_0.3.8        tzdb_0.2.0        
## [81] cellranger_1.1.0   gtable_0.3.0       assertthat_0.2.1   xfun_0.28         
## [85] broom_0.7.12       e1071_1.7-9        class_7.3-19       units_0.7-2       
## [89] ellipsis_0.3.2
```
</details>



