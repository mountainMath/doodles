---
title: Low income vs new dwellings
author: Jens von Bergmann
date: '2019-09-02'
slug: low-income-vs-new-dwellings
categories:
  - cancensus
  - geeky
  - Vancouver
  - Toronto
  - density
tags: []
description: "Does adding homes decrease the low income population? A look at the Canadian data."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/total_model_z-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
draft: false
blackfriday:
  fractions: false
  hrefTargetBlank: true
---






Canada's metropolitan areas are growing, which means we need to add housing. But adding housing often faces stiff oppositions. There are many reasons people don't like to add housing, this post is trying to look at one particular one. That adding housing causes displacement of the low-income population.

Adding new housing to a neighbourhood has two opposing effects.

The **gentrification effect** starts from the observation that new housing is more expensive than old housing (all else being equal). This means that people moving into new housing are generally more affluent. This influx will, through various means, increase the amenity value of the neighbourhood and draw in more higher-income people. This process makes it harder for low-income people to live in the neighbourhood, increasing pressure on low-income people to move away and adding barriers for low-income people to move in. The net effect is a decrease in the low income population in the neighbourhood. (The term [*gentrification* gets used in a variety of different ways in the literature](https://twitter.com/DanImmergluck/status/1159118121229258752?s=20). Here we use it strictly to refer to net displacement of low-income population.)

The **supply effect** starts from the observation that as the region is growing more people compete for housing. If we don't add housing, more affluent people will out-bid lower income people, displace them, and renovate up their housing. Adding new housing takes pressure off of the existing stock.

The question is centred on the relative strength of these two effects.

On a regional level it is fairly uncontroversial that the net effect of adding housing is to put downward pressure on prices and ease displacement pressures. But is the same true on a neighbourhood level? 

## TL;DR
The claim that in general "increasing density causes displacement of low-income population" is simply not supported by the data. In fact, in general the opposite is true, increasing density serves to increase the low income population. However, there may be cases where increasing density does correlate with a drop in the low-income population, but this is the exception and not the rule and driven by specific factors not present (or dominating) in general.

Overall there is a strong positive relationship between the change in the size of the Lico-AT population and the change in dwellings in a neighbourhood. 

![Model](https://doodles.mountainmath.ca/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/total_model_z-1.png)

## Southern California
This insight is nothing new, there are numerous studies that look at various aspects of this question from a variety of angles. One example is the 
[a study by Legislative Analyst's Office (LAO) in California on low-income housing affordability](https://lao.ca.gov/Reports/2016/3345/Low-Income-Housing-020816.pdf). In the part that is most relevant to our question they categorized low-income census tracts in the Bay Area by whether they experienced *high* or *low* market-rate housing construction, and checked how many of these experienced displacement of low-income households.

![](/images/lao_bay_area.png)

## Canadian data
We can look at Canadian data and use similar methods to understand the dynamics between adding housing and displacement of people in low-income. For this, we set up the problem very simply and look at the relationship between the change in the number of dwelling units and the change in the number of people in the Lico-AT low-income measure between 2006 and 2016 censuses for the four largest metropolitan areas (in 2006 boundaries).

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-2-1.png" width="768" />

All metro areas have added housing in this timeframe, while the number of low income people has increased in some and decreased in others. To bring this out better we can focus just on the change in Dwellings and population in Lico-AT.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-3-1.png" width="768" />

At the metro level we don't see any relationship between those two variables. But that's not surprising, at the metro level there are many factors impacting the people in Lico-AT, from increased economic opportunity to displacement outside of the metro area. The question that we are interested in here is how adding housing in a given neighbourhood within a metro area effects the low income population in that neighbourhood. But it is good to keep these overall trends in mind when interpreting the results below.

Following the LAO study mentioned above, we base our *neighbourhoods* on take census tracts.

## Analytical setup
There are a number of analytical choices we are making. We [TongFen](https://github.com/mountainMath/tongfen) the data to common geography for the 2006 and 2016 censuses. This process builds the common geography up from Dissemination Areas, which leads to a courser geography than simply adjusting to 2006 census tract boundaries but ensure maximal geographic integrity across the two censuses.

Two challenges we have to deal with that prevent us from running a naive linear model of low income vs change in dwelling units are heteroscedacity and non-normality of residuals, as well as significant spatial autocorrelation of the residuals. To deal with the latter we re-specified this as a spatial autoregressive error model. This also softens the other issues, but some degree of non-normality still persists. We won't resolve this completely in this post, for the Vancouver region we show that some of this can be traced down to re-classification between collective and private dwellings, with the low income data from the census only counting the population in private dwellings. 

There are other ways to deal with these analytical challenges, but we felt that this was the best way to approach our question. We refer people that want more information on the exact model specifications [to the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-09-02-low-income-vs-new-dwellings.Rmarkdown).



## Absolute change in low income population
The simplest way to pose our question is to look at the relationship between the change in the number of people (in private dwellings) in Lico-AT and the change in the number of private dwellings in each census tract.



A naive linear model correlating change in the population in Lico-AT *y* to the change in dwelling counts *x* yields the following highly significant results.

|     Metro| Coefficient| Estimate| Std. Error| t value| Pr(>&#124;t&#124;)|
|---------:|-----------:|--------:|----------:|-------:|------------------:|
|  Montréal| (Intercept)|  -154.00|      6.738|  -22.86|                  0|
|  Montréal|           x|     0.16|      0.014|   11.36|                  0|
|   Toronto| (Intercept)|   -72.58|      7.618|   -9.53|                  0|
|   Toronto|           x|     0.28|      0.006|   48.16|                  0|
|   Calgary| (Intercept)|   -87.29|     16.717|   -5.22|                  0|
|   Calgary|           x|     0.16|      0.008|   19.46|                  0|
| Vancouver| (Intercept)|  -138.95|     12.956|  -10.72|                  0|
| Vancouver|           x|     0.28|      0.013|   21.25|                  0|

However, the residuals are highly auto-correlated as a quick Moran I test reveals.

|Moran I   | Statistic| p-value|
|:---------|---------:|-------:|
|Montréal  |      0.26|   1e-04|
|Toronto   |      0.19|   1e-04|
|Calgary   |      0.17|   1e-04|
|Vancouver |      0.20|   1e-04|

The (pseudo) p-values are cut off by our choice of 10,000 Monte Carlo simulations, true p-values are likely even lower. To address this issue we are turning toward an autoregressive error model.





<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-9-1.png" width="768" />

Here `\(\lambda\)` is the coefficient of the autoregressive term in our autoregressive error model. As expected, there is no evidence of spatial autocorrelation in the residuals.



|Moran I   | Statistic| p-value|
|:---------|---------:|-------:|
|Montréal  |      0.00|    0.44|
|Toronto   |     -0.01|    0.72|
|Calgary   |     -0.01|    0.54|
|Vancouver |     -0.02|    0.65|

Visual inspection of the residuals confirms this.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-11-1.png" width="768" />

The map indicates that at the residuals behave nicely in the middle ranges, but we see more extreme values than we would normally expect.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-12-1.png" width="768" />

The Q-Q plots confirm this especially for Toronto and Montreal, but also in Vancouver. We should take a look at the largest outliers.




<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-14-1.png" width="768" />

In Vancouver, the census tracts at UBC, the Downtown Eastside, part of North Central Coquitlam, and the area at the south corner of Burquitlam show deviations from the model greater than 750 people in Lico-AT in 2016. Individual regions can deviate for many reasons. For the Downtown Eastside we need to keep in mind that many SROs got re-classified from private housing to collective housing, which would lead to a drop in our metric as the census numbers only capture the low income population *in private dwellings*. During the given time period the population in collective dwellings grew by 1,370 people, which may account for a good part of the drop of 1,333 people in Lico-AT in *private households*. UBC saw some reclassification of student housing to private housing, which would have the opposite effect, and student population captured in nearby private housing there could also impact the estimates.

The regions have undergone different rates of dwelling growth, ranging from a slight loss of dwellings in the Downtown Eastside, to moderate growth in Southwest Burquitlam and strong growth at UBC and North Coquitlam.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-15-1.png" width="768" />





Armed with a better understanding of two of these outliers we are (for now) content with the non-normality in our residuals in Vancouver.


## Focus on "medium growth" areas
To understand the effect of ares with high dwelling growth, as well as the stagnant areas, we can re-run the analysis only for areas where private dwellings increased or dropped by between 10% and 90%, removing very high growth areas as well as stagnant areas.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-18-1.png" width="768" />

The results are quite similar, although with much lower explanatory power. 

## Refining the estimates
There are a number of ways to refine the estimates. One add in a variable **z** given by the initial (2006) population in Lico-AT to account for **home-by-home gentrification**, so the process of low-income people getting pushed out without adding any dwelling units simply by the process of getting out-bid by more affluent households that may also renovate up the dwellings.

In summary, we are working with the following variables.

* **y** -- the change in the number of people in Lico-AT
* **x** -- the change in the number of dwelling units
* **z** -- the initial (2006) number of people in Lico-AT.

But this is also where things get tricky, the number of dwelling units that get added in a neighbourhood is not independent of the number of low-income people at the beginning of the period, a point that we will return to at then end of the post. But the colinearity is not too concerning. As we will see, the effect of adding in the *z* variable will only have a small effect on the change in dwelling coefficient, although it will absorb essentially all of the intercept.




<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/total_model_z-1.png" width="768" />

The intercept is now not meaningfully different from zero with the effect being much better captured by our *home-by-home gentrification* term, and the coefficients for the dwelling growth have adjusted upward a bit, with Vancouver seeing the strongest upward adjustment from 0.28 to 0.32.

We can also plot the dependence on our initial population in Lico-AT.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-20-1.png" width="768" />

These results are again fairly stable when restricting to the "medium growth" areas.

## Change in share of people in Lico-AT
A related interesting question is to look at the percentage point change in share of people in Lico-AT, so looking at more at neighbourhood change than at displacement. This sets a much higher bar on the effect of adding new dwellings, one might expect that while the total low income population does not decrease when new dwellings are added, the share of the low income population may well drop. As dependent variable we then choose the relative change in dwellings, as well as the initial (2006) share of low-income people, but weight the analysis based on the number of private dwellings in 2006 so the analysis does not get skewed too much by low denominators.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-21-1.png" width="768" />

The intercept looks unreasonably high in these graphs, but this is offset from the effect of term for the initial Lico-AT population. In Montréal we do indeed now see a drop in the share of low-income people of the order of roughly 1.8 percentage points for each percent increase in dwelling stock. Calgary comes out essentially flat and Toronto and Vancouver show a significant increase in share of low income people with dwelling growth. 

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-22-1.png" width="768" />


This model further comes out with a significant baseline increase in share of low income people, offset by fairly high rates of attrition in existing share of low income people. For example in the case of zero change in dwellings in Vancouver, this model predicts a net drop of share of population in Lico-AT in areas with 7.7% or higher initial share of population in Lico-AT. For reference, the initial overall share of the population in Lico-AT in Metro Vancouver in 2006 was 16.5%.

The distribution of the residuals is generally better than when we looked at the total change.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-23-1.png" width="768" />

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-24-1.png" width="768" />

This model again under-estimates the low income population in the Downtown-Eastside, and over-estimates the low-income population in North/Central Coquitlam and UBC, but also in Hastings-Sunrise, Burnaby Mountain/SFU, the west side of the Cambie Corridor and parts of Central Surrey.

The model fit for Toronto and Vancouver is significantly improved when using the relative change of the Lico-AT population instead of the percentage point change. But this also increases the issues around heteroscedacity and non-normality of the residuals, but it might be worthwhile to investigate this further.


## Vancouver's larger municipalities
Particular development patterns, and decisions on what kind of development gets approved, are done at the municipal level. In particular inclusionary zoning requirements and share of purpose-built rental developments differ significantly across municipalities, and this may well lead to hidden variable bias. We can look at the four largest municipalities in Metro Vancouver to investigate this. Census tracts don't line up perfectly with municipal boundaries, but this should not be a major concern for us.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-25-1.png" width="768" />

We see that the dependency on dwelling growth holds up well across these municipalities, with Burnaby and Richmond seeing a significantly higher dependence than the overall metro model. The much higher baseline attrition of Lico-AT population in Vancouver compared to Surrey, as indicated by intercept, jumps out.

We can again improve the overall model fit by adding in the size of the initial (2006) population in Lico-AT.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-26-1.png" width="768" />


<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-27-1.png" width="768" />

We see that the change in dwelling is still associated with a strong increase in population in Lico-AT. Interestingly, Burnaby is showing the largest rate of increase. Going back up to the map of residuals for the metro-wide model we see that Metrotown does not come in far off from the model predictions, which we found somewhat surprising. Again, the intercept looses statistical significance under this model specification.


## Upshot and next steps
I had run the initial correlations of dwelling growth to population in Lico-AT quite some time ago, but never taken the time to properly deal with the significant spatial autocorrelation, refine the model, and investigate reasons for non-normality of the residuals. But the question on displacement of low-income people due to new construction keeps coming up, and I was curious to see if the relationships I initially observed still hold up when doing a more rigorous investigation. And they do.

As usual, there are a couple of caveats. 

* The entire analysis is done at the ecological level. In particular, it says nothing about displacement of individual low-income people, or the impact of adding dwellings on low income people at the individual level as the [recent Federal Reserve study](https://www.philadelphiafed.org/-/media/research-and-data/publications/working-papers/2019/wp19-30.pdf) did. This analysis looks at the net effect on the overall population in Lico-AT, so the of net in and outflows.
* We have not done a proper causal analysis, that would require developing a strong theoretical framework of causal relationships that drive low-income population. However, this analysis clearly shows that the claim that "increasing density gentrifies the neighbourhood", where *gentrification* is understood as involving a net displacement of the low-income population, does not hold in general. In fact, this analysis adds to the evidence that in general the *supply effects* outweigh the *gentrification effects*, even in fairly small geographic neighbourhoods.
* This analysis does not say that increasing density will always increase the population in Lico-AT, it’s a statistical analysis that simply says this is the norm, but displacement may well happen in particular areas. In particular, the analysis says little about neighbourhoods with high initial shares of people in Lico-AT as explained below.






Over half of the neighbourhoods in our data have initial shares of population in Lico-AT below 20%.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-29-1.png" width="768" />

With very few neighbourhoods with higher share of Lico-AT in our sample we should not assume our results holds there. The absolute change in dwelling units also biases strongly toward low initial population in Lico-AT.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-30-1.png" width="768" />

However, when looking at the relative dwelling growth we get a different picture.

<img src="/posts/2019-09-02-low-income-vs-new-dwellings_files/figure-html/unnamed-chunk-31-1.png" width="768" />

Calgary and Toronto see a spike in relative change in dwellings at the high end, something that we also see in Montréal and Vancouver, except that areas with very high rates of low income population we see a net loss in dwelling units. It would be worthwhile to investigate this pattern further, in our context this means that we should be careful when interpreting our results for areas with share of low-income population above 40%.

The code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-09-02-low-income-vs-new-dwellings.Rmarkdown), anyone interested in more details on the analysis, or wanting to improve the models, is welcome to grab the code.












