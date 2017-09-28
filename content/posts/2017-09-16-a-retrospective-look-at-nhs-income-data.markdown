---
title: 'A Retrospective Look at NHS Income Data '
author: Jens von Bergmann
date: '2017-09-16'
slug: a-retrospective-look-at-nhs-income-data
categories:
  - cancensus
  - CensusMapper
  - geeky
tags: []
draft: true
description: "How bad were the NHS income numbers?"
#featured: ''
#featuredalt: ""
#featuredpath: ""
#images: [""]
linktitle: ''
type: "post"
---


## NHS Income Data, a First Retrospective
There was much hand wringing when NHS income data got released. The change in methods were big, most notably the replacement of the mandatory long form census, that was administered to a random 1 in 5 sub sample, by the voluntary NHS that went out to approximately 1 in 3 households. The (design-weighted) response rate for the NHS was 77%, compared to 94% for the long form in 2006. 

In other words, one could no longer assume that the returned NHS came from a random sub sample. Any sub sample is prone to have errors, but we know how to estimate these if the sub sample is random. 
But if the sub sample is not random, like in the 2011 NHS, estimating these errors moves out of the realm of solid statistics and into the arts. The assumptions we have to make to estimate the error become quite onerous, and often unrealistic.

But not all is lost. Stats Canada has some powerful methods to overcome some of these problems. 2011 still had the basic short form census, and that can be used to benchmark the NHS against. The short form tells us something about who returned the long form - and who did not. And Stats Canada has the ability to link households through time to learn more about biases in which households returned the census and which did not. And it had the ability to fold in other administrative data, like CRA tax returns and immigration data, to adjust aggregate data. And such [post-processing was performed on the NHS income data](https://ww2.amstat.org/sections/srms/Proceedings/y2013/files/308507_80988.pdf). 

The question now is, how do those numbers stack up?

## Evaluating NSH Income Data
This is just an exploration, not a proper statistical evaluation. For this we will focus on median household incomes in Metro Vancouver and try and understand how NHS data fits in between the 2006 and 2016 censuses. There are some fundamental issues in our analysis that we will conveniently ignore. Most importantly, the geographic regions have changed between the censuses. So we can't compare median incomes in all regions. In the 2016 data Stats Canada has stopped reporting average incomes, which makes it impossible to re-aggregate the data to a common tiling across censuses like we have done e.g. for [our net migration map](https://censusmapper.ca/maps/731).

Let's first look at the median household incomes for all of Metro Vancouver. Here we can be reasonably confident that the numbers reported in all three census, including the 2011 NHS, are robust. We will use [`cancensus`](https://github.com/mountainMath/cancensus) to load the data.





```r
library(cancensus)
regions=list(CMA="59933") # Metro Vancouver
vector_list=list('CA06'="v_CA06_2000",'CA11'="v_CA11N_2562","CA16"="v_CA16_2397") # Median Household Total Income
inflation_list=list('CA06'=0.8465679,'CA11'=0.9220553,"CA16"=1) # Relative CPI to convert to constant 2015 dollars
```


With a convenience function defined to load the data into a data frame we grab the overview data for Metro Vancouver.





```r
overview_data <- get_income_data(names(regions))
overview_name <- paste0(sub(" \\(.+\\)$","",overview_data$`Region Name`)," ",names(regions))
income_dumbbell(overview_data, overview_name,y="name")
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/unnamed-chunk-4-1.png" width="672" />



We see that the 2010 NHS income number (in blue) sits neatly between the 2005 (in red) and 2015 (in green). To be more precise, the adjusted median household income grew 5.3% between 2005 and 2010 and it grew 5.8% between 2010 and 2015. Another way to view this is to say that the 2010 NHS income number is situated at 46.6% up the adjusted income gain between 2005 and 2015. 

## Modelling 2010 Income Data for Sub-Regions
One way to evaluate 2010 NHS income data is to compare it against a model. A good way to do this is to pull in 2010 CRA income data. There are some issues that need to be dealt with, namely that CRA income data is reported for a different pool of people and uses a different definition of what counts as "income", and CRA has no reliable way to estimate "household" level incomes. We could simply fall back to individual incomes to deal with the last issue, and adding in 2005 CRA data to benchmark against 2005 census income data would give a way to assess the differences in reporting methods. I have not seen any studies that have done this in a satisfactory way, and CensusMapper does not have CT level CRA data (which requires a custom tabulation that is outside of the scope of our usual work, and researchers we contacted that have this data weren't willing to share it for the greater public benefit).

For this post we will use two naive methods to estimate 2010 income numbers. 

#### Model 1
Model 1 assumes that the sub-region income growth occurred uniformly at the metro level rate of 5.3%. 

#### Model 2
Model 2 uses the hindsight of 2015 income data and assumes that changes in income over the time period between 2005 and 2015 were uniform in time in each sub-region, so that the 2010 actual income sat at 46.6% between the 2005 and 2015 numbers. We use this as our "best guess" model.

The rationale behind these models is that, to first approximation, change is generally gradual in time and uniform in space. We will formalize this a bit later.

## 2010 Income Data for Sub-Regions

We start off by looking at Metro Vancouver's medium and large municipalities.

```r
data <- get_income_data("CSD")
data$income_estimate_1_2011 <- income_estimator_1_2011(data$income_adj_2006)
data$income_estimate_2_2011 <- income_estimator_2_2011(data$income_adj_2006,data$income_adj_2016)
income_dumbbell(data %>% filter(Households > 10000), paste0("Municipalities with at least 10,000 households in ",overview_name),y="name")
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/unnamed-chunk-6-1.png" width="960" />

That looks pretty good, in most cases the 2010 data sits in the range between the 2005 and 2015 data where we would expect it to be, with a few exceptions (which should also be expected), but nothing out of the ordinary. Especially the larger cities seem to show a good match, with Richmond registering a drop from 2010 to 2015 that could be a reflection of to the increase in one-person households during that time.

## Census Tracts
So let's pull in the income data for Metro Vancouver's census tracts and see how our expectation stacks up against the NHS numbers.

```r
data <- get_income_data("CT")
data$income_estimate_1_2011 <- income_estimator_1_2011(data$income_adj_2006)
data$income_estimate_2_2011 <- income_estimator_2_2011(data$income_adj_2006,data$income_adj_2016)
income_dumbbell(data, paste0("Census Tracts in ",overview_name))
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/unnamed-chunk-7-1.png" width="960" />




We see that in just over half of the tracts the 2010 NHS number lies within the range, but in 27.4% of the cases the NHS number is below the range and in 21.2% above. We would certainly expect it to lie outside the range in some cases, but not in so many. Over the 10 year time frame the income decreased in 11% of the tracts, over the two 5 year time frame it decreased by 29.1% and 22.9%. We would expect the 5 year data to be more volatile, but again not by that much.

Taking a look at the relative difference of our expectation and the NHS numbers we see that in general the deviation seems balanced,

```r
data <- data %>% mutate(`Model 1 Difference`=income_adj_2011/income_estimate_1_2011-1,
                        `Model 2 Difference`=income_adj_2011/income_estimate_2_2011-1)
ggplot(data %>% gather(key="Model", value="Relative Difference", c("Model 1 Difference","Model 2 Difference"))) +
  geom_density(aes(x=`Relative Difference`, color=Model)) +
  labs(title="Relative Difference of Estimates to NHS (CT level data)")
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/unnamed-chunk-9-1.png" width="672" />

skewing slightly low. We see that the the NHS data is more consistent with our Model 2 assumptions than with Model 1.

## Temporal Correlations
Testing the idea of temporal auto-correlation more formally, we would expect that the median incomes from adjacent censuses correlate higher than the the ones from the 10 year difference. The correlation coefficients are 

Comparison | CT Level Coefficient
----------- | ------------
2005 to 2015 | 0.9444
2005 - 2010 NHS | 0.9425
2010 NHS - 2015 | 0.9449
2010 Model 1 - 2015 | 0.9444

What we see is that the 2010 NHS income numbers correlate better with the 2015 numbers than both the 2005 numbers and our Model 1, even though the correlation with 2005 numbers is quite poor. This redeems some of the quality concerns we observed earlier, and addresses some of the criticism initially leveraged against the NHS income numbers, namely that they appeared out of line with 2005 incomes.


The takeaway here is that the 2010 census tract income numbers add value over both, just having 2010 numbers and our naive model. But serious quality concerns remain.

## Spatial Correlations
The next step is to check for biases in the NHS income data. One simply way to do this is to run a spatial auto-correlation of the relative difference of the NHS data to our "best guess" Model 2. If there is bias in the NHS data, it ought to show up in as spatial auto-correlation as pretty much any potential demographic variable linked to non return bias will have spatial auto-correlation.

As a first step, let's visualize the spatial relationships between the relative difference of the NHS median incomes from our Model 2 expectation.


```r
geos <- get_census(dataset = "CA16",
                   regions=regions,
                   level="CT",
                   geo_format = 'sf') %>% 
  left_join(data, by="GeoUID") %>%
  mutate(bins=cut(`Model 2 Difference`,c(-Inf,seq(-0.25,0.25,0.1),Inf),c("Below -0.25","-0.25 to -0.15","-0.15 to -0.05","-0.05 to 0.05","0.05 to 0.15","0.15 to 0.25","Above 0.25")))
ggplot(geos) +
  geom_sf(aes(fill=bins)) +
  scale_fill_brewer("Relative Difference",palette = 'PiYG',na.value="grey80") +
  ggtitle("Difference of NSH from Expectation") + 
  theme_void()
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/rel_change_map-1.png" width="960" />



Testing formally for spatial auto-correlation

```r
sp=as(geos %>% select("Model 2 Difference") %>% na.omit,"Spatial")
wr <- poly2nb(sp, row.names=sp$GeoUID, queen=TRUE, snap=0.005)
#plot(sp, col='gray', border='blue')
#plot(wr, coordinates(sp), col='red', lwd=0.5, add=TRUE)
ww <-  nb2listw(wr, style='B', zero.policy = TRUE)
moran.mc(sp$Model.2.Difference, ww, nsim=500, zero.policy = TRUE)
```

```
## 
## 	Monte-Carlo simulation of Moran I
## 
## data:  sp$Model.2.Difference 
## weights: ww  
## number of simulations + 1: 501 
## 
## statistic = -0.00096903, observed rank = 253, p-value = 0.495
## alternative hypothesis: greater
```

the results are inconclusive. Let's quickly re-run our tests at the Dissemination Area level. Dissemination Area level is prone to be much more noisy than census tract level data, but also much more prone to bias. If the bias dominates we would expect to see strong non-random spatial patterns, although they may be masked by random noise due to the smaller sample size for DAs.


```r
data_da <- get_income_data("DA")
data_da <- data_da %>% mutate(
  income_estimate_1_2011 = income_estimator_1_2011(income_adj_2006),
  income_estimate_2_2011 = income_estimator_2_2011(income_adj_2006,income_adj_2016),
  `Model 1 Difference`=income_adj_2011/income_estimate_1_2011-1,
  `Model 2 Difference`=income_adj_2011/income_estimate_2_2011-1)
ggplot(data_da %>% gather(key="Model", value="Relative Difference", c("Model 1 Difference","Model 2 Difference"))) +
  geom_density(aes(x=`Relative Difference`, color=Model)) +
  labs(title="Relative Difference of Estimates to NHS (DA level data)")
```

<img src="/posts/2017-09-16-a-retrospective-look-at-nhs-income-data_files/figure-html/unnamed-chunk-11-1.png" width="672" />



As expected, the DA level data is significantly more noisy. In 35.1% of the cases the NHS number is below the income range set by 2005 and 2015 numbers, and in 31.9% above.

We can again check the temporal correlation coefficients, they are 

Comparison | DA Level Coefficient
----------- | ------------
2005 to 2015 | 0.7508
2005 - 2010 NHS | 0.6792
2010 NHS - 2015 | 0.804
2010 Model 1 - 2015 | 0.7508

and we again see that the 2010 NHS numbers correlate better with 2015 numbers than either 2005 number or our Model 1.


```r
geos_da <- get_census(dataset = "CA16",
                   regions=regions,
                   level="DA",
                   geo_format = 'sf') %>% 
  left_join(data_da, by="GeoUID") 
```





```r
sp_da=as(geos_da %>% select("Model 2 Difference") %>% na.omit,"Spatial")
wr <- poly2nb(sp_da, row.names=sp$GeoUID, queen=TRUE, snap=0.001)
#plot(sp, col='gray', border='blue')
#plot(wr, coordinates(sp_da), col='red', lwd=0.5, add=TRUE)
ww <-  nb2listw(wr, style='B', zero.policy = TRUE)
moran.mc(sp_da$Model.2.Difference, ww, nsim=500, zero.policy = TRUE)
```

```
## 
## 	Monte-Carlo simulation of Moran I
## 
## data:  sp_da$Model.2.Difference 
## weights: ww  
## number of simulations + 1: 501 
## 
## statistic = 0.032273, observed rank = 500, p-value = 0.001996
## alternative hypothesis: greater
```

This confirms that the spatial distribution of the relative difference is not random at the DA level, and it points to systematic bias in the data. 

The census has a wealth of variables that we can use to explore this bias, and it is tempting to start to test against variables that [have been identified as effecting the non-return rate of the NHS](http://www12.statcan.gc.ca/nhs-enm/2011/ref/reports-rapports/sw-ep/ch5-eng.cfm).

This is probably a good time to remind ourselves that the NHS income data is the result of post-processing by Stats Canada, so any investigation of that sort will only be able to discover the bias in these post-processed values. 

Another obstacle is that we will have to investigate the relationships between census variables and biases in NHS income numbers at the aggregate level, which requires powerful statistical tools to make inferences about the relationship at the individual level that we are after.

We will leave this for another day and another post.
