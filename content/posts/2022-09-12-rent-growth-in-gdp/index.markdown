---
title: Rent growth in GDP
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2022-09-12'
slug: rent-growth-in-gdp
categories:
  - affordability
  - cansim
  - rental
tags: []
description: "People in BC spend a lot of money on rent (and imputed rent), and that's a problem. The way to decrease this \"Real Estate Industry\" share of GDP is to build more housing."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/09/12/rent-growth-in-gdp/index_files/figure-html/gdp_rent_capita-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2022/09/12/rent-growth-in-gdp/" target="_blank">HomeFreeSociology</a>)</i></p>




Every now and then the topic of the GDP share of the "Real Estate Industry" comes up, often linked to the suggestion that an economy has become too dependent upon real estate. But this usually involves a fundamental misreading of the data. As people who pay attention know, the NAICS sector [53] "Real Estate Industry" of the expenditure based GDP produced by StatCan [is mostly just rent and imputed rent](https://doodles.mountainmath.ca/blog/2018/02/01/real-estate-industry/).

Imputed rent, as a reminder, is simply how much owner-occupiers would be paying themselves to live in their residences if their roles were split into tenant and landlord components. We can estimate this based on how much the dwelling would fetch if rented out at prevailing market rents. There are technical details as to why and how this is done, and what makes them challenging, all of which we'll save for another post, but they are reasonably accurate enough for our purposes in this post. What they point toward is that the relative size of the "Real Estate Industry" is largely just a measure of rent as share of GDP. 

To start we take a look at just the rent and imputed rent part of the GDP by province. We can also talk about this rent portion as Housing Consumption. 

<img src="{{< blogdown/postref >}}index_files/figure-html/gdp_rent_share-1.png" width="1200" />

The share of GDP going toward housing consumption has been rising in all provinces since the early to mid 2000s, with BC consistently taking the top spot and the gap to the Canadian mean widening. Nova Scotia takes the second spot throughout, and this shows that there are two things going on at once. A province can have a high share of GDP going toward housing consumption because they spend a lot of money on rent (and imputed rent), or because GDP is low. To disentangle this a little we can look at housing consumption per capita instead of as a percent of total GDP.


<img src="{{< blogdown/postref >}}index_files/figure-html/gdp_rent_capita-1.png" width="1200" />

This shows the extraordinary rise of the dollar value of housing consumption in BC. Nova Scotia, by contrast, closely tracks the Canadian average. So these two provinces had a high share of GDP going toward housing consumption for very different reasons. In BC people spend a lot of money on rent (and imputed rent), boosting the numerator, while in Nova Scotia the GDP per capita is relatively low, minimizing our denominator.

This gets us to the question of why people in BC spend a lot of money on rent and imputed rent. Is it because people achieve extraordinary housing outcomes, living in large or very luxurious housing units? Or is it simply because high rent reflects too many people bidding for too little housing? In the first case, we'd expect things like the floor space of housing consumption to be much higher in BC. In the second, we'd expect it to be roughly the same, or smaller (bound, perhaps, primarily by regulatory constraints on [minimum dwelling size](https://vancouver.ca/files/cov/council-memo-02-24-2022-current-policy-and-regulation-on-dwelling-unit-sizes.pdf)). 

Robust Canada-wide metrics on housing quality and size are relatively hard to come by, but the Canadian Housing Statistics Program is now publishing average and median living areas in three Canadian Provinces, with hopefully more to come. So that gives us one view into this question.

<img src="{{< blogdown/postref >}}index_files/figure-html/living_area-1.png" width="1200" />


Among these three provinces it does not appear that BC residents have substantially larger homes, with maybe the exception of single detached homes. Indeed, BC is often accused of having apartments that are too small. Overall, while there are some very nice homes in BC, it seems unreasonable that explains more than a small portion of the 45% higher housing consumption per capita BC residents pay over the Canadian average. It's really hard to conclude that BC's high housing consumption cost is due to anything but high rents.  

## Takeaway
So what does all of that mean? Housing consumption makes up a very high share of GDP in BC because rents are so high. People have to spend a lot of money on rent and don't have that much money left over for other things. For the individual that restricts their quality of life. For the province overall it leads to reduced economic growth with money being spent on rent instead of other consumption goods that can help grow the economy. 

So what should be done about that? It's simple really, [we know very well how overall housing availability impacts rents](https://doodles.mountainmath.ca/blog/2022/02/18/vacancy-rates-and-rent-change-2021-update/). It may seem like a paradox, but to lower the GDP share of the "Real Estate Industry" we really need to build a lot more housing. 


As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-09-12-rent-growth-in-gdp/index.Rmarkdown).

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-09-12 12:29:49 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [162f6c3] 2022-08-19: fix link to nathan's blog
```

```
## R version 4.2.1 (2022-06-23)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.5.1
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
##  [1] cansim_0.3.12   forcats_0.5.1   stringr_1.4.1   dplyr_1.0.9    
##  [5] purrr_0.3.4     readr_2.1.2     tidyr_1.2.0     tibble_3.1.8   
##  [9] ggplot2_3.3.6   tidyverse_1.3.2
## 
## loaded via a namespace (and not attached):
##  [1] lubridate_1.8.0           assertthat_0.2.1         
##  [3] digest_0.6.29             utf8_1.2.2               
##  [5] R6_2.5.1                  cellranger_1.1.0         
##  [7] backports_1.4.1           reprex_2.0.1             
##  [9] evaluate_0.15             httr_1.4.4               
## [11] blogdown_1.10             pillar_1.8.1             
## [13] rlang_1.0.4               curl_4.3.2               
## [15] googlesheets4_1.0.0       readxl_1.4.0             
## [17] rstudioapi_0.14           jquerylib_0.1.4          
## [19] rmarkdown_2.14            googledrive_2.0.0        
## [21] munsell_0.5.0             broom_1.0.0              
## [23] compiler_4.2.1            modelr_0.1.8             
## [25] xfun_0.31                 pkgconfig_2.0.3          
## [27] htmltools_0.5.3           tidyselect_1.1.2         
## [29] bookdown_0.27             fansi_1.0.3              
## [31] crayon_1.5.1              tzdb_0.3.0               
## [33] dbplyr_2.2.1              withr_2.5.0              
## [35] grid_4.2.1                jsonlite_1.8.0           
## [37] gtable_0.3.0              lifecycle_1.0.1          
## [39] DBI_1.1.3                 git2r_0.30.1             
## [41] magrittr_2.0.3            scales_1.2.0             
## [43] cli_3.3.0                 stringi_1.7.8            
## [45] cachem_1.0.6              fs_1.5.2                 
## [47] xml2_1.3.3                bslib_0.4.0              
## [49] ellipsis_0.3.2            generics_0.1.3           
## [51] vctrs_0.4.1               tools_4.2.1              
## [53] mountainmathHelpers_0.1.4 glue_1.6.2               
## [55] hms_1.1.2                 fastmap_1.1.0            
## [57] yaml_2.3.5                colorspace_2.0-3         
## [59] gargle_1.2.0              rvest_1.0.3              
## [61] knitr_1.39                haven_2.5.0              
## [63] sass_0.4.2
```
</details>
