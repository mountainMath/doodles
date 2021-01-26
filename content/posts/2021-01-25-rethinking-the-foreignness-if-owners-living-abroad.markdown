---
title: Rethinking the "foreignness" if owners living abroad
author: Jens von Bergmann
date: '2021-01-25'
slug: rethinking-the-foreignness-if-owners-living-abroad
categories:
  - CANSIM
  - Empty Homes
  - taxes
  - Vancouver
tags: []
description: "Comparing CHSP and SVT data we try to tease out how foreign our forein owners really are."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/svt_chsp_comparison-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---



 
<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2021/01/25/rethinking-the-foreignness-if-owners-living-abroad/" target="_blank">HomeFreeSociology</a>)</i></p>







TLDR: Combining our two major sources of data on the "foreignness" of property owners suggests at least half of those owning property in high demand parts of BC but living outside of Canada are Canadian citizens or permanent residents. 

**How Foreign Are You?**

BC housing discussions have often focused on various aspects of "foreignness" -- foreign buyers, foreign owners, non-resident owners, foreign capital, home owners with non-anglicized last names, out of province buyers, buyers on 10-year entry program, foreign landlords -- the list goes on in bewildering variety, and each category comes with it's own range of interpretations and definitions. Thanks to the BC's Speculation and Vacancy Tax ([SVT](https://news.gov.bc.ca/releases/2021FIN0002-000024)), and Statistics Canada's attempt to consolidate ownership records through the [CHSP dataset](https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&amp;SDDS=5257), we now have pretty good data on at least two definitions of "foreignness" for multiple years. This is especially great insofar as the latest data allows us to compare and contrast these definitions and possibly take a look at a group that rarely gets talked about in our housing discussions: Canadians who live abroad but still own property in BC.

Let's start with our two different definitions of "foreignness" at the property level. "Foreign Owned" properties, as defined via the SVT, are those owned by [a person who isn't a Canadian citizen or permanent resident of Canada](https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax/how-tax-works/terms-definitions#foreign-owner). "Non-resident Owned" properties, as defined by the CHSP, are those where the owner is [a person whose primary dwelling is outside of Canada](https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=assembleDESurv&DECId=796227&RepClass=591&Id=1281815&DFId=425072). In both cases, where multiple owners exist, definitions can be narrowed (e.g. including properties as foreign owned only where all owners are foreign), expanded (e.g. including properties as foreign owned if any owners are foreign), or differentiated (e.g. setting aside properties where only some owners are foreign as "mixed") accordingly.

The matchup between the two definitions of "foreignness" offered by SVT and CHSP is not perfect. By definition, SVT Foreign Owners includes non-citizen or non-PR holders living in Canada as well as abroad, and the CHSP Non-resident Owner category includes all owners thought to be living outside of Canada, but excludes non-citizen non-PR holders that live in Canada. But this variation is potentially useful! If SVT Foreign Owners are larger than CHSP Non-Resident Owners, we might get a peek at the lower bound for how many Resident Owners are not Citizens or Permanent Residents. By contrast, if CHSP Non-Resident Owners are larger than SVT Foreign Owners, we get a peek at the lower bound for how many Canadians (citizens or PRs) abroad might still own property in BC.

So let's take a peek! But before we get started it's a good idea to get a clearer picture how these two data sources compare. After all, the two definitions are constructed by two different government agencies drawing upon slightly different (but related) data, and using slightly different inclusion criteria. In particular, properties are [excluded from SVT](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/18046#section1) if they're worth less than $150,000 CA, or located on First Nations land (or, peculiarly, in the Village of Lions Bay). Additionally, in 2018 the SVT excluded residential properties without structures on them. As a result, we might expect CHSP to have more properties. But CHSP is based on assessment rolls, generally assessed as of July 1st, where SVT is levied in January for properties owned based on the prior year's assessment (from July 1st). As a result, properties added (e.g. via development) between July and January may show up in the SVT database, but not in CHSP, leaving SVT with more properties. So we can start our analysis by comparing the total number of residential properties for each municipality as listed in the two data sources.

<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/unnamed-chunk-3-1.png" width="768" />

The graph is done on a log scale so we can more easily compare the view small municipalities like Belcarra and large ones like Vancouver on the same graph. In general, the two data sources agree quite well, but there are some differences. The log scale visually compresses differences, and we can look at the ratio of the estimates from the two sources to get a better picture of the differences.


<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/unnamed-chunk-4-1.png" width="768" />

We get a mix, with some municipalities having more CHSP than SVT properties, and other municipalities the opposite. The variations are never especially large, but large enough that we probably shouldn't treat the two data sources as identical. While the administrative variations in excluded properties and new developments may account for the variations in total properties, we should be careful in interpretation - even moreso given some [revisions in SVT data](https://homefreesociology.com/2021/01/19/two-years-of-bcs-speculation-and-vacancy-tax-data/)  between 2018 and 2019 Technical Reporting. In particular, it seems prudent to avoid deriving new variables by differences counts across datasets, for example subtracting the SVT "Foreign Owner" count from the CHSP properties owned exclusively by "non-resident owners". 

A more robust strategy would be to compute the shares of each of these properties within their respective universes and compare shares.

<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/svt_chsp_comparison-1.png" width="768" />

This gives us a clear way to assess how these levels of "foreignness" compare. Here we can see that CHSP "Non-resident Owners" is a much larger category than SVT "Foreign Owners." Their shares differ by roughly a factor of 2, generally a little less in 2018, but more (sometimes significantly) in 2019. In other words, it appears that roughly half of BC property owners living outside of Canada are Canadian citizens or Permanent Residents. This may surprise those who've taken CHSP "Non-residency" as a straightforward indicator of "Foreignness." 

Overall, SVT "foreign owned" properties have grown more scarce between 2018 and 2019. Of further note, in both years only a small fraction of "Foreign Owners" are considered "problematic" and then taxed by the SVT. The vast majority are exempt, most likely either renting out their properties to an arm's length tenant or living in the property as a primary residence (far and away the two most common exemptions, as visible in [comparisons across SVT reporting years](https://homefreesociology.com/2021/01/19/two-years-of-bcs-speculation-and-vacancy-tax-data/)).

If about half of "Non-resident Owners" aren't showing up as "Foreign Owners," then where are they showing up in SVT data? That's a much trickier question to answer. The SVT data establishes a variety of categories, as demonstrated below.

<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/unnamed-chunk-5-1.png" width="768" />

Unfortunately, from the documentation we have so far, we don't know whether Canadian citizen and PR property owners abroad get lumped in with "Other Canadians" or end up in "Mixed" or "Other" or even "Satellite Family" categories. Most likely they appear in some combination of these categories, reflecting the complicated assignment of owners to properties. 

Regardless of which categories Canadian citizen and PR property owners abroad get assigned to, we do know that most homes in all categories were deemed to be exempt from the Speculation and Vacancy Tax. Again, far and away most exemptions stem from properties serving as the primary residence for an owner or tenant, though properties can also be exempt for a variety of other reasons. In nearly every municipality, less than one percent of properties paid any Speculation and Vacancy Tax. The standouts differed between years, with Richmond and West Vancouver topping the list of proportionately most taxpaying properties in 2018 (reaching nearly two percent), shifting to Saanich and Belcarra in 2019 (neither of which had enough foreign owners to break the category out). 

<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/unnamed-chunk-6-1.png" width="768" />

Overall the share of properties paying the SVT has almost universally gone down between 2018 and 2019, which should be expected as owners adjust to the new taxes by selling or renting out their property or making other changes to qualify for one of the exemptions.

**Caution in Comparison**

Unfortunately, while we know that the vast majority of "foreign owned" properties are exempt from the Speculation and Vacancy Tax, we don't know how many are exempt because they live in the property as a principal resident and how many are exempt because they rent out the property (or for some other reason). It sure would be nice if [SVT technical reports](https://homefreesociology.com/2021/01/19/two-years-of-bcs-speculation-and-vacancy-tax-data/) broke out exemptions by category of property ownership! Anecdotally, it has not been uncommon for those on work permits or student permits (hence not yet permanent residents) to own a residence that they live in as a principal resident while working or studying in BC, suggesting that some portion of "foreign owned" properties likely qualify for the principal residence exemption from the SVT and would likely not be counted as "non-resident" owners within the CHSP data. Following the logic of our calculations above, the larger the proportion of "foreign owned" properties containing their owners as principal residents, the larger our estimate would be of "non-resident" properties owned by Canadian citizens or permanent residents living abroad. In effect, Canadians abroad could account for even more than roughly half of "non-resident" owned properties in the CHSP data. 

On the other hand, it may be that the CHSP data simply overestimates the number of "non-resident" owned properties by virtue of flaws in their data matching across various administrative sources. We know that matching remains imperfect and the shares may get revised over time as already happened twice with 2018 data. Maybe some of their "non-resident" owners are actually resident, but just not discovered as such by Statistics Canada. In this case there would be a smaller "real" number of properties owned by "non-residents" of Canada than reported by CHSP, approaching something closer to the "foreign" owned properties in the SVT data, and accordingly our estimate of half of properties owned by those abroad being owned by Canadian would be a little high.

So our estimate that about half of BC property owners living abroad are actually Canadian citizens or permanent residents might be a little low or a little high. But it's a reasonable estimate given the combination of SVT and CHSP data and the countervailing sources of possible error.

Finally, just to round out our exploration, let's take a look at the CHSP non-resident owner data that also has information on properties that are jointly owned by residents and non-residents. With more careful and detailed breakdowns from the SVT data, we might be able to track how jointly owned "mixed" properties tracked with CHSP "mixed" properties. As it is, we still find a full exploration too tricky.

<img src="/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad_files/figure-html/unnamed-chunk-7-1.png" width="768" />

The CHSP non-resident participation categories have remained even more stable than the SVT declarations between 2018-2019. That said, both datasets continue to be subject to revisions. In most cases these adjustments have lead to a reduction in the overall shares of foreign owners and non-resident participants.

## Upshot

Drawing upon both CHSP and SVT data and their differing deinitions of "Foreignness," we combine the two to estimate the size of a new category of interest: Canadians (citizens and PRs) living abroad who still own property in high demand areas of BC. This category appears to account for roughly half of property owners living abroad as estimated by CHSP data for included municipalities. That such a large portion of BC property owners living abroad are likely legally Canadian casts a rather harsh light on the extent to which "foreignness" has played such a strong role in our housing discourse.

As usual, the code for the graphs is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-01-25-rethinking-the-foreignness-if-owners-living-abroad.Rmarkdown) for anyone to reproduce or adapt for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2021-01-25 18:58:08 PST"
```

```
## Local:    master /Users/jens/Google Drive/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [b11799c] 2021-01-16: teaks in cap gains post
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
##  [1] cansim_0.3.5              cancensus_0.4.1          
##  [3] mountainmathHelpers_0.1.2 forcats_0.5.0            
##  [5] stringr_1.4.0             dplyr_1.0.3              
##  [7] purrr_0.3.4               readr_1.4.0              
##  [9] tidyr_1.1.2               tibble_3.0.4             
## [11] ggplot2_3.3.2             tidyverse_1.3.0          
## 
## loaded via a namespace (and not attached):
##  [1] tidyselect_1.1.0   xfun_0.18          haven_2.3.1        colorspace_2.0-0  
##  [5] vctrs_0.3.5        generics_0.1.0     htmltools_0.5.0    yaml_2.2.1        
##  [9] blob_1.2.1         rlang_0.4.9        pillar_1.4.7       glue_1.4.2        
## [13] withr_2.3.0        DBI_1.1.0          RColorBrewer_1.1-2 dbplyr_1.4.4      
## [17] modelr_0.1.8       readxl_1.3.1       lifecycle_0.2.0    munsell_0.5.0     
## [21] blogdown_0.19      gtable_0.3.0       cellranger_1.1.0   sanzo_0.1.0       
## [25] rvest_0.3.6        codetools_0.2-16   evaluate_0.14      labeling_0.4.2    
## [29] knitr_1.30         curl_4.3           fansi_0.4.1        broom_0.7.0       
## [33] Rcpp_1.0.5         scales_1.1.1       backports_1.2.0    jsonlite_1.7.2    
## [37] farver_2.0.3       fs_1.4.1           hms_0.5.3          digest_0.6.27     
## [41] stringi_1.5.3      bookdown_0.19      rprojroot_2.0.2    grid_4.0.3        
## [45] here_0.1           cli_2.2.0          tools_4.0.3        magrittr_2.0.1    
## [49] crayon_1.3.4       pkgconfig_2.0.3    ellipsis_0.3.1     xml2_1.3.2        
## [53] reprex_0.3.0       lubridate_1.7.9.2  assertthat_0.2.1   rmarkdown_2.5     
## [57] httr_1.4.2         rstudioapi_0.13    R6_2.5.0           git2r_0.27.1      
## [61] compiler_4.0.3
```
</details>

