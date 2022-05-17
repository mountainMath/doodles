---
title: On Broadway
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2022-05-17'
slug: on-broadway
categories:
  - zoning
  - Vancouver
  - Transportation
  - affordability
  - density
tags: []
description: "The Broadway Plan is coming before council, time for a review of what's being proposed, which parts are good and which might need work, and how that fits into the historical context."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2022/05/17/on-broadway/index_files/figure-html/broadway_zoning_history-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2022/05/17/on-broadway/" target="_blank">HomeFreeSociology</a>)</i></p>






We have finally found some time to take a closer look at the [Broadway Plan](https://vancouver.ca/home-property-development/broadway-plan.aspx). There are many good things to say about the plan, it adds housing in an amenity and job rich area about to get a new subway line. It promises to not just undo the downzoning the city imposed on parts of the area in the 1970s but enables a bit more housing to make up for lost time.

The plan also tacks heavily against the displacement risk to renters in the established rental apartment areas by both 1) limiting the redevelopment potential in those areas and 2) increasing the strength of tenant relocation and right of return policies, a hard-learned lesson from the redevelopment activity around Metrotown in neighbouring Burnaby. In short, overall there's a lot to like.

In this post we want to accomplish several somewhat diverse goals

1. Provide some code to improve the data analysis in the plan that uses census data,
2. Place the Broadway plan more firmly into context of historical zoning changes in that corridor, and
3. Interrogate the decision to limit development potential in the existing low-density areas, which we have argued in the past [make for ideal sites to concentrate development becaues of their low displacement implications](https://doodles.mountainmath.ca/blog/2019/02/21/planned-displacement/).


## The Broadway Corridor
The Broadway Plan document chooses to use census tracts as the basis for census data for the Broadway Plan, and to track changes in the corridor since 2001. This is a fairly coarse geography choice since census tracts are rather large and extend quite a bit beyond the outlined area. Dissemination area data is available for all censuses since 2001 and is much better suited to approximate the corridor. If only data on population, households or dwellings is required, then dissemination block data can give even better estimates.






<img src="{{< blogdown/postref >}}index_files/figure-html/combind_census_data-1.png" width="768" />

We will get different census estimates for the Broadway Corridor depending on which of these we choose. The Census Tract based geography is quite coarse and will likely skew the estimates, the other two are probably better choices. To understand the difference let's take a quick look at population estimates.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-3-1.png" width="672" />

As we would expect, the number of people in the Broadway Corridor depends on the level of geography we chose to approximate the region, and the differences are noticeable. Close observers will note that in addition to the Broadway Plan area, the CT level includes additional parts of Kitsilano and Olympic Village, while the DA level mostly adds Olympic Village, largely accounting for differences in estimates and the larger jump in DA level post-Olympics. If we want to understand the population in a particular year instead of comparing it on a stable region across years we can do better and approximate the region by using the census geography for just that year instead of resorting to using a harmonized geography.

However, these differences matter less when looking at rates, or at change over time as the following graph on the growth during the inter-census periods between 2001 and 2021 demonstrates.

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-4-1.png" width="672" />

These estimates are quite close and indicate that the damage from using a coarse Census Tract based approximation is probably not too large. But the inclusion of Olympic Village, in particular, likely boosts growth estimates in recent years.









## Historical zoning

Using maps we've assembled from archival research for the [Metro Vancouver Zoning Project](https://zoning.sociology.ubc.ca/), we can put together an historical comparison of how zoning along the Broadway Corridor has changed. This won't catch all the change, and as we'll discuss in a minute, that's an important caveat! Nor have we fully back-coded our historical data to match with our most recent data, refining and harmonizing what our zoning codes are actually allowing. But we can still get a glimpse of some of the changes that have occurred just by looking at the maps. 

From the start, the Broadway Plan area mixed industrial uses to the North, with Apartment and Commercial districts in the middle (especially along Broadway), and Low-Density Single Family and Duplex Zoning to the South. The overall story emphasizes a history of experimentation with this mix, encouraged by de-industrialization but also constrained by reactionary moves to downzone and pull back, preserving single-family, duplex, and low-rise areas from change.



<img src="{{< blogdown/postref >}}index_files/figure-html/broadway_zoning_history-1.png" width="768" />

### Industrial Expansion and Contraction

The biggest visible change probably concerns Industrial zoning. There was an initial expansion, from the [modernization of the zoning by-law in 1956](https://bylaws.vancouver.ca/consolidated/3575.PDF) to 1963, when [Industrial zoning](https://bylaws.vancouver.ca/zoning/zoning-by-law-district-schedule-i-1.pdf) swept into the formerly residential zone to the NE of Cambie and Broadway. Only Jonathan Rogers Park remained zoned residential, though a few old houses were grandparented in and have now stuck around long enough to be [considered heritage](https://council.vancouver.ca/20220518/documents/pspc1appendixA.PDF#page=61). 

After this initial expansion, we can see a gradual contraction of Industrial zones along False Creek. The contraction occurred in line with broader North American trends toward urban de-industrialization. Vancouver was notable mostly for its success in shifting so much former industrial land over to a mixture of residential and commercial use. South False Creek was probably the biggest example of this as a coordinated process along the Broadway Corridor, with the area given its own zone between 1974 and 1976, and supported across multiple levels of government as an experiment in residential mixing (with decidedly [mixed results](https://vancouver.ca/files/cov/false-creek-south-fact-sheet.pdf#page=3)). But this area isn't actually included in Broadway land use planning, so we'll set it aside. One of the last big industrial areas to turn over to residential in the Broadway land use planning area was an old brewery on the western edge, tucked between 10th and 12th, which became [Arbutus Walk](https://www.arbutuswalkliving.com/) in the 1990s.

### Expanding Apartment Options

Mid-Century planners looked to enable an update and expansion to Vancouver's increasingly built-out apartment districts after the modernization of the Zoning Code in 1956. This was roughly in line with planner Harland Bartholomew's expectations that the initial zoning plan would only last for [about thirty years](https://homefreesociology.com/2021/02/04/bartholomews-dot-destiny/). Mid-century planners gradually edged the low-rise apartment RM-3 districts outward through the 1960s and early 1970s. This was coupled with an effort to enable towers as a new built form throughout old RM-3 zones via a change to maximum heights in 1961. Correspondingly, towers began to pop up in Kitsilano, Fairview, and Mount Pleasant. 

### Reactionary Downzoning

The 1970s brought in a new party strongly opposed to the proliferation of these new towers: TEAM. They took over council in 1973, installed a new planner, and began downzoning, especially across Kitsilano and Mount Pleasant, shifting high-rise RM-3 lands down to low-rise RM-4 districts. Only the RM-3 surrounding Granville remained. As a result, many of the old towers built from the mid-1960s to the early 1970s could no longer be re-built today, ranging from the apartment buildings near 2nd & Vine in Kitsilano to the Senior's Housing built for the Lutheran Church across from City Hall at Yukon & 10th (the latter also featured as Stop Four in our [Virtual Zoning Tour](https://homefreesociology.com/2021/03/05/virtual-vancouver-zoning-tour/)). In effect, the reactionary downzoning of the 1970s actively forbid the kinds of heights only now being re-enabled by the Broadway Plan today. 

We see the old TEAM's housing legacy, on the whole, as decidedly mixed; balancing downzoning of denser forms with support for low-rise variety and adding housing to former industrial lands (see [Gordon Price & Sam Sullivan](https://viewpointvancouver.ca/2022/01/20/revising-history-with-sam-sullivan-the-team-era/) for a less charitable view). But regardless of the old TEAM's legacy, if you think we've got more than enough housing now, then the newly resurrected [TEAM for a Livable Vancouver Party](https://dailyhive.com/vancouver/colleen-hardwick-team-mayoral-candidate) might be for you. If you don't think we've got enough housing today, well... we'd probably have a lot more older and more affordable housing now if we hadn't downzoned so much of the Broadway Corridor fifty years ago. 

Looking forward, we can and should start building the housing we think people will want some thirty years into the future. That's what the Broadway Plan aims to start enabling. As a reminder, we also want there to be a "some thirty years into the future" for people to live in, which the Broadway Skytrain expansion will help insure to the extent it gets people where they need to go without greenhouse gas emission. And we need people to live near the Skytrain for that to work. 


## Proposed zoning changes
While the plan at this stage does not provide the legal text for zoning changes, it does lay out in some detail how it envisions zoning to change in various areas. These changes are the last point we'll address.


### Conditional rules
It's not clear from the plan how much the actual zoning rules will rely on conditional vs outright zoning. And if the plan envisions to rezone the area, or if it's just left as a guiding document and every single development will require a council decision to move forward like in the Cambie corridor.

For Multiplexes and Townhouses (11.2), as well as Low-rise Apartments (11.3), the proposed rules in [section 11](https://council.vancouver.ca/20220518/documents/pspc1appendixA.PDF#page=276) of the Broadway Plan do seem to be sufficiently clear in the density that's allowed, a clear improvement over general practice in Vancouver to regulate multi-family housing via conditional zoning (or rezoning) only. However, when it comes to Mid to High-Rise Apartments (11.4), Mixed-use High-rise (11.6), Mixed-use Residential (11.7), Office (11.8), Industrial/Employment (11.9), or Transit Integration (11.10) areas no clear guidance on height and FSR is given. Others, like the Mixed-use Low-rise (11.5), while clearly intended for housing purposes refers to existing zoning documents that only allow housing conditionally. This continued over-reliance on conditional zoning and planner discretion in the process will server to further feed into Vancouver's climate of speculation and developer concentration that planners have fostered for many decades now.

### Inclusionary zoning

The plan has fairly aggressive inclusionary zoning requirements, which we are guessing have been tested by the housing economics group to ensure that projects are marginally viable. However, there seem to be no contingencies built into the plan to allow for market prices and rents to fall. If that were to happen (an outcome many would welcome), the projects allowed in the plan will most likely become unviable and development will pause until prices climb back up. We believe this is a major shortcoming of the plan. Even if falling market prices and rents aren't a direct goal of the plan, maybe because of its limited geographic scope, it should be explicitly allowed by the plan. The plan should probably be amended to allow for the possibility of falling prices and rents. It's worth noting that another way to insure we continue to build through any downturns, of course, might be to [get government involved in building](https://www.policynote.ca/financing-public-housing/), but this, too, remains beyond the Plan.

## Low density areas
A final part of the plan worth interrogating is how it deals with the low-density areas within the corridor. These are the remaining areas in yellow in our historical map. We support the move to protect and slow down development in the existing rental apartment areas, but a more balanced approach would offset these protections by [allowing more density in the areas with minimal displacement risk](https://doodles.mountainmath.ca/blog/2019/02/21/planned-displacement/). Even more disappointing is how these zones that allow higher and lower density apartments are delineated. They don't follow planning patterns like proximity to subway stations, or jobs and amenities. Instead they're simply based on continuing forward existing exclusionary and fairly arbitrary historic zoning patterns. In that sense they are largely backward-looking rather than forward-looking, baking in exclusionary decisions made by planners long-dead. 

Just to illustrate this problem, consider Fairview South - Area C.
![FSOC](/images/FSOC.png)

Planners think the FSOB area just to the north is good for up to 6.5 FSR, with 20 storey towers conditionally allowed on some sites, but the highlighted FSOC areas only allow for a maximum of 6 storeys 2.7 FSR rental buildings. As an example, let's take a look at the existing built form around the leftmost of the two FSOC areas looking north toward the FSOB.

![FSOC map view](/images/FSOC_left2.png)

We notice that just across from the FSOC area on the north side of 14th Ave there are existing 13 storey buildings. These combine a rental building constructed in 1972 (thanks 1960s upzoning!) with an additional infill rental building [enabled in 2017 via spot-zoning](https://cd1-bylaws.vancouver.ca/CD-1(661).pdf). But now, 50 years and a subway line later, planners think only six storey rental buildings make sense across the street. It's really hard to interpret this as anything but deference to decisions made by planners many decades ago of where to draw the fairly arbitrary lines delineating higher density from lower density zones, an act that seems more akin to religion than to planning.



## Upshot
While this post devotes quite a bit of space to what we feel are some of the weak points in the Broadway Plan, overall it is a vast improvement over the status quo. While it can't undo all the damage done by the downzoning of much of the corridor in the 1970s, it does revert back to allowing buildings that could be built before the downzoning and adds more options. Allowing more people to live in a jobs and amenity rich area close to a new subway line is good. 

Protecting existing renters is good too, and we are happy to see that planners are avoiding some of the mistakes that were made in Metrotown.

The plan also takes a cautious step toward more predictable outright zoning, at least for the lower density parts of the plan, which is welcome. 

We are hoping that our concerns around the ability to dynamically adapt inclusionary requirements to changing market conditions can be incorporated at the bylaw stage of the plan, planners should include contingencies that allow for falling market prices or rents.

Our concerns about low-density areas, and how the delineation between planning areas are chosen, are painful reminders of how planning can become too focused on historical (right or wrong) paradigms and stay disconnected from the physical and economic realities. Hopefully the Vancouver Plan can do a better job at re-imagining our city from a forward-pointing rather than backward-looking perspective, and undo some of the arbitrary zoning divisions in the current Broadway Plan.
 
To sum up, one thing the Broadway Plan does well is tack against exclusions of existing renters by "the invisible hand of the market." One improvement would be to also tack against "the invisible hand of planners past," keeping our eyes more firmly fixed on securing a more inclusive future. 

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2022-05-17-on-broadway/index.Rmarkdown) for anyone to replicate or adapt for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2022-05-17 13:45:38 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [14741e8] 2022-05-17: broadway post
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
##  [1] mountainmathHelpers_0.1.4 sf_1.0-7                 
##  [3] tongfen_0.3.5             cancensus_0.5.1          
##  [5] forcats_0.5.1             stringr_1.4.0            
##  [7] dplyr_1.0.8               purrr_0.3.4              
##  [9] readr_2.1.2               tidyr_1.2.0              
## [11] tibble_3.1.7              ggplot2_3.3.6            
## [13] tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.8.3       lubridate_1.8.0    class_7.3-20       assertthat_0.2.1  
##  [5] digest_0.6.29      utf8_1.2.2         R6_2.5.1           cellranger_1.1.0  
##  [9] backports_1.4.1    reprex_2.0.1       e1071_1.7-9        evaluate_0.15     
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

