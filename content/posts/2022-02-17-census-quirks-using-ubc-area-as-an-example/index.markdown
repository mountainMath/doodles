---
title: Census quirks; using UBC area as an example
author: Jens von Bergmann
date: '2022-02-17'
slug: census-quirks-using-ubc-area-as-an-example
categories:
  - CANSIM
  - CensusMapper
  - Vancouver
tags: []
description: "Census data is great. But census data also has lots of little quirks. We take the Point Grey Peninsula as an example to show how census data can go sideways."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/02/17/census-quirks-using-ubc-area-as-an-example/index_files/figure-html/ct_pop_history-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

 



Census data serves as the baseline for a lot of downstream data products, we like to think of it as a solid and authoritative data source. And the data from the Canadian census is indeed amazing. But counting people is hard, and the closer one looks the more one realizes little problems.

All it takes to shake your faith in census data is spending 30 minutes browsing dissemination block or dissemination area data in a neighbourhood you know well.

Some areas are easier to enumerate than others. One of the more challenging areas, and one the census has been struggling with for many years now, is the Point Grey Peninsula west of the City of Vancouver consisting of the UBC/UNA/UEL communities. There are lots of reasons why this is a difficult area to enumerate, the student population is hard to reach and their usual place of residence is often ambiguous. The area is rapidly changing, and it involves lots of judgement calls on whether to classify housing units as private or collective dwellings.


These problems plague census data throughout Canada, but they are particularly strong in the Point Grey Peninsula. This makes it a good example case to walk through in detail to help understand the little (and sometimes large) quirks in census data.

## The big picture
Issues often jump out when comparing census data cross two censuses. For the 2021 census all we have right now is population, household and dwelling counts. These are the backbone of all census data, the base denominators for everything else.


<img src="{{< blogdown/postref >}}index_files/figure-html/ct_pop_history-1.png" width="1200" />

We can see the transformation that happened across the past six censuses, the regions went from a single census tract in the first four years to two census tracts in 2016 splitting further into 3 in 2021. Of note, census tract 9330069.02 covering South Campus remained mostly intact, but had some important boundary changes while keeping the same name. This means that if we wanted to TongFen the census tracts the resulting least common denominator regions would be the whole Point Grey Peninsula, just like during the first four census years in this period.




How large is that difference between the 2016 and 2021 boundaries for tract 9330069.02? [GeoSuite](https://geosuite.statcan.gc.ca/geosuite/en/index) comes with the 2016 population data on the new 2021 boundaries, and it quantifies it at 3,926, quite a bit lower than the population of 5,080 it had in the original boundaries. Even small boundary changes like this do matter.


<img src="{{< blogdown/postref >}}index_files/figure-html/ct_tracts_metrics-1.png" width="1200" />

A big cautionary tale in this that geographic identifiers may not change from census to census, even if the underlying geography does. This makes comparing census data across time tricky, we can't just rely on geographic identifier but need to ensure the associated geographies match. The move to [Dissemination Geography Unique Identifiers (DGUIDs)](https://www150.statcan.gc.ca/n1/pub/92f0138m/92f0138m2019001-eng.htm) mitigates these issues at the expense of extra complexity.

But why would StatCan change the boundaries of this census tract? To understand why this boundary change happened we need to understand that the administrative landscape of the Point Grey Peninsula. It is part of Electoral Area A, an unincorporated area in BC. There is no municipal government, but there are three quasi-administrative entities operating within this Point Grey Peninsula. There is UBC and campus housing serving (mostly) students. Then there is the [UNA](https://www.myuna.ca/about-us/), a quasi-municipal body with an elected board and limited power that oversee some of the affairs of residents on campus lands, including faculty and staff housing but also general public market rental and condo housing on land leased directly or indirectly from the university. And then there is the [UEL](http://www.universityendowmentlands.gov.bc.ca), an unincorporated area administered by the province with limited opportunity for community input, the smallest (in population) of the three groups yet people often invoke its name to refer to the whole Point Grey Peninsula.

This most recent boundary change (roughly) aligns census tract 9330069.04 with the UEL and leaves the other two for UBC/UNA, which is useful for the different administrative bodies. Unfortunately the boundary change left out [leləm](https://lelemliving.com), a Musqueam development in the Point Grey Peninsula that will be part of the UEL administrative region but is still part of 9330069.02 in the 2021 census.

Compare this to the breakdown of the various administrative regions from the [rather dated Bike Walk UBC project](https://bikewalkubc.org)

<img src="{{< blogdown/postref >}}index_files/figure-html/ubc_admin_areas-1.png" width="1200" />

We see leləm and also the Musqueam lands that have been leased to the golf course coloured in orange, and the Pacific Spirit Park that has been leased to the Metro Vancouver in green.


## Looking in more detail





We want to focus in what happened between those last three censuses, for that we will go down to census block level and TongFen the geographies and values. We will focus on the most recent three censuses.

<img src="{{< blogdown/postref >}}index_files/figure-html/ubc_db_tongfen-1.png" width="1200" />

This gives a quick overview of the geographies resulting from TongFen for three consecutive censuses, as well as the changes happening in each region. The strong growth on South Campus is clearly visible. But the regions showing loss of dwelling units, as well as regions with strong population loss seem curious. 

This warrants a closer look. Let's graph the change in each individual block for those two periods, for ease of throwing out the blocks where none of our metrics, population, dwellings or households, changed by less than 50.

<img src="{{< blogdown/postref >}}index_files/figure-html/ubc_change_bar-1.png" width="1200" />

First looking at dwellings we notice a pattern where dwellings got add 2011-2016, and subtracted again in 2016-2021. That's the little triangle that changes from blue to red in the map, it's (mostly) undergraduate family student housing. It got neither built nor torn down during any of these periods, it just got reclassified as private housing in the 2016 census and changed back to collective housing in 2021. There was no population change associated with this because the population got counted the same way, mostly as this being not their usual residence. In 2016 the census recorded 785 dwellings with 136 people living there as their usual residence. In 2021 that flipped to 45 dwellings with 74 people living there. A big change in the data, but virtually no change on the ground.


When it comes to population declines 2016-2021, we can identify several red-ish areas on the map higher up that correspond to student housing. UBC was operating fully remote during the semester near the 2021 census, and the on-campus student population was only a fraction of it's normal size. While a higher portion of the students that did stay on campus would have had their usual residence on campus (as opposed to their parent's place), there were much fewer of them and the net result was negative.

Let's take a look at the development of the absolute number of those metrics across the three censuses. To make it a little easier to understand what's going on we will roughly classify each metric in each block depending on if the count is falling, rising, flat, or exhibits a sawtooth pattern.

<img src="{{< blogdown/postref >}}index_files/figure-html/ubc_change_cat-1.png" width="1200" />

The areas exhibiting a sawtooth pattern likely saw reclassification of some sort, although a rise and then fall in population may also happen when student housing got added 2011-2016 and then students stayed away from campus during COVID in 2021. Areas showing a fall likely underwent some kind of reclassification too, areas showing a consistent rise have likely seen dwellings and then also population and households added.

## Other quirks


The UBC area highlight the issues around enumerating private vs collective dwellings, usual and temporary residence, and the implications it has for the people living in these arrangements and how they are represented in the upcoming release of the census profile data.

Take for example [dissemination block 59150946020](https://censusmapper.ca/maps/3053#18/49.25950/-123.24998) hosting the Thunderbird student residences, where the 2021 census lists 1 dwelling unit with one household, and a total population of 635 people. Or [dissemmination block 59154100003](https://censusmapper.ca/maps/3053#16/49.2687/-123.2604) encompassing Cecile Green Residences as well as the residence of the President of UBC. The 2021 census lists two private dwelling units, one private household and 104 residents living there. 

At first sight one might think these blocks are host to giant communes, but what's likely going on with block 59154100003 is that the two dwelling units are within the presidents residence, with the president's household and family members living there. But the vast majority of the population is likely the subset of residents of Cecile Green that claim Cecile Green as their usual residence. Similarly for block 59150946020, where a residence might be an in-house caretaker. None of this counts residents of Cecile Green or Thunderbird that are returning back to their parent's place over the summer, these are counted at their parent's residence.


Moreover, the people living at Cecile Green or Thunderbird, while counted in this area, aren't considered as living in private households and therefore will be excluded from the other demographic data that will be released later this year, with the exception of the age group breakdown. We won't learn about their ethnicity, immigrant status, languages, income or other census variables from the census profiles. 




This can make quite a difference, in the 2016 census reported 15,890 people living in the Point Grey Peninsula as their usual residence, 13,360 of which were living in private households and the remaining 2,530 are not included in any of the census profile data except the age group breakdown. And the people with usual residence elsewhere, but who very much shape life in the area for much of the year, aren't included at all. This adds an extra layer of complexity when interpreting census data for UBC or other areas with similarly complex enumeration challenges.

We can get even more extreme with [block 59154083011](https://censusmapper.ca/maps/3053#17/49.26377/-123.24609), listing zero dwelling units but 324 people living there. What's interesting is that there is actually no housing at all in this block, although there is student housing on neighbouring blocks. 

Which leads us to another problem: geocoding.

## Geocoding
Other issues persist on UBC campus that may or may not be representative of broader issues with the census. [block 59154083011](https://censusmapper.ca/maps/3053#17/49.26377/-123.24609) is just one example, but geocoding issues exist throughout. Be it [block 59150863012](https://censusmapper.ca/maps/3053#17/49.28788/-123.14369) listing 15 people living in 9 households out of a total of 15 dwelling units on the beach at the north end of English Bay. Or more personally my condo building on campus,  which since the 2016 census has it's own census block. However, the census lists less than half the number of dwelling units in my building. And this is despite sending an enumerator to the building in 2021. 

These kind of quirks exist throughout, for example the 679 people that the census had [living in the median of the Lougheed Highway in Mitt Meadows in 2016](https://censusmapper.ca/maps/591#18/49.22427/-122.67140), and moved them out by the 2021 census, presumably because their geocoding improved. While it is impossible to eliminate all problems like this it is somewhat disappointing that the census is still quite sloppy when it comes to geocoding. In BC we have the excellent [BC Address Geocoder](https://www2.gov.bc.ca/gov/content/data/geographic-data-services/location-services/geocoder) which, together with BC Assessment roll data, could greatly enhance the accuracy of census data in BC. And this is already in the hands of StatCan via the Canadian Housing Statistics Program.

## Upshot
Census data is great, but census data also has lots of quirks and things that can trip people up. When things look funny in a particular area it's always a good idea to consider who is counted and who isn't. Using CensusMapper makes it east to zoom into block level and read off the population, dwelling and household counts to better understand where the higher geography totals come from. Satellite images and street view can provide more context, especially where coverage is good and we have to ability to step backward through time and compare with previous censuses to understand how areas have changed. Deeper on-the-ground knowledge is very helpful to add additional context, and sometimes is essential for resolving issues.


As usual, the code for this post, including the code to scrape the data out of the PDFs, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-02-17- census-quirks-using-ubc-area-as-an-example/index.Rmarkdown) for anyone to reproduce or adapt.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-02-18 16:47:56 PST"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [d9602a5] 2022-02-18: census quirks
```

```
## R version 4.1.2 (2021-11-01)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.2.1
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
##  [1] mountainmathHelpers_0.1.3 sf_1.0-6                 
##  [3] cancensus_0.5.0           tongfen_0.3.5            
##  [5] forcats_0.5.1             stringr_1.4.0            
##  [7] dplyr_1.0.8               purrr_0.3.4              
##  [9] readr_2.1.1               tidyr_1.2.0              
## [11] tibble_3.1.6              ggplot2_3.3.5            
## [13] tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.8         lubridate_1.8.0    class_7.3-19       assertthat_0.2.1  
##  [5] digest_0.6.29      utf8_1.2.2         R6_2.5.1           cellranger_1.1.0  
##  [9] backports_1.4.0    reprex_2.0.1       evaluate_0.14      e1071_1.7-9       
## [13] httr_1.4.2         blogdown_1.6       pillar_1.6.4       rlang_1.0.1       
## [17] readxl_1.3.1       rstudioapi_0.13    jquerylib_0.1.4    rmarkdown_2.11    
## [21] munsell_0.5.0      proxy_0.4-26       broom_0.7.12       compiler_4.1.2    
## [25] modelr_0.1.8       xfun_0.28          pkgconfig_2.0.3    htmltools_0.5.2   
## [29] tidyselect_1.1.1   bookdown_0.24      fansi_1.0.2        crayon_1.4.2      
## [33] tzdb_0.2.0         dbplyr_2.1.1       withr_2.4.3        grid_4.1.2        
## [37] jsonlite_1.7.3     gtable_0.3.0       lifecycle_1.0.1    DBI_1.1.2         
## [41] git2r_0.29.0       magrittr_2.0.1     units_0.7-2        scales_1.1.1      
## [45] KernSmooth_2.23-20 cli_3.1.0          stringi_1.7.6      fs_1.5.1          
## [49] xml2_1.3.3         bslib_0.3.1        ellipsis_0.3.2     generics_0.1.1    
## [53] vctrs_0.3.8        tools_4.1.2        glue_1.6.1         hms_1.1.1         
## [57] fastmap_1.1.0      yaml_2.2.1         colorspace_2.0-2   classInt_0.4-3    
## [61] rvest_1.0.2        knitr_1.36         haven_2.4.3        sass_0.4.0
```
</details>
