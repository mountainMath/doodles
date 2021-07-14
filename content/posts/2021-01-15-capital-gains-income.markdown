---
title: Capital Gains Income
author: Jens von Bergmann
date: '2021-01-15'
slug: capital-gains-income
categories:
  - CANSIM
  - Vancouver
  - cancensus
  - taxes
tags: []
description: "Income concepts in Canada generally only include regular income and in particular miss (taxable) capital gains. But capital gains makes up an important income source and we should pay more attention to it."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2021-01-15-capital-gains-income_files/figure-html/avg-cap-gains-map-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




We have [previously look at T1FF tax data](https://doodles.mountainmath.ca/blog/2020/04/23/census-tract-level-t1ff-tax-data/) which is an extremely rich annual administrative data source. The [cansim tables](https://www150.statcan.gc.ca/n1/en/surveys/4105) have a range of variables to inform about incomes of individuals, families (sliced by number of children, including zero children), low income statistics, and just statistics about the number of taxfilers and dependants by age.

It's available on cansim for Canada overall, the provinces and CMAs/CAs. That's great, but sometimes it's nice to have finer geographic detail. Especially when trying to understand neighbourhood change, census tract level data on incomes and basic demographics is extremely valuable, and is now [available on CensusMapper for all years 2000 through 2018 at the census tract level](https://doodles.mountainmath.ca/blog/2020/04/23/census-tract-level-t1ff-tax-data/).

When working with data we always need to pay attention to the definitions, and income data is no difference. Income data generally only contains **regular income sources**, and some income data, like for example capital gains income, is excluded. But capital gains income can be quite sizable, so it's a good idea to take a more detailed look at it.

### Capital Gains Income
Typically people only have sporadic capital gains income, if at all. For that reason it is not included in income statistics, but in aggregate it can have a substantial effect.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-1-1.png" width="768" />

Of note here is that this only includes **taxable capital gains**, tax-free capital gains from e.g. the sale of a principal residence is not captured in this.

There are some interesting movements, traditionally Toronto saw the highest capital gains relieved per taxfiler, but Vancouver overtook Toronto between 2014 and 2015 and the spread increased in the following years, possibly fuelled by Vancouver's large real estate gains and boosted by the [mandatory declaration of principal residence sales starting in the 2016 tax year](https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2016-growing-middle-class/reporting-sale-your-principal-residence-individuals.html) which might have increased compliance with taxable capital gains declarations on non-primary residence sales.

Another way to look at the data is to show the percentage of capital gains received out of the total income (plus capital gains received).

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-2-1.png" width="768" />

On this metric Vancouver tracked Calgary fairly well until about 2015, when Toronto overtook Calgary and Vancouver made even larger gains. 

Only a minority of taxfilers and dependants has capital gains income.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-3-1.png" width="768" />

These gains aren't uniformly distributed, they skew heavily toward higher income households.




<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-5-1.png" width="768" />

Median capital grains income is surprisingly uniform among income groups below $60k and steps up again at incomes over $100. It's remarkable that Vancouver has significantly higher capital gains income than the other large metros in all income groups.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-6-1.png" width="768" />

The distribution of capital gains income is very skewed, average capital gains income is an order of magnitude higher. Interestingly, average capital gains income for people with income under $20k is higher than that for people in the other income groups below $100k. This speaks to the ability for some to structure their income as capital gains and take advantage of their lower tax rates. 

The jump in average capital gains income for those with income over $100k a year is substantial. But this should not be surprising. After all, capital gains income is generally only available to those that have capital to gain from. And, as we have previously explored, [wealth correlates highly with income](https://doodles.mountainmath.ca/blog/2020/02/19/wealth-vs-income/).

It is striking that Vancouver again leads the larger CMAs in all income groups.

To better understand the interplay between regular and capital gains income, we look at the increase in median income if capital gains is included.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-7-1.png" width="768" />

The increase of median income is quite a bit higher than the median capital gains income, which on first sight may be surprising and might benefit from a quick explanation. This effect is a simple consequence of the mathematics of adding these two differently shaped distributions, the income distribution and the capital gains distribution. As an example, let's focus on the income distribution in the $20,000 to $39,999 bracket and for simplicity assume the income distribution in the bracket is uniform. On the other hand, we have seen that the distribution of capital gains income is anything but uniform, looking at the above graphs for Vancouver we see it has a median of around $2,000 and an average of around $20,000. We can envision that distribution as following an exponential function, with most people making little capital gains income and some making a lot. 

A quick simulation with 10000 people in this tax bracket, fitted to roughly produce the above statistics, can illustrate this nicely.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-8-1.png" width="768" />

These graphs are a good reminder that some income, like capital gains income, is not captured in income concepts like total income or standard census release data that only count regular income source, but these incomes can still play a significant role in the aggregate money that becomes available to taxfilers.



## Geographic distribution
We have seen above that (taxable) capital gains income is not distributed uniformly across income groups. And we know [income groups aren't distributed uniformly geographically](https://doodles.mountainmath.ca/blog/2018/10/28/understanding-income-distributions-across-geographies-and-time/). 


Therefore it is reasonable to expect that (taxable) capital gains income is not distributed uniformly geographically. Unfortunately capital gains is not a regular census variable, and it is not part of our census tract level T1FF data extract. But the 2011 NHS did report on capital gains income. Which allows to take a look at the geographic distribution of capital gains income in 2010, taking Vancouver as an example. While NHS data is generally sub-optimal as a data source, we have [seen that pure income data, not taking cross-tabs with other census variables, performs quite well](https://doodles.mountainmath.ca/blog/2017/09/29/a-retrospective-look-at-nhs-income-data/), despite some ill-informed claims to the contrary.

<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/unnamed-chunk-9-1.png" width="768" />


<img src="/posts/2021-01-15-capital-gains-income_files/figure-html/avg-cap-gains-map-1.png" width="768" />

## Upshot
Capital gains income is a significant source of income that is absent from general income data. And the capital gains data we have still misses non-taxable capital gains income, for example capital gains from selling a principal residence.

(Taxable) capital gains income is especially prevalent in higher income groups, likely due to the [strong (yet imperfect) correlation between income and wealth](https://doodles.mountainmath.ca/blog/2020/02/19/wealth-vs-income/). And it also shows strong geographic variation, and also varies considerably over time.

This suggests that analysis based on income may need to pay more attention to capital gains income, at least as a cross-check or robustness test. To this end it would be useful to also have census tract level capital gains income. Or even better, start adding "income including (taxable) capital gains" as a standard product in income metrics in StatCan tabkles and census data.

Moreover, I would like to see a longitudinal analysis to identify to what extent taxpayers manage to structure all or most of their income as capital gains, having regular (although possibly volatile) capital gains income (almost) every year. This may well already exist and I would appreciate pointers.

From a policy perspective, capital gains income should get a very close look. Michael Smart recently [made a convincing case for a capital gains tax reform](https://financesofthenation.ca/2021/01/07/its-time/).

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-01-15-capital-gains-income.Rmarkdown) for anyone to reproduce or adapt for their own purposes. 


<details><summary>Reproducibility receipt</summary>

```
## [1] "2021-07-14 10:54:49 PDT"
```

```
## Local:    master /Users/jens/Google Drive/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [f96b9e6] 2021-06-09: upate image text
```

```
## R version 4.1.0 (2021-05-18)
## Platform: x86_64-apple-darwin17.0 (64-bit)
## Running under: macOS Big Sur 10.16
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.1/Resources/lib/libRblas.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.1/Resources/lib/libRlapack.dylib
## 
## locale:
## [1] en_CA.UTF-8/en_CA.UTF-8/en_CA.UTF-8/C/en_CA.UTF-8/en_CA.UTF-8
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] patchwork_1.1.1           mountainmathHelpers_0.1.2
##  [3] tongfen_0.3.3             cansim_0.3.9             
##  [5] cancensus_0.4.3           forcats_0.5.1            
##  [7] stringr_1.4.0             dplyr_1.0.7              
##  [9] purrr_0.3.4               readr_1.4.0              
## [11] tidyr_1.1.3               tibble_3.1.2             
## [13] ggplot2_3.3.3             tidyverse_1.3.1          
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.6         lubridate_1.7.10   class_7.3-19       assertthat_0.2.1  
##  [5] digest_0.6.27      utf8_1.2.1         R6_2.5.0           cellranger_1.1.0  
##  [9] backports_1.2.1    reprex_2.0.0       evaluate_0.14      e1071_1.7-7       
## [13] httr_1.4.2         blogdown_1.3       pillar_1.6.1       rlang_0.4.11      
## [17] readxl_1.3.1       rstudioapi_0.13    jquerylib_0.1.4    rmarkdown_2.8     
## [21] munsell_0.5.0      proxy_0.4-26       broom_0.7.6        compiler_4.1.0    
## [25] modelr_0.1.8       xfun_0.23          pkgconfig_2.0.3    htmltools_0.5.1.1 
## [29] tidyselect_1.1.1   bookdown_0.22      fansi_0.5.0        crayon_1.4.1      
## [33] dbplyr_2.1.1       withr_2.4.2        sf_1.0-0           grid_4.1.0        
## [37] jsonlite_1.7.2     gtable_0.3.0       lifecycle_1.0.0    DBI_1.1.1         
## [41] git2r_0.28.0       magrittr_2.0.1     units_0.7-2        scales_1.1.1      
## [45] KernSmooth_2.23-20 cli_2.5.0          stringi_1.6.2      fs_1.5.0          
## [49] xml2_1.3.2         bslib_0.2.5.1      ellipsis_0.3.2     generics_0.1.0    
## [53] vctrs_0.3.8        tools_4.1.0        glue_1.4.2         hms_1.1.0         
## [57] yaml_2.2.1         colorspace_2.0-1   classInt_0.4-3     rvest_1.0.0       
## [61] knitr_1.33         haven_2.4.1        sass_0.4.0
```
</details>
