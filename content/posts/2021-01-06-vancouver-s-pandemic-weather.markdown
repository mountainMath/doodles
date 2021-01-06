---
title: Vancouver's pandemic weather
author: Jens von Bergmann
date: '2021-01-06'
slug: vancouver-s-pandemic-weather
categories:
  - covid-19
  - Vancouver
tags: []
description: "The weather during the 2020 pandemic, especially the fall and winter, has felt worse than useual. How much of that is just perception and how much is real?"
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2021-01-06-vancouver-s-pandemic-weather_files/figure-html/pandemic-daytime-weather.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

The pandemic changed our lives and behaviours. And our perceptions of things. With physical distancing, various degrees of restrictions and people avoiding the 3Cs: crowded places, close-contact settins, confined and enclosed spaces, people have been focusing on spending time outdoors whenever possible. I certainly pay a lot more attention to the weather than I used to, and Vancouver's fall and winter has felt especially miserable so far.

But has the weather actually been worse or is it just my warped perception? That's an easy question to check. Environment Canada has historical weather data, we we can see how 2020 has compared to the previous years.







First up, did it rain more than other years. My feeling says Yes, but the data begs to differ.

<img src="/posts/2021-01-06-vancouver-s-pandemic-weather_files/figure-html/unnamed-chunk-2-1.png" width="768" />

Rainfall has been mostly average. We started out with a wetter-than-usual January, but that was well before we started to take the pandemic seriously. When the pandemic hit in March and April we were aided by exceptionally dry weather. June was wetter than normal and October gave us a bit of relief, but overall the total rainfall was well within the expected range.

How about the temperature?

<img src="/posts/2021-01-06-vancouver-s-pandemic-weather_files/figure-html/unnamed-chunk-3-1.png" width="768" />

For most of the year temperatures have been fairly average, but the pandemic winter in Vancouver as been comparably mild. It's hard to complain about temperature.

But how about sunshine? Or maybe the problem is less the total amount of precipitation and more that it was drizzling nonstop? It sure feels like it was. To answer that we turn to hourly data and check the weather categorization. Here are the top 10 categories over the past few years.


|Weather       |Share   |
|:-------------|:-------|
|Cloudy        |22.749% |
|Mostly Cloudy |22.276% |
|Mainly Clear  |21.330% |
|Clear         |12.849% |
|Rain          |11.499% |
|Fog           |2.144%  |
|Rain Showers  |2.061%  |
|Rain,Fog      |1.739%  |
|Snow          |0.616%  |
|Moderate Rain |0.464%  |

To make sense of the categories we group Mainly Clear and Clear, and classify anything containing the word Rain as Rain. We keep a separate category for Foggy, Drizzle, Snow and also keep a category for Smoke/Haze. We keep Cloudy and Mostly Cloudy as separate categories. Beggars can't be choosers and Mostly Cloudy carries the promise of occasional sun rays, which can make all the difference.


<img src="/posts/2021-01-06-vancouver-s-pandemic-weather_files/figure-html/unnamed-chunk-5-1.png" width="768" />

Overall it looks like we can't complain. By Vancouver standards, we had a good amount of clear skies this past year and did not have more rainy times than usual. Yes, there was that smoky period in September. June was more cloudy than usual. But other than that this past year looks pretty good.

But maybe that's because it rained a lot during the daytime this past year, whereas it usually rains at night in Vancouver? Maybe that's reaching for straws, but that's easy enough to check. Let's only count daytime hours, so times between sunset and sunrise.


<img src="/posts/2021-01-06-vancouver-s-pandemic-weather_files/figure-html/pandemic-daytime-weather-1.png" width="768" />

And again, there is not that much to complain about in the data. April and August look spectacularly sunny, overall the fall and winter appear to we well within historical patterns.

Looks like I grudgingly have to admit that my gripes with Vancouver pandemic weather is mostly my perception and there is no evidence that we have been hit with particularly poor weather this past year.

As usual, the code for this post [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-01-02-bc-back-to-covid-school.Rmarkdown) in case anyone wants to reproduce or adapt it to look at other places in Canada (or elsewhere in the world that has similar weather data).

<details><summary>Reproducibility receipt</summary>

```
## [1] "2021-01-06 13:02:20 PST"
```

```
## Local:    master /Users/jens/Google Drive/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [0747b09] 2021-01-06: pandemic weather post
```

```
## R version 4.0.3 (2020-10-10)
## Platform: x86_64-apple-darwin17.0 (64-bit)
## Running under: macOS Big Sur 10.16
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.0/Resources/lib/libRblas.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.0/Resources/lib/libRlapack.dylib
## 
## locale:
## [1] en_CA.UTF-8/en_CA.UTF-8/en_CA.UTF-8/C/en_CA.UTF-8/en_CA.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] suncalc_0.5.0    weathercan_0.3.4 forcats_0.5.0    stringr_1.4.0   
##  [5] dplyr_1.0.2      purrr_0.3.4      readr_1.4.0      tidyr_1.1.2     
##  [9] tibble_3.0.4     ggplot2_3.3.2    tidyverse_1.3.0 
## 
## loaded via a namespace (and not attached):
##  [1] tidyselect_1.1.0  xfun_0.18         haven_2.3.1       colorspace_2.0-0 
##  [5] vctrs_0.3.5       generics_0.1.0    htmltools_0.5.0   yaml_2.2.1       
##  [9] blob_1.2.1        rlang_0.4.9       pillar_1.4.7      glue_1.4.2       
## [13] withr_2.3.0       DBI_1.1.0         dbplyr_1.4.4      modelr_0.1.8     
## [17] readxl_1.3.1      lifecycle_0.2.0   munsell_0.5.0     blogdown_0.19    
## [21] gtable_0.3.0      cellranger_1.1.0  sanzo_0.1.0       rvest_0.3.6      
## [25] codetools_0.2-16  evaluate_0.14     labeling_0.4.2    knitr_1.30       
## [29] fansi_0.4.1       broom_0.7.0       Rcpp_1.0.5        scales_1.1.1     
## [33] backports_1.2.0   jsonlite_1.7.2    farver_2.0.3      fs_1.4.1         
## [37] hms_0.5.3         digest_0.6.27     stringi_1.5.3     bookdown_0.19    
## [41] grid_4.0.3        cli_2.2.0         tools_4.0.3       magrittr_2.0.1   
## [45] crayon_1.3.4      pkgconfig_2.0.3   ellipsis_0.3.1    data.table_1.13.0
## [49] xml2_1.3.2        reprex_0.3.0      lubridate_1.7.9.2 assertthat_0.2.1 
## [53] rmarkdown_2.5     httr_1.4.2        rstudioapi_0.13   R6_2.5.0         
## [57] git2r_0.27.1      compiler_4.0.3
```
</details>
