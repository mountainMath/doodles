---
title: Nanaimo Station
author: Jens von Bergmann
date: '2022-05-21'
slug: nanaimo-station
categories:
  - zoning
  - Vancouver
  - Transportation
  - cancensus
  - density
  - tongfen
tags: []
description: "Vancouver has been squandering opportunities around existing Skytrain stations. We take a closer look at the Nanaimo Station area."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/05/21/nanaimo-station/index_files/figure-html/nanaimo_zoning-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




With a [new redevelopment proposal around Vancouver's Nanaimo Skytrain station hitting the news](https://dailyhive.com/vancouver/skytrain-nanaimo-station-transit-oriented-development-proposal), and [a local journalist feigning ignorance about zoning around skytrain stations](https://twitter.com/GoldinYVR/status/1527075936381784064), maybe it's time for a quick post on zoning and population growth around the Nanaimo station.




To start out, let's take a look at the zoning around Nanaimo Station.

<img src="{{< blogdown/postref >}}index_files/figure-html/nanaimo_zoning-1.png" width="432" />

We marked the Nanaimo Station at the centre and the 29th Avenue station to the south-east just outside of the 800m radius circle. The area is dominated by single family and duplex zoning, with a couple of half-blocks of low rise and some mixed-use low rise zoning along Kingsway and sprinkled across a couple of of other lots, as well as some Comprehensive Development parcels to round things off. The Skytrain corridor is visible as a the diagonal low-density (RS-zoned) line.

The Skytrain has been operational for almost 40 years now, let's take a look how zoning has changed over time, utilizing the data from the [Metro Vancouver Zoning Project](https://zoning.sociology.ubc.ca) where we have also assembled a [timeline of zoning in the City of Vancouver, taking snapshots at several years](https://mountainmath.ca/cov_zoning_history). For this we will start with 1976, well before the Skytrain arrived, and continue with 1990, 5 years after the station opened, and several snapshots in the following years until now.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-2-1.png" width="768" />

We see that not much has changed over the years. The industrial parcel right by the station got lost between 1976 and 1990 and some CD-1 parcels came in. Then things were mostly stable until a little RM-7 and RM-9 low-rise zoning, plus some more CD-1, appeared between 2001 and 2020. But almost all of the low-density yellow area remained untouched, despite the rapid transit line.

## Population


Time to take a look at the impact on population and dwellings in the area. For this we turn to the census, but census regions don't perfectly line up with our 800m station catchment, and census regions change over time. To get stable and robust estimates over time we will first harmonize our census regions to construct a common geography based on 2001 though 2021 Dissemination Blocks, which we have automated with our [TongFen package](https://mountainmath.github.io/tongfen/articles/tongfen_ca.html), and then select the ones with majority overlap with our station buffer.

Here is what this looks like, including the harmonized dissemination blocks with partial overlap.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-4-1.png" width="576" />

We coloured the regions by their overlap percentage. To keep things simple we select the ones with majority (50% or more) overlap. Which gets us to the following "census catchment" region that we will use to track change in population and dwellings over time.


<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-5-1.png" width="576" />

Armed with that we can now check in on how the population and dwellings have changed in this census catchment area of the Nanaimo Station. For context we also add the corresponding changes for the city overall and the metro region.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-6-1.png" width="768" />

Here we observe familiar patterns.Metro Vancouver has been [growing faster than the city](https://doodles.mountainmath.ca/blog/2020/05/25/projections-and-self-fulfilling-prophecies/), making the city more exclusive relative to the region, as [dictated by regional planning](https://doodles.mountainmath.ca/blog/2019/08/01/on-vancouver-population-projections/). The 2001-2006 dwelling growth captures the change in census methods capturing the re-classification of suited detached homes into two "duplex" units, which is especially prominent in the Nanaimo Station region that is dominated by single family homes, and which contrasts the population growth. Regular readers of this blog will recognize this change in census methods as the issue still [getting exploited by anti-housers](https://doodles.mountainmath.ca/blog/2020/01/27/mythical-oversupply/) who misrepresent this as dwelling growth exceeding population growth and evidence of the absence of a shortage of housing.

Generally we see that the population around the Nanaimo Station has been growing comparatively slowly, except for the 2016 to 2021 period. To better understand what has been going on there we will take a look at population and dwelling growth at the block level.


<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-7-1.png" width="768" />

Here we see the initial boost in dwellings in single family areas, as well as several separate blocks with dwelling boosts, one between 2006 and 2011 on the north side of Kingsway west of Nanaimo where a low-rise mixed use building got built, and another one across the street where a large new development (with the T&T) came between 2016 and 2021.


The new development proposal asks to turn 18 single family lots into 861 new homes for a net increase in roughly 835 additional homes to the area (depending on how many have suites), a 16% increase in the total number of homes in the area. Which would single-handedly be the larges increase in dwellings between any of the four inter-census periods of the past 20 years, enabling lots more people to make use of this transit investment.



## Upshot
Vancouver planners have been neglecting past transit investments, with the new Broadway Line coming in the province is not leaving things to chance and have directly intervened to ensure that Vancouver does not waste this massive infrastructure investment by keeping exclusionary zoning in place that keeps people away from billion dollar transit investments.

Here is a more comprehensive look at Vancouver's existing transit stations, ordered roughly by how wasteful the landuse is in the 800m around them. Nanaimo station is unsurprisingly the worst offender, but there are quite a few others that are not far behind.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-9-1.png" width="912" />

I would not be surprised at all if we are going to see provincial intervention to force higher land use around these stations. There is a [planing process underway for the Rupert and Renfrew Station Area](https://vancouver.ca/home-property-development/rupert-and-renfrew-station-area-plan.aspx), which is still deep in the engagement process. The Vancouver Plan might in theory be a vehicle for the city to act decisively first and remove the necessity for provincial intervention, but realistically speaking we are sill several years off before the Vancouver Plan and the subsequent area plans are passed and zoning is changed. The [Broadway Plan will serve as a test](https://vancouver.ca/home-property-development/broadway-plan.aspx) to see if Vancouver is able to achieve higher land use around stations on their own. The plan has been in the works for four years now, the coming weeks will tell if council is serious about this, but even then, [the Broadway Plan may well fall short of achieving its goals](https://doodles.mountainmath.ca/blog/2022/05/17/on-broadway/).

Allowing more people to live near the Nanaimo Station, if council allows this proposal to go forward, will be a good start. But we really have to wonder why council after council have not touched the sea of yellow low-density areas around such a key infrastructure investment. And even this current proposal only touches a mere 18 single family lots.

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-05-21-nanaimo-station/index.Rmarkdown) for anyone to reproduce or adapt.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-05-21 22:39:17 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [e6f8cc1] 2022-05-21: mode share background tiles
```

```
## R version 4.2.0 (2022-04-22)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.3.1
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.2-arm64/Resources/lib/libRblas.0.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.2-arm64/Resources/lib/libRlapack.dylib
## 
## locale:
## [1] en_CA.UTF-8/en_CA.UTF-8/en_CA.UTF-8/C/en_CA.UTF-8/en_CA.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] mountainmathHelpers_0.1.4 cancensus_0.5.1          
##  [3] tongfen_0.3.5             sf_1.0-7                 
##  [5] forcats_0.5.1             stringr_1.4.0            
##  [7] dplyr_1.0.8               purrr_0.3.4              
##  [9] readr_2.1.2               tidyr_1.2.0              
## [11] tibble_3.1.7              ggplot2_3.3.6            
## [13] tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.8.3       lubridate_1.8.0    class_7.3-20       assertthat_0.2.1  
##  [5] digest_0.6.29      utf8_1.2.2         R6_2.5.1           cellranger_1.1.0  
##  [9] backports_1.4.1    reprex_2.0.1       evaluate_0.15      e1071_1.7-9       
## [13] httr_1.4.2         blogdown_1.9       pillar_1.7.0       rlang_1.0.2       
## [17] readxl_1.4.0       rstudioapi_0.13    jquerylib_0.1.4    rmarkdown_2.13    
## [21] munsell_0.5.0      proxy_0.4-26       broom_0.8.0        compiler_4.2.0    
## [25] modelr_0.1.8       xfun_0.30          pkgconfig_2.0.3    htmltools_0.5.2   
## [29] tidyselect_1.1.2   bookdown_0.26      fansi_1.0.3        crayon_1.5.1      
## [33] tzdb_0.3.0         dbplyr_2.1.1       withr_2.5.0        grid_4.2.0        
## [37] jsonlite_1.8.0     gtable_0.3.0       lifecycle_1.0.1    DBI_1.1.2         
## [41] git2r_0.30.1       magrittr_2.0.3     units_0.8-0        scales_1.2.0      
## [45] KernSmooth_2.23-20 cli_3.3.0          stringi_1.7.6      fs_1.5.2          
## [49] xml2_1.3.3         bslib_0.3.1        ellipsis_0.3.2     generics_0.1.2    
## [53] vctrs_0.4.1        tools_4.2.0        glue_1.6.2         hms_1.1.1         
## [57] fastmap_1.1.0      yaml_2.3.5         colorspace_2.0-3   classInt_0.4-3    
## [61] rvest_1.0.2        knitr_1.38         haven_2.5.0        sass_0.4.1
```
</details>

