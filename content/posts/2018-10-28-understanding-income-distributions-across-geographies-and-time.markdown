---
title: Understanding income distributions across geographies and time
author: Jens von Bergmann
date: '2018-10-28'
slug: understanding-income-distributions-across-geographies-and-time
categories:
  - cancensus
  - CensusMapper
  - CANSIM
  - Vancouver
  - Toronto
tags: []
description: 'Some thoughts on income distributions and labelling neighbrourhoods as low, middle, or high income: Most of our neighbourhoods are neither, they are truely mixed-income.'
images: ["https://doodles.mountainmath.ca/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/vancouver_income_map-1.png"]
featured: 'vancouver_income_map-1.png'
featuredalt: ""
featuredpath: "/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html"
linktitle: ''
type: "post"
---





When trying to understand the income makeup of regions in Canada we need to take the income distribution and simplify in a way that is accessible. This is no easy task. Simplification is an essential part of this, but we need to take care not to over-simplify but instead still retain the essential parts.

## How to measure income?
To start we have to select an income measure. Partially this is constrained by data availability, but there are choices. If we are interested in the income distribution for large geographic areas we can consult annual tax filer data. There are a couple of choices we need to make.

Most income data, including in the newest census, comes down to CRA tax filer data. It is available from the CRA or CANSIM on an annual basis for broad geographies and a few demographic indicators. Census data is available every 5 years on fine geographies and rich demographic indicators. With frequency and geography having a major impact on our choices, let's see what we can get from both of these sources.

### CANSIM/CRA data
Individual income is recorded for all tax filers, so most people above the age of 14. It counts the teenager with their paper-run income at the same time as the full-time full-year income earner. Lumping these two groups together can lead to very misleading information. One way around this is to look at "family income" (e.g. CANSIM 11-10-0012), and maybe focusing on couple-family incomes only as they are less prone to compositional problems. We can further filter by age group to exclude (or focus on) senior households or households below 25 years old at the very start of their careers.





<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-2-1.png" width="768" />

Here we used a composite link model assuming an underlying Poisson distribution to estimate a continuous income distribution from discrete bins.

Some CANSIM data is inflation adjusted, but finer income bands are generally not. Including in the source we chose, so we adjusted the incomes manually to 2016 dollars using Canadian CPI. There may be a case for using metro-specific CPIs. The graphs show clearly how the distributions shift upward in real terms over time.

It helps to view different geographies in relation to one another, so here is a view that emphasizes this comparison.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-3-1.png" width="768" />

We can see how Calgary, and to a lesser extent Toronto, have fairly fat tails of high income earners. Comparing Vancouver to Toronto we see how Vancouver's tail has fattened up quite a bit, although it is still not at Toronto levels. At the same time, Vancouver's main mode used to be lower than Toronto's, but it came out higher in 2016.

Another interesting data source is CANIM tables 11-10-0193, which looks at *adjusted* income deciles and 11-10-0192, which looks at family income deciles by economic family type. Just like the above data, these offer consistent time series, but are only available at the Provincial and not the metropolitan area geography. Here is an example of an [observable notebook visualizing average adjusted after-tax income by decile for BC over time](https://beta.observablehq.com/@mountainmath/british-columnbia-adjusted-after-tax-family-income).

## Census
The census comes with several income distributions out of the box, others can be obtained from custom tabulations or micro data. Standard census profile tables are individual total and after-tax income distribution, household total and after-tax income distribution and adjusted after-tax family income distribution. Further we have custom tabulations available at the metropolitan level that look at a wide variety of income distributions.


### Adjusted (after-tax) family income
Adjusted after-tax family income probably gives the simplest way to compare income data across time and geographies. After-tax income measures how much income people have available after taxes and government transfers, and thus also accounts for differences in provincial taxes and benefits. Adjusted means that it's scaled by (the square root of) the number of people in the family unit. It does not lump roommates into the same category like household income does, but treats each non-family unit on it's own. And the census is much better in telling apart families than the CRA-based CANSIM data that we mentioned above. The concept also does not suffer as much from compositional issues, where for example median household income in the City of Vancouver is lower than that in the City of Toronto [solely because Vancouver has a higher share of 1-person households](https://doodles.mountainmath.ca/blog/2017/11/01/medians/), which leads to the popular misconception that median incomes in the City of Toronto are higher than in the City of Vancouver. One still has to be aware of confounders like a high share of university students, or retired people, in an area, which may make interpreting low-income results difficult.

Moreover, the unit of adjusted family income is people, not households or family units, which makes the data very comparable. The data comes grouped into income deciles, based on the national distribution, which makes it easy to compare nation wide, as well as relative changes across time.

The advantage of using census data is that we have it for small geographies and can explore spatial variations. Standard census releases have this data since 2011, although 2011 income data, especially when mixed with demographic data, becomes somewhat suspect due to the voluntary NHS. We have [written about this before](https://doodles.mountainmath.ca/blog/2017/09/29/a-retrospective-look-at-nhs-income-data/) and generally the NHS income data has gotten a worse reputation than it deserves, with critics often not properly understanding the post-processing of income data by StatCan, and running afoul the ecological fallacy when trying to pinpoint biases. 2016 income data on the other hand has been automatically linked from tax returns to the vast majority of census respondents, which, together with post-processing, allows us to have fairly high confidence in data quality even at dissemination area geographies. We should still treat individual areas with some caution as one must expect a few outliers based on sampling and matching issues.

To get an idea how this works, here are the distributions of adjusted after-tax family income by deciles for the four most populous CMAs in Canada.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-4-1.png" width="768" />

We see that in Calgary the share of the population in Canada's top two income deciles is about the same as the share in the top three income deciles in Toronto and Vancouver, and the top 4 income deciles in Montréal. Similarly, the share of the population in the bottom four or five income deciles in Calgary is about the same as the share in the bottom three deciles in the other three metropolitan areas.

### Mapping distributions
For mapping purposes we need to find a way to code distributions. Medians or averages are simple, but often over-simplify the problem to the extent that the graphical representation can become meaningless. Take average income, there is no way to distinguish a bi-modal distribution where almost nobody earns the average income from a distribution that is tightly bunched around the average income. That's why I have a hard time extracting meaningful information from [labelling a region as "middle income" using the average individual income](http://neighbourhoodchange.ca/homepage/vancouver-1970-2015/), especially when using individual income that is heavily confounded by demographics.

What are alternative ways to label neighbourhoods? At CensusMapper we have been a fan of tri-colour mixing to to show relative sizes of a distribution partitioned into three brackets. For [adjusted family income](https://censusmapper.ca/maps/1010) we partition the data into top 30%, middle 40% and bottom 30% of the Canadian adjusted after-tax family income distribution and map this Canada-wide at all census geographies. Recently [Jonas Schöley](https://twitter.com/jschoeley) built a nice R package that uses a similar approach, but allows for better colour choices with the legend pulling double-duty as a scatter plot.

We could proceed and use the same methods as in CensusMapper and map relative sizes of the Canadian adjusted family income distribution. But as we have seen above, the income distribution can vary greatly between CMAs. If we are interested in concepts like income segregation within a CMA, we should choose our groups relative to the CMA-specific income distribution for each CMA instead of using the Canada-wide distribution.

This gets a little more complex than just aggregating up deciles, but nothing that can't be easily dealt with in a couple of lines of code.




To understand income segregation within a metropolitan area we bin people into the bottom 30%, middle 40% and top 30% of the adjusted family income distribution, where the percentile cutoffs are chosen relative to the overall CMA income distribution (and not the overall Canadian distribution like we did on CensusMapper). This requires a bit of estimation, but we expect the estimates to be quite robust for our purposes. [Check the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time.Rmarkdown) if you are interested in the details. In this approach we are not bound to deciles any more and could have chosen other cutoffs, for example bottom third, middle third and top third, but we felt that having a little fatter middle income group probably more accurately reflects the common understanding of what it means to be in the bottom, middle or top portion of the income distribution.




To label geographies, we choose to condense the data into 4 distinct labels. If at least 50% of the population falls into one of our three incomes groups, high, middle, or low, we label the geography as high, middle, or low, respectively. If not, we label the area as "mixed income".

## Vancouver
<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-7-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                 grob
## 1 1 (2-2,1-1) arrange       gtable[layout]
## 2 2 (2-2,2-2) arrange       gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.3079]
```

Vancouver distinguishes itself as being mostly "mixed income", with some high-income areas in the low-density parts of the North Shore and a cluster of middle-income ares in Surrey. Among our four CMAs, it's the one with the lowest share of areas dominated by low-income people.

## Toronto
<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-8-1.png" width="768" />

Toronto paints a different picture. It's still dominated by mixed-income neighbourhoods, but less so than Vancouver. It has about double the share of low, middle and high income areas compared to Vancouver, so is overall much more segregated. And it has the highest share of areas dominated by middle income people among our four CMAs.


## Montréal

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-9-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                 grob
## 1 1 (2-2,1-1) arrange       gtable[layout]
## 2 2 (2-2,2-2) arrange       gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.7671]
```

Montréal has the highest share of predominantly low-income areas, although not by a large margin. If we had based this on the overall Canadian income distribution and not rescaled the income bins relative to the overall metropolitan area of Montréal, we would see a pattern dominated by "middle income" areas, with about 1 in 5 areas with over half the population in the middle 40% of the Canadian adjusted after-tax family income distribution. 

## Calgary 

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-10-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                 grob
## 1 1 (2-2,1-1) arrange       gtable[layout]
## 2 2 (2-2,2-2) arrange       gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.8343]
```

Even after rescaling to the overall Calgary income distribution, Calgary still has the highest share of areas dominated by high-income people. It also has the lowest share of areas dominated by middle-income people.

Had we used the overall Canadian income distribution to bin our categories, Calgary would show two in five areas dominated by high-income people and almost no areas that are predominantly low-income.

To compare the amount of income segregation across regions we can plot the share of labels on a common graph.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-11-1.png" width="768" />

This shows that the differences between these regions on our scale are not large, but Vancouver stands out as a mostly mixed-income CMA.

We can also try to understand how the segregated labels are distribution among municipalities within a CMA. As an example, we look at Vancouver.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-12-1.png" width="768" />

This confirms that most of the regions predominantly middle-income areas are located in Surrey, and the District of North Vancouver picking up the most predominantly high-income areas, and labelling 12 out of it's 19 census tracks as such.

## Refinements

There is a number of way how we could refine this. A key aspect of data visualization is to simplify the data in just the right way. Removing non-essential nuance and focusing on the essential parts. We could look at other ways to slice the income distribution, maybe using different percentile cutoffs, or using more than just three categories.

Another way is to refine our "neighbourhoods", census tracts in the above case. We could use dissemination areas for finer grained neighbourhoods to understand segregation at that level. With income now being part of the 100% data of the census this makes sense for the first time with the 2016 census.

A third way is to add more labels. Especially in the "mixed" income areas, may want to distinguish if a mixed income neighbourhood is tending toward being a high income or a low income neighbourhood.

As an example, we will re-run the analysis for dissemination areas with more labels, but focusing in on the City of Vancouver to reduce overall clutter and make allow us to still process the information. We still stick with Metro Vancouver as a reference on how to normalize our income bins. 

For reference, we start with just looking at our original four categories at the census tract level.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-13-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                  grob
## 1 1 (2-2,1-1) arrange        gtable[layout]
## 2 2 (2-2,2-2) arrange        gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.12617]
```

Refining the geographies to dissemination areas lends more geographic nuance to the representation, it is fine enough to pick up some areas dominated my middle-income people.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-14-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                  grob
## 1 1 (2-2,1-1) arrange        gtable[layout]
## 2 2 (2-2,2-2) arrange        gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.17607]
```

This reveals that West Point Grey was mixed income because it was made up of a high-income area reaching west of Blanca and a low income area around the non-profit housing project by Jericho.

Alternatively we could have kept the geographic aggregation level fixed and allowed for more variation in the binning of income groups by quadrupling the number of categories.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/unnamed-chunk-15-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                  grob
## 1 1 (2-2,1-1) arrange        gtable[layout]
## 2 2 (2-2,2-2) arrange        gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.21733]
```

This reveals an important category that the broader categorization entirely missed, the olive band from Second Narrows down to Marpole, as well as the West End, indicating an even mixture of middle and low income people. West Point Grey is now more precisely defined as mixing high and low income. We could make out the reason for this when looking at finer geographies, but this remains hidden when aggregating up to census tracts.

Lastly we refine both the geographies as well as the categories.

<img src="/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time_files/figure-html/vancouver_income_map-1.png" width="768" />

```
## TableGrob (2 x 2) "arrange": 3 grobs
##   z     cells    name                  grob
## 1 1 (2-2,1-1) arrange        gtable[layout]
## 2 2 (2-2,2-2) arrange        gtable[layout]
## 3 3 (1-1,1-2) arrange text[GRID.text.26735]
```

This reveals a lot of nuance, the band of Middle/Bottom income mixture ranging from the Second Narrows down to Marpole through East Vancouver, as well as the West End, is still clearly visible, occasionally punctuate by regions pulling more towards lower and middle income. Just to the west of that East Vancouver band we see a band of greyish-purple that sits between the high and middle income bands. The West Side is dominated by pinkish colours, at turning purplish when adding more middle-income people or brownish when adding more low-income people. Low income pockets are strong around the Downtown Eastside, with occasional pockets popping up elsewhere, in particular the triangle at Arbutus and 33rd. The non-profit housing project at Jericho also leaves a visible imprint.

Each of these representations have value, adding nuance in either geography or categorization adds additional information, but also makes it harder to process it. This points back to CensusMapper, where this can be built as an interactive tool that allows for interactive explorations. Starting for simple categories and geographies one could tweak the parameters and dive into more details in areas one might be interested in. Maybe I will have to sit down and refine my three-colour mixing CensusMapper maps to allow for discrete colour categories and add a scatter-plot to the triangle legend.

## Upshot
These explorations make clear that we have been paying far too little attention to the fact that census tracts within our largest CMAs don't segregate by income, the vast majority of census tracts are not dominated by low, medium or high income people relative to the CMA distribution. In particular in Vancouver, there are relatively few areas with over half of the population falling into one of these three categories. This invites to take more time and refine the analysis using fine geographic areas or finer income categories, or adding in other demographic factors to help understand the landscape of income in Canadian CMAs.

The code for the analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-28-understanding-income-distributions-across-geographies-and-time.Rmarkdown) for anyone to reproduce, adapt or extend this. In particular it only requires minimal adjustments to reproduce this for any other region in Canada.

