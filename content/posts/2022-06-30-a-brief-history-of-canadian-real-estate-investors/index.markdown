---
title: A brief history of Canadian real estate investors
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2022-06-30'
slug: a-brief-history-of-canadian-real-estate-investors
categories:
  - PUMF
  - canbank
  - wealth
tags: []
description: "Recently has been lots of talk about real estate investors, a good time to look at investors over time."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/06/30/a-brief-history-of-canadian-real-estate-investors/index_files/figure-html/investor_history-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2022/06/30/a-brief-history-of-canadian-real-estate-investors/" target="_blank">HomeFreeSociology</a>)</i></p>









The newest trend in the search for reasons for rising home prices is to look toward investors. The Bank of Canada released [a report](https://www.bankofcanada.ca/2022/01/staff-analytical-note-2022-1/) showing that the share of investors has risen over time. For this they took mortgage data from federally regulated financial institutions and matched them with credit history to determine if some of the buyers already owned property before they bought (during roughly the past 10 years) and kept it after they bought. 

This is an interesting method, though we've got questions and concerns! The method does not capture all purchases. It excludes purchases that are all cash without a mortgage (e.g. downsizers) and it doesn't capture [unregulated mortgages](https://www.bankofcanada.ca/2022/06/staff-working-paper-2022-28/) (e.g. people that go to alternative lenders because they don't meet down payment requirements). This method may also classify as investors people who are simply co-signing loans, like family members acting as mortgage guarantors, as this kind of support often shows up in the mortgage data. If we are mostly interested in timelines and not the overall level of these estimates then some of these concerns are secondary, unless there are shifts in the selection over time (e.g. rising importance of [family assistance in home purchasing](https://toronto.ctvnews.ca/more-than-40-per-cent-of-young-homeowners-in-ontario-got-financial-help-from-parents-poll-1.5791164)).

Let's pull their data using Jens' handy [**canbank**](https://mountainmath.github.io/canbank/index.html) package and take a look at their results.

<img src="{{< blogdown/postref >}}index_files/figure-html/boc_investor_history-1.png" width="768" />

In the data we see that the share of first-time homebuyers has declined over time, holding fairly steady 2018 through 2020 but then entering an accelerated decline mid 2020. Making up for this is an increase in repeat homebuyers, and starting in late 2021, a particular increase in investor buyers who pushed past their previous high around 2018. Another interesting feature in the above data is the drop in first-time buyer share early 2018 through early 2019, which is made up for by a bump in repeat buyers while investor share dropped.

To understand what conclusions we can draw from this we need to consider some other data points. During the pandemic homebuying activity increased significantly and interest rates hit record lows while prices skyrocketed. In times like this the main barrier to homeownership becomes access to capital, which is fairly easy for investors or repeat buyers of those with family assistance and has plausibly pushed more first-time buyers into the unregulated mortgage market and thus shifted them outside of this dataset. This makes it very hard to draw definite conclusions from this data. Is the drop in overall first-time homebuyers as strong as this dataset suggests, or is it a product of selection bias in the dataset? Or a little bit of both?

To understand how interest rates shift the market toward investors and repeat buyers, consider the prevailing interest rates during this time span.

<img src="{{< blogdown/postref >}}index_files/figure-html/mortage_rate_history-1.png" width="768" />

We note how the mortgage rate high point for the 3 and 5 year mortgages correspond to a drop in both first time buyers as well as investor buyers, with first time buyers recovering again after a slight drop from the plateau while investors only pick up after mortgage rates hit new lows.

An interesting question is how these timelines will evolve now with rising mortgage rates. We expect the share of investor buyers in this dataset declining again, for the same reasons discussed above that pushed them up during the record low interest rates. We will have to wait and see how this will pan out in the date over the next year or so.

Either way, the Bank of Canada results are interesting, if not entirely straightforward to interpret. But the datasets drawn upon by the Bank of Canada analysis only go back to 2014. For the rest of this post, we thought it would be fun to take a longer view.

The longest view, of course, takes us back to how [real estate investment](https://homefreesociology.com/2020/07/30/lots-for-sale/) was bound up with Canada's [ugly history of colonial expropriation and land dispossession](https://www.cbc.ca/news/canada/british-columbia/3-turning-points-history-vancouver-real-estate-1.4653565). We're not going to go that far back simply because we don't have the data handy. Here we'll explore what share of Canadian families have been real estate investors since the 1970s. We'll define real estate investors for the rest of this post similarly to the Bank of Canada as families owning property other than their primary residence, except we are looking at the stock instead of the flow. For this we consult the [Survey of Financial security](https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&SDDS=2620), and two of it's precursor surveys, which gives us information on this question in irregular intervals back to 1976.

Here we'll just do a provincial overview. 

<img src="{{< blogdown/postref >}}index_files/figure-html/investor_history-1.png" width="768" />

We start with a provincial breakdown. This is useful for drawing out some varying patterns. These include relative stability in investor ownership in Ontario, a general drop in Quebec and a general rise across the Prairies and Atlantic provinces. BC has perhaps the weirdest trajectory, following a sort of S curve, with investor ownership falling into the 90s, then rising to a peak in 2016 before dropping again to near 1976 levels by 2019. Interestingly, though many local observers think of [Expo 86](https://www.cbc.ca/news/canada/british-columbia/3-turning-points-history-vancouver-real-estate-1.4653565) as a turning point for real estate investment in BC, the share of families owning investment property actually dropped to its all-time low between 1984 and 1999. As a general caveat we should note that there is some uncertainty in these estimates based on the SFS or the precursor surveys, and we probably should not over-interpret small fluctuations.

Returning back to the national level, and matching this up to Bank of Canada estimates, we can see that recent results from the SFS on current ownership (a stock measure) run a little lower than the 17%-20% of purchases by investors (a flow measure) estimated for the country as a whole between 2014-2021, but they're in the same ballpark, and multiple purchases by investors could easily account for the differences. Also, people who make mortgage guarantees for family members or other people and show up in the Bank of Canada mortgage data as investors may not think of themselves as owning (part of) that secondary property and won't list it in the SFS survey. On the other hand, the SFS also counts properties outside of Canada owned by Canadian residents, which might tilt the bias the other way.

We can break this down finer to also break out what share of family units own or rent their primary residence.

<img src="{{< blogdown/postref >}}index_files/figure-html/investor_matrix-1.png" width="768" />

Most Canadians do not own any investment property. The big long term story across most of Canada is either stability or a rise in owner-occupation and a decline in renter households (especially since peaks in 1984). The Atlantic provinces are the exception, with the trends running in the other direction. 

Of those owning an investment property, a real, but relatively small proportion of households rent, with long-term trends here either rising or stable. Most investors (as we've broadly defined them) also occupy housing they own. 

Putting these trends together, the rise in investor ownership seems especially strong in the Prairie and Maritime provinces, but possibly for opposite (and even interrelated) reasons. Rising oil patch wealth in the Prairies likely boosted real estate investment purchases. Meanwhile, the relative decline of opportunities in the Maritimes and their uneven impact may have contributed to more people looking for rental housing (because they couldn't afford to buy) while others became landlords in response. Indeed, many from the Atlantic provinces may have saved up money while temporarily working in the oil patch to buy properties back home which could then be rented out (and this may account for some of the relatively high rates of ownership of properties elsewhere for renters in the Prairies). 

Unfortunately, the longest timelines from surveys are only at the provincial level. But in future posts, we may return to looking at metro areas and comparing once again with results from Bank of Canada methods, as well as CHSP. 


As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-06-30-a-brief-history-of-canadian-real-estate-investors/index.Rmarkdown) for anyone to replicate or adapt for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-06-30 13:13:53 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [38cd45b] 2022-06-30: fix plot title
```

```
## R version 4.2.0 (2022-04-22)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Monterey 12.4
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
##  [1] canpumf_0.1.5             canbank_0.1.2            
##  [3] mountainmathHelpers_0.1.4 forcats_0.5.1            
##  [5] stringr_1.4.0             dplyr_1.0.9              
##  [7] purrr_0.3.4               readr_2.1.2              
##  [9] tidyr_1.2.0               tibble_3.1.7             
## [11] ggplot2_3.3.6             tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] lubridate_1.8.0  assertthat_0.2.1 digest_0.6.29    utf8_1.2.2      
##  [5] R6_2.5.1         cellranger_1.1.0 backports_1.4.1  reprex_2.0.1    
##  [9] evaluate_0.15    highr_0.9        httr_1.4.2       blogdown_1.9    
## [13] pillar_1.7.0     rlang_1.0.2      readxl_1.4.0     rstudioapi_0.13 
## [17] MetBrewer_0.2.0  jquerylib_0.1.4  rmarkdown_2.13   labeling_0.4.2  
## [21] bit_4.0.4        munsell_0.5.0    broom_0.8.0      compiler_4.2.0  
## [25] modelr_0.1.8     xfun_0.31        pkgconfig_2.0.3  htmltools_0.5.2 
## [29] tidyselect_1.1.2 bookdown_0.26    codetools_0.2-18 fansi_1.0.3     
## [33] crayon_1.5.1     tzdb_0.3.0       dbplyr_2.1.1     withr_2.5.0     
## [37] grid_4.2.0       jsonlite_1.8.0   gtable_0.3.0     lifecycle_1.0.1 
## [41] DBI_1.1.2        git2r_0.30.1     magrittr_2.0.3   scales_1.2.0    
## [45] cli_3.3.0        stringi_1.7.6    vroom_1.5.7      farver_2.1.0    
## [49] fs_1.5.2         xml2_1.3.3       bslib_0.3.1      ellipsis_0.3.2  
## [53] generics_0.1.2   vctrs_0.4.1      tools_4.2.0      bit64_4.0.5     
## [57] glue_1.6.2       hms_1.1.1        parallel_4.2.0   fastmap_1.1.0   
## [61] yaml_2.3.5       colorspace_2.0-3 rvest_1.0.2      knitr_1.39      
## [65] haven_2.5.0      sass_0.4.1
```
</details>


