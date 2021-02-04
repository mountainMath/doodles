---
title: Bartholomew's dot destiny
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2021-02-03'
slug: bartholomew-s-dot-destiny
categories:
  - density
  - dotdensity
  - Vancouver
  - zoning
tags: []
description: "Bartholomew made projections of what a Central Vancouver penninsula (UBC, Musqueam 2, Vancouver, Burnaby, New Westminster) with 1 million people would look like. We no just about hit that number time to compare how his projections stock up."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2021-02-03-bartholomew-s-dot-destiny_files/figure-html/vancouver-dot-2016-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2021/02/04/bartholomew-s-dot-destiny/" target="_blank">HomeFreeSociology</a>)</i></p>



How did early planners envision Vancouver's future growth? Fortunately for us, they left a prediction in dot-density map form! Here we compare their prediction to a dot-density map from today. Let's check out how our dot destiny unfolded!

Vancouver grew rapidly from its incorporation in 1886 right up to the great crash of 1913, followed by WWI and a raging influenza epidemic (which we all know [way too much](https://homefreesociology.com/2020/11/25/hendersons-guide-to-pandemic-history/) about now). Growth returned through the 1920s, but an appetite for planning also met with a newly professionalized planning profession during this era. The City of Vancouver, in the process of amalgamating with the surrounding municipalities of Point Grey and South Vancouver, initiated a town planning commission, adopted interim zoning by-laws, and hired American planner Harland Bartholomew to consult. Bartholomew's team kept Vancouver planning in conversation with evolving practice in the USA, where he was a central figure in transforming many municipalities' explicitly race-based zoning (outlawed by courts) into use-based zoning that would have the same effect (see local planner Stephanie Allen's [award-winning](https://www.sfu.ca/urban/news-and-events/recent-news/stephanie-allen.html) [thesis](https://summit.sfu.ca/item/19420) for more). [Bartholomew's report](https://archive.org/details/vancplanincgen00vanc), while not adopted in its entirety, is widely credited as having a profound effect on the shape of the City. Here we want to take a quick peek at his prediction for the City's future.

Looking forward from 1929, Bartholomew both suggested and predicted that Vancouver further amalgamate with nearby Burnaby and New Westminster, consolidating the peninsula. The combined population was about 280,000 at the time (reaching 289,681 residents by the 1931 census). Based on a variety of rudimentary forecasts, Bartholomew predicted that the peninsula containing Vancouver, Burnaby, and New Westminster would reach a population of one million residents by 1960. He even plotted out the expected distribution of this population in a lovely density dot-map on [p. 94](https://archive.org/details/vancplanincgen00vanc/page/94/mode/2up) of [his report](https://archive.org/details/vancplanincgen00vanc).

![](/images/bartholomew_population_original.png)


As it turned out it would take much longer than Bartholomew forecast to reach the one million mark. Indeed, we've probably reached it only within the last couple of years. As of 2016, Vancouver, Burnaby, and New Westminster remained unamalgamated, and together with UBC/UNA/UEL and Musqueam 2 (also unamalgamated) they totalled some 952,779 residents. We wanted to see what that distribution actually looks like today, using the same sort of dot-matrix map hand-drawn by Bartholomew's team. Of course, we're going to assemble it in R instead of drawing it by hand, allowing anyone to reproduce our work. Here's what it looks like.


<img src="/posts/2021-02-03-bartholomew-s-dot-destiny_files/figure-html/vancouver-dot-2016-1.png" width="4200" />

Comparing the two maps, a similar overall pattern emerges that reflects, in no small part, the enduring legacy of [zoning](https://archive.org/details/vancplanincgen00vanc/page/n223/mode/2up) enacted through the planning process itself. The forecast was that Downtown Vancouver and the West End would remain the most dense, reflecting the least restrictive zoning. The surrounding neighbourhoods would offer a middle density, with apartment buildings going up to three stories. Everywhere else would be dominated by relatively low-density (mostly single-family residential). The big picture today is broadly similar to the forecast from ninety years ago. In particular, all that zoning to protect low-density neighbourhoods remains stubbornly in place! But a few key differences in the map stand out.

Downtown, Bartholomew's team forecast a fairly even distribution of high density. The actual distribution is far more variable! We see fewer people than forecast within the Central Business District (CBD) itself, but many more within the high-rise apartment buildings surrounding the CBD. Notably, people also show up along the north side of False Creek, which Bartholomew forecast remaining industrial. Guess he didn't foresee de-industrialization, Expo 86, and Li Ka-shing!

Outside of Downtown Vancouver, some areas became more dense than anticipated, while others became less so, and these patterns are pretty interesting! On the more dense than anticipated side, we see regional town centres emerging as hotspots of density in Burnaby and New Westminster, and being linked together through transit-oriented development accompanying SkyTrain lines. We also see Kerrisdale and Marpole showing up as outposts of density. And then, of course, there's the universities: SFU and UBC and surrounding Endowment Lands. Though large portions of the latter were set aside as Pacific Spirit Park, we see the towers housing an increasing portion of the community, as at Wesbrook Village.

What of where density appears lower than forecast? Select portions of Fairview and Mount Pleasant (as surrounding Jonathan Rogers Park), were re-zoned as industrial land after Bartholomew's plan, and their population correspondingly failed to grow. More intriguingly, Strathcona, Commercial Drive, and Kits Point also appear far less dense than forecast, due in part to downzonings over the years, making building in these locations increasingly restrictive. 


Of note, other factors also play a role in divergent forecasts. In particular, declines in household size from 4.4 in Bartholomew's day to 2.4 in 2016 mean it takes significantly more housing now to contain one million people than when Bartholomew made his projection. This helps explain why the low-density, house-oriented portions of the map look even less dense than forecast by Bartholomew's team.

<img src="/posts/2021-02-03-bartholomew-s-dot-destiny_files/figure-html/canada-household-size-1.png" width="768" />



Overall, it's a fun exercise to compare ninety year old forecasts in dot-density form to what we see today. And now is the perfect time to do it given we've finally matched the predicted population size! This is a great example of a [self-fulfilling prophecy](https://doodles.mountainmath.ca/blog/2020/05/25/projections-and-self-fulfilling-prophecies/) where much of the density distribution was enshrined in the zoning. But this exercise should also remind us that we're still building our cities based on planning decisions about urban form coupled with misguided forecasts made by long-dead men operating in a very different - and more discriminatory - era. We can probably do better.

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-02-03-bartholomew-s-dot-destiny.Rmarkdown) if others want to reproduce or adapt this for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2021-02-03 21:21:39 PST"
```

```
## Local:    master /Users/jens/Google Drive/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [6c670a1] 2021-01-31: typos
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
##  [1] rvest_0.3.6               xml2_1.3.2               
##  [3] sf_0.9-7                  dotdensity_0.1.0         
##  [5] mountainmathHelpers_0.1.2 cancensus_0.4.1          
##  [7] forcats_0.5.0             stringr_1.4.0            
##  [9] dplyr_1.0.3               purrr_0.3.4              
## [11] readr_1.4.0               tidyr_1.1.2              
## [13] tibble_3.0.4              ggplot2_3.3.3            
## [15] tidyverse_1.3.0          
## 
## loaded via a namespace (and not attached):
##  [1] tidyselect_1.1.0   xfun_0.18          haven_2.3.1        colorspace_2.0-0  
##  [5] vctrs_0.3.5        generics_0.1.0     htmltools_0.5.0    yaml_2.2.1        
##  [9] blob_1.2.1         rlang_0.4.9        e1071_1.7-4        pillar_1.4.7      
## [13] glue_1.4.2         withr_2.3.0        DBI_1.1.0          dbplyr_1.4.4      
## [17] modelr_0.1.8       readxl_1.3.1       lifecycle_0.2.0    munsell_0.5.0     
## [21] blogdown_0.19      gtable_0.3.0       cellranger_1.1.0   codetools_0.2-16  
## [25] evaluate_0.14      knitr_1.30         class_7.3-17       fansi_0.4.1       
## [29] broom_0.7.4        Rcpp_1.0.5         KernSmooth_2.23-17 classInt_0.4-3    
## [33] scales_1.1.1       backports_1.2.0    jsonlite_1.7.2     farver_2.0.3      
## [37] fs_1.4.1           hms_0.5.3          digest_0.6.27      stringi_1.5.3     
## [41] bookdown_0.19      grid_4.0.3         cli_2.2.0          tools_4.0.3       
## [45] magrittr_2.0.1     crayon_1.3.4       pkgconfig_2.0.3    ellipsis_0.3.1    
## [49] reprex_0.3.0       lubridate_1.7.9.2  assertthat_0.2.1   rmarkdown_2.5     
## [53] httr_1.4.2         rstudioapi_0.13    R6_2.5.0           git2r_0.27.1      
## [57] units_0.6-7        compiler_4.0.3
```
</details>
