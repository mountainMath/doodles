---
title: Planned displacement
author: Jens von Bergmann
date: '2019-02-21'
slug: planned-displacement
categories:
  - cancensus
  - CensusMapper
  - land use
  - OSM
  - Transportation
  - Vancouver
  - zoning
  - density
  - rental
tags: []
description: "How can we ensure that densifying Vancouver won't be taken out on the backs of the most vulnerable?"
featured: 'renter_density_map.png'
images: ["https://doodles.mountainmath.ca/posts/2019-02-21-planned-displacement_files/figure-html/renter_density_map.png"]
featuredalt: ""
featuredpath: "/posts/2019-02-21-planned-displacement_files/figure-html"
linktitle: ''
type: "post"
---

<style>
.btn {
font-family: inherit;
font-size: .875rem;
font-weight: 700;
font-weight: 500;
cursor: pointer;
display: inline-block;
line-height: 1.125rem;
padding: .5rem 1rem;
margin: 0;
height: auto;
border: 1px solid transparent;
vertical-align: middle;
-webkit-appearance: none;
color: inherit;
background-color: transparent;
}
.btn-primary {
color: #fff;
background-color: #0074d9;
border-radius: 3px;
}
.btn, .btn:hover {
text-decoration: none;
}
</style>



When we (Denis and Jens) got together for coffee the other day, Denis showed off some maps of renter density in the frequent transit network that he was working on. The idea immediately clicked and we decided to work this out together. Motivated by the issue of renter demoviction caused by the [2017 Metrotown Plan](https://www.burnaby.ca/City-Services/Policies--Projects---Initiatives/Community-Development/Community-Plans/Metrotown-Downtown-Plan.html), we set out to quantify how one could **plan for displacement** on a regional level, instead of treating it as an unwelcome consequence of development at the lot level. Denis has some [great context and explanations on his blog, be sure to check it out too](http://denisagar.com/where-should-new-homes-go-a-map-of-renter-density/)!

## Where should new housing go?
Displacement can be traumatic. Local news outlets like [The Tyee](https://thetyee.ca/News/2016/08/29/Burnaby-Boom-Inev-Redev/) have shed light on the human impact of displacement experienced by people in Metro Vancouver. But there has been little public discussion about how to incorporate the spectre of displacement into regional planning.

As Metro Vancouver is growing, we have a choice where and how to accommodate growth. Being mostly
built out at this point, and having policies in place to protect natural, agricultural, and industrial land, growth will in many cases take the form of densification on existing residential land. This may lead to displacement, but the risk of displacement will vary enormously from lot to lot.

A new resident's access to jobs, schools, and amenities will also vary enormously from lot to lot. Concentrating development on the distant edge of the region would solve the displacement problem, but would also limit those new residents' access to the places they need to go, and would force them to be dependent on a car.

Growth should be focused in areas with many transportation options - frequent transit, good bike routes, carshare vehicles, and amenities within walking distance. 

But are there places in the region with abundant transportation that can be developed without displacement?

Let's unpack these two notions: *abundant transportation* and *displacement*.


## Abundant Transportation (Frequent Transit)
Canadian cities can generally be divided into two zones: areas where a car is absolutely essential for daily life, and areas where there are other options. Those other options (active transportation, transit, carshare) tend to flock together, being highly complementary in nature. A quick look at [Modo's map of vehicle locations](https://www.modo.coop/map/) confirms the idea that carshare needs transit-, walking-, and cycling-friendly locations to survive. Same thing goes for all the other modes. As options improve in these areas, a positive feedback loop leads to further improvement.

For the purpose of this post, we are focusing on places served by *frequent transit* because it is the most widely-used and most easily-definable of the bunch. We think it can be used as a proxy for places that have an abundance of transportation options. The code is [available in GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-02-21-planned-displacement.Rmarkdown) to those who may want to analyse other measures of transportation abundance like Walkscore, carshare networks, or measures of accesibility.

There is no universal definition for frequent transit. We are working with an approximation of TransLink's [Frequent Transit Network definition](https://www.translink.ca/Plans-and-Projects/Frequent-Transit-Network.aspx).

*Our definition of Frequent Transit Coverage*

Between 6am-9pm Weekdays, 7am-9pm Saturdays, 8am-9pm Sundays & Holidays:

* Transit riders wait no more than 16 minutes, 80% of the time
* Transit riders wait no more than 20 minutes, 95% of the time
* Maximum wait during this period is 30 minutes
* Transit riders are willing to travel 400m to a bus stop, 600m to a B-Line stop, and 800m to a rapid transit stop

To draw a coverage area around the transit stops, we assume that riders are willing to travel 400m to a bus stop, 600m to a B-Line stop, and 800m to a rapid transit stop.

For this post, we have not yet incorporated the expansions funded by TransLink's [Ten Year Vision](https://tenyearvision.translink.ca/) like increased frequency, new B-lines and the Millennium Line extension. Anyone interested in including this is invited to grab the code and make the appropriate adjustments.

At the same time, we will keep parks and green space, agricultural land, institutional land (like schools), industrial land, and roads off-limits to development. So we focus on residential and mixed-use land use with frequent transit service.



To compute the frequent transit coverage we pull the transit data from the [Transitland datastore](https://transit.land/documentation/datastore/api-endpoints.html) using our [transitland R package](https://github.com/mountainMath/transitland) and compute the required metrics for each stop.

<img src="/posts/2019-02-21-planned-displacement_files/figure-html/unnamed-chunk-2-1.svg" width="768" />

We are looking for stops that fit our metric for weekdays as well as weekends.









Applying our metric leaves us with a map of frequent transit coverage.

<img src="/posts/2019-02-21-planned-displacement_files/figure-html/unnamed-chunk-6-1.svg" width="768" />

Again, the frequent transit network can change over time, and it most certainly will expand and intensify in [the near future](https://tenyearvision.translink.ca/). For this post we will stick with the current network.

## Exposure and vulnerability
When planning for displacement, we have two goals in mind:

1) minimize exposure to displacement, and
2) minimize vulnerability of the exposed population.

We measure exposure by population density. Vulnerability is a more complex metric, for this post we use tenure as a first-level approximation.

<a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/Edith_Macefield%27s_house.jpg" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Edith_Macefield%27s_house.jpg" style="height:180px;float:right;"/></a> The effect of the displacement depends strongly on tenure. Strictly speaking, owner households only experience
voluntary displacement, as they can choose to sell their property or to stay put. The
immediate neighbourhood around them may change though, so their familiar surroundings may get displaced. 

Tenant households have no choice in this. If the building owner sells their building to make space for denser development,
they lose their home and often won't be able to find a comparable rental accommodation nearby.

Homeowners may feel negative impacts from neighbourhood change, but it cannot be compared with the much more impactful hardship of eviction.

We have excluded First Nations Reserves from our analysis as it was not clear to us how to our vulnerability metrics would apply to those regions and because some of census data was suppressed.

## Methods
With our simplistic definitions, measuring exposure and vulnerability is straight-forward. All we need is the frequent transit coverage area, land use data and census data. And a way to wrangle it all together. Fortunately we have worked with all these pieces before, so it just requires our [cancensus package](https://github.com/mountainMath/cancensus) to access the census data and the [Metro Vancouver land use data](http://www.metrovancouver.org/data) that we [worked with before](https://doodles.mountainmath.ca/blog/2016/01/31/land-use/).

To tie things together we will need to estimate data for our custom geographies using our [tongfen package](https://github.com/mountainMath/tongfen), together with proportional re-aggregation based on dissemination block population, dwelling and household counts as this gives the most reliable results as we [explained here](https://doodles.mountainmath.ca/blog/2018/10/22/toronto-wards/).





## Net and gross density
We want to explore renter density within the frequent transit coverage area. For that we want to distinguish between two different types of density, **net density** and **gross density**. Gross density is based on the total area of a region, net density is just based on the area of the residential lots, so it ignores road right of ways, parks, schools, and other non-residential land uses. Net density is the concepts that we will be using here, as the property lots is what matters in our context.

## Displacement vulnerability
So where within the frequent transit coverage area do people live? Where do renters live? All that is left to do is to estimate the net renter density for all residential (or mixed use) areas within the frequent transit network. 



Overall our frequent transit network covers 25,327 acres using net residential density, only counting residential or mixed land use. 

<img src="/posts/2019-02-21-planned-displacement_files/figure-html/unnamed-chunk-9-1.svg" width="768" />

Most of our frequent transit network is comprised of population densities around 10 to 25 people her acre. 

Planners usually look at dwelling units per acre as a metric, so let's look at what our frequent transit network looks like in terms of this. [Pricetags did an overview on Jane Jacob's view on dwellings per acre a while back](https://pricetags.ca/2012/06/01/jane-jacobs-style-density-it-may-not-be-what-you-think/), Jacobs called 6 or fewer dwellings per acre *very low* density which "can make out well in the suburbs", between 10 and 20 dwelling units per acre can "yields a kind of semisuburb", then the "in between densities" until "the point at which lively diversity and public life can arise" which she pegs at starting at around 100 dwelling units per acre, although she modifies that with "As a general rule, I think 100 dwellings per acre will be found to be too low." Just for reference, 100 dwelling units per acre is roughly the density found in the Olympic Village.


<img src="/posts/2019-02-21-planned-displacement_files/figure-html/unnamed-chunk-10-1.svg" width="768" />

Using Jacob's cutoffs, we see that almost half of our frequent transit network has very low dwelling densities suited for suburbs. The next largest chunk still sits below the 10 to 20 dwelling unit "semisuburb". The "in between" densities take up most of the rest, with only a tiny fraction of our frequent transit network reaching densities "at which lively diversity and public life can arise".

More important for us when looking at displacement is renter density, as renters are the ones most vulnerable when displaced.

<img src="/posts/2019-02-21-planned-displacement_files/figure-html/unnamed-chunk-11-1.svg" width="768" />

Here we see that many areas have fewer than one renter per acre. The bottom brackets are spaced quite closely as to give more detail on the distribution. When minimizing displacement vulnerability we probably want to avoid re-developing areas with higher number of renters. Looking at the graph, that should not be very hard.

So where are these areas with low renter density? Time for a map. Anticipating that people may want to zoom in and view things more closely, we made it interactive.




<iframe src="https://mountainmath.ca/planned_displacement_map.html" width="100%" height="500px"></iframe>

<a class="btn btn-primary" href="https://mountainmath.ca/planned_displacement_map.html" target="_blank">View Fullscreen</a>


## Planned Displacement

We can now use this map to examine the parts of Metrotown affected by demoviction, for example. With 20 to 40 renters per acre, it's one of the most renter-dense neighbourhoods in the region. Meanwhile, lots across the street hold 1 or 2 renters per acre, and they are not subject to redevelopment plans. One can't help but think that renters are being directly targeted, despite how much more vulnerable they are to eviction. (In this particular case, [local activists](http://www.stopdisplacement.ca/stop-demovictions-burnaby/) composed a ["People's Plan"](http://www.stopdisplacement.ca/wp-content/uploads/2017/08/PeoplesPlan4Metrotown.pdf) recommending that denser development be permitted in the area south of Metrotown that has few renters. The People's Plan was part of the inspiration for this post.)

The map shows many other examples of great locations for "development without displacement". There should no longer be any doubt that we can protect renters and increase housing supply at the same time.



## Upshot
This is just a start to open the conversation about how discussions around displacement could enter planning our growth. We could keep going forever on this, refine the vulnerability model, allow for changes in the transit network, etcetera. We could combine stops for those counts at transit nodes. 

As always, the [code for the analysis and visualizations is available for anyone to grab](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-02-21-planned-displacement.Rmarkdown) and adapt this for their purposes.
