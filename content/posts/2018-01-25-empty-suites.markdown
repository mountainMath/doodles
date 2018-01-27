---
title: Empty Suites
author: Jens von Bergmann
date: '2018-01-25'
slug: empty-suites
categories:
  - cancensus
  - CensusMapper
  - Empty Homes
  - Vancouver
tags: []
description: 'What we have learned from the "Supply Myth" debate.'
images: ["https://doodles.mountainmath.ca/posts/2018-01-25-empty-suites_files/figure-html/metro_van_unoccupied-1.png"]
featured: 'metro_van_unoccupied-1.png'
featuredalt: ""
featuredpath: "/posts/2018-01-25-empty-suites_files/figure-html"
linktitle: ''
type: "post"
---

One of the [constructive outcome of the "Supply Myth" discussion](https://homefreesociology.wordpress.com/2017/11/29/notes-on-the-myth-of-housing-supply/) was the spotlight it shone on secondary suites. While we have already [touched on this topic](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/), it is wroth to fully flesh this out. With the perpetual empty home discussion in Vancouver one would have thought that the numbers by structural type of dwelling would have percolated through to the empty home hive mind.

{{< tweet 956753530437562370 >}}

Turns out that even after years (decades?) of hand-wringing, we still know very little about empty homes.

# TL;DR
> In Metro Vancouver, census duplex units (mostly suited single family homes), is the structural type with the highest rate of unoccupied units. Around 10,000 of Metro Vancouver's 58,229 dwelling units not occupied by usual residents in 2011 were unoccupied secondary suites.

Well, that's not entirely true, "Other single-attached" has an even higher rate, but there are only 1,110 dwelling units of that type in all of Metro Vancouver so we decided to ignore that category.

# Secondary Suites
Secondary suites in “single family” homes are the Schrödiger’s Cat of dwelling units. They hover in the uncertain state between being part of the main unit, and a separate dwelling unit. This superposition is facilitated by them often having an external door as well as an internal door to the main unit. When it comes time to rent them out they tend to congregate to the “separate dwelling unit” state (as opposed to “several rooms in the house”), when filing the principal residence exemption tax form they miraculously appear to be all “part of the main unit”.

The City of Vancouver has tried to force clarity in the status by allowing at most one kitchen per dwelling unit. So if an suite has its own kitchen it’s a separate dwelling unit. For the census the enumerator makes the judgement call if a single family house has a suite or not, and thus if the structure is classified as “single detached” or “duplex”.

In style with their quantum nature, counts of suites different depending on data source and methods employed, making it difficult to put the finger on simple properties like the total count of them.

# Terminology
There is a lot of terminology that gets used differently in different contexts. In order to drill down into the issues we are interested in it is important to clearly define the terminology we will be using. 

## Dwelling Types
For dwelling types, we will stick with census terminology. We will also make reference to "single family homes" as the housing form regulated through "single family zoning" bylaws. 

The relation between single family homes and census classifications is complex and subject to much confusion in the public discussion. A single family home without a secondary suite is classified by the census as a "single detached house", a single family home with one secondary suite is classified as a "duplex" and results in two "apartment or flat in a duplex" units. A single family home with more than one secondary suite is classified as an "apartment, fewer than 5 storeys". A laneway home on a single family lot is classified as a separate single detached dwelling in the census.

Throughout we will use the term "duplex" as defined in the census. What is commonly referred to as "duplex", a detached structure divided into two units with a vertical division (as opposed to a division that is horizontal or a mixture of horizontal and vertical) is classified as two "semi-detached" dwelling units.

## Empty Dwellings
<style>.figure-float-right{float: right;margin-left:10px;max-width:400px;}</style>
{{< figure src="https://www12.statcan.gc.ca/census-recensement/2011/ref/dict/figures/figure22-dict-eng.jpg" title="Dwelling Universe"  class="figure-float-right">}}
We will stick with census definitions of the occupancy status of private dwellings. The standard census releases report on the total number of dwelling units, as well as those "occupied by usual residents". The latter is, by definition, equal to the number of households. The guiding principle behind this definition is that each person should only be counted once, as part of the household that is their primary residence. Dwelling units that are not "occupied by usual residents" can be either "unoccupied", or "occupied by temporary or foreign residents", which means by people that have their primary residence elsewhere in Canada or abroad. Examples of this are students that list their parent's home as their "primary" residence while they "temporarily" reside elsewhere near their place of study. Or temporary workers that maintain a residence for a fixed time near their work.


Much of the public discussion has focused on dwelling units not "occupied by usual residents", even through looking at "unoccupied" would have been better suited for the arguments made. This is probably due to data on unoccupied dwellings not being as readily available and general laziness of obtaining appropriate data.

# Supply Myth
The “supply myth” was based on the observation that the rate of dwellings that weren’t occupied by “usual residents” jumped between the 2001 and 2006 censuses. This has been [previously observed by others](http://vancouversun.com/news/local-news/census-counts-25502-unoccupied-homes-in-vancouver-more-than-double-the-estimate-by-city-hall), but somehow never really caught all that much attention. This time around there seemed to be a larger public echo, so Nathan Lauster [decided to dig deeper](https://homefreesociology.wordpress.com/2017/11/29/notes-on-the-myth-of-housing-supply/) into the effects of a change in census methods on this, and [I added my comments too](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/). The 2006 census started fishing much more aggressively for suites than previous censuses, which [can be observed](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/) by rising numbers of “duplex” units and falling numbers of “single detached” homes between 2001 and 2006 in Vancouver.

The fact that the jump in units not occupied by usual residents across regions correlated with the discovery of suites, as well as that this jump is not visible in electricity consumption data, suggests that suites may be more likely to be classified as “empty”. This is further corroborated when breaking down the duplex units by tenure, with 2001 registering more tenant households than owner households in duplexes, with the reverse being true in 2006. Generally duplex units can have at most one owner household, more owner households than renter households points to “empty” suites.


# Custom Tabulations
At this point we are hitting the useful limits of the regular census data release. Time for a custom tabulation that gives a direct answer to our question: how many duplex units are empty? Ordering custom tabulations goes beyond the scope of what I am willing to invest time in for an evening blog post, but this question has been bugging me. So I started to ask around to see if someone has the data I am looking for, which is when I remembered that [Urban Futures pull just such a custom tabulation in the past](http://www.urbanfutures.com/foreign-unoccupied-pdf/). And they were kind enough to share the data when asked.

The custom tabulation looks at the entire private dwelling stock and allows to categorize it by "occupancy status", so occupied by usual residents, occupied by temporary or foreign residents and unoccupied, cross referenced by structural type of dwelling. The 2011 data breaks out all dwelling types, the 2016 data groups dwellings into single detached, apartments (<5 and 5+ storeys combined), and all other dwelling types.

## 2011 Data
The 2011 data is best suited to answer our question about empty suites.







Looking at the Metro Vancouver overall dwelling stock we see that some of the categories are very under-represented.

<img src="/posts/2018-01-25-empty-suites_files/figure-html/metro_van_unoccupied-1.png" width="1056" />




When looking at this data we should be aware that some of the categories don't contain many dwelling units, a problem that will only get worse when looking at sub-regions. When looking at unoccupied dwellings we are often interested in percentages at or below the 1% range. There are only 1,110 dwelling units in the "Other single-attached house" category at the Metro Vancouver level, so random rounding can lead to errors of 0.5% to 1% when breaking out the occupancy status. To strike a balance between accuracy and breadth of information we will suppress ratios with a denominator below 500 dwelling units.

Another caveat is that there are two important confounders when looking at vacancy rates of apartment buildings, the age of the building and the ratio of purpose-built rental units. New buildings [take time to occupy](https://doodles.mountainmath.ca/blog/2017/04/03/joyce-collingwood/) and completions shortly before the census can skew the   ratio of unoccupied units, especially in areas with a smaller base of apartments. A high ratio of purpose-built rental buildings skew the numbers in the other direction, purpose-built rentals have had consistently low vacancy rates. One could fold in CMHC data to back out the purpose-built rental units that have near zero vacancy rate to arrive at a rate for condos. We will leave this for another day or another person to do.


<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-3-1.png" width="1056" />

This graph shows that census duplex units (mostly single family homes with suites) have the highest frequency of being unoccupied in all regions, with the exception of Surrey and Richmond where high-rise apartment units are more likely to be unoccupied. In the Cities of Vancouver and North Vancouver mid/high rise apartments overtake duplex units if we add in units occupied by temporary or foreign residents.

We filtered out Electoral A and Bowen Island as they are somewhat different in nature and show them separately for completeness.
<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-4-1.png" width="1056" />

The high number of unoccupied single family homes in Electoral A also stand out, this probably warrants a more detailed geographic look to distinguish between dwellings in UBC/UNA/UEL (almost all single detached in this region are part of the UEL) and the rest more remote areas of Electoral A that hold about 20% of the regions occupied single detached homes. 

Without further analysis we can't say much about the rate of unoccupied single detached homes in the UEL. Bowen Island also has a high rate of unoccupied single detached homes, as well as temporarily occupied ones, possibly due to the presence of vacation homes on the island.

It is also instructive to view the data in terms of absolute numbers to understand the impact of each of the dwelling categories. 

<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-5-1.png" width="1056" />

# Empty Suites
Or primary objective today is to understand the role of suites. So far we see that duplex units are getting classified as "unoccupied" at a surprisingly high rate. But we don't know if that's due to the whole building being unoccupied or one unit being lived in and the other (in most cased the suite) being classified as unoccupied.

We will explore three ways to answer this question.

## Comparison with Single Detached Houses
<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-6-1.png" width="864" />

What we see is that the share of unoccupied duplex units consistently and significantly higher across all regions. In absence of a compelling argument that main units in suited single family homes should be unoccupied at a higher rate than unsuited single family homes, this points to a significant portion of suited single family homes having empty suites.

If we assume that the main unit in unsuited and suited homes have equal probability of being unoccupied, and that a partially vacant duplex overwhelmingly has the main unit occupied and the suite unoccupied, we can estimate the ratio and total number of main units and suites that are unoccupied.

<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-7-1.png" width="864" />

Reading the graph we should be aware that some of the empty suites are in duplexes with empty main units. If we believe it likely that in almost no cases the suite will be occupied when the main unit is unoccupied we can slice the data differently into duplex structures with both units unoccupied and partially occupied duplex units with main unit occupied but empty suite.

<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-8-1.png" width="864" />


# Timeline comparison with electricity usage data
The City of Vancouver commissioned the [Ecotagious report](http://vancouver.ca/files/cov/stability-in-vancouver-housing-unit-occupancy-empty-homes-report.pdf) as an alternative measure of unoccupied units in Vancouver and the region. The first period reported in the Ecotagious report starts August 2001, just a few months after the 2001 census, and ends July 2014. Over this time period Ecotagious found that the rate of empty homes in each broad structural type showed little variability and stayed roughly constant throughout. The Ecotagious report did not distinguish between partially occupied or fully occupied census duplex structures because suites don't have individual meters. At the same time, the census reported a rise in units not occupied by usual residents, while the count of occupied single detached homes dropped and duplex units rose due to the census much more aggressively looking for secondary suites. We can count total number of single detached and duplex lots by taken an adjusted count, the sum of single detached and half the number of duplex units. We would expect to see a stable or modest increase in these lots in Metro Vancouver over those years, but we see a sharp drop in the adjusted count of units occupied by usual residents of similar size as the jump in units non occupied by usual residents that the census found. 

As we have [explained in more detail before](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/) this suggests that a good portion of the newly found units that are not occupied by usual residents are suites. The adjusted count of occupied single family and duplex units increased again between 2006 and 2011, suggesting a drop in the number of suites that are not occupied by usual residents. In the above estimates we did not consider temporarily occupied units, but they don't make up a significant portion to alter these conclusions.

# Counting owner and tenant households
Another way to estimate empty suites is by breaking down the occupied duplex units by tenure. StatCan has a cross-tabulation that further allows to sort out (the small number of) stratified units and only consider single-owner duplexes. In that situation we can have at most one owner household living there, and if there are more owner households than tenant households the difference between the two gives a lower bound on the number of empty suites.

Hidden in this logic are a number of assumptions, in particular

* It could be that the long form over-sampled owner households and that this was not caught in the subsequent post-processing of the data, leading to the census reporting higher number of owners households than there actually are. With our method that would lead to an over-estimate of our lower bound on "empty" suites.

* It could be that in some cases, for example a multi-family setup that get recorded as two separate households, both households have equity in the house and thus both would be counted as owner households. Another scenario like this would be a trust agreement that would enable a quasi-stratification of a non-stratified duplex.

* It could be that some stratified duplexes don't get correctly marked as such by the household filling out the form, and thus stratified households that potentially house to owner households mess with our estimate.






With these caveats we get that there were 118,155 total non-stratified occupied duplex units, 70,815 of which were owner households and 47,340 renter households. The method we outlined yields a lower bound of 23,475 suites that are not occupied by usual residents.

This clearly contradicts our results higher up with the census reporting 13,100 unoccupied duplex units, and 715 units occupied by foreign/temporary residents, which does not come close to add up to the 23,475 units we got by comparing owner and tenant households in non-stratified duplex units.

So clearly there is a problem with this method exploiting the owner/tenant split, although we are not sure what. Part of the issue could be NHS problems, as the tenure and condo status data is part of the NHS, but we run into the same problem if we apply this method to 2016 data. Maybe someone else can help clear this up.

Despite these problems, the fact that the census reports more owner households than tenant households for duplex units is consistent with our argument that it's predominantly suites that are counted as unoccupied in census duplexes.

# 2016 Data
The custom tab I have does not split out duplex units for 2016 and combines low and mid/high rise apartments. But it is still worth taking a look at.






<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-12-1.png" width="1056" />


<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-13-1.png" width="1056" />

We see that the combined "Other" category that mostly consists of census duplex units again dominates when looking at the share of unoccupied units except in Richmond, Coquitlam and Port Coquitlam. But comparing the total number of apartment units in 2011 and 2016 we can infer that they had many new units with a relatively small base, so the high rate of unoccupied apartment units may be due to the new units not properly filling in yet.

We filtered out Electoral A again because it's scale is so far off.

<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-14-1.png" width="1056" />

Lastly the we add the total numbers for better comparison with 2011 and a sense of scale.

<img src="/posts/2018-01-25-empty-suites_files/figure-html/unnamed-chunk-15-1.png" width="1056" />

# They are all empty!
One discussion that comes to mind in this context is that about the effectiveness of different dwelling types, sometimes phrased as questions of the type: Why build new dwellings of a certain type if they end up "all empty" anyway? 

When comparing suited single family homes with unsuited ones it is evident that it is better to have suited homes as this will allow more people to live there, even if a higher portion of suites than expected end up unoccupied. The fact that suites are more likely to be empty than other types of dwelling units does reduce the effectiveness of this typology, but it is still more effective in housing people than unsuited homes. But that same argument does not seem to be broadly accepted when it comes to apartment units.
