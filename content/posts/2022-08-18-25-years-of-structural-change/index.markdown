---
title: 25 Years of Structural Change
authors: 
  - Nathan Lauster
  - Jens von Bergmann
date: '2022-08-18'
slug: 25-years-of-structural-change
categories:
  - cancensus
  - Vancouver
  - Toronto
  - land use
  - density
  - dotdensity
tags: []
description: "Taking the long view on changes in our dwelling stock by structural type."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/08/18/25-years-of-structural-change/index_files/figure-html/structural-change-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2022/08/18/structural-change/" target="_blank">HomeFreeSociology</a>)</i></p>



How are big Canadian Metros growing? Can we see different patterns? Here we want to provide a brief look back at the last 25 years, exploring change over time from 1996 to our most recent Census in 2021. This is also a test of R skills for one of us, who began this post as a learning exercise drawing upon [Jens](https://github.com/mountainMath)' excellent [CanCensus package](https://cran.r-project.org/web/packages/cancensus/vignettes/cancensus.html) and recent data updates. 

Here we're simply going to compare housing stock by dwelling type in 1996 and 2021 for Canada's big three metro areas (Toronto, Montréal, Vancouver) and Calgary (effectively tied with Ottawa & Edmonton for [fourth place](https://en.wikipedia.org/wiki/List_of_census_metropolitan_areas_and_agglomerations_in_Canada)). What this allows for is a peek at how the housing stock of these metro areas has changed as they've grown. There are caveats to this quick look, of course. The two most prominent being that the definitions of housing structure and the boundaries of metro areas may have changed. We have written before about the [change to Census methods](https://doodles.mountainmath.ca/blog/2020/01/27/mythical-oversupply/) and the problems this creates for [analysis of housing stock](https://homefreesociology.com/2022/02/01/no-shortage-in-housing-bs/) (in particular we picked up a lot more secondary suites as Duplexes after 2006). 

The Toronto, Vancouver and Calgary CMA boundaries have stayed the same across those 25 years, but the boundaries of Metro Montréal have changed significantly (more about the [CMA concept here](https://www150.statcan.gc.ca/n1/pub/92f0138m/92f0138m2019002-eng.htm)). As we will be taking differences of dwelling counts between these years it's important to harmonize these boundaries, and we choose the 2021 CMA boundaries for that by simply intersecting 1996 CSDs with the 2021 CMA boundaries and keeping those with large overlap. That leaves us with some very minor mismatch where CSD boundaries have changed over the years which should not skew our results in meaningful ways. Keeping this in mind, let's take a peek!











<img src="{{< blogdown/postref >}}index_files/figure-html/households-by-type-1.png" width="1200" />

We can see that all four of our metro areas grew quite a bit between 1996 and 2021, adding hundreds of thousands of households. But they varied in the different kinds of dwelling type or structure new households occupied. Let's shift our stacked bar chart so that we get percent of households occupying each type.

<img src="{{< blogdown/postref >}}index_files/figure-html/households-by-type-shares-1.png" width="1200" />

Here we can more clearly see the different compositions of each Metro area. In particular, we can see that Calgary consistently has the largest proportion of households living in single-family detached houses, while Montréal remains predominantly low-rise and Toronto dominates the high-rise category. Vancouver increasingly appears somewhere between Toronto & Montréal in terms of its balance between low-rise and high-rise. 

Of particular interest, between 1996 and 2021 Vancouver surpassed both Toronto and Montréal to become the large North American metro area least dominated by single-family detached houses. But it did so in no small part by transforming (and having the Census reclassify) many of its single-family houses as duplexes, i.e. houses containing separate basement suites. As argued in [Nathan's book](https://homefreesociology.com/2016/11/02/media-coverage-of-my-book/), this renovation of existing single-family housing stock remains the "sneakiest" way Vancouver has added to its density. But Vancouver has also continued to more visibly add low-rise and high-rise apartments.

Let's look more directly at how new households have been added across each of our big metros across the last quarter century. Below we simply subtract occupied housing stock in 1996 from occupied housing stock in 2021, leaving us with net change in each category.

<img src="{{< blogdown/postref >}}index_files/figure-html/structural-change-1.png" width="1200" />


We can see that Calgary has mostly been adding more single-family detached houses to accommodate its new households, continuing to sprawl outward. While Montréal also added a lot more single-family detached houses, some of this addition simply reflected its expanded boundaries, and it also added a relatively balanced mix of duplexes, low-rises, and high-rises. Toronto also sprawled further outward with many single-family detached houses, but also added a lot more row houses and high-rises. Meanwhile, Vancouver actually *lost* single-family detached houses. Some of these were simply re-categorized as duplexes, either rebuilt or simply recognized as such by the Census after the widespread legalization (or at least [general acceptance](https://homefreesociology.com/2021/06/09/basement-confidential-vancouvers-informal-housing-stock/)) of secondary suites across the region. But the decline in single-family detached houses in Vancouver also reflects a very strong set of barriers against further suburban sprawl in the region. In particular, the [Agricultural Land Reserve](https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/agricultural-land-and-environment/agricultural-land-reserve/the-agricultural-land-reserve) has prevented the further transformation of farmland to new subdivisions. As a result, most new growth has been spread across more dense forms of urban infill. Generally speaking, a success in terms of sustainability! 

Let's track this a different way, by looking at the spread of built-up area within and surrounding each big CMA. This data comes from satellite imagery, coded and shared for public use. We've [played around with it before](https://doodles.mountainmath.ca/blog/2021/08/21/satellites-sprawl-and-city-six-packs/). Below we match satellite imagery coding built-up area to 2021 CMA boundaries as determined by Statistics Canada, which is what we used for the comparative graphs above. 





<img src="{{< blogdown/postref >}}index_files/figure-html/canada-big4-cities-1.png" width="1200" />

We can see larger sections of dark red, indicating recent built-up land, all around the outskirts of Toronto and Calgary. We can also see that the built up area of Toronto spills over its CMA boundaries along the shores of Lake Ontario into neighbouring Hamilton and Oshawa CMAs, while Calgary is near to spilling over its CMA boundary to the South toward Okotoks. The pattern of sprawling growth is more muted in Montréal, but we can see how outlying built-up areas might be integrating with the City, creating an expanded Metropolitan area. Vancouver demonstrates what looks like the least outward growth in built-up area, corresponding well with the dwelling type data from the Census. Those parts of the CMA boundaries still in gray are largely all protected by Vancouver's various regulations, especially its Agricultural Land Reserve to the South and East, but also topography and parks or reserves to the North. The nearby CMA of Abbottsford is also visible outside of Vancouver CMA boundaries to the SE, and current [commute patterns](https://doodles.mountainmath.ca/blog/2020/01/06/flow-maps/) would force inclusion of Abbotsford-Mission into the Vancouver CMA if it wasn't it's own CMA already. Similar constraints prevent Toronto CMA expanding and swallowing or eating into neighbouring CMAs.

[Technical restrictions of CMAs](https://www150.statcan.gc.ca/n1/pub/92f0138m/92f0138m2019002-eng.htm) to "expand" into already established CMAs raise the question if we need an additional definition of "functional CMAs" that only look at current commute patterns and contemplate what CMA boundaries would look like if we took a clean approach that ignores precedents of historically established CMAs. We might come back to this in a future post.

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-08-18-25-years-of-structural-change.Rmarkdown).



## Appendix

Finally, just because we can, we want to take a quick look at the geographic distribution of households by structural type of dwelling in Metro Vancouver using a dot density map. This is kinda cool, because apartment areas can be pulled out from lower-density detached house and related zoning. But we can also glimpse some townhouse neighbourhoods and even a mobile home park or two! Enjoy! 



<img src="{{< blogdown/postref >}}index_files/figure-html/yvr_structural_dots-1.png" width="1800" />





<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-08-18 19:55:32 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [d7d135b] 2022-07-29: tweak images
```

```
## R version 4.2.1 (2022-06-23)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.5
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
##  [1] mountainmathHelpers_0.1.4 dotdensity_0.1.0         
##  [3] rlang_1.0.4               cityDensities_0.1.0      
##  [5] patchwork_1.1.1           sf_1.0-8                 
##  [7] cancensus_0.5.3           forcats_0.5.1            
##  [9] stringr_1.4.0             dplyr_1.0.9              
## [11] purrr_0.3.4               readr_2.1.2              
## [13] tidyr_1.2.0               tibble_3.1.8             
## [15] ggplot2_3.3.6             tidyverse_1.3.2          
## 
## loaded via a namespace (and not attached):
##  [1] httr_1.4.4          sass_0.4.2          jsonlite_1.8.0     
##  [4] modelr_0.1.8        bslib_0.4.0         assertthat_0.2.1   
##  [7] highr_0.9           googlesheets4_1.0.0 cellranger_1.1.0   
## [10] yaml_2.3.5          pillar_1.8.0        backports_1.4.1    
## [13] glue_1.6.2          digest_0.6.29       rvest_1.0.2        
## [16] colorspace_2.0-3    htmltools_0.5.3     pkgconfig_2.0.3    
## [19] broom_1.0.0         haven_2.5.0         bookdown_0.27      
## [22] scales_1.2.0        tzdb_0.3.0          git2r_0.30.1       
## [25] proxy_0.4-27        googledrive_2.0.0   farver_2.1.1       
## [28] generics_0.1.3      ellipsis_0.3.2      cachem_1.0.6       
## [31] withr_2.5.0         cli_3.3.0           magrittr_2.0.3     
## [34] crayon_1.5.1        readxl_1.4.0        evaluate_0.15      
## [37] fs_1.5.2            fansi_1.0.3         xml2_1.3.3         
## [40] class_7.3-20        blogdown_1.10       tools_4.2.1        
## [43] hms_1.1.1           gargle_1.2.0        lifecycle_1.0.1    
## [46] munsell_0.5.0       reprex_2.0.1        compiler_4.2.1     
## [49] jquerylib_0.1.4     e1071_1.7-11        classInt_0.4-7     
## [52] units_0.8-0         grid_4.2.1          rstudioapi_0.13    
## [55] labeling_0.4.2      rmarkdown_2.14      codetools_0.2-18   
## [58] gtable_0.3.0        DBI_1.1.3           R6_2.5.1           
## [61] lubridate_1.8.0     knitr_1.39          fastmap_1.1.0      
## [64] utf8_1.2.2          KernSmooth_2.23-20  stringi_1.7.8      
## [67] Rcpp_1.0.9          vctrs_0.4.1         dbplyr_2.2.1       
## [70] tidyselect_1.1.2    xfun_0.31
```
</details>
