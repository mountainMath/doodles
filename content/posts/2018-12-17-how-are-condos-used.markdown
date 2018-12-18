---
title: How are condos used?
authors: [Jens von Bergmann,Nathanael Lauster,Douglas Harris]
date: '2018-12-17'
slug: how-are-condos-used
categories:
  - cancensus
  - cmhc
  - rental
  - Vancouver
  - Toronto
tags: []
description: 'Comparing how condos are used across Canada.'
featured: 'condo_usage-1.png'
images: ["https://doodles.mountainmath.ca/posts/2018-12-17-how-are-condos-used_files/figure-html/condo_usage-1.png"]
featuredalt: ""
featuredpath: "/posts/2018-12-17-how-are-condos-used_files/figure-html"
linktitle: ''
type: "post"
---






Condominium apartments are fascinating! At their heart lies a relatively recent legal innovation enabling individual ownership of units in multi-unit developments. Since their arrival, condominium apartments have become places to build homes, sources of rental income, sites of speculative real estate investment, and experiments in private democratic government. They’re also in the middle of many on-going debates about housing and the future of cities in Canada and around the world. In 2018, we formed a team to study condominium apartments and how they were being used in order to better inform public and academic debates. Team members include data analyst and mathematician [Jens von Bergmann](https://mountainmath.ca/mountain_math/about), sociologist [Nathanael Lauster](https://soci.ubc.ca/persons/nathanael-lauster/), and law professor [Douglas Harris](http://www.allard.ubc.ca/faculty-staff/douglas-harris). We recently presented some preliminary findings at the National Housing Conference in Ottawa and we’re looking forward to continued research collaboration.

Here we make public some basic information about the development and use of condominium apartments across different metropolitan areas in Canada.

<img src="/posts/2018-12-17-how-are-condos-used_files/figure-html/unnamed-chunk-2-1.png" width="672" />

The first thing to note is that the legal architecture of condominium is deployed across a broad range of structure types. In addition to apartments, developers commonly use the condominium form to subdivide row houses, and occasionally single-detached houses (as in some gated communities). Nevertheless, condominium is used most commonly to subdivide ownership in low-rise and high-rise apartment buildings, and that's what we focus on here.

The next thing worth noticing is that condominium is much more common in some metro areas than others. Vancouver jumps out for the proportion of its apartments - and housing stock overall - owned within condominium. Calgary and Edmonton also rely heavily on condominium to subdivide apartment buildings, although  these sprawling metro areas are dominated by single-detached houses, much more so than Vancouver, reducing  the overall prevalence of condominium.

We know that condominium apartments are exceptionally flexible forms of housing, but how are they being used across different metro areas?  What proportions are owner-occupied? Rented? Occupied temporarily? Unoccupied? 

We couldn't extract data to answer the last two questions from the census because condominium status is recorded by respondents. However, using a variety of datasets, we figured out a transparent and replicable (if somewhat complicated) method for estimating temporarily occupied and unoccupied condominium units.

The answers to these questions about how condominium apartments are used speak to important elements in popular discourse and public debate. Since provincial governments introduced a statutory form of condominium in the late 1960s, developers have built condominium buildings rather than purpose-built rental apartments across [much of Canada](https://www.sightline.org/2017/08/14/why-seattle-builds-apartments-but-vancouver-bc-builds-condos/). Does this also mean that the proportion of owner-occupiers increases while that of renters decreases in cities where condominium developments proliferate? Or do owner-investors rent out their condominium units, augmenting the existing rental stock? 







<img src="/posts/2018-12-17-how-are-condos-used_files/figure-html/condo_usage-1.png" width="883.2" />

Our findings on how condominium apartments are used are really interesting!. In all the metro areas we analyzed, the modal use of condominium apartments is owner-occupation. As a result, it appears that condominium apartments are enabling more homeowners to live in increasingly dense cities. 

However,  condominium apartments also make up a substantial proportion of the rental stock in many metro areas. While many condominium apartments are rented, relatively few show up as vacant (i.e. empty but listed as “for rent”) at any given point in time. Here we distinguish these rare vacancies, which are good for renters, from unoccupied condominiums.  In tight markets such as Vancouver and Toronto we see effectively non-existent condominium apartment vacancy rates, comparable to purpose-built rental vacancy rates.

The least common use of condominium apartments is as a temporary residence (where owners declare their principal residence as somewhere else in the census, but occupy the unit occasionally).

Finally we get to the “empty condos,” or those that show up as unoccupied in the census. Overall, we estimate that between 10% to 23% of condominium apartments were unoccupied in 2016, depending upon the metropolitan area. We don’t know why so many condominium apartments appear to be unoccupied, but it likely relates to their newness and to their inherent flexibility as property. Flexibility can show up in the census as “unoccupied” directly, as when owners use condominiums as second homes, and indirectly, as when condominium apartments are left empty in order to facilitate transactions between uses. We suspect that condominium apartments may cycle more frequently than other forms of property between different uses and occupants, thus creating transition periods without occupants and inflating the proportion of unoccupied units. For instance, condominium apartments can more plausibly be re-claimed for owner’s use than purpose-built rental apartments, cycling in an out of rental supply and potentially creating less stable rental housing.

Strikingly, Vancouver and Toronto stand out as having the lowest proportion of unoccupied condominium apartments, a finding that may be somewhat counter-intuitive given the [public attention that vacant units have received](http://www.vancouversun.com/business/more+than+vancouver+condos+empty/11770403/story.html), rightly or wrongly, in both cities. When metropolitan areas rely upon condominium apartments as a key form of new housing supply, they should take the flexibility of the form into account. However, it appears that the  proportion of unoccupied units in the housing stock will rise as the proportion of condominium apartments in the housing stock increases because condominium apartments are more likely to be unoccupied than purpose-built rentals, a pattern also noted with respect to other flexible housing forms, such as secondary suites ([especially basement suites](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/), which show up as units in a “duplex” in the census). This means that even though a smaller proportion of condominium apartments are unoccupied in Vancouver than elsewhere in Canada, a larger proportion of Vancouver's housing stock shows up in the census as unoccupied.

In Canada’s three largest metropolitan areas, a pretty simple rubric applies: for every ten condominium apartments built, six are owner-occupied, three are occupied by renters, and one is unoccupied. In Calgary and Edmonton, add a renter and take away an owner-occupier. The data for the other cities we surveyed is available in the graphic above.  As a bonus, we also provide a comparison with estimations from 2011 data to show changes over time in the graphic below.







<img src="/posts/2018-12-17-how-are-condos-used_files/figure-html/2-1.png" width="864" />

In Vancouver, where condominium apartments have been an established part of the housing market for longer than in the rest of the country, there is very little change in the occupancy pattern between 2011 and 2016. In other big metropolitan areas, it appears that condominium apartments are increasingly used as rental stock. In most cases, the proportion of empty condominium apartments appears to be decreasing, something that may reflect the lingering effects of the 2008-09 property market crash. 
However, this is all very preliminary. But we’ll keep looking at the details as we proceed!


## Methods
We mixed two data sources to arrive at these estimates--the Census and the CMHC Rental Market Survey--and that made coming up with the estimates a little more complicated. There are several assumptions that go into the estimates, and there are several issues with mixing the data that we set out below.

### Overview
We cut the condominium stock into five different categories. The numbers of units occupied by owners and renters are straight-up census estimates from 98-400-X2016219 and 99-014-X2011026. To estimate the unoccupied units and the units occupied by temporary residents we used a custom tabulation of *Structural type* by *Document type*. We received this cross tabulation from Urban Futures, which [one of use has worked with before](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/) on secondary suites. Both of those variables--the categorization of the dwelling type as well as the decision to label a unit without a census response as empty or occupied by someone who did not respond--is made by the enumerator. This allows us to ascertain the structural type of unoccupied units, and we can also get that information for units that are temporarily occupied.

So, we know how many apartment units were classified as unoccupied or temporarily occupied. To estimate how many condominium units fall into that category we need to make some assumptions. First, we assume that the apartment stock consists of three distinct type of units: condominium units, purpose-built rental units and non-market housing units. That’s not quite accurate. For example a single-family home with two secondary suites will be classified as an *Apartment, fewer than five storeys* if the census found the suites. These do exist in Vancouver, and elsewhere, but their numbers are small.

Given those three types of apartment units, we need to understand how many of the unoccupied and temporarily occupied units fall into each category. The CMCH Rental Market Survey has annual estimates of vacancy rates and universe size for the purpose-built rental stock. We take those estimates, only counting *apartment* units, to attribute unoccupied units to the purpose-built rental stock. In Vancouver, with its extremely low vacancy rates, this is a fairly small number. In Halifax, that number is comparatively larger. Further, we assume that the non-market units have a vacancy rate of zero, so that there are no empty non-market units. What’s left over we assign as empty condominium apartments.

Finally,  we use the estimate of vacant condominium apartments and those on the rental market from the CMHC Secondary Market Rental Survey, using their estimates of the condominium vacancy rate and the condominium rental universe. The vacancy rate is not available for all years and all CMAs. We have marked the CMAs with an asterisk in case the data was not available and back-filled it with our estimate of the condo rental universe and the Rms vacancy rate. We have seen previously that the Rms vacancy rate [tracks the secondary market vacancy rate reasonably well](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/).

Attributing the temporarily occupied units gets even harder, but the numbers are smaller so getting things a little wrong has less impact. Here we again assume that no temporary residents live in non-market housing, and we assume they are equally likely to live in a condominium apartment (as owner or renter) or rent in purpose-built. That is a bit of a judgement call, but the details of these assumptions don’t make much of a difference to the numbers, and we invite people to [grab the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-12-17-how-are-condos-used.Rmarkdown) if they would like to adjust the assumptions.

There are several issues when mixing CMHC Rms data with census data. For one, both are point-in-time estimates for slightly different times. The census is pegged in early May, the Rms for October. There may be fluctuations in temporary and unoccupied units, in particular in areas dominated by universities such as Waterloo, with the census being outside of the regular semester and the CMHC survey within.

Next comes the geographic problem, with CMHC switching to new census geographies at the end of the year, so the rental universe still reflects the previous census geography. Montreal is one such example where the CMA changed 2011 to 2016 as we have [explained before](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/). That leads to problems when estimating the rental universe, but the effect is moderated when focusing on the empty units.

Another issue is that the definition of *apartment* that CMHC uses differs slightly from the census.

Finally, for estimating the vacant condominium apartments that were on the rental market  we used the CMHC rental condo universe estimate and not the one we derived from the census. There appear to be some differences in how CMHC and the census estimate rented condo units, with CMHC relying on surveys of property managers. In BC that likely involves tallying up units for which [Form K](http://www.bclaws.ca/Recon/document/ID/freeside/12_43_2000#FormKNoticeofTenant'sResponsibilities) was filed, likely leading to CMHC under-estimating strata rentals.

It is instructional to compare the two different estimates.

<img src="/posts/2018-12-17-how-are-condos-used_files/figure-html/unnamed-chunk-7-1.png" width="672" />

With the exception of Hamilton, the census condominium rental estimates are higher, in some cases substantially so. To shed more light on this we also compared the estimates of overall condominium apartments.

<img src="/posts/2018-12-17-how-are-condos-used_files/figure-html/unnamed-chunk-8-1.png" width="672" />

We looked at two separate census estimates: the occupied (by permanent residents) units that come straight from the census by filtering occupied units for apartments that are stratified, and the overall condo estimate that we derived by adding in vacant and temporary units. With the exception of Montréal the census estimate of occupied units only comes quite close to the CMHC condominium universe estimate. The differences are worth looking into in more detail at some point.

### Waffle graphs
To communicate the makeup of condominium apartments we settled on a custom version of a waffle graph. Displaying proportions on a square grid makes it easier to read them compared to pie charts or tree graphs. The 10x10 layout rounds numbers to percentage points, which is the appropriate level of accuracy given the uncertainty in the data and is intuitive to understand. When rounding to the nearest percentage, the numbers don’t always add up to 100. So we don’t do traditional rounding but round with the constraint that the total adds up to 100 while minimizing the `\(l_\infty\)` error.




This does introduce potential problems when comparing across time or across geographies, where theoretically we could see an increase in the number of squares in one category although the actual estimated share dropped. This will only happen under very specific circumstances, and we checked that this did not occur in our graphs.

## Reproducibility
The code underlying this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-12-17-how-are-condos-used.Rmarkdown), as are the parts of the custom tabulation [for 2016](https://github.com/mountainMath/doodles/data.unoccupied_2016.csv) and [2011](https://github.com/mountainMath/doodles/data.unoccupied_2011.csv) used in this post. Part of the Statistics Canada data we used requires conversion from XML into more manageable data format which, for performance reasons, requires python to be installed next to R that runs the rest of the code.
