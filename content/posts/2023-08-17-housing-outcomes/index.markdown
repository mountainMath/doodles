---
title: Housing Outcomes
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2023-08-17'
slug: housing-outcomes
categories:
  - affordability
  - cansim
  - cmhc
  - cancensus
  - Vancouver
  - Toronto
tags: []
description: 'Existing households are partially outcomes of our housing pressures, and basing analysis soley on households introduces collider bias. Which is substantial in tight housing markets and this misspecification can lead to misguided analysis and faulty policy recommendations.'
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2023/08/17/housing-outcomes/index_files/figure-html/hmr_age_group-1.png"]
featuredalt: "Age-specific household maintainer rates in Montreal, Toronto and Vancouver over time."
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2023/08/17/housing-outcomes/" target="_blank">HomeFreeSociology</a>)</i></p>



Almost everyone agrees that we have a housing crisis in Canada, and that it has gotten progressively worse over recent history. But there is a problem. The metrics most commonly used don't reflect that.

## TL;DR
Most commonly used metrics use **existing households as the base of analysis**, but households are a consequence of housing pressures. This kind of **misspecification** is a form of **collider or selection bias** that, especially in tight housing markets, **misleads researchers toward faulty conclusions and policy recommendations**. It blinds researchers to the struggles of people who are unhappy about their current household living arrangement, like young adults struggling to move out of their parent's place or out of a bad roommate setup, as well as people who have left their desired region and moved away, or failed to move in, because of the lack of housing options.

This post explains the problem with analysis based solely on households in more detail, and explains why this will lead to incorrect diagnoses of our housing problems and misguided policy recommendations.




## Core Housing Need
The most-cited metric in the context of problems in the housing market in Canada is [Core Housing Need](https://www23.statcan.gc.ca/imdb/p3Var.pl?Function=DEC&Id=1230313). But looking at the share of households in core housing need for the 2006 through 2021 censuses one would be hard-pressed to conclude that Core Housing Need got worse.

<img src="{{< blogdown/postref >}}index_files/figure-html/chn_canada_time-1.png" width="1200" />

2021 was a weird year, of course, and the CERB payments from 2020 likely lifted a lot of people out of Core Housing Need, so we should not focus too much on that drop. But even before the pandemic it seems difficult to argue that Core Housing Need got worse, despite almost everyone agreeing that housing outcomes deteriorated during that time period.

But housing is a local problem, maybe things get washed out when looking at the national level? Turning our lens to local levels doesn't really change much. Looking at Census Metropolitan Areas we still don't see a clear trend indicating rising levels of housing need. More often we see the opposite.

<img src="{{< blogdown/postref >}}index_files/figure-html/chn_cma_time-1.png" width="1200" />

Metro Toronto and Vancouver stand out as higher than other metros, as we might expect, but it doesn't look like things are getting worse. Maybe the problem is not with the whole metro areas but with the central cities. But again, it's hard to make out a negative trend. Just looking at Core Housing Need, a naive observer might assume that conditions are pretty stable, with need on the decline in many places. Housing crisis? What housing crisis?

<img src="{{< blogdown/postref >}}index_files/figure-html/chn_city_time-1.png" width="1200" />



Does that mean that things actually aren't getting worse? Are we just imagining the housing crisis? No. We are looking at the wrong metrics.

Core Housing Need has long had issues as a metric, as careful analysts have repeatedly pointed out [over the](https://pubmed.ncbi.nlm.nih.gov/20096621/) [years](https://maytree.com/publications/modernizing-core-housing-need/). In short, it attempts to establish a housing standard for all of Canada, [matching existing households to need](https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-research/core-housing-need) on the basis of suitably roomy (matched to National Occupancy Standards), adequately maintained (good repair), and affordable (shelter costs no more than 30% of income) housing, or affordable alternatives that might meet their needs nearby. To list a few criticisms of the measure:

a) affordable alternatives aren't actually assessed for availability 
b) location of housing impacts transportation costs 
c) a 30% shelter cost to income cutoff lacks solid justification 
d) the metric excludes many households (e.g. students, income lower than shelter cost)
e) shelter costs are inconsistently assessed 
f) incomes are temporally mismatched (from previous year) relative to shelter costs (current) 
g) adequacy of maintenance (based on self-reported repair) misses important elements
h) suitable roominess (based on Canadian National Occupancy Standards) lacks solid justification 
i) existing households might not be preferable arrangements 
j) existing households miss in- and out- migration/mobility responses

In short, there is a lot more to housing outcomes than what is currently captured in Core Housing Need.

# Housing outcomes
If our current Core Housing Need is inadequate for capturing housing outcomes, then how can it be fixed? Some of the points we listed above have been addressed by others and by ourselves in previous posts. Points a) through h), in particular, could plausibly be addressed by refining the input metrics for Core Housing Need. Points i) and j) are fundamentally different in that they question the base unit of all measurements that go into Core Housing Need: Existing Households.

To understand this better, we start by looking at how people experience housing pressures. From the perspective of individuals navigating a constrained housing market we want to highlight five distinct housing outcomes:

1. (**unaffordability**) People pay more money to access the housing they need than they can afford, living beyond their means or sacrificing other important expenses.
2. (**unsuitability**) People squish into housing without enough room for their household, sacrificing privacy within the household.
3. (**inadequacy**) People live in housing that's inadequately maintained or in bad repair.
4. (**suppressed households**) People fail to achieve their desired household composition, living with more or different people than they would like to.
5. (**housing-induced migration**) People move to a different region, either farther away from their jobs, friends, and places of leisure within the same metro area or to an entirely different part of the country.

Only the first three channels are captured in some way by the Core Housing Need metric (or the related [Housing Hardship](https://www.cmhc-schl.gc.ca/blog/2020-housing-observer/new-affordability-metric-assesses-household-ability-afford-basic-goods) metric) as based on existing households.

## Existing households are the wrong unit of measurement
In most of Canadian data and theorizing, a *household* [is defined as an *occupied dwelling unit*](https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/definition-eng.cfm?ID=households-menage007), although *household* is often also used as a shorthand for only [*private households*](https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/definition-eng.cfm?ID=households-menage014). Households are the outcome of how people distribute over dwellings. 

**Basing analysis entirely on existing households is selecting on a consequence of the outcome, it introduces selection or collider bias**. This bias is substantial, [the degree to which housing pressures impact household formation are large and growing](https://doodles.mountainmath.ca/blog/2022/10/03/still-short-suppressed-households-in-2021/), and an **existing household-based analysis is blind to suppressed household formation, as well as to the effects of housing on migration**.

To better understand collider bias in this context consider [Model 18 in this excellent monograph on good and bad controls](https://journals.sagepub.com/doi/epub/10.1177/00491241221099552). Alternatively one can interpret selecting on households that have formed as [survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias) that ignores households that would have formed if housing pressures were different. This also highlights why it is necessary to choose counter-factual scenarios of different housing pressures. For market housing these counter-factual scenarios should be chosen to be realistically achievable, by for example [comparing with regions with different housing policies but similiar economic and demographic environments](https://doodles.mountainmath.ca/blog/2022/05/06/estimating-suppressed-household-formation/), or by [estimating how much housing the market would produce if municipal regulations preventing housing were removed](https://doodles.mountainmath.ca/blog/2023/06/27/housing-targets/). Non-market housing counter-factual scenarios should similarly work toward being achievable in order to be taken seriously, and, when interpreted from a rights based approach, set in relation to housing outcomes achievable in market housing.

On a personal level, housing pressures are experienced through unaffordability when people or families can't afford housing that fits their needs, be it proximity to jobs and amenities, or size and number of bedrooms. **But their inability to afford said housing generally won't show up in Core Housing Need because in most cases they don't actually move into the housing they can't afford.** The same principle generally applies to waitlisting for non-market housing.

That's all quite abstract, let's unpack this a little. 



Take a roommate household made up of four roommates, where two people have coupled up. The couple would like to move out into their own place, but they can't find a place within their budget that's reasonably close to their jobs. So they stay in their roommate situation. They may be delaying their plans to have kids until they find a better housing situation that they feel secure about, and maybe has an extra bedroom to accommodate their future child. They are not in core housing need because the combined household income of all four roommates easily covers rent and utilities, but they do feel like their housing needs aren't being met and it's forcing them to adjust life plans. This kind of household would be classified as a *one-census family household with additional persons*, and across Canada there are around 666,000 of these, 493,000 of which have children present.

To take a different example, the [CBC recently ran a piece](https://www.cbc.ca/news/canada/divorce-housing-challenges-canada-1.6926859) on how former couples wishing to separate or divorce increasingly find themselves forced to either continue living together or move in with friends and relatives. This clearly relates to the rising difficulty of finding housing. But the Core Housing Need measure sees no problem with these situations, at least as long as there's a spare bedroom satisfying the National Occupancy Standard criteria for uncoupled adults. The issues are further compounded when children are involved in split households, insofar as the need for roominess grows, and in joint custody cases, may even double. But unsurprisingly, the Core Housing Need metric also ignores custody questions (kids are only supposed to show up once as part of a Census household).

We take this opportunity to update our overview graph [from a previous post](https://doodles.mountainmath.ca/blog/2017/12/01/what-s-a-household/) on households by household type and census family structure using 2021 data.

<img src="{{< blogdown/postref >}}index_files/figure-html/hh_type_2021-1.png" width="1200" />

This highlights some of the complexities of households, and how they don't necessarily map onto family units. In particular we notice how Montréal has comparatively few complex households.


## Minimum Household Units
If households aren't the right unit of analysis, then what is? We have [discussed and compared different conceptualizations of what constitutes a basic unit in the past](https://doodles.mountainmath.ca/blog/2021/11/28/first-peek-at-population-and-household-data-during-covid-caveats/), including the OECD definition of a household that StatCan uses within their National Accounts framework, as well as one looking at census (or economic) families and unattached individuals that we already highlighted in our [post on households](https://doodles.mountainmath.ca/blog/2017/12/01/what-s-a-household/). But even non-divorcing census families might feel the need to split up, for example if they contain adult children living with parents who might want to move out but can't find suitable housing.

[Ermisch and Overton introduced the concept of Minimal Household Units (MHU)](https://www.tandfonline.com/doi/pdf/10.1080/0032472031000141266) to better understand household formation. The idea is to define elemental building blocks of households, which may combined to form "complex" households. They start with single adults, parent-child, and couple relationships where we typically assume people want to live together, leaving four basic building blocks for households as:

1. Adult individuals
2. Lone parents with dependent children
3. Childless married (or common law) couples
4. Married (or common law) couples with dependent children

This leaves out some complexities (e.g [Living Apart Together setups](https://www150.statcan.gc.ca/n1/en/pub/75-006-x/2013001/article/11771-eng.pdf) where couples want to remain couples, but live separately), but is simple and works well for the purpose of analyzing household formation and affordability in the context of housing. The assumption is basically that household complexity beyond MHU is likely influenced (though not completely determined) by housing scarcity, revealing a portion of people living together who might prefer to live apart.


Looking up at our graphs on household composition by age we note that the blue households approximate minimum household units, with the exception that some of them have adult children living at home. To better understand this we focus on 25 to 34 year olds and examine what share of them live in MHUs vs complex households, and how this has changed through time and across geographies.


<img src="{{< blogdown/postref >}}index_files/figure-html/mhu_type-1.png" width="1200" />

We notice overall declining trends in the total proportion of 25 to 34 year olds in MHUs, and substantially lower shares in Toronto and Vancouver compared to the other large CMAs. Vancouver has higher shares of childless couples than Toronto, but lower shares of couples with children. By contrast, Montréal has the highest proportion of 25 to 34 year olds living within MHUs, driven largely by more people living alone and part of couples with children (though the latter is still on the decline). In the 35 to 44 year old age groups we still notice slightly declining trends in some CMAs, and again lower levels in Toronto and Vancouver. Once more, Montréal has the highest proportion of 35 to 44 year olds living in MHU.

If young adults aren't living in MHUs, how do they live? Here are the living arrangements of the remaining young adults.


<img src="{{< blogdown/postref >}}index_files/figure-html/non_mhu_type-1.png" width="1200" />

There's no single category dominating trends or differences. The proportion of young adults living as roommates went down in Calgary, but up in Vancouver and Toronto. The proportion living in complicated family arrangements also generally rose. Compared to other metros, Toronto and Vancouver have higher shares in all categories, except people living in census families with additional persons and roommate households. The high share of people living with their parents stands out in these two metros, but also a higher share of multi-generational households. Of note, the share in multi-generational households has been declining for 25 to 34 year olds over this time period for Vancouver and Toronto, and it declined 2016-2021 for the 35 to 44 year old group, while most other categories increased. In particular, the increases in young adults in non-MHUs in Toronto and Vancouver cannot be attributed to multi-generational living arrangements.




Unfortunately we don't have this data at finer age groups; that would require a custom tabulation. But at the expense of not being able to distinguish couple MHUs with or without children, we can use a different table to take a quick look at how overall MHU shares progress through age cohorts over time and across geographies. Housing stress can lead to couples feeling [without enough room](https://journals.library.ualberta.ca/csp/index.php/csp/article/view/16051) or [otherwise unprepared for children](https://www.tandfonline.com/doi/abs/10.1080/02673031003711485), so it's unfortunate we lose an indicator of children for couples. On the bright side, the data allow us to make different interesting distinctions between married and common-law couples and add in the 20 to 24 year old age group.

<img src="{{< blogdown/postref >}}index_files/figure-html/children_family_mhu-1.png" width="1200" />

Stepping up through age groups we see progressively higher shares of young adults living in MHU, as one would expect. However, within each age group the shares of young adults in MHUs has decreased over time, and there is large variation across metro areas. These trends aren't all due to housing pressures, they get confounded by young adults spending more time in school and possibly by shifts in preferences, including by culture, but it seems far-fetched to attribute most of the variation across time and metro areas to this. Indeed, one of the most notable cultural differences appears in the distinction between common-law partnerships, which are far more common within Montréal (and across Quebec), and marriage, which has been more common elsewhere. The difference between common-law and marriage doesn't matter for purposes of assigning people into MHU, but the relative decline of marriage is in keeping with Canada's entry into the Second Demographic Transition, and given the [connections between marriage with home ownership](https://www.tandfonline.com/doi/abs/10.1080/02673030600917826), it's striking that married couples are the category most strongly driving the decline in MHU for young adults everywhere.

Overall across Canada 52% of adults aged 20 to 34 lived in MHUs in 2021, down from 54% in 2016 and 56% in 2011. In contrast with Core Housing Need, here's a clearer indicator of conditions getting worse over Canada's recent history. How did those outside of MHUs live? What was the makeup of their complex households?


<img src="{{< blogdown/postref >}}index_files/figure-html/children_family_non_mhu-1.png" width="1200" />

We see a striking rise in young adults outside of MHUs, especially those living with their parents or other family members. Toronto and Vancouver also stand out in this regard. There are several factors playing into temporal and regional patterns, but housing pressures are likely the most important driver. Yet metrics based on existing households, like Core Housing Need, will systematically overlook this kind of evidence of housing pressure.

## Household maintainer rates
Another way to think about this kind of housing pressure is to look at age-specific household maintainer rates, and how these differ across geographies and time. We have [looked at this previously](https://doodles.mountainmath.ca/blog/2022/10/03/still-short-suppressed-households-in-2021/) and documented how Montréal, Toronto, and Vancouver used to have fairly similar household maintainer rates in the 70s. But while Montréal's rates have remained relatively stable, Vancouver and Toronto have seen significant drops in household maintainer rates, especially among younger adults, as illustrated in the following graph.






<img src="{{< blogdown/postref >}}index_files/figure-html/hmr_age_group-1.png" width="1200" />

This remains a static picture, providing cross-sections of the overall state of the population in the given years. We can make this more dynamic by following fixed birth cohorts over time to see how their household maintainer rates change as they age. Comparing across birth cohorts gives us a better sense of generational change in household maintainer rates. Of note, we don't have full data over the 50 years covered in this graph, so some of the trajectories are only partial.

<img src="{{< blogdown/postref >}}index_files/figure-html/hmr_birth_cohort-1.png" width="1200" />

In Montréal successive birth cohorts trace out similar trajectories, eclipsing the 1931 through 1945 cohorts but then not changing much starting with the 1946-1950 birth cohort. But in Toronto and Vancouver younger cohorts are experiencing significantly lower household formation rates compared to previous generations that persist as people age into their 40s.

Another way to slice the data is to look at how many years households in Toronto and Vancouver lag relative to Montréal's 1956-1960 birth cohort, selecting an age cohort fully covered in our window of observation.

<img src="{{< blogdown/postref >}}index_files/figure-html/hmr_cohort_year_lag-1.png" width="1200" />

Here we see how Toronto and Vancouver are lagging behind their Montréal peers when it comes to forming and maintaining a household, with millennial and GenX households lagging by over 10 years by the time they reach 40. In other words, Millennials and GenX household formation rates by the time they reach 40 in Vancouver and Toronto are about equivalent to what their peers in Montréal reached in their late 20s. 

We have interpreted this as [suppressed household formation](https://doodles.mountainmath.ca/blog/2022/10/03/still-short-suppressed-households-in-2021/) and a partial measure of housing shortfall. While we believe that this interpretation is generally correct, a potential alternative interpretation is that this trend [may be explained by different cultural preferences, which we've also attempted to quantify](https://doodles.mountainmath.ca/blog/2022/05/06/estimating-suppressed-household-formation/), and further work on this would be useful. Nonetheless, we believe that estimates of suppressed households offer a useful metric to assess housing shortages.


## Household tightness
Specifying the role that housing plays in our suppressed household measure is hard to pin down. But we can look at related metrics of housing outcomes to see if there's more evidence of squeeze. Maybe it's not there. People could be sharing more often because there's lots of room to do so. Imagine we have a large reservoir of big houses, and people choose to form more complex households as the average household size of MHUs has been declining over time due to dropping fertility rates, people coupling up later, and people living longer.

Ideally we would want to look at data on how people distribute over floor space, but we simply don't have reliable floor space data in Canada. The [Canadian Housing Statistics Program](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610005301) has some information on living area, but only for select types of housing and only for recent years and not (yet) covering all of Canada. The [Survey of Household Energy Use](https://www.statcan.gc.ca/en/statistical-programs/instrument/3881_Q2_V8) has some data on "heated living area" going back to the 1990s, with some aggregate estimates [made available by NRCAN](https://oee.nrcan.gc.ca/corporate/statistics/neud/dpa/menus/sheu/2019/tables.cfm), but it is not clear how these estimates are derived and how reliable they are. 

Another way to understand how cramped or roomy living situations are is to look at the number of rooms available by household size. The census keeps track of the [number of rooms in a dwelling unit](https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/Definition-eng.cfm?ID=dwelling-logements012) as well as household size, giving us long timelines to work with. This still poses some challenges insofar as people's preferences for how to slice up homes have changed too, with for example people sometimes tearing down interior walls, e.g. between dining room and living room, when remodelling. This results in fewer rooms, but the home is still as "roomy" as before. Some of that can be controlled for by comparing across different regions in Canada. 

Yet another complication is that real incomes have grown over time, and housing demand increases strongly with income, with [most estimates pegging the demand elasticity of income to be greater than 1](https://www.jstor.org/stable/j.ctv13gvj30). This means that we should expect to see an increase in *roominess* over time as incomes grow.

Understanding these complications, let's take a look at the distribution of number of rooms by household size, and how this varies across census years and metro areas.

<img src="{{< blogdown/postref >}}index_files/figure-html/rooms_timeline-1.png" width="1200" />

A lot of data is captured here, and overall this suggests that 2006 was peak "roominess" across Canada, having generally near the maximum number of rooms for a given household size and metro area. Roominess was growing in the period before 2006, and it has been declining since. The decline in roominess is unexpected, given rising real incomes over this time period. This could reflect trends in hardship not well captured by Core Housing Need, but possibly also an increasingly urban population, making trades of room for centrality. At the same time, even this measure may understate the extent of rising hardship. After all, we're still only counting children in joint custody situations once, and there has been no decline in single parent households or joint custody arrangements accompanying the decline in household roominess. Moreover, the share of homes in Canada not occupied by usual residents was stable (actually declining slightly) over the 2006-2021 time period, indicating that secondary residences or vacation homes are unlikely to have offset this decline in roominess.

The peak in 2006 is also interesting for many reasons, not least of which because of what happened between 2006 and 2011. 2008-2009's Great Recession and Financial Crisis saw a dramatic drop in the construction of housing. This carried over from the USA into Canada even though our housing prices didn't drop as much and [we had nowhere near similar foreclosure rates](https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-data/data-tables/mortgage-and-debt/canadian-us-mortgage-arrears-foreclosure-rates-archived). If, as [Kevin Erdmann makes the case](https://www.mercatus.org/research/policy-briefs/housing-was-undersupplied-during-great-housing-bubble), rising construction rates up to the 2008-2009 crisis were actually justified in the USA, then the case is potentially even stronger for Canada. And we can see the effects of the pullback in building since 2006 on the decreasing roominess of housing relative to household size.

<img src="{{< blogdown/postref >}}index_files/figure-html/completions-1.png" width="1200" />

Raw starts and completions should be interpreted with caution, and do not account for demolitions or changes in CMHC estimation methods. But we can clearly see here the dramatic drop-off in starts after the Financial Crisis, followed by a decline in completions. We can only wonder where Canada would be now in terms of housing had the Crisis not spread North from the USA. 

Of course, in addition to historical variation, we've also got variation in roominess by region. We can take a closer look at how this compares across metro areas in 2021, and add in variations by tenure.

<img src="{{< blogdown/postref >}}index_files/figure-html/rooms_tenure-1.png" width="1200" />

Here we see that renter households tend to have significantly less room than owner households, aligning with [our previous observation that renter households tend to be larger given a fixed number of bedrooms](https://doodles.mountainmath.ca/blog/2019/04/20/a-bedroom-is-a-bedroom/). Owner households tend to be richer, and richer people consume more housing.

However, this basic fact does not hold when comparing across metro areas. On average people in Vancouver and Toronto have higher incomes and higher wealth than their counterparts in Montreal, but lower levels of roominess. It's tricky to argue that people in Vancouver and Toronto simply prefer to have fewer rooms than people in other urbanized parts of Canada. This is very likely yet another sign of a housing shortage and people economizing in response to rising prices.

Interestingly, the Core Housing Need metric does incorporate a measure of roominess (suitability, as determined by whether a given household can be understood as fitting into bedrooms according to National Occupancy Standards), but the crudeness of the metric, in conjunction with the alternative affordable housing rule and the taking of existing households as given, all means it doesn't pick up the decline in household roominess since 2006 or variations in roominess by metro area. 

## Migration impacts
We've seen how relying upon existing households for metrics of housing need creates problems insofar as existing residents of a place may wish to distribute themselves differently. But what about non-residents? What about those forced out or never able to arrive? 

*Leaving Vancouver* letters seem to have moved from novelty to [well worn cliche](https://thetyee.ca/Opinion/2017/10/30/I-Left-Vancouver/) and now to the point where people just move away without the fanfare. Housing always featured prominently in the *Leaving Vancouver* letters, but motivations are complex and the effects of housing on migration are difficult to identify. For this post we will have to be satisfied with some weak evidence showing that shifts in migration over time are consistent with the idea that housing pressures impact migration paths, but we don't present enough evidence to claim that housing pressures are the cause of that shift.

We conceptualize housing pressures to impact migration most at the local and regional level, and less so at inter-provincial and international levels. This is consistent with ["reason for move" data](https://homefreesociology.com/2019/11/24/why-do-people-move-new-data-mysteries-and-fundamental-rights/), where housing reasons for move dominate more local levels, but recede as a deciding factor as move distance increases. So here we focus on intra-provincial migration. Are we seeing less net in-migration to Metro Vancouver from other parts of the province than we used to see in the past?




<img src="{{< blogdown/postref >}}index_files/figure-html/yvr_intraprovincial-1.png" width="1200" />

This shows a declining trend in intra-provincial in-migration, and net-migration, and an increasing trend in out-migration between 1999 and 2021, the last year for which we have gross migration data. To better understand these shifts we can look at the difference in age-specific intra-provincial net migration rates at the beginning and the end of our time frame.


<img src="{{< blogdown/postref >}}index_files/figure-html/yvr_net_intraprovincial_age-1.png" width="1200" />

Intra-provincial migration rates have dropped for almost all age groups, but not by the same amount. The drop in net migration rates is most pronounced for young children, neutral for ages starting university ([hello UBC](https://pair.cms.ok.ubc.ca/wp-content/uploads/sites/145/2023/03/UBC-Annual-Enrolment-Report-2022-23.pdf)!), and quickly dropping off again for young adults thereafter. Around age 40, the drop-off from 2001/2002 rates reduces, before again dropping below the baseline trend. We might imagine this as reflecting the decline in housing accessibility for young adults, matching a corresponding decline in perceptions of achievable opportunity in Metro Vancouver. By 40, selection effects may have kicked in, with only those who have achieved decent housing outcomes or adjusted to alternatives remaining. This suggests how causal forces within the relationship may flip after age 40, with older home owners increasingly moving out over recent history as a way of cashing in on selling their homes. After the age of 55 the net migration rates once again converge toward the 2001/2002 levels.

The narrative we offer tying intra-provincial migration patterns to housing affordability seems plausible, but requires more research. Moreover, it's worth keeping in mind that 2021/2022 was still a year where people were responding to the upheavals of the pandemic. Given possible pandemic impacts on migration patterns, we repeat this with 2018/2019 as the final year, which shows very similar patterns, showing that especially young adults are increasingly leaving the region on net, with the exception of people around the age they start university and people around 40 years old.


<img src="{{< blogdown/postref >}}index_files/figure-html/yvr_net_intraprovincial_age_pre_covid-1.png" width="1200" />

These patterns are consistent with the notion that people are leaving the region due to housing pressures, where they leave the region in the ages where family formation happens or they can't find adequate housing for their growing family. But the link remains weakly established, and it's not yet tested enough to make clear causal claims. We believe this is a useful area for future research.

## The upshot
Existing households within a region are an outcome of housing pressures, and selecting on existing households as the unit for analysis introduces collider bias. We believe this bias is substantial.

Much of Canadian housing discussions focuses on affordability as experienced by existing households. This is understandable because affordability is the main channel through which individuals experience housing pressures. But focusing on existing households as the base metric here can be very misleading. In particular, tracing shelter-cost-to-income ratios over time for the households that manage to form within a region shows little to no worsening in housing affordability. At best, it blinds researchers to a large part of how housing pressures manifest themselves. At worst, it leads to grotesque misdiagnoses arguing that Canada has a sufficient supply of housing (e.g. ["because Canada puts more people in each home, it requires fewer homes per capita"](https://mailchi.mp/chec-ccrl/build-baby-build-wont-solve-the-housing-crisis?e=4d3dff1ab8)).

Housing is a central part of everyone's lives, and Canada's housing struggles are having increasingly severe impacts on the lives of Canadians. Housing analysis, especially when meant to inform policy, needs to do better at understanding the metrics it uses, how to use them, and the limits of their usefulness.


As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2023-08-17-housing-outcomes/index.Rmarkdown) for anyone to reproduce or adapt for their own purposes.

<details><summary>Reproducibility receipt</summary>

```
## [1] "2023-08-17 15:19:02 PDT"
```

```
## Local:    master /Users/jens/Documents/R/mountaindoodles
## Remote:   master @ origin (https://github.com/mountainMath/doodles.git)
## Head:     [6859268] 2023-06-27: fix link to nathan's cross-post
```

```
## R version 4.3.0 (2023-04-21)
## Platform: aarch64-apple-darwin20 (64-bit)
## Running under: macOS Ventura 13.5
## 
## Matrix products: default
## BLAS:   /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib 
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
##  [1] statcanXtabs_0.1.2 cmhc_0.2.6         cansim_0.3.15      cancensus_0.5.6   
##  [5] lubridate_1.9.2    forcats_1.0.0      stringr_1.5.0      dplyr_1.1.2       
##  [9] purrr_1.0.1        readr_2.1.4        tidyr_1.3.0        tibble_3.2.1      
## [13] ggplot2_3.4.2      tidyverse_2.0.0   
## 
## loaded via a namespace (and not attached):
##  [1] sass_0.4.5                utf8_1.2.3               
##  [3] generics_0.1.3            xml2_1.3.4               
##  [5] blogdown_1.18             stringi_1.7.12           
##  [7] hms_1.1.3                 digest_0.6.31            
##  [9] magrittr_2.0.3            timechange_0.2.0         
## [11] evaluate_0.20             grid_4.3.0               
## [13] bookdown_0.34             fastmap_1.1.1            
## [15] jsonlite_1.8.4            httr_1.4.5               
## [17] rvest_1.0.3               fansi_1.0.4              
## [19] scales_1.2.1              jquerylib_0.1.4          
## [21] cli_3.6.1                 rlang_1.1.1              
## [23] munsell_0.5.0             withr_2.5.0              
## [25] cachem_1.0.8              yaml_2.3.7               
## [27] tools_4.3.0               tzdb_0.3.0               
## [29] colorspace_2.1-0          vctrs_0.6.2              
## [31] R6_2.5.1                  git2r_0.32.0             
## [33] lifecycle_1.0.3           pkgconfig_2.0.3          
## [35] pillar_1.9.0              bslib_0.4.2              
## [37] gtable_0.3.3              glue_1.6.2               
## [39] xfun_0.39                 tidyselect_1.2.0         
## [41] rstudioapi_0.14           knitr_1.42               
## [43] htmltools_0.5.5           rmarkdown_2.23           
## [45] mountainmathHelpers_0.1.4 compiler_4.3.0
```
</details>
