---
title: On mixing covid-19 and census data
author: Jens von Bergmann
date: '2020-05-27'
slug: on-mixing-covid-19-and-census-data
categories:
  - cancensus
  - covid-19
tags: []
description: "Doing this with Canadian data is a tall order. But since people are doing it, we might as well explain some of the ins and outs."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-05-27-on-mixing-covid-19-and-census-data_files/figure-html/confirmed_map_hr-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




Mixing census data with COVID-19 case and mortality data seems like an obvious thing to do when trying to understand how COVID-19 affects different groups. But it's only of very limited use. COVID-19 data is only (openly) available on coarse geographies and can only be matched at the ecological level. Deriving individual level relationships from this is extremely ambitious. At best, it can inform decisions on what individual level data should be collected moving forward.

A good example is when the City of Toronto chief medical officer [looked into the possibility that black and low income communities in Canada are disproportionately affected by COVID-19](https://www.cbc.ca/news/canada/toronto/toronto-officials-covid-19-outbreak-may-5-update-1.5556401). To understand this they mixed census data with finer geography COVID-19 case data. The TL;DR:

>   "These preliminary findings suggest that COVID-19 might be disproportionately affecting certain people in our city. But it is difficult to get a complete picture using area level data," De Villa said.
>   
>   "To strengthen our capacity to address this issue, my team is adding socio-demographic questions to our case management process."

In other words, they looked at ecological level correlations between case load and socio-demographic variables and found results concerning enough to start collection individual level data. In short, they fully understand that ecological level correlations are difficult to interpret and can at times give wrong results. They just ran it as a first screening to inform data collection that can give them accurate answers to their question. 

That pretty much sums up the usefulness, as well as the potential misuse, of mixing census data with covid case and mortality data. 

## Yet another preprint
Still, it seems like others are trying to follow into the footsteps and try to add their own analysis. For example, this [article on the Tyee](https://thetyee.ca/Analysis/2020/05/25/Race-Data-Linking-COVID-Hotspots/?utm_source=twitter&utm_medium=social&utm_content=052620-2&utm_campaign=editorial-0520) describes a [preprint](https://osf.io/preprints/socarxiv/yq8vu/) that is trying to do pretty much the same thing, but for all of Canada and at coarser geographies. Unfortunately, the preprint is much less careful in the conclusions they draw. That's something peer review will weed out.

While I doubt that this particular preprint is useful or the results are informative given the methodological difficulties already outlined above, we are starting to get COVID-19 data on finer geographies and people will continue to look into how socio-economic data can help us understand the spread. So maybe this preprint is a good occasion for a quick outline on the do's and don'ts when mixing in census data.

Using our [CanCovidData R Package](https://mountainmath.github.io/CanCovidData/) this is quite simple to do, so we will keep the code visible in this post to lower the barrier in case others want to go down the road of mixing COVID-19 and census data.

## Geographic units
Be clear about the geographic units you are using. In this case this depends on the geographic granularity of the available COVID-19 data. The preprint takes the data [collected by the excellent COVID-19 Open Data Working Group](https://github.com/ishaberry/Covid19Canada). The geography is based on Health Regions, but it's important to note that in many cases the geography is much coarser. While Ontario does publish Health Region level data, others don't. For example British Columbia only publishes much coarser Health Authority level data. Researchers should make sure that they are aware and accurately state what geographies they are using.

The preprint also discards some geographic areas. Excluding Yukon, Northwest Territories and Nunavut makes some sense, their case counts are very low. The preprint also excludes the Southwestern Health Region in Ontario, but this strikes me as a mistake grounded in missing that Southwestern Health Region amalgamated with the Port Huron Health Unit and COVID-19 data consequently only gets reported for the combined region. So we should follow suit and amalgamate the other data sources too, even if Stats Canada's most recent Health Region geography still hasn't incorporated that change.

Grabbing the COVID-19 data for health regions is easy, the preprint used aggregate counts up to May 5th. Importing the case data via our [CanCovidData R Package](https://mountainmath.github.io/CanCovidData/) which also adds the Health Region geographic identifiers to the data table.


```r
covid_data <- get_canada_covid_working_group_health_region_data() %>%
  filter(!is.na(HR_UID)) %>%
  filter(Date<=as.Date("2020-05-05")) %>%
  group_by(GeoUID=HR_UID) %>%
  summarise(Confirmed=last(Confirmed,order_by = Date),
            Deaths=last(Deaths,order_by = Date)) 
```


## Census data
The preprint gets a bit funky here, they seem to be using CSD level data to then aggregate up to health regions. They also talk about StatCan suppressing variables for CSDs with fewer than 5,000 residents, which is incorrect.

Also, this seems like an overly complicated way to get match census data with our Health Region based geography, we will depart a little from the paper's eccentric methods and instead just take the census profile data for the health region geographies that StatCan conveniently provides. We don't have the data in CensusMapper, so it takes a bit of poking around to find the variables we are interested in (see the [full source code for details](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-05-27-on-mixing-covid-19-and-census-data.Rmarkdown) if interested in the poking around part).



The paper was looking at the black population, population 65 and older, median income number of foreign born people and population density, so we collect those variables. Things get funky again though with the median income, medians can't be aggregated up when joining geographies, unfortunately the paper does not mention how this was dealt with. We will approximate the median on a joint geography by a weighted sum just like one would do for an average income.

But it's probably better to just use one of the low income measures from the census data, the preprint uses very loose language on how they are using the income data that seems to suggest that's what they wanted to use in the first place. While we are at it, we can also throw in some occupation data. There are lots of other variables one could test, but again, the usefulness of this kind of analysis is quite limited anyway.

Census data also needs to get aggregated up to the coarser geography that the COVID-19 data is available at, but that's easy thanks to the `replace_all_health_region_geocodes` function from our [CanCovidData R Package](https://mountainmath.github.io/CanCovidData/). Except for the median income estimate, which, quite frankly, is a [terrible proxy for low-income populations](https://doodles.mountainmath.ca/blog/2018/10/28/understanding-income-distributions-across-geographies-and-time/) and probably should never have been used for this in the first place.


```r
members <- c(pop=1,
            age_65p=24,
            lico_at=862,
            immigrants=1142,
            num_income_at=664,
            med_income_at=665,
            npr=1150,
            pop_priv=1323,
            black=1327)
members2 <- set_names(names(members),as.integer(members))

census_data <- get_health_region_census_2016_data() %>%
  mutate(GeoUID=`GEO_CODE (POR)`, Name=GEO_NAME) %>%
  replace_all_health_region_geocodes() %>%
  filter(GEO_LEVEL == 2) %>%
  filter(`Member ID: Profile of Health Regions (2247)` %in% as.integer(members)) %>%
  mutate(label=recode(`Member ID: Profile of Health Regions (2247)`,!!!members2)) %>%
  select(HR_UID=`GEO_CODE (POR)`,GeoUID,Name,label,
         Total=`Dim: Sex (3): Member ID: [1]: Total - Sex`) %>%
  mutate(Total=as.numeric(Total)) %>%
  pivot_wider(names_from = label,values_from = Total) %>%
  mutate(income_at=med_income_at*num_income_at) %>%
  select(-HR_UID) %>%
  group_by(GeoUID,Name) %>%
  summarize_all(sum) %>%
  mutate(med_income_at=income_at/num_income_at) %>%
  mutate(log_med_income_at=log(med_income_at)) %>%
  select(-income_at) %>%
  mutate(share_65p=age_65p/pop,
         share_black=black/pop_priv,
         share_foreign_born=(immigrants+npr)/pop_priv,
         share_lico=lico_at/pop_priv)
```

That might seem a bit lengthy, but looking closer at it it's just a number of quite simple transformation steps of the data.

## Geographic data
That's simple too, we just take the newest (2018) representation of Canadian Health Regions from Stats Canada. We will have to consolidate the ones that got amalgamated between 2018 and now, and then we cut it down using a nicer outline of Canada to make the boundaries look prettier for mapping.


```r
health_regions_raw <- get_health_region_geographies_2018()
health_regions <- health_regions_raw %>%
  replace_all_health_region_geocodes() %>%
  st_make_valid() %>%
  group_by(GeoUID) %>%
  summarise() %>%
  rmapshaper::ms_simplify() %>%
  st_intersection(get_census("CA16",regions=list(C="01"),geo_forma="sf") %>% 
                    select() %>% 
                    st_transform(st_crs(health_regions_raw)))
```


## Mixing the data
All that's left to do is join up the data, and we also compute the density (in terms of people per hectare, we *think* that's what the preprint was doing) and filter out the northern health regions.


```r
all_data <- health_regions %>%
  left_join(inner_join(covid_data,census_data, by="GeoUID"),
            by="GeoUID") %>%
  mutate(density=pop/as.numeric(st_area(.))*10000) %>%
  filter(!grepl("^6",GeoUID))
```

## Inspecting the data
This is probably a good time to inspect the data to make sure nothing went awfully wrong. A quick and dirty map of some of the variables looks like things worked out fine.


```r
all_data %>%
  pivot_longer(c("share_foreign_born","share_lico","share_65p","share_black")) %>%
  st_sf() %>%
  ggplot() + 
  geom_sf(aes(fill=value),size=0.1) +
  scale_fill_viridis_c(labels=scales::percent) +
  facet_wrap("name") +
  coord_sf(datum = NA)
```

<img src="/posts/2020-05-27-on-mixing-covid-19-and-census-data_files/figure-html/covariates_map-1.png" width="768" />

Similarly, the summary stats show that our data broadly agrees with the on in Table A1 in the preprint. Some smaller differences should be expected given the difference on how the data was assembled.


```r
all_data %>% 
  st_set_geometry(NULL) %>% 
  select_at(vars(matches("share_|density|med_income_at"))) %>%
  pivot_longer(names(.),names_to = "variable") %>%
  group_by(variable) %>%
  summarize(mean=mean(value),sd=sd(value),min=min(value),max=max(value)) %>%
  mutate_at(vars(-one_of("variable")),~round(as.numeric(.),3)) %>%
  knitr::kable()
```



|variable            |      mean|       sd|       min|       max|
|:-------------------|---------:|--------:|---------:|---------:|
|density             |     1.808|    6.279|     0.000|    41.266|
|log_med_income_at   |    10.319|    0.111|     9.894|    10.595|
|med_income_at       | 30491.473| 3361.438| 19802.107| 39934.000|
|share_65p           |     0.182|    0.044|     0.038|     0.264|
|share_black         |     0.017|    0.021|     0.002|     0.095|
|share_foreign_born  |     0.119|    0.119|     0.000|     0.532|
|share_health        |     0.072|    0.013|     0.040|     0.133|
|share_lico          |     0.065|    0.029|     0.000|     0.179|
|share_sales_service |     0.230|    0.018|     0.179|     0.292|

For completeness, here is a quick plot of the number of COVID-19 confirmed cases (mislabelled as *infections*) in the preprint.



```r
all_data %>%
  ggplot() + 
  geom_sf(aes(fill=Confirmed),size=0.1) +
  scale_fill_viridis_c(labels=scales::comma, trans="log") +
  coord_sf(datum = NA) +
  labs(title="Confirmed COVID-19 cases up to May 5th")
```

<img src="/posts/2020-05-27-on-mixing-covid-19-and-census-data_files/figure-html/confirmed_map_hr-1.png" width="768" />

## Analysis
Now we get to the tricky part. We really should be running an ecological inference model, regular regression models are known to regularly over-estimate effects and sometimes even reverse the sign on correlation coefficients.

But let's first follow the method the preprint chose and fit a simple negative binomial model, with the only difference that we are taking the logarithm of the income variable.


```r
model_cases <- MASS::glm.nb(Confirmed ~ share_black + share_foreign_born + log_med_income_at + share_65p + density, data = all_data)
jtools::summ(model_cases,exp = T)
```

<table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
<tbody>
  <tr>
   <td style="text-align:left;font-weight: bold;"> Observations </td>
   <td style="text-align:right;"> 90 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> Dependent variable </td>
   <td style="text-align:right;"> Confirmed </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> Type </td>
   <td style="text-align:right;"> Generalized linear model </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> Family </td>
   <td style="text-align:right;"> Negative Binomial(0.7037) </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> Link </td>
   <td style="text-align:right;"> log </td>
  </tr>
</tbody>
</table> <table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
<tbody>
  <tr>
   <td style="font-weight: bold;"> 𝛘²() </td>
   <td> 0.57 </td>
   <td> 0.06 </td>
   <td> 1218.73 </td>
   <td> 1236.23 </td>
  </tr>
  <tr>
   <td style="font-weight: bold;"> Pseudo-R² (Cragg-Uhler) </td>
   <td> 0.57 </td>
   <td> 0.06 </td>
   <td> 1218.73 </td>
   <td> 1236.23 </td>
  </tr>
  <tr>
   <td style="font-weight: bold;"> Pseudo-R² (McFadden) </td>
   <td> 0.57 </td>
   <td> 0.06 </td>
   <td> 1218.73 </td>
   <td> 1236.23 </td>
  </tr>
  <tr>
   <td style="font-weight: bold;"> AIC </td>
   <td> 0.57 </td>
   <td> 0.06 </td>
   <td> 1218.73 </td>
   <td> 1236.23 </td>
  </tr>
  <tr>
   <td style="font-weight: bold;"> BIC </td>
   <td> 0.57 </td>
   <td> 0.06 </td>
   <td> 1218.73 </td>
   <td> 1236.23 </td>
  </tr>
</tbody>
</table> <table class="table table-striped table-hover table-condensed table-responsive" style="width: auto !important; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;">   </th>
   <th style="text-align:right;"> exp(Est.) </th>
   <th style="text-align:right;"> 2.5% </th>
   <th style="text-align:right;"> 97.5% </th>
   <th style="text-align:right;"> z val. </th>
   <th style="text-align:right;"> p </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;font-weight: bold;"> (Intercept) </td>
   <td style="text-align:right;"> 374.09 </td>
   <td style="text-align:right;"> 0.00 </td>
   <td style="text-align:right;"> 135420317310750.00 </td>
   <td style="text-align:right;"> 0.44 </td>
   <td style="text-align:right;"> 0.66 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> share_black </td>
   <td style="text-align:right;"> 249711609031186994012618752.00 </td>
   <td style="text-align:right;"> 129949461868607296.00 </td>
   <td style="text-align:right;"> 479847217435902986079547148984123392.00 </td>
   <td style="text-align:right;"> 5.57 </td>
   <td style="text-align:right;"> 0.00 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> share_foreign_born </td>
   <td style="text-align:right;"> 12.53 </td>
   <td style="text-align:right;"> 0.52 </td>
   <td style="text-align:right;"> 299.84 </td>
   <td style="text-align:right;"> 1.56 </td>
   <td style="text-align:right;"> 0.12 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> log_med_income_at </td>
   <td style="text-align:right;"> 0.83 </td>
   <td style="text-align:right;"> 0.06 </td>
   <td style="text-align:right;"> 10.72 </td>
   <td style="text-align:right;"> -0.15 </td>
   <td style="text-align:right;"> 0.88 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> share_65p </td>
   <td style="text-align:right;"> 18.18 </td>
   <td style="text-align:right;"> 0.04 </td>
   <td style="text-align:right;"> 8327.82 </td>
   <td style="text-align:right;"> 0.93 </td>
   <td style="text-align:right;"> 0.35 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;"> density </td>
   <td style="text-align:right;"> 0.95 </td>
   <td style="text-align:right;"> 0.89 </td>
   <td style="text-align:right;"> 1.01 </td>
   <td style="text-align:right;"> -1.63 </td>
   <td style="text-align:right;"> 0.10 </td>
  </tr>
</tbody>
<tfoot><tr><td style="padding: 0; border: 0;" colspan="100%">
<sup></sup> Standard errors: MLE</td></tr></tfoot>
</table>

This corresponds to Table 1 in the preprint, except that our results are grotesquely out of scale, calling this method into question. This also goes to show how sensitive this kind of analysis is to even small changes in assumptions.

## Ecological inference
At this point it might be useful to specify an ecological inference model. The particular implementation in the [`ecoreg` R package](https://cran.r-project.org/web/packages/ecoreg/vignettes/ecoreg-guide.pdf) seems particularly well-suited for this application.


```r
library(ecoreg)
model.eco <- eco(cbind(Confirmed,pop) ~ log_med_income_at+density,
                 binary = ~ share_black + share_65p+share_foreign_born,
                 data = all_data)

model.eco
```

```
## Call:
## eco(formula = cbind(Confirmed, pop) ~ log_med_income_at + density, 
##     binary = ~share_black + share_65p + share_foreign_born, data = all_data)
## 
## Aggregate-level odds ratios:
##                          OR
## (Intercept)       0.2944706
## log_med_income_at 0.6130313
## density           1.0469473
## 
## Individual-level odds ratios:
##                              OR
## share_black        0.0001248824
## share_65p          0.0358417248
## share_foreign_born 0.0072685290
## 
## -2 x log-likelihood:  37230.61
```

This model comes out with a markedly different result, showing a fairly low added risk for black populations. The median income variable seems to suck up a lot of the effect. As already mentioned, it's not a very useful variable to start with, plus it correlates with the share black population (and anti-correlates with share of seniors) which might throw a wrench in our estimates.

Maybe it's best to just strip down the model and throw out the income variable, as well as the foreign born population that doesn't seem to be doing much.


```r
library(ecoreg)
model.eco <- eco(cbind(Confirmed,pop) ~ density,
                 binary = ~ share_black + share_65p,
                 data = all_data)

model.eco
```

```
## Call:
## eco(formula = cbind(Confirmed, pop) ~ density, binary = ~share_black + 
##     share_65p, data = all_data)
## 
## Aggregate-level odds ratios:
##                       OR          l95          u95
## (Intercept) 0.0001351304 0.0001171961 0.0001558092
## density     1.0098295335 1.0091606600 1.0104988502
## 
## Individual-level odds ratios:
##                  OR      l95      u95
## share_black 69.9372 65.57338 74.59143
## share_65p   18.6860 15.91682 21.93697
## 
## -2 x log-likelihood:  32329.84
```

That gives a much cleaner model, with significantly heightened odds ratios for blacks and also for seniors. But quite frankly, we are just randomly adding or dropping variables at this point.

We will leave it at this for today, if anything sensible is going to come out of this it requires a much more concerted effort of building the model. Stratifying by province would be an obvious (and probably useful) next step.


## Upshot
The usefulness of this kind of analysis is greatly limited by how finely the data is aggregated. Health Region (or coarser) geography does not really lend itself to doing this.

Some regions, like [Alberta](https://www.alberta.ca/stats/covid-19-alberta-statistics.htm) or [Toronto](https://www.toronto.ca/home/covid-19/covid-19-latest-city-of-toronto-news/covid-19-status-of-cases-in-toronto/) publish finer geographic data, where this kind of analysis probably makes more sense.

Some people are [doing that](https://twitter.com/GraphicMatt/status/1265732978803707904?s=20), and [are exploring relationships of COVID-19 cases with census variables at the neighbourhood level](https://twitter.com/ryancbriggs/status/1265841992300445696?s=21). That's a lot more useful than looking at health region data, ultimately this would benefit from running this as ecological inference models, and also deal with [spatial autocorrelation](https://doodles.mountainmath.ca/blog/2019/10/07/spatial-autocorrelation-co/) and other issues that regularly pop up during this kind of analysis.

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-05-27-on-mixing-covid-19-and-census-data.Rmarkdown) in case others find it useful.


<details><summary>Reproducibility receipt</summary>

```r
## datetime
Sys.time()
```

```
## [1] "2020-07-06 13:18:16 PDT"
```

```r
## repository
git2r::repository()
```

```
## Local:    master /Users/jens/Google Drive/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [e01bdc0] 2020-05-28: census-covid post
```

```r
## Session info
sessionInfo()
```

```
## R version 4.0.0 (2020-04-24)
## Platform: x86_64-apple-darwin17.0 (64-bit)
## Running under: macOS Catalina 10.15.5
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
##  [1] ecoreg_0.2.3       sf_0.9-4           cancensus_0.3.2    CanCovidData_0.1.2
##  [5] forcats_0.5.0      stringr_1.4.0      dplyr_1.0.0        purrr_0.3.4       
##  [9] readr_1.3.1        tidyr_1.1.0        tibble_3.0.1       ggplot2_3.3.1     
## [13] tidyverse_1.3.0   
## 
## loaded via a namespace (and not attached):
##  [1] Rcpp_1.0.4.6       lubridate_1.7.9    lattice_0.20-41    class_7.3-17      
##  [5] assertthat_0.2.1   digest_0.6.25      R6_2.4.1           cellranger_1.1.0  
##  [9] backports_1.1.8    reprex_0.3.0       evaluate_0.14      e1071_1.7-3       
## [13] httr_1.4.1         blogdown_0.19      pillar_1.4.4       rlang_0.4.6       
## [17] readxl_1.3.1       rstudioapi_0.11    blob_1.2.1         rmarkdown_2.2     
## [21] munsell_0.5.0      broom_0.5.6        compiler_4.0.0     modelr_0.1.8      
## [25] xfun_0.15          pkgconfig_2.0.3    htmltools_0.4.0    tidyselect_1.1.0  
## [29] bookdown_0.19      codetools_0.2-16   fansi_0.4.1        crayon_1.3.4      
## [33] dbplyr_1.4.4       withr_2.2.0        grid_4.0.0         nlme_3.1-148      
## [37] jsonlite_1.6.1     cansim_0.3.5       gtable_0.3.0       lifecycle_0.2.0   
## [41] DBI_1.1.0          git2r_0.27.1       magrittr_1.5       units_0.6-7       
## [45] scales_1.1.1       KernSmooth_2.23-17 cli_2.0.2          stringi_1.4.6     
## [49] fs_1.4.1           xml2_1.3.2         ellipsis_0.3.1     generics_0.0.2    
## [53] vctrs_0.3.1        tools_4.0.0        glue_1.4.1         hms_0.5.3         
## [57] yaml_2.2.1         colorspace_1.4-1   classInt_0.4-3     rvest_0.3.5       
## [61] knitr_1.28         haven_2.3.1
```
</details>


