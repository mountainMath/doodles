---
title: First time buyer Lorenz curves revisited
authors: 
  - "Keith Stewart"
  - "Jens von Bergmann"
date: '2024-01-16'
slug: first-time-buyer-lorenz-curves-revisited
categories:
  - affordability
  - cansim
  - Vancouver
  - Toronto
  - PUMF
tags: []
description: 'Taking another look at first time buyer affordability: updating with 2021 data, accounting for property taxes, and introducing a discretized version of the measure.'
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2024/01/16/first-time-buyer-lorenz-curves-revisited/index_files/figure-html/ftb-discrete-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




Three years ago we [wrote a post on First Time Buyer Lorenz Curves](https://doodles.mountainmath.ca/blog/2020/09/28/first-time-buyer-lorenz-curves/), looking at what share of homes are in principle available to first-time home buyers.[^1] That post continues to be a more popular one, so we thought it would be good to update it with more recent data and expand some of the ideas further.

[^1]: We define first-time home buyers as members economic families with non-student primary household maintainers between the ages of 25 and 64 that are currently renting.

**In this post we want to update this with 2021 data that has now become available, consider the effect of property taxes on affordability that we previously neglected, and introduce a new discretized version of this measure that condenses the information into two parameters, making is easier to digest and compare across different housing markets and allows the tracing of change over time.**

Different families have different housing needs, to simplify this we decided to base our affordability measure on adjusted after-tax family income deciles, which is a person-based measure that assigns each person the after tax family income divided by the square root of the number of members in the family unit. This is a standard Statistics Canada concept, based on the idea that when family members share a household and other expenses there are synergies that make the family unit more efficient than the sum of its parts, with efficiency factor roughly given by the square root of the size of the family unit. In short, a couple making a \$100k and and person living alone making \$71k have similar standards of living `\(\left(\frac{100}{\sqrt{2}} \approx \frac{71}{\sqrt{1}}\right)\)`. 

An added advantage is this gives us a person-based measure, so instead of assessing the affordability of family units, where e.g. a single person gets compared to a family of four, we are comparing people and how they are effected by affordability. This is particulary important due to the composition of family types across metropolitan areas not being the same.

On the housing side, we showed we can similarly divide home prices by the square root of the number of bedrooms to get a stable measure of home prices that is comparable across different home sizes, as measured by number of bedrooms. Like the family example above, a \$900k 5 bedroom house is considered to "cost" the same as a \$400k 1 bedroom appartment `\(\left(\frac{900}{\sqrt{5}} \approx \frac{400}{\sqrt{1}}\right)\)`. A potentially better measure for scaling would likely be square footage, but that is not available in the census.

The *adjusted GINI curve* is then a visual representation of affordability of persons in first-time buyer family units. We believe this measure is useful to give an indication of how accessible ownership is in different housing markets. In particular this [avoides the pitfalls of using household-based measures](https://doodles.mountainmath.ca/blog/2023/08/17/housing-outcomes/) that are plaguing much of our housing discussions. Family units are the right kind of decision making units when it comes to buying (or renting) housing, so it's family income that matters.



## First-time home buyer Lorenz curves in 2021









Let's take a look what such a Lorenz curve for potential first-time buyers (essentially renters aged 20 through 49) looks like. To remind us we show the Lorenz curve for Calgary in 2021.

<img src="{{< blogdown/postref >}}index_files/figure-html/calgary-ftb-1.png" width="768" />

In Calgary, potential first-time buyers at the bottom end of the renter income can't afford any of the homes. Someone at the 20th income percentile of potential first-time buyers can only afford 12% of Calgary homes. But after that things pick up fast and someone at the 60th percentile can afford 75%, at which point things even out and the Lorenz curve hugs the diagonal.

This says nothing about what kind of home someone can afford, or where in the metro area an affordable home may be. It also skirts the discussion about "starter homes" or more generally the question if there is a mismatch between homes first-time buyers are buying and the overall distribution of homes in the metro area in terms of quality or size. Or if there should be such a distinction. What this does is it gives a rough matchup between incomes of (potential) first-time buyers and home values.

With this we can update our Lorenz curves by showing both the 2016 and the new 2021 in the same plot, and adding in 2011 data for good measure, enabling us to see how the affordability distribution has shifted over the last 10 years.

<img src="{{< blogdown/postref >}}index_files/figure-html/ftb-updated-1.png" width="768" />

This reveals that first time buyer affordability has shifted in different ways. The already largely unaffordable markets of Vancouver and Toronto have become further unaffordable. Hamilton shows the worst deterioration of affordability, as measured by the area between the 2016 and 2021 curve. On the other hand, Québec City has become more affordable.

It's important to note that the 2021 census using 2020 income data, and especially low income people benefited from pandemic CERB payments that have lifted them up and explains some of the affordability improvements for the lower income percentiles. We note that this effect is only visible in some metro area, in others increasing home prices have more than offset the temporary pandemic income boost

## Property taxes



This view might be overly optimistic, our affordability metric does not include property taxes and utilities. Cost of utilities are fairly uniform across Canada and don't change much over time, but property taxes certainly do. And this matters to affordability, for example Québec City's property tax rates are around 1% of the property value, compared to around 0.3% in Vancouver. Correspondingly people in Vancouver can afford higher-priced homes than people in Québec City on the same income.

Adjusting our affordability metric to include property taxes, for this exercise taken from an [Altus report](https://www.saskatoon.ca/sites/default/files/documents/asset-financial-management/finance-supply/Altus_Group_Canadian_Property_Tax_Benchmark_Report_2022%20%284%29.pdf), shows this effect on affordability quite clearly.

<img src="{{< blogdown/postref >}}index_files/figure-html/prop-tax-effect-1.png" width="768" />

In Vancouver, with it's relatively low property tax rate, this does not make much of a difference, whereas in other metro areas the difference is substantial.

This should not be taken to mean that property taxes have a causal effect on affordability in the sense that lowering property taxes will increase affordability of first-time buyers. This is because prices are highly endogenous to property taxes, if Québec City's property tax rates were the same as Vancouver's the net present value of a home in Québec would be around 31% higher, and exogenously changing property tax rates would cause prices to adjust to reflect that to a large extent. In Canada property tax rates are set by the ratio of aggregate home values to municipal budgets, so prices impact property tax rates. On the other hand, property tax rates impact home prices in the same way that interest rates do, with lower property tax rates leading to higher prices.

With this insight we continue by including property taxes in our affordability metric, with an updated graph for all years and metro areas.

<img src="{{< blogdown/postref >}}index_files/figure-html/ftb-pt-1.png" width="768" />

## Condensing the Lorenz curve into a discrete metric

An obvious candidate for a discrete metric is the GINI coefficient. The GINI coefficient is just the area between the Lorenz curve and the diagonal. This gives a broad measure of affordability in a metro area, a positive coefficient means housing is less affordable, a negative coefficient means housing is more affordable. Perfect proportional affordability is where every potential first time buyer can access housing up to the percentile that corresponds to their percentile in the income distribution.

High unaffordability is characterized by the Lorenz curve staying under the diagonal, high affordability by a curve staying above the diagonal. In many cases we see curves exhibiting high-income skew where they are crossing the diagonal somewhere in the middle of the income spectrum, with lower income people unable to afford homes corresponding to their income percentile while higher income people able to afford homes above their income percentile.

<img src="{{< blogdown/postref >}}index_files/figure-html/ftb-synthetic-1.png" width="768" />

But there are several problems, the first time buyer Lorenz curves can also take values above the diagonal, and for example the two curves show above with zero GINI coefficient are qualitatively quite different. The *high-income skew* curve models a housing market like Calgary in 2021, where lower income potential first time buyers can't afford housing corresponding to their income percentile, whereas higher income potential first time buyers can access more than housing that corresponds to their income percentile. The GINI coefficient can't distinguish between these two cases, both have a GINI of zero, but they represent distinct distributions of (un-)affordability.For analysis and policy making, it is important our metrics summarizing the lorenz curve retains this information.

Intuitively we can think of the two model cases of high (un)affordability and high-income skew as the first two harmonics relative to the diagonal representing perfect proportional affordability. More formally we discretize the Lorenz curves by taking the first two terms of the Fourier expansion of their difference from the diagonal, the *perfect proportional affordability* lorenz curve . A sine expansion will capture these reasonably well with just a few terms, where the first term is a good approximation of the (scaled) GINI coefficient representing the **aggregate unaffordability** and the second term gives the strength of the main oscillation around the diagonal, interpreted as **high-income skew**.

<img src="{{< blogdown/postref >}}index_files/figure-html/ftb-approx-1.png" width="768" />

Except for the highly unaffordable metro areas of Vancouver, Toronto and Hamilton the first two (sine) Fourier coefficients capture the curve quite well, for Vancouver, Toronto and Hamilton the approximation struggles to properly capture how long the curve stays flat and how late it rises. This is yet another way how these city's affordability, or the lack thereof, is extreme compared to the other metro areas.

We can now take these two coefficients and plot their movement over time.

<img src="{{< blogdown/postref >}}index_files/figure-html/ftb-discrete-1.png" width="768" />

This graph shows that Vancouver, Toronto and Hamilton are in a league of there own when it comes to housing affordability. They exhibit quite similar aggregate unaffordability and high-income skew. Vancouver has been doing quite poorly for the entire decade covered here, whereas Toronto and in particular Hamilton have see their housing affordability radically worsen over the past decade. Ottawa-Gatineau and Montréal are in mildly unaffordable territory, while Calgary, Edmonton and Winnipeg are fairly neutral in terms of affordability. Québec City is the most affordable market considered here, and its affordability has improved significantly.

We note that the values taken by the CMAs follow a rough frown shape. This is not coincidence, not all values in the range shown can be attained. Values in the lower left and lower right aren't mathematically possible because the Lorenz curves are monotonic. Values in the top middle correspond to scenarios where lower income families have access to a higher share of housing than their position in the income distribution, whereas higher income households have access to a lower portion of housing. This is not how the housing system works.

## Property tax effects

We can revisit what this would look like if we did not account for differences in property tax rates.

<img src="{{< blogdown/postref >}}index_files/figure-html/tfb-discrete-npt-1.png" width="768" />

Omitting property taxes decreases aggregate unaffordability, but it also changes the relative position of the cities. For example, when not accounting for property taxes, Vancouver has slightly higher aggregate unaffordability and slightly stronger high-income skew than Toronto, but this reverses after accounting for property taxes.

## Upshot

This expands on our previous work on Lorenz curves and derived GINI index by adding in 2021 data, and adding the discretization into two metrics, the **aggregate unaffordability** that approximates the GINI index, and the **high-income skew** that captures the degree to which lower income earners do worse than higher income earners. We also included property taxes, as rates differ across metro areas and across time, and this makes a significant difference. Property tax rates were taken from the central municipalities, this could use refinement in future iterations.

This could be expanded on by using higher frequency data like home transactions and the Canadian Income Survey to allow closer monitoring of first time buyer affordability.


As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2024-01-16-first-time-buyer-lorenz-curves-revisited/index.Rmarkdown) for anyone to reproduce or adapt for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2024-01-17 10:05:59 PST"
```

```
## Local:    master /Users/jens/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [3036abb] 2024-01-17: clarify legend in synthetic affordability graph to explicitly include skew
```

```
## R version 4.3.2 (2023-10-31)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Sonoma 14.2.1
## 
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.3-arm64/Resources/lib/libRblas.0.dylib 
## LAPACK: /Library/Frameworks/R.framework/Versions/4.3-arm64/Resources/lib/libRlapack.dylib;  LAPACK version 3.11.0
## 
## locale:
## [1] en_US.UTF-8/en_US.UTF-8/en_US.UTF-8/C/en_US.UTF-8/en_US.UTF-8
## 
## time zone: America/Vancouver
## tzcode source: internal
## 
## attached base packages:
## [1] stats     graphics  grDevices utils     datasets  methods   base     
## 
## other attached packages:
##  [1] canpumf_0.1.8   patchwork_1.1.3 FinCal_0.6.3    lubridate_1.9.3
##  [5] forcats_1.0.0   stringr_1.5.1   dplyr_1.1.4     purrr_1.0.2    
##  [9] readr_2.1.4     tidyr_1.3.0     tibble_3.2.1    ggplot2_3.4.4  
## [13] tidyverse_2.0.0
## 
## loaded via a namespace (and not attached):
##  [1] sass_0.4.8                utf8_1.2.4               
##  [3] generics_0.1.3            bitops_1.0-7             
##  [5] blogdown_1.18             stringi_1.8.3            
##  [7] hms_1.1.3                 digest_0.6.33            
##  [9] magrittr_2.0.3            timechange_0.2.0         
## [11] evaluate_0.23             grid_4.3.2               
## [13] bookdown_0.37             fastmap_1.1.1            
## [15] plyr_1.8.9                jsonlite_1.8.8           
## [17] fansi_1.0.6               scales_1.3.0             
## [19] jquerylib_0.1.4           cli_3.6.2                
## [21] rlang_1.1.2               munsell_0.5.0            
## [23] withr_2.5.2               cachem_1.0.8             
## [25] yaml_2.3.7                tools_4.3.2              
## [27] reshape2_1.4.4            tzdb_0.4.0               
## [29] colorspace_2.1-0          vctrs_0.6.5              
## [31] R6_2.5.1                  git2r_0.33.0             
## [33] lifecycle_1.0.4           pkgconfig_2.0.3          
## [35] pillar_1.9.0              bslib_0.6.1              
## [37] gtable_0.3.4              Rcpp_1.0.11              
## [39] glue_1.6.2                xfun_0.41                
## [41] tidyselect_1.2.0          rstudioapi_0.15.0        
## [43] knitr_1.45                htmltools_0.5.7          
## [45] rmarkdown_2.25            mountainmathHelpers_0.1.4
## [47] compiler_4.3.2            RCurl_1.98-1.13
```
</details>
