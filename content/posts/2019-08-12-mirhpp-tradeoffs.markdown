---
title: MIRHPP tradeoffs
author: Jens von Bergmann
date: '2019-08-12'
slug: mirhpp-tradeoffs
categories:
  - cancensus
  - rental
  - Vancouver
tags: []
description: "How does MIRHPP work, and what are the tradeoffs?"
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-08-12-mirhpp-tradeoffs_files/figure-html/household_rental_income-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
math: true
blackfriday:
  fractions: false
  hrefTargetBlank: true
---




The City of Vancouver has introduced the [Moderate Income Rental Housing Pilot Project](https://vancouver.ca/people-programs/creating-new-market-rental-housing.aspx), with density bonusing in exchange for 20% of the units renting at about 35% below market. 

## TL;DR

* MIRHPP is a win-win, it manages to create both, new units that rent significantly below market, as well as market rentals. Both of which are badly needed, paid for with additional density.
* The allocation mechanism for deciding who gets to rent one of the sub-market units is problematic. Delegating this to the developer/operator of the building creates conflicts of interest and lacks transparency. The City should take charge of this process and maintain a central waitlist, check tenant eligibility criteria, and conduct the lottery.
* Sub-market MIRPP units are financed through artificially high market rents. It is a pilot program and capped at 20 submissions. If it is extended, the inclusionary zoning requirements should be very closely monitored and adjusted to allow for market rents to fall. In the long run, a tax on market rents is an inefficient way to finance sub-market housing.

## MIRPP
The program works with inclusionary zoning. It allows for substantial density increases in exchange for 20% of the units to be rented at around 35% below market value. More precisely, rents for the sub-market units are capped at

| Bedroom type | Monthly rent |
| --- |---|
| Studio  | $950  | 
| 1 Bedroom  | $1,200  |
| 2 Bedroom  |  $1,600 |
| 3 Bedroom  |  $2,000 |

in the initial MIRHPP year, with the caps increasing at the provincial rent increase limit (recently changed from inflation + 2% to just inflation), regardless of turnover. That's roughly 35% below current rents people are paying in newer (2005 or later) purpose-built units, and even further below market rents at turnover. The sub-market units are limited to people in specific income ranges, the building operator is in charge of selecting tenants and checking the eligibility requirements. In short, new tenants are eligible if rent payments require at least 25% of their income, and existing tenants become ineligible if they are paying less than 20% of their income on rent, witch eligibility checks every 5 years.


## Tradeoffs
In essence the MIRHPP manages to build below-market units, paid for by density bonusing. But density bonusing with inclusionary zoning has tradeoffs, and it's worthwhile to examine them in more detail.

### Benefits
It's easy to understand the benefits of this program. MIRHPP manages to build new below-market units, something that is generally quite expensive to do. In this case, it is paid for by density bonusing, so there is little direct cost. The program builds those units in desirable locations, and it achieves income mixing at the building level.

A secondary benefit is that it might make it politically easier to add more housing by directly addressing people at the lower end of the income spectrum, who face huge pressures in our housing market. This is especially true in an environment where [councillors block market rental housing based on the premise that the rental market is heavily segmented](https://doodles.mountainmath.ca/blog/2019/07/07/shaughnessy-townhomes/).

### Costs
The cost are more abstract, and they depend on the counter-factual chosen. The most obvious one is the cost that's associated with how the units are distributed.



To get a rough idea how many households in CoV would be eligible for these units we can look at 2016 census data (using 2015 incomes). 

<img src="/posts/2019-08-12-mirhpp-tradeoffs_files/figure-html/household_rental_income-1.png" width="768" />

There were 27,515 one person households with income $25,000 to $49,999 that would roughly fit the studio or 1 bedroom requirements, plus 10,700 couple without children households in that income range that would fit the 1 bedroom requirements. For the 2 and more bedroom households there were 13,910 couple without children, couple with children or lone parent households with income $50,000 to $74,999. Additionally there are 7,760 households in the $50,000 to $75,999 income range consisting of roommates or other ["complex households"](https://doodles.mountainmath.ca/blog/2017/12/01/what-s-a-household/) like families or couples with additional unrelated persons or multi-family households for a total of 59,885 eligible households. These estimates are quite rough, the number of eligible households currently in Vancouver is likely higher, not to mention households that would happily move to Vancouver if they got the change to occupy one of these units. 


We can also tighten the eligibility requirements to exclude owner households, as well as households currently in subsidized housing. That cuts the total number of eligible households down to 33,670.

An even narrower category would entail (market) renter households in our income range that currently spend more than 30% to less than 100% of their income on housing, which gets the total number of eligible households down to 17,615. Cutting off at 100% of income spent at housing better aligns this with the [CMHC concept of Core Housing Need](https://www12.statcan.gc.ca/census-recensement/2016/ref/dict/households-menage037-eng.cfm).

With the MIRPP program currently capped at 20 buildings, it is safe to say that there are two orders of magnitude more eligible households than anticipated sub-market MIRHPP units. This leaves us with a distribution problem, the cost of which accrues to the people that are eligible but won't be able to find a unit, as well as people that narrowly miss out on the eligibility requirements, while a lucky few obtain tax-free benefits between $6,000 and $13,000 per year, depending on the particular unit.

The second fundamental welfare theorem tells us that we should be able to mitigate that cost. For example, the city could extract the rent benefits as a continuous cash stream and redistribute the proceeds to help households pay market rent in a way that aims to maximize social welfare.

### Administration
Currently MIRHPP eligibility criteria and waitlists are managed by the developer/operator.
This part of the program could probably be improved if the city would take charge of the waitlist and eligibility checking, delegating this to developers lacks transparency and opens up numerous conflict of interest scenarios. Moreover, it would be better to have a softer way to deal with tenants that become ineligible, other than kicking them out of their unit. (I am unsure if and how the Residential Tenancy Act applies to the sub-market units to make make eviction in case of lapsing eligibility, or other softer changes like e.g. hiking rents up to 20% of income, are dealt with.)

The cost of delegating this to developers/operators is in lack of transparency and public trust in the program, as well as lack of data on waitlists.

### Secondary costs - who pays for MIRHPP units?
There are secondary costs that accrue when the MIRHPP is extended beyond the pilot stage. MIRHPP, like all inclusionary zoning programs, require the cost of market housing (market rents in the case of MIRHPP) to be artificially high. To understand this, we need to examine in more detail how the sub-market MIRHPP units are paid for. At first sight, it's the developer that pays for them. But the developer is not loosing any money, otherwise they would not build those units. In effect, it's the rents in the market rental units that are subsidizing the sub-market units. 

We can quantify that subsidy. The total subsidy for 20% of the units renting at 35% below market is `\(0.2 \cdot 0.35=0.07\)`, so 7% of the total rental revenue. In other words, the developer could also be charging everyone 7% less rent and maintain the same gross rental income, showing that market rents are 7% above what it costs to profitably build and operate a market rental building. So the inclusionary zoning is paid for by market rents being (at least) 7% higher than what current land values and construction costs dictate. MIRHPP works because market rents are inflated.

More than that, MIRHPP requires market rents to remain elevated to continue to function. It's effectively a tax on market rents. Which in principle is not a bad thing, inclusionary zoning is supposed to be re-distribute in nature to help lower income people to stay in the region. But a tax on market rents is a poor way to do this for two reasons.

* Renters, including those able to pay market rents, are on average lower down the income spectrum compared to owners. And even further down when measuring wealth. They are a poor target for a redistributive tax.
* This is a very inefficient tax. The cost of the MIRHPP could be covered by taxing only the market rentals in the MIRHPP building, but the tax applies to all market renters, no matter what building they are in with the remaining benefits accruing to landlords of non-MIRHPP buildings.

## Possible fixes
There are a number of ways MIRHPP could be improved by building on it's strengths and reducing the downsides.

1. The City should take charge of the waitlist and income verification process.
2. The City should conduct a robust discussion on the policy goals and evaluate if there are better ways to increase social welfare than tying rental benefits to rental units.
3. MIRHPP should be re-structured so that it does not compete with the parallel policy goal of lowering market rents. At the very least the inclusionary zoning requirements should be continuously re-evaluated and adjusted to allow for market rents to fall. A better solution would be to find a different funding mechanism that improves the redistributive fairness and is more efficient. For example, funding the MIRHPP sub-market units through property taxes would be a clear improvement on both fronts.

### Lowering market rents
Taking the MIRHPP logic that affordability gains trump the externalities of added density, we should take a closer look at the mechanism and benefits of leveraging this insight to lower market rents.

The underlying observation is that, as explained above, the feasibility of MIRPP projects shows that current market rents are at least 7% higher than they need to be given current land and construction costs. If added affordability trumps the externalities of higher density, then we should ask ourselves if we should allow higher density if it serves to lower market rents.

The difficulty with this line of reasoning is that the ability to deliver profitable market housing at 7% lower rents does not necessarily translate into actual rents being lower. In our tight rental market renters pay those higher rents for lack of alternatives. We need significantly more rental supply, and with it [higher vacancy rates to see a drop in market rents](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/). Achieving this is no easy feat, given [our large housing shortfall in the regions](https://doodles.mountainmath.ca/blog/2019/08/01/on-vancouver-population-projections/), and it would require a concerted regional effort to get there. Localizing this effort to just the City of Vancouver will make it very hard to eliminate our housing shortage and bring vacancy rates up to healthy level, let alone into a range where rents will drop. The argument of aiding affordability by allowing more density for market rentals is much less direct than the on of inclusionary zoning, and hinges on the ability to do this at scale and region-wide.



On the upside, the benefits to lowering market rents are enormous as it accrues to all renters, not just the ones in MIRHPP buildings. In our rent controlled environment, the effects will only be directly felt by those whose current rental contract started recently, but households with rents frozen further below current market rents also benefit by reducing their [penalty to move](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/). We should note that renter mobility is still fairly high, 26.9% of renters in market rental in 2016 lived in their unit for less than one year. That's at a minimum 35,030 renter households in market rental housing in the City of Vancouver that are paying close to market rents, with many more that moved into their unit in the preceding years and that would still directly benefit from a 7% drop in market rents.

All of the above is not yet factoring in that lowering market rents will also exert downward pressure on land values, leading to further room to lower market rents. And that lowering rents will also lower home values.

Lowering market rents should be part of any housing discussion, just like aggressively increasing the supply of sub-market housing is essential. Looking at the number of households stretched to pay their rent, as well as the current political climate, it is unrealistic to expect to be able to build enough non-market housing to fill our current shortfall. We need to keep pushing hard for funding to build more non-market housing, and at the same time put downward pressure on market rents. That narrows the gap between those lucky enough to secure a spot in non-market housing and those affluent enough to comfortably live in market housing from both sides. Only working on lowering the entry to market housing will fail the most vulnerable in our increasingly unequal society. Only working on non-market housing will keep the pool of those vying for spots in non-market housing unnecessarily large and is very unlikely to produce enough new housing units to be able to fill our current housing shortfall.


