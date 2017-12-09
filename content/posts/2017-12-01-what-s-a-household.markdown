---
title: What’s a Household?
author: Jens von Bergmann
date: '2017-12-01'
slug: what-s-a-household
categories:
  - CensusMapper
  - cancensus
tags: []
description: "What kind of households does Vancouver have?"
featured: 'hh_by_age-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-12-01-what-s-a-household_files/figure-html/hh_by_age-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-12-01-what-s-a-household_files/figure-html"
linktitle: ''
type: "post"
---

Recently there has been a lot of talk about households, and how they match up with dwelling units. So it's probably a good idea to take a closer look at what a household is. 

Apart from better understanding what a household is, I want to also dig deeper into how people live in households. Part of my motivation is to start to understand latent demand in our housing market, some of which may come from suppressed household formation. As a starting point for this I want to better understand "complex" household types that may strive to "simplify", to put it in language introduced further down. There are many confounding factors for "complex" household types that we would have to account for in order to move from the simple enumeration of household types that we do in this post toward using this to derive estimates for latent demand of suppressed household formation. So this post is more of an inventory of household types and their intersection with dwellings, and does not (yet) make any statements about latent demand.

But let's start of with the census definition of a household. And also touch on what a dwelling unit is. Dwellings are simpler, so we will do that first.




# Dwellings
The census splits dwelling units into "private" and "collective" dwellings. Most of the time when referencing census data we only talk about "private dwellings", including in (almost) news accounts on this. The regular census profiles for regions across Canada do not include any information about collective dwellings, and only include information on the age of the population in collective dwellings (aka "institutional residents"). This can lead to interesting statistics, like [Dissemination Block 59150946003 on UBC campus](https://censusmapper.ca/maps/591#18/49.26150/-123.25649), that reports 890 people living there in 0 (private) dwelling units.



We can [map the number of people living in collective housing](https://censusmapper.ca/maps/772) by simply subtracting the people in private households by the total population. That gives us an idea of the scale and distribution of institutional residents, 2.1% of the population in the City of Vancouver lived in collective dwellings in 2016. This can lead to confusions when people estimate household size, where one needs to be careful to properly match up populations and dwellings. In particular, regularly people naively divide the standard population (which counts all people) by dwellings (which only counts private dwellings), but this gives incorrect results.

# Households
Which brings us to households. For the census a households is exactly the same as a dwelling that is "occupied by usual residents". As a reminder, these are dwellings that are used as primary residences. The basic idea is that the census should count people and households only once. Just like with dwellings, in most cases the census only refers to “private households”, which often gets shortened to just “households” when we talk about these. There are comparatively few collective households, so the confusion this might cause is not very large.

Overall in Metro Vancouver we have 2,426,235 usual residents living in 960,895 private households and 37,015 usual residents living in 1,105 collective dwellings.

As a hypothetical (but realistic) example consider a student attending university at UBC and renting a basement suite in the City of Vancouver during the semester. While our student lived in Vancouver during the census (assuming the student stuck around a couple of weeks after the end of the spring semester and was still in Vancouver during the census), the student thinks of the suite as their temporary residence and their parent's place as their permanent residents. So the student would get recorded at their parent's residence and count as a person in their parent's household, and the suite in Vancouver would get recorded as not "occupied by usual residents".

In short, in the census a "household" is a dwelling unit used as permanent residence. This is a fine, but important, distinction of how we usually think of households. Colloquially we often equate households with "families" living together or "unattached individuals" living alone.


If we just naively match (private) households with (private) dwelling units, we are only looking at how many dwellings get used as primary residences but we ignore how people live together. For the rest of this post we want to take a deeper look at the types of households and how people live together, with a focus on Vancouver but at times bringing in other regions for more context.


## Types of private Households
Which brings us to the question of what a "household" is in terms of the living arrangements of the people in a household. The census distinguishes a range of (private) household types:

* census family households
  - one census family only households
  - one census family household with additional persons
  - multiple family households (with or without additional persons)
* non census family households
  - one person non census family households
  - two or more person non census family households
  
To understand what that means we need to understand what a census family us. A "census family" consists of a couple (married or common law) with or without children, or a lone parent with children at home. Families can have two generations related by blood or adoption or marriage/common law at most, so if a couple lives in a household with their children and grandchildren or they live with their child with their married or common law spouse also present, that would count as more than one census family. (However, grandparents living with grandchildren without the parents of the grandchildren present also counts as a census family.) 




<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/household_types-1.png" width="864" />

Here we distinguish "simple" household types which are what we generally think of when we hear people say "household", and "complex" household types, that is household constellations that don't fit the traditional picture of either a single person living alone, or a family living together. In total there are 139,820 "complex" households in Metro Vancouver. Families living together includes cases where grandparents, children and grandchildren living in the same household, as well as co-housing unrelated families with or without children. One couple census family households without children may be an evolution of a two-or-more person non-census family households (aka roommates) where two people in the household form a common law or married couple.

To understand how Vancouver fits in we can compare the distribution with other regions.
<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-4-1.png" width="864" />

We see that Calgary and Edmonton have a relative strong share of two-or-more person non-census-family households (several unrelated people sharing a household). In Vancouver and Toronto we see a strong share of one couple census families with other persons in the household without children, as well as multiple census family households. These are household types that are often quite similar to several unrelated people sharing a household, but in a more advanced stage in live where family formation starts to happen and some of the people living together are common law or married couples.

To understand this a little better we throw in the age of the household maintainer.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/hh_by_age-1.png" width="864" />

Keying by age shows that Calgary and Edmonton's higher share of two-or-more persons non-census family households is due to these cities having a higher share of the population in the younger age groups where this household type arrangement is more common.

We can re-order the graph to better compare regions for each age group.
<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-5-1.png" width="864" />

We clearly see how family formation happens very early in Edmonton and Calgary, who also build up a relatively thick portion of family households with other persons in the household or multi-family households early on. Vancouver and Toronto overtake the two Alberta cities when household maintainers are in their 30s and continue to lead in that segment from that age on.

To complete this section we show the percentages of each household type per Metro Region.


# Adults Children Living with Parents
Another interesting setup to look at is adult children living with parents. In our above data these can show up by simply having thicker bands of census families with children at home, but it can also manifest itself as thicker multi-family households in case the children themselves have formed their own family that lives together with the parent family. We have an [interactive CensusMapper map to explore the proportion of 25 to 29 year olds living with parents in each region](https://censusmapper.ca/maps/928) that allows to better understand the geographic distribution.




We will focus on children above the age of 25 living with parents.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-8-1.png" width="864" />

We see that the total number of Adults aged 25 and over living with their parents has increased between 2011 and 2016. But so has the overall population. A better way to compare through the years is by looking at the share of the population in each age bracket that lives with their parents.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-9-1.png" width="864" />

This shows that there have been increases in the share in every age bracket. We want to visualize the percentage increase for easier comparability, where we leave out the age groups starting at 55 to avoid issues with small denominators.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-10-1.png" width="864" />

We see that the increase happened through the board, but the increase in the share of 35 to 39 year olds is particularly pronounced at the 35 to 39 year old age group, where the share increased from 5.8% in 2011 to 6.8% in 2016.

We can also compare the shares of adults living with their parents across regions.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-11-1.png" width="864" />

Metro Toronto and Metro Vancouver stand out as having higher shares for all age groups. We [know that ethnic origin, immigration status and languge spoken at home are significant confounding variables](https://www.statcan.gc.ca/pub/75-006-x/2016001/article/14639-eng.htm), and that Vancouver and Toronto have higher shares of the population in these groups. It would be useful to come back at some point and refine the analysis to control for these factors.

# Bedrooms
Another way to look at matching people with dwellings is by bedrooms.



Let's take a look of the (occupied private) building stock by number of bedrooms and see by how many people they are used.
<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/bedrooms_total-1.png" width="864" />

For more context we can compare this to other metropolitan regions and express the household sizes as shares instead of absolute numbers.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/bedrooms_percent-1.png" width="864" />

The first thing we can do is count the number of spare bedrooms in the region. We can do this in two ways, once assuming each person in the household gets their own bedroom, and once assuming that, unless it's a studio apartment, two people in the household will share a bedroom and everyone else gets their own bedroom. In our total bedroom count we count any dwelling unit with more than 4 bedrooms as only 4 bedrooms, so we undercount bedrooms. Similarly, we count households with more than 5 people as 5 person households. These 4 bedroom and 5 people per household cutoffs are due to data availability and may skew the results a little. [Nathan Lauster computed the bedroom shortfall using PUMF data for 2011](https://homefreesociology.wordpress.com/2017/09/27/empty-bedrooms/) which is a coarser subsample but has a finer breakdown by bedroom types.


|Metro Region      |Total Bedrooms (inc. Studio) |Extra Bedrooms |Share |Extra Bedrooms 2 |Share |
|:-----------------|:----------------------------|:--------------|:-----|:----------------|:-----|
|Calgary           |1,505,750                    |317,615        |21.1% |589,690          |39.2% |
|Edmonton          |1,439,330                    |319,805        |22.2% |578,670          |40.2% |
|Montréal          |4,210,715                    |795,130        |18.9% |1,523,630        |36.2% |
|Ottawa - Gatineau |1,472,655                    |327,260        |22.2% |597,240          |40.6% |
|Toronto           |5,785,040                    |975,275        |16.9% |1,920,350        |33.2% |
|Vancouver         |2,432,615                    |421,055        |17.3% |827,800          |34%   |

Some people might take that to claim that we don't need to build more bedrooms, it is clear that we have an oversupply of bedrooms in the region.


## Crowded Housing
We can further dive into the question of households that may be missing bedrooms by considering the people in the household in more detail. The National Occupancy Standard (NOS) is, for better or worse, a metric that attempts to measure pressure households feel to upgrade their number of bedrooms. A dwelling unit is deemed suitable under NOS if every household member has their own bedroom, with the exception that couples may share a bedroom, as well as two children if they are under the age of 5 or of the same sex and under the age of 18. We should remember that this is a subjective measure, and the pressure experienced by individual households to upgrade their housing will vary greatly depending on their cultural background. Browsing through our [interactive housing Suitability map on CensusMapper](https://censusmapper.ca/maps/883) we recognize some overlap of areas with high proportion of households not meeting NOS with areas that have higher proportions of immigrant households, but there are also counter-examples.






We can try to understand the number of households not meeting NOS, and their bedroom shortfalls in order to meet NOS, keyed by household type.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-16-1.png" width="864" />

One-person household of course meet NOS in all cases, couple without children households meet NOS unless they inhabit a studio apartment. We can normalize this as a share of households by household type and compare across metro regions.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-17-1.png" width="864" />

It is interesting to see that Montréal takes the lead of high proportion of NOS households for some household types, but overall Toronto and Vancouver have a higher share of households not meeting NOS compared to Montreal as the following table shows.


|Metro Area        |Total Households |Households not meeting NOS |Share of Households not meeting NOS |
|:-----------------|:----------------|:--------------------------|:-----------------------------------|
|Calgary           |519,685          |23,650                     |4.6%                                |
|Edmonton          |502,145          |26,920                     |5.4%                                |
|Montréal          |1,727,300        |97,580                     |5.6%                                |
|Ottawa - Gatineau |535,510          |22,075                     |4.1%                                |
|Toronto           |2,135,915        |205,425                    |9.6%                                |
|Vancouver         |960,900          |70,370                     |7.3%                                |

Lastly we want to take a quick look at how housing suitability wrt NOS is effected by tenure.

<img src="/posts/2017-12-01-what-s-a-household_files/figure-html/unnamed-chunk-19-1.png" width="864" />

As expected, renter households tend to be more squeezed for housing. We already saw that renter households tend to have fewer spare bedrooms, this confirms that renter households also are more likely to not meet NOS.

# Next Steps
This concludes our first exploration into household types and how how they relate to dwellings. We would like to quantify the latent demand due to household suppression, where for example adults over the age of 25 living with parents would like to move out and form their own household, or multiple census family households would like to split up and live separately. In order to do that we should take a careful look at possible confounding factors like ethnic origin, and more thoroughly compare living arrangements through space and across different regions in Canada. We will leave this more elaborate analysis for another day.

As always, the underlying R Notebook that generated this post lives [on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-12-01-what-s-a-household.Rmarkdown) for anyone interested in reproducing or adapting this post for a different region or elaborating on it in other ways.
