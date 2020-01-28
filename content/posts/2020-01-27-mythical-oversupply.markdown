---
title: Mythical oversupply
author: Jens von Bergmann
date: '2020-01-27'
slug: mythical-oversupply
categories:
  - cancensus
  - CensusMapper
  - Empty Homes
  - newsfail
  - Vancouver
tags: []
description: "Going back to the 'supply myth' well."
featured: 'regular-vs-recalibrated-surplus-1.png'
images: ["https://doodles.mountainmath.ca/posts/2020-01-27-mythical-oversupply_files/figure-html/regular-vs-recalibrated-surplus-1.png"]
featuredalt: "regular vs recalibrated surplus"
featuredpath: "/posts/2020-01-27-mythical-oversupply_files/figure-html"
linktitle: ''
type: "post"
---




It's been over two years now since the news media [reported on John Rose claiming that Vancouver has a surplus of housing](https://www.theglobeandmail.com/real-estate/vancouver/academic-takes-on-vancouvers-housing-supply-myth/article37015584/) and [Rose shared his Working Paper, Version 1](https://www.kpu.ca/sites/default/files/The%20Housing%20Supply%20Myth%20Report%20John%20Rose.pdf) detailing his claims of some mythical oversupply of housing in Vancouver.

We have [written about this](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/) on [several occasions](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/), but we were missing a piece of data that can greatly simplify our arguments: Cross-tabulations of structural type by document type (whether a dwelling was *occupied by usual residents*, or *occupied by temporarily present persons*, or *unoccupied*) for the censuses 2001-2016. Recently we needed this for a different project, and were [able to make it openly available thanks to CMHC](https://doodles.mountainmath.ca/blog/2020/01/26/unoccupied-dwellings-data/), so here is a supposed0-to-be-quick-but-turned-out-lengthy post to on what that means for the "supply myth". 

The main claim of Rose's working paper is that Vancouver has a 'surplus' of dwelling units, and that this 'surplus' must be attributable to "domestic or foreign speculators, visiting students, temporary workers, or those owning a second home in Canadian cities". In Table 3 of his report we see that this surplus was almost entirely created between 2001 and 2006 when the share of 'surplus' units jumped from 3.5% to 6.2%, while increasing a bit more to 6.5% in 2016. 

Rose defines 'surplus' dwelling units as units that are either unoccupied, or units that are occupied by temporarily present persons that think of their primary residence being elsewhere. We struggle with the 'surplus' terminology and will keep it in quotation marks throughout this post.

Unfortunately, contrary to Rose's claim that his "relative supply of housing units" is "based on data collected and represented consistently by Statistics Canada across its censuses", it is largely due to a change in StatCan methodology between the 2001 and 2006 censuses, with ripple effects for the subsequent censuses. The [census dictionary explains](https://www12.statcan.gc.ca/census-recensement/2006/ref/rp-guides/housing-logement-eng.cfm):
    
>    The Structural type of dwelling variable is collected by trained enumerators. Improvements to the enumeration process have resulted in a better identification of hard-to-find dwellings such as basement apartments. As a result, structures that may have been classified in previous censuses as single‑detached houses because there was no outside sign of an apartment are more likely be classified as apartments – either in a duplex or a building that has fewer than five storeys, as appropriate.

This had consequences on how buildings got classified:

>    Comparisons of structural type of dwelling data for Canada between the 2001 and 2006 censuses show a decrease in share for 'single-detached house' (-2.1%), an increase in share for 'apartment or flat in a duplex' (+1.8%) and an increase in share for 'apartment in a building that has fewer than five storeys' (+0.4%).
    
In the Vancouver setting, this means that SFH that have been identified as "single-detached" in 2001 may have been classified as "duplex" in 2006 if the enumerator detected the presence of a secondary suite, or as "apartment, fewer than 5 storeys" if the enumerator detected more than one secondary suite. The City of Vancouver [formally legalizing basement suites city wide in 2004](https://vancouver.ca/docs/policy/housing-secondary-suites.pdf) likely aided the 2006 census' effort to discover suites.

At first glance it may seem that this only effects the classification of dwelling units, but it also results in an increase in the overall count of dwelling units when a single "single-detached" unit gets reclassified as two "duplex" units or more than two "apartment, fewer than five storeys" units. And this change in dwelling units was only due to re-classification, not to any change in the physical stock.

At the same time this will increase the number of households, a.k.a "occupied dwelling units" if the census finds households living in these units. But [as we have pointed out previously](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/), secondary suites are the most "empty" type of dwelling unit in Vancouver. And it will increase the number of "temporarily occupied" dwelling units, that is occupied units where the occupants think of their primary residence being elsewhere. For example, students in basement suites that are often counted at their parent's residence in the census fall under this category. But for this post we will follow Rose and somewhat cynically treat these "temporarily occupied" units as 'surplus'.

While all of this has been explained in detail before, the arguments were not always as direct as they could have been since nobody, including Rose, bothered to pull a census cross tabulation to look at unoccupied dwellings by structural type for the 2001 and 2006 censuses. But now we got one.

Can basements suites really throw off the numbers to invalidate Rose's results? Lots of people live in basements, and lots of basements don't have people living in them or do have people living in them that we, apparently, don't want to count.

<video width="100%" autoplay="autoplay" loop="loop">
<source src="https://mountainmath.s3.ca-central-1.amazonaws.com/data/basements.mp4" type="video/mp4">
</video>

## The numbers


To start off we reproduce Rose's 'surplus' dwelling units, also know as "dwellings not occupied by usual residents". As mentioned above, this includes dwelling units occupied by students and other people that are counted in the census as having their primary residence elsewhere. 


<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-2-1.png" width="768" />

This illustrate the change in 'surplus' units being concentrated on the 2001-2006 timeframe, as well as highlighting the difference between unoccupied and dwelling units occupied by temporarily present persons. The drop in units occupied by temporarily present persons 2006-2011 is interesting, it may reflect yet another change in classification or it may be due to real phenomena like for example students increasingly living with parents or thinking of their current dwelling increasingly as a longer term residence.


Another quick reality check is to compare completions data to census net new dwelling counts between census periods.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-3-1.png" width="768" />

This makes it clear that a good portion of the change in dwelling units as counted by the census in the 2001-2006 period is not due to new construction, but mostly due to reclassification of existing dwellings. Moreover, the other two periods show that completions don't all translate into net new dwellings, the main difference being demolitions. This mismatch is especially acute in Vancouver, and is not quite captured by the difference in completions to net new census dwellings in the graph above as the later two inter-census periods also experienced some reclassifications. 

We can independently estimate the ratio of demolitions to completions using permit data as [we did in more detail when looking at single family teardowns](https://doodles.mountainmath.ca/blog/2018/05/23/teardowns-and-emissions/).

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-4-1.png" width="768" />

The demolitions to completions ratio in Vancouver stands out like a middle finger extended toward the effort to create more housing. And this is not a recent phenomenon, but has been fairly consistent at least since 2007 as [documented by CMHC](https://www.cmhc-schl.gc.ca/en/data-and-research/publications-and-reports/examining-escalating-house-prices-in-large-canadian-metropolitan-centres).

To better understand the impact of the reclassification we take a look at the change in 'surplus' dwellings by structural type.

## Structural type of dwelling
To understand what happened 2001-2006 it is instructional to look at the change in the number of dwelling units by structural type between the censuses. This yields a mixture of changes due to new construction, demolitions and conversions, as well as changes due to the StatCan change in methods.

It's important to understand [how these structural types are defined](https://www12.statcan.gc.ca/census-recensement/2016/ref/guides/001/98-500-x2016001-eng.cfm), so here is a quick overview.


|Label           |Census name                                                                           |Notes                                                                                                    |
|:---------------|:-------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|
|Single-detached |Occupied by usual residents                                                           |SFH without a suite, single unit only. A laneway house counts as a separate single-detached structure.   |
|Semi-detached   |Occupied by foreign residents or temporarily present persons                          |A unit in a house with two side-by-side units, in Vancouver commonly referred to as "half-duplex".       |
|Row/Townhouse   |Unoccupied                                                                            |A row or townhouse.                                                                                      |
|Duplex          |Single-detached house                                                                 |A unit in a house with two up-down units, in Vancouver usually a suited SFH (main unit + one suite).     |
|Lowrise         |Single-detached house -- Occupied by usual residents                                  |A building with fewer than 5 storeys and 3 or more units. This includes an SFH with more than one suite. |
|Highrise        |Single-detached house -- Occupied by foreign residents or temporarily present persons |A residential building with 5 or more storeys.                                                           |
|Other single    |Single-detached house -- Unoccupied                                                   |Things like homes built as an extension of an existing building. Vancouver has very few of these.        |
|Movable         |Semi-detached house                                                                   |Mobile home.                                                                                             |

The change in methods had clearly observable consequences.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-6-1.png" width="768" />


The 2001-2006 shows a sharp drop in dwelling units classified as single-detached, accompanied by a spike in duplex units, as well as an heightened increase in low-rise units. It is safe to say that the bulk of this is due to the change in methods. The 2011-2016 period again shows a drop in single detached units, together with an increase in duplex units, indicating possibly another change in the collection methods that lead to improvements in discovering secondary suites.

To validate these assumptions, we can compare the data on the net new units to the dwelling stock by period of construction. That still misses demolitions, but should still allow us to ballpark if our assumptions are correct. Another wrinkle is that the census only has the period of construction of the occupied (by usual residents) dwelling stock, a.k.a. households. Moreover, the date range for new occupied structures in the census start at the beginning of 2001 instead of after the 2001 census, adding more slight data mismatch.


<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-7-1.png" width="768" />

The mismatch is stark and confirms our assumptions. New occupied Highrise and Row/Townhomes roughly match net new households for each period in these structure types. Duplex sees a noticeably higher share of net new households than occupied structures added especially in the first and also the last timeframe, pointing to reclassification as an important driver of the growth in dwelling stock of these types. In the 2001-2006 timeframe we also see significantly more net new households in lowrise than there are new lowrise units. At the same time, we see a strong loss of net new households in single-detached dwellings, while registering a significant increase in occupied newly-built single detached homes. The [Metro Vancouver Housing Data Book](http://www.metrovancouver.org/services/regional-planning/PlanningPublications/MV_Housing_Data_Book.pdf) registered roughly 11k single-detached demolitions in each of these periods, suggesting that about half of the new (occupied) single-detached homes are replacing teardowns with the rest adding to the overall stock. Some of the teardowns may have been "duplex" units since the demolition data did not distinguish between single-detached and "duplex" (suited single-detached) units.



Using this as a reference we estimate that roughly 82% of the net new duplex units and 39% of the net new lowrise units are old units that got reclassified in the 2001-2016 timeframe.


We can compare this to the change in 'surplus' dwelling units for each structural type.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-9-1.png" width="768" />

As we add dwelling units we expect the number of 'surplus' units to increase too.
The addition of 55,195 "duplex" dwelling units 2001-2006 has gone along with 9,750 'surplus' dwelling units, which is an extraordinarily high ratio. As an aside, the noticeable increase in 'surplus' "single-detached" dwelling units despite substantial drop in overall single-detached dwelling units is interesting.




So how many of the new 'surplus' units are attributable to re-classification, and how many are due to other factors? Applying our back-of-the-envelope estimates of how many net new duplex and lowrise units are due to reclassification, we estimate for the 2001-2006 timeframe that 7,961 surplus duplex units and  3,288 surplus lowrise units are due to re-classification. In total, 11,249 of the 26,395 (43%) are due to reclassification. 


This is likely a conservative estimate since this does not account for "duplex" units that have been demolished 2001-2006, and it assumes that re-classified "duplex" units are empty at the same rate as "duplex" units that were already coded as such in the 2001 census, which is quite unlikely given the extreme jump in the share of 'surplus' "duplex" units 2001 to 2006.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-11-1.png" width="768" />

Graphing the percentage point change in share helps highlight these changes.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-12-1.png" width="768" />

It also shows that in the 2001-2006 period it is not just the duplex and lowrise, but also the share of 'surplus' units of the other housing types grew. 

We can use this estimate to re-calibrate our data by artificially re-classifying the existing duplex and lowrise units we estimate got re-classified in each period, adding these to the total housing stock and adding the estimated corresponding 'surplus' units to the starting year 'surplus' counts of each respective period. That allows us to get a "re-calibrated" change in share of 'surplus' units.











<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/regular-vs-recalibrated-surplus-1.png" width="768" />

The re-calibrated view has a smaller initial jump in share of 'surplus' units, followed by an essentially flat trend for the next two periods. In particular we note that the change in the 2011-2016 period is negligible, especially in light of other factors like number of units completed close to census day as we will see later on. Which by itself is interesting. 









That changes the change in 'surplus' share 2001-2006 from 2.7% to 1.6% after re-calibrating.

If we take a less cynical approach to students and other people in more temporary living conditions and don't count dwellings occupied by temporarily present persons as 'surplus', we get two census periods of increases in unoccupied dwellings followed by one period of essentially no change, after accounting for re-classification.
The 2001-2006 change in share of unoccupied units drops from 1.9% to 0.8% after re-calibrating.

To elaborate on the importance of suites in this we quickly graph the number of 'surplus' dwelling units by structural type in Metro Vancouver.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-18-1.png" width="768" />

This shows that the 2016 census counted more 'surplus' duplex units (mostly units in suited SFH) than 'surplus' units in any other structural type broken out in the census, including highrise (apartments, five or more storeys).

At this point it is useful to also look at unoccupied units instead of 'surplus' dwelling units.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-19-1.png" width="768" />

Unoccupied units shows a more gradual increase in Metro Vancouver, with again duplex (i.e. suited SFH) units accounting for most of the growth 2011-2016 and making up 33% of all unoccupied units, the largest contingent of unoccupied units by structural type in 2016. And secondary suites are excluded from the City of Vancouver Empty Homes Tax, as well as the vacancy tax component of the provincial Speculation and Vacancy Tax.

## Other factors contributing to 'surplus' dwelling units





As mentioned in the introduction, Rose suggests the 'surplus' dwelling units are due to "domestic or foreign speculators, visiting students, temporary workers, or those owning a second home in Canadian cities". And while some 'surplus' dwelling units are indeed used in such a way, we know that it's not the majority. This is a good opportunity to share the infographic we made [based on a previous post with Nathan Lauster](https://doodles.mountainmath.ca/blog/2019/08/19/running-on-empties/) for [Maclean's 2020 charts to watch](https://www.macleans.ca/economy/the-most-important-canadian-economic-charts-to-watch-in-2020/), and include the code in this post or added transparency or in case others want to play with it. 

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-22-1.png" width="1152" />

Putting data on the Canadian 'surplus' dwelling units in context with US data, where the ACS collects information about why the dwelling unit was unoccupied or occupied by temporary residents, helps us distinguish "good vacancies", like unoccupied homes for sale or for rent or sold and rented homes that have not been moved in yet that are needed to enable residential mobility, from "potentially bad vacancies" like vacation homes or otherwise empty homes".

Thus changes in residential mobility can lead to changes in 'surplus' dwelling units. [Rental vacancy rates have been fairly flat over our time period](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/), the variation is unlikely to create more than 500 vacancies. Variations in number of residential listings and sales can be larger, and while only a portion of for sale units are empty, they can have noticeable effect the count of 'surplus' units. Units vacant for these reasons tend to be geographically spread out, so they blend in as background noise [in maps that break out the share of 'surplus' units on fine geographies](https://censusmapper.ca/maps/584). 

The same can not be said when apartment buildings complete close to census day and all units in a large building are ready to get occupied all at once. New apartment buildings take time to fill in. With ever-increasing planning and [construction times](https://doodles.mountainmath.ca/blog/2017/11/28/under-construction/) in Vancouver, it is hard for buyers of new apartments to time their move-in to completion time. Even in the case of resale transactions it can take some time for people to move into their new unit and selling their old one, leaving one of their units vacant in the meantime. These vacancies are fairly short-lived and a normal part of residential mobility. But when larger buildings complete in the months before the census, this can lead to large local distortions in 'surplus' units that have [tripped up the reporters in the past and lead to false claims of problematic 'surplus' units in media reports](https://doodles.mountainmath.ca/blog/2017/04/03/joyce-collingwood/).

Similar effects can occur at the metropolitan level if the number of completions close to the census varies from census year to census year. CMHC keeps track of completions data, although they can't distinguish between lowrise and highrise completions.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-23-1.png" width="768" />

It would take more time to develop a robust model how exactly timing of completions effect, which will have to wait for a later time and incidentally is part of the reason why we have obtained the more detailed cross-tabulation on unoccupied units used in this post. The above graph suggests that we should expect to see a increase in 'surplus' apartment units 2001-2006 and 2011-2016, and a slight drop 2006-2011 based on apartment completions close to the census. Another metric that can be used to estimate variation in the size of mobility-related vacancies are the number of for sale listings and sold properties as well as rental vacancy rates around census time, the latter of which did not vary much in Vancouver over our time frame.

## Upshot
In this post we focused on the change in 'surplus' dwelling units as defined by Rose and showed that a substantial portion of which are directly attributable to a change in census methods that lead to reclassification of existing dwelling units. Moreover, change in 'surplus' dwelling units is largely constrained to the 2001 to 2006 timeframe. 

As usual, the code for the analysis is [available on GitHub](#), including access to the data on unoccupied and 'surplus' units by structural type via the CensusMapper API, which was obtained through CMHC funding for an unrelated project we am working on and is now available under the usual StatCan open data licence.

That's it for the main part of the post. We looked at some related questions that aren't essential for the post, but might be of interest to some people. Instead of burying them on our computer we decided to throw them into an appendix.
<hr>

# Appendix
This does not touch on the other methodological problems in Rose's Working Paper Version 1. While we are at it and have the data at our hands, let's look at one more issue.

Rose compares his 'surplus' dwelling units with the increase in (some inconsistent contraption of) dwelling values to incomes, which are, relative to other larger Canadian Metro areas, concentrated in the 2011 to 2016 timeframe. Rose then rolls these changes that occur during different time frames into one by rolling everything into the 2001-2016 timeframe, without explaining how one change that occurs at the beginning of the 15 year time period affects another occurring at the end. Dismissing this concern because the "15 year period of assessment prevents the analysis from being distorted by shorter term periods of expansion and contraction in the housing stock and household numbers" is lazy at best.

There are still lots of issues using median dwelling values to median incomes as a metric, but let's follow Rose's methods using census estimates for dwelling values and households incomes to get a somewhat consistent median multiple ratio, and index it to understand how it changed across Canadian metro areas.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-24-1.png" width="768" />

Next we plot the relative change in 'affordability' (using the dwelling values to income metric) to the relative change in 'surplus' dwelling units for each of the census periods.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-25-1.png" width="1152" />

As expected, none of these time frames show a relationship that's significantly different from zero, whether using re-calibrated change in 'surplus' dwelling units or taking census numbers at face value.

That's mostly because the metric contrived by Rose is non-nonsensical. The equation of his 'surplus' dwelling units as 'supply', as well as equating household formation as 'demand' at best grossly misunderstands the nature of his 'surplus' dwelling units and cynically invalidates not just the existence of students and other people counted in the census as occupying dwellings temporarily, but also denies the existence of people shut out of the Vancouver housing market entirely by only counting "households" that managed to live in Vancouver.

## Mapping neighbourhood level recalibration estimates






To round things off we map the change in single-detached dwellings 2001-2006 to show where single-detached homes got added, and where they got re-classified.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-28-1.png" width="768" />

To home in on the re-classification we can add half of the change in the number of duplex units, to validate that one single-detached turned into two duplex units.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-29-1.png" width="768" />

That evens out the areas where we lost single-detached units considerably. We can take this one step further and add in one third of the change in lowrise units -- if that change has been positive, as well as the change in (half of the) semi-detached dwelling units.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-30-1.png" width="768" />

That further smooths out the areas that saw large losses in single-detached homes, confirming the theory that some single-detached got classified into "lowrise" buildings with 3 or more units. At the same time it throws the measure off in areas where new lowrise buildings got built. It also highlights areas where lowrise buildings have been re-classified to highrise buildings, and vice versa. 

But it still shows a significant shortage in dwelling units in many areas dominated by SFH, where we would expect this calculus to come out as close to even. The prevalence of this suggests that prior to the 2001-2006 change in methodology some SFH were likely double-counted, with households in the main unit and households in a secondary suite both being counted as living in a single-detached house.

### Tenure and sampling


In [our first post](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/) we looked at tenure as a way to estimate unoccupied and temporarily occupied secondary suites. The argument was that almost all "duplex" units in Metro Vancouver are single family homes with secondary suites, only very few units classified as "duplex" in the census are stratified. In particular, there can be at most one owner household per structure containing two duplex units. But we found that the 2006 census counted about 26k more owner than renter households in duplex units, which, by the pigeon hole principle, leads us to estimate that there must be (at least) around 26k empty duplex units. 

In [our follow-up post](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/) we noted, using a 2011 NHS cross-tab, that this method likely significantly over-estimates the number of duplex units not occupied by usual residents. We can now extent that check using 2006 and 2016 data.

The 2006 census only counted 13,305 duplex units not occupied by usual residents. In other words, using our tenure calculus over-estimates the number of duplex units not occupied by usual residents in 2006 by roughly a factor of 2.

That's a huge discrepancy, which points to three possible directions already [discussed in our previous post](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/). One is that there may be a substantial difference in long form response rates by renters in suites compared to renters in other structural types, that has not been adjusted for in census post-processing. The other is the question of how extended families in suited SFH identify in the census. Some may identify as a single household, with the suite showing up as empty in the census. More important to our question at hand, some may identify as two separate households, one in the main unit and one in the suite, with both identifying as owner households. Which would break our assumption that there can be at most one owner household per structure containing two (non-stratified) duplex units. Lastly, there is the possibility that condominium status of duplex units suffers from significant under-reporting.

The same issue shows up in 2016 data, although to a lesser degree. Using 2016 data has the added benefit that we can separate out (self-identified) stratified units, so let's take a quick look.

<img src="/posts/2020-01-27-mythical-oversupply_files/figure-html/unnamed-chunk-32-1.png" width="768" />




The observation here is that the 2016 census counted 26,965 more owner than renter households in occupied non-stratified duplex units (27,950 when also including the stratified duplex units), but only 20,430 duplex units not occupied by usual residents.

In summary, this points to another complication on how to interpret census data of (occupied) duplex units. Secondary suites is the rabbit hole gift that keeps on giving.



