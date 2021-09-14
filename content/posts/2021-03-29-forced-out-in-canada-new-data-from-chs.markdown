---
title: 'Forced Out in Canada: New Data from CHS'
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2021-03-29'
slug: forced-out-in-canada-new-data-from-chs
categories:
  - affordability
  - rental
  - Vancouver
  - PUMF
tags: []
description: "Taking a deeper look at forced moves using CHS microdata. And how it changed over time."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/forced_vs_voluntary-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---



<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2021/03/29/forced-out-in-canada-new-data-from-chs/" target="_blank">HomeFreeSociology</a>)</i></p>




## TL;DR

The new data release from CHS 2018 enables us to return to looking at mobility, with a special focus on forced moves. We estimate and compare the risk of forced moves for renters across Canada. We also provide some evidence for its sharp decline in BC in 2018, following protections put in place by the NDP. Finally, we compare risk of "forced move" to risk of "choice move" for renters. In BC, "choice moves" are low relative to the rest of Canada, illustrating how the high percent of moves that are forced across BC is in part a product of lack of rental options (given our low vacancy rates) and high rent penalties for moving.

## New CHS Data

The 2018 Canadian Housing Survey (CHS) public use microdata file (PUMF) is finally out, time to dig deeper into the questions we explored when the [first tables](https://doodles.mountainmath.ca/blog/2019/11/23/canadian-housing-survey-a-first-look/) [came out](https://homefreesociology.com/2019/11/24/why-do-people-move-new-data-mysteries-and-fundamental-rights/) and the second batch on data on [ethnicity and core housing need was released](https://doodles.mountainmath.ca/blog/2020/10/02/chs-core-housing-need/). The first thing we get a nice look at is how recently people moved. Within the Census, this is binned into simple "within the last year" and "within the last five years" categories. Here we get finer grained data extending up to 10 years or more. While we don't get people's full moving histories, this is still pretty cool insofar as we can map timing of moves to different years. The survey was fielded from [November 2018 through March of 2019](https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&Id=793713), so we can start there and work backward to date moves.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-2-1.png" width="1200" />

Looking at how recently people moved, the distribution of residential mobility is fairly even across regions, except that rural areas stand out as having lower residential mobility. Part of the reason is that mobility is confounded by tenure. Renters move a lot more often than owners, reflecting a combination of factors including, for instance, demographics (renters tend to be younger on average and more open to moving), transaction costs (selling property is more involved than switching landlords), and power (renters can be forced out more easily than owners). Sure enough, comparing across regions generally less than half of owners have moved in the last ten years, compared to more than three-quarters of renters.


<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-3-1.png" width="1200" />

When conditioning on tenure of the current dwelling we still see slightly lower residential mobility in rural areas, but it's reduced. The variation that remains can likely be explained by a variety of factors, like net migration and rental [moving penalties](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/). Net migration has mechanical effects on estimates of the timing of mobility for metro areas, even though [most moves are local](https://homefreesociology.com/2020/06/04/metro-flows/) (migrants are added as movers in places where they arrive and subtracted as movers from places where they depart, boosting mobility rates in the former while decreasing them in the latter). But places where rent control maintains much lower rent for long-term tenants than new tenants (e.g. Vancouver & Toronto) tend to see renters staying in place longer, a pattern that only shows up when differentiating mobility by tenure.

We can tease this out further by looking backward to graph a set of "survival" functions by tenure, using years since last move to effectively look at what proportion of people remain in a given dwelling by how long they've lived in the dwelling. Here we'll look at some of the larger metro areas across the country, with a special focus on BC.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-4-1.png" width="1200" />

As one would expect, owner mobility is much lower than renter mobility. The difference between regions is wider for renter mobility. For better comparison across regions we can flip the way we show the data and graph all regions on the same panel.


<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-5-1.png" width="1200" />


Renters tend to stay in place longest in Toronto, followed by Montreal and Vancouver. Renters in Calgary and Edmonton move around more often. As noted above, rental penalties and tenant protections may explain some of this variation. But to investigate further, it helps to know why people are moving. In particular, we want to know if they are moving by choice, or because they've been forced to do so.




## Forced Moves

One of the (many) great features of the CHS is that it allows us to look at why people moved. Including if their move was voluntary or if people were "forced to move by a landlord, a bank or other financial institution or the government." This allows us a closer look at power differentials as a factor in moving. In our [previous](https://doodles.mountainmath.ca/blog/2019/11/23/canadian-housing-survey-a-first-look/) [posts](https://homefreesociology.com/2019/11/24/why-do-people-move-new-data-mysteries-and-fundamental-rights/) we noted that the proportion of moves that were forced looked quite high in BC, a pattern that, with [some cautions](https://homefreesociology.com/2020/06/22/why-people-move-in-canada-the-usa-comparing-chs-ahs-cps-results/), can also be examined with reference to reason for move in [US datasets](https://homefreesociology.com/2020/06/22/why-people-move-in-canada-the-usa-comparing-chs-ahs-cps-results/). With the PUMF data we can explore in more detail who these people are that were forced to move, and what their circumstances were, as well as getting a finer geographic breakdown within BC.

To start out, let's reproduce what we previously knew about forced moves. Unfortunately the CHS PUMF does not come with bootstrap weights which makes it hard to derive confidence estimates. It has also been altered from the original data to preserve user privacy, so estimates are expected to be a little different from the ones derived from the master file. So it's a good idea to see how well the PUMF data reproduces the previously released data on forced moves.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-7-1.png" width="1200" />

Comparing to our original graph we notice some slight difference, but overall things look good. We already hypothesized that the tenure of the previous home would have a large impact on the frequency of forced moves, with renters being particularly impacted. The legal process of eviction is likely far more common than foreclosure. With the PUMF data we can check this.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-8-1.png" width="1200" />

Not surprisingly, we see that forced moves were far more common among those renting their previous home. But there's interesting variation here. BC, in particular, continues to stand out, with consistently high proportions of those moving from a rental dwelling describing their move as forced. Though Metro Vancouver leads in this regard, the rest of BC looks pretty similar. 

Those owning their last dwellings are far less likely to describe their previous moves as forced, but forced moves still show up. Foreclosures seem the most obvious explanation, but events like government expropriations and condominium (strata) wind-ups may also play a role in dislodging owners. We also get a peek at a new category, those living "rent-free" in their last residence! The extent to which forced moves affect this group seems to vary widely. But it's not as large as the other groups, so we'll turn our attention to forced moves for renters, where it matters most. First we'll simply pull out those who rented their previous dwelling from movers above to examine what proportion described their last move as "forced." 

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-9-1.png" width="1200" />

Now we can think a bit about the limitations of this measure. Above we're only looking at movers who rented their previous dwelling. We're also only looking at those who have moved within the previous five years, and looking only at their last move to ascertain what proportion of last moves included "forced move" as a listed reason for move. It's a funny measure, without a clearly defined risk (it includes all movers within the past five years, but not all moves, and says nothing about those who stayed in place). What we're probably more interested in is what the risk of being evicted looks like for all renters, in which case the above graph can become confounded by general levels of mobility. 

To understand this better, let's first look at overall mobility for renters in the past year, that is the share of renters that moved during the past year.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-10-1.png" width="1200" />

We see that one-year renter mobility is indeed very low in Vancouver, roughly on par with Hamilton and Toronto. If not very many people are moving, this could inflate the relative proportion of those being forced to move. 

So let's create an estimate of the risk of being forced to move! We're going to start simple by attempting to estimate the risk of being forced out of a rental dwelling within the past year for everyone who began the year as a renter. So we take the total number of movers from rental housing within the past year who describe their move as being "forced," and we divide by the total number of movers from rental housing within the past year and the total number of renters who have *not* moved within the past year. Here's the resulting one-year risk of being forced from rental housing. 

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-11-1.png" width="1200" />

The one-year risk of being forced from rental housing looks a bit different that the proportion of movers listing "forced move" as a reason for move. First off, the estimated risk of experiencing a forced move for renters drops to somewhere between 0.2% and 2.0%. Second, the variation really shifts. While most of BC remains at the upper end in terms of risk of forced move, the Vancouver CMA drops to the middle of the pack, fitting between Edmonton and Ottawa, and way below Saskatoon. 

Overall, this is a pretty nice, readily interpretable measure of risk of eviction! 

But maybe we want to see what happens if we go further back in time, giving us more moves overall to work with, and more time at risk of being forced to move. Unfortunately, the further back we go, the trickier it is to establish our denominator of renters and link them to discrete moves. We could be missing some moves (as when people move twice or more in rapid succession, leaving us with only information about the most recent move). And we could be missing some renters (as when young people leave home to become renters, adding to our denominator, but not showing up as a renter prior to their last move). Glossing over people possibly moving multiple times, and possibly being forced to move multiple times, we can extend our above graph to include most recent move in the past 5 years where the last move was forced, taking all renters as denominators.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-12-1.png" width="1200" />

With longer time spent at risk of being forced to move, the overall risk to renters increases over a five year period, now ranging from roughly 3% to over 10%. There are also some notable shifts in regional variation; in particular, Metro Vancouver rejoins the rest of BC at the highest risk of forced moves for renters. Looking back historically, this suggests evictions risks may have been higher in BC from 2013-2017 than they were 2017-2018. We'll come back to exploring this. But first let's use our longer time-lines to look at sub-populations of interest.

## Demographics on forced moves

The CHS has also collected information on visible minority status of household members, which allows us to understand how this affects the risk of being forced to move. The PUMF data only breaks out a simple yes/no status on whether at least one household member belongs to a visible minority group, but give that the sample gets quite thin that's probably the best that the PUMF can do.




<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-14-1.png" width="1200" />

To avoid small samples we are only breaking this down for broad regions. At this level there seems to be no strong signal that visible minority households overall are more impacted by forced moves, with the exception of the Atlantic provinces. Of note, this does not mean that the same holds for all subgroups of visible minorities. There weren't enough households with visible minority members in the Territories to show meaningful data, and we chose to not show groups with fewer than 200 renters.

This is also a good reminder that people of Indigenous identity aren't classified as visible minorities in Canada, and we should take a separate look at how they are faring in terms of eviction risks. 

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-15-1.png" width="1200" />

We again suppressed data with fewer than 200 renters, which only leaves the Territories and the Prairies, the latter exhibiting a worryingly heightened risk of being forced to move for households with household members of Indigenous identity.


## Historical and Comparative Risks of Forced Moves and Choice Moves

Let's return to comparing one-year risks to five-year risks. To better compare the one year and five year forced move risk, we can compute the 1-year equivalent risk for 5 year movers, assuming that the risk to be forced to move is independent of having been forced to move in the past and has not changed over time. Looking at the differences of the 1-year equivalent risk of forced move on the most recent move over the past five years to the in one year risk to be forced to move gives some way to compare risk from 2017-2018 to risks for the full period from 2013-2018 side-by-side.


<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/unnamed-chunk-16-1.png" width="1200" />

In effect, where the blue bar (one year risk) exceeds the orange bar (one-year equivalent of five year risk), we might be looking at evidence of recent historical change where risks of eviction have risen in the past year. The high risk of forced moves looks quite recent in Saskatoon, for instance. Similarly, in Manitoba, New Brunswick, and rural Nova Scotia the repeated one year risk is substantially higher than the risk of being forced to move on the last move and the last move happening during the past five years prior to 2018.

On the other hand, wherever the orange bar vastly exceeds the blue bar, eviction risks within the past year seem to have gone down dramatically. Vancouver looks like potentially the biggest effect in this direction, though it also shows up outside of CMAs in BC, ON, and QC. 

It's tempting to describe these as straightforward historical effects, and the pattern in Vancouver, for instance, might suggest that [changes to the Rental Tenancy Act](https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/changes-to-tenancy-laws) providing more protections to renters and made effective in May of 2018 - about six months prior to our survey - might be showing up in the data. But it's difficult to fully separate out these changes from other things going on in the rental market, or from potentially confounding selection effects (e.g. those evicted may face higher risk of subsequent moves, or may be especially prone to seek out more stable forms of housing in their next move). Still, we can refine this further by looking at the risk for forced moves (on the last move) over increasingly longer time frames, zooming in on BC and a handful of comparison regions and normalizing the risk as a 1-year equivalent, understanding the same caveats as in the previous graph apply.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/forced-1-year-equivalent-1.png" width="1200" />

This brings out more clearly how the risk of being forced to move dropped off sharply during the last year in Vancouver and the rest of BC, but stayed roughly flat in Toronto and Montreal, and increased in Saskatoon. This lends some further credence to the hypothesis that rental protections enacted in BC had an effect on forced moves. [Well done BC NDP!](https://thetyee.ca/News/2018/04/19/Renters-Rights-Changes-Step-NDP/)

Flipping the analysis around, it may also be interesting to zoom in on choice moves, which here we'll simply consider as all moves not described as forced. Let's plot choice moves with forced moves.

<img src="/posts/2021-03-29-forced-out-in-canada-new-data-from-chs_files/figure-html/forced_vs_voluntary-1.png" width="1200" />

The data confirm that the risk of choice mobility looks especially low in Vancouver and Toronto. This fits with the low vacancy rates and likely lack of adequate choices in these markets combined with the workings of rent control, often creating a [moving penalty](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/) for renters that increases with length of tenure. And this answers the question we asked higher up why residential mobility is lower in Toronto, Montreal and Vancouver. The answer is that it's mostly due to fewer voluntary moves.

It's the combination of a low risk of Choice moves with a moderate or high risk of Forced moves that creates the effect we've demonstrated in past posts, whereby we see a dramatically higher proportion of moves showing up as forced in Vancouver and the rest of BC relative to the rest of Canada. This has important implications, insofar as reducing the proportion of moves that are forced will involve *both* insuring more adequate protections (which we're starting to see in BC) *and* insuring higher vacancy rates so people have better choices available to them about where they might move.   

<!--For a rescaled side-by-side comparison we add another way to show the same data.-->




## Takeaways

Overall, we can clearly see expected patterns between tenure and mobility. We can also construct a new and useful estimate of the Risk of Forced Move for all renters. For subpopulations, we see some evidence of heightened Risk of Forced Moves for indigenous tenants in the Prairies. There's also good evidence that declining Risks of Forced Moves might be the result of a policy shift to strengthen tenant protections in BC in 2018. Combinations of moderate to high Risk of Forced Move, with low Risk of Choice Move produce the troubling patterns we have past documented in terms of Vancouver and BC's much elevated proportion of all moves described as Forced. This suggests increasing the rental vacancy rate is important to enabling more renters to Choose where they want to live, in addition to continuing to protect tenants' protections against being displaced.

As usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-03-29-forced-out-in-canada-new-data-from-chs.Rmarkdown), although people that want to run it will have to request a copy of the [CHS PUMF data from StatCan](https://www150.statcan.gc.ca/n1/en/catalogue/46250001). While PUMF data is now freely available, it still requires a special request to get the data.


