---
title: Three Years of Speculation & Vacancy Tax Data
authors: 
  - Jens von Bergmann
  - Nathan Lauster
date: '2021-11-21'
slug: three-years-of-speculation-vacancy-tax-data
categories:
  - CANSIM
  - taxes
  - Empty Homes
tags: []
description: "We now have three years of SVT data, time to take a look at where things stand, how this fits in with related datasets, and what we can learn."
featured: ''
images: ["https://doodles.mountainmath.ca/blog/2021/11/21/three-years-of-speculation-vacancy-tax-data/index_files/figure-html/svt_chsp_comparison-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

<p style="text-align:center;"><i>(Joint with Nathan Lauster and cross-posted at <a href="https://homefreesociology.com/2021/11/22/three-years-of-speculation-and-vacancy-tax-data/" target="_blank">HomeFreeSociology</a>)</i></p>












## TL;DR

We now have three years of Speculation and Vacancy Tax data for BC, demonstrating generally less than one percent of properties pay the tax in most municipalities. We play around with the data we scraped from files released by the BC government to show:

<ol type="a" style="list-style-type: lower-alpha;">
  <li>how the federal CHSP program systematically overstates "foreign ownership"</li>
  <li>how source of revenue estimates shift depending upon definitions and tax rates</li>
  <li>how properties are moving into rentals and</li>
  <li>what else we can glean from exemptions and revenue data.</li>
</ol>


## Celebrating Three Years of Data

BC recently released [round three of results](https://news.gov.bc.ca/files/SVT_Annual_Mayors_Consultation_Technical_Briefing_2020.pdf) from its Speculation and Vacancy Tax (SVT) to relatively [little fanfare](https://vancouversun.com/business/real-estate/three-years-in-has-b-c-s-speculation-and-vacancy-tax-made-a-difference). Understandable, seeing as how we've been dealing with [some stuff](https://www.cbc.ca/news/canada/british-columbia/wyntk-bc-floods-nov-17-1.6251839) out here. 

To recap: the [Speculation and Vacancy Tax](https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax) is an additional property tax mostly levied on a small proportion of properties deemed unjustifiably empty. In this, it’s like the City of Vancouver’s [Empty Homes Tax](https://vancouver.ca/home-property-development/empty-homes-tax.aspx) (and is layered over top of that tax for the City). But the Speculation and Vacancy Tax works a little differently insofar as it sets different tax rates by property owner class, with the primary classes including BC Residents, Other Canadians, Foreign Owners, and Satellite Families. Satellite Families include married couples where the spouse making the most money works abroad and pays income tax in a different country. 

We’ve [explored](https://homefreesociology.com/2019/07/15/taxing-toxic-demand-early-results/) [earlier](https://homefreesociology.com/2021/01/19/two-years-of-bcs-speculation-and-vacancy-tax-data/) [releases](https://doodles.mountainmath.ca/blog/2021/01/25/rethinking-the-foreignness-of-owners-living-abroad/), and it’s worthwhile to dig in and take a look at this one as well, building up a longitudinal database of data over time. Of note, the data also keeps changing, though not (so far) in major ways. In general, each time a new round of the SVT data is released we see a [revision resulting in a drop in taxpayers](https://homefreesociology.com/2021/01/19/two-years-of-bcs-speculation-and-vacancy-tax-data/) compared to the initial data release. This likely reflects people making late declarations or otherwise being exempted from the tax in a retroactive fashion. Importantly, we have not seen the retroactive rises in taxpayers that would indicate successful audits uncovering a great deal of tax fraud.

Speculation and Vacancy Tax Technical Reports are now available for [2018](https://news.gov.bc.ca/files/SVT_Consultation_All.pdf) ; [2019](https://news.gov.bc.ca/files/SVT_2019_Technical_Briefing.pdf) ; and [2020](https://news.gov.bc.ca/files/SVT_Annual_Mayors_Consultation_Technical_Briefing_2020.pdf), with supplementary data by municipality appended to the end of the [2018 report](https://news.gov.bc.ca/files/SVT_Consultation_All.pdf) and separated out for [2019](https://news.gov.bc.ca/files/SVT_2019_Data.pdf) and [2020](https://news.gov.bc.ca/files/SVT_Detailed_Data_2020.pdf), as per links by year. Staying true to BC government form regarding data openness and transparency of housing data, the government does not make this data easily available. Instead it requires scraping out of PDF reports, which we have done for the analysis below.

## Validating Foreign Ownership

The first thing we’d like to update is [our simple comparison](https://homefreesociology.com/2021/01/26/rethinking-the-foreignness-of-owners-living-abroad/) of SVT data with CHSP data on Foreign and Non-Resident Owners for BC. Since it’s based upon auditable declarations, as we’ve noted before, the Speculation and Vacancy Tax offers a valuable check on the [Canadian Housing Statistics Program](https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&SDDS=5257)’s (CHSP) estimates of Non-Resident Owners. Often erroneously cast as a measure of “foreign ownership,” the CHSP measure of Non-Resident Owners attempts to match owners on property titles in the provinces of BC, ON, NB, and NS with income tax and related records in Canada. Where it fails to find a good match, it labels the owner Non-Resident. This creates two big possible source of error in the CHSP data as a measure of “foreign ownership.” First, it’s a residual measure, and it’s possible the failure to find a match reflects things as benign as administrative errors in inputting a name correctly rather than an owner’s residence outside of Canada. Second, many owners outside of Canada may still be Canadian citizens and Permanent Residents, and hence not “foreign” despite living abroad. [We noted before](https://doodles.mountainmath.ca/blog/2021/01/25/rethinking-the-foreignness-of-owners-living-abroad/) that comparing SVT to CHSP data, it appeared that somewhere less than half of CHSP’s “Non-Resident Owners” show up as “Foreign Owners” within the SVT data. Using the most recent data from CHSP and SVT, we can see the pattern continues to hold below.

<img src="{{< blogdown/postref >}}index_files/figure-html/svt_chsp_comparison-1.png" width="1200" />

We can see that as a proxy for “foreign owners,” CHSP vastly and systematically overestimates the size of foreign ownership relative to SVT’s auditable declarations. We can also see that only a very small proportion of “Foreign Owned” properties are left vacant, and hence subject to taxation in BC from the SVT. Taxable “Foreign Owned” properties generally ran well below one percent of total properties in all municipalities in 2018, and have dropped even further to generally below half a percentage point by 2020.

## Where Does Revenue Come From?

There’s lots of other data in the Speculation and Vacancy Tax technical reports! Let's look at the revenue, which largely goes into BC Housing. BC’s reporting on the tax revenue has emphasized that relatively little of it comes from BC Residents. Instead the revenue comes mostly from those perceived as outsiders: Foreign Owners and Satellite Families. There are two problems with this way of presenting the data. First, and foremost, it alienates BC Residents who are deemed members of Satellite Families from being considered residents anymore. In our view, this is a serious problem. People should not be removed from consideration as BC Residents because of who they are married to. Period. Second, at this point, given the dramatic drop in foreign owners and satellite families and the rise in BC residents paying the tax, a decisive factor in BC's revenue claims is that BC Residents pay such a low tax rate on properties left empty relative to other categories. Were tax revenues held constant at 1% for all categories, as per the simulation below, BC Residents would pay more tax than foreign owners, especially if Satellite Families were more correctly considered as Residents.

<img src="{{< blogdown/postref >}}index_files/figure-html/svt-revenue-overview-1.png" width="1200" />

The shift away from Foreign Owners and Satellite Families (and "Mixed"), and toward BC residents can also be seen in the number of properties subject to the tax.

<img src="{{< blogdown/postref >}}index_files/figure-html/svt-taxed-properties-overvierw-1.png" width="1200" />

Note that we're generally supportive of Empty Homes Taxes, and their targeting toward insuring housing is used for long-term residential purposes seems justifiable in tight markets like BC's. But if we're treating all those non-exempt from the tax as speculators, then an important question remains as to whether BC is justified favouring its domestic speculators over other sets of speculators. What message is that sending exactly, and why?

## Change in Tenant Exemptions

Another often touted aspect of the Speculation and Vacancy Tax is the return of housing to the rental market. As we’ve often noted, this is definitely a potential benefit of vacancy taxes! They add pressure to owners of empty dwellings to rent them out while not in use or between sales. As we’ve noted before, there are multiple ways to attempt to see the relationship between the SVT and rentals. The simplest is to simply look at changes over time in Tenancy Exemptions. Unfortunately, we’re missing the information about tenancy prior to the imposition of the SVT that would be most helpful in assessing its full effects. But we can see how increasing proportions of properties are being rented out over time, as demonstrated via tenancy exemption to the SVT, in larger cities including Vancouver, Burnaby, and Richmond. This fits especially well with what we know about condominiums, insofar as they’re a major source of secondary market rental stock across BC. 
 
<img src="{{< blogdown/postref >}}index_files/figure-html/rental-properties-1.png" width="1200" />
 
Importantly, the rise in exemptions for tenancy appears to reflect a broad shift toward renting of properties that might've happened regardless of SVT imposition. Supporting this interpretation, we see a matching downward trend in homes declared as owner-occupied, so this is likely more a shift from owner to tenant occupied homes than an effect of the SVT moving homes out of vacancy per se.
 
<img src="{{< blogdown/postref >}}index_files/figure-html/ownership-properties-1.png" width="1200" />
 
 
## Flows

What about zooming in on change specific to homes taxed as vacant or otherwise non-exempt from taxation? Through the SVT technical reports released in 2019 and 2020, we can get a broad sense of change over time for taxed properties. In particular, how many properties taxed in 2018 and 2019 shifted to a different status, becoming exempt in 2019 and 2020, by category? This is tricky to do well, given the data provided. In particular, both the 2019 and the 2020 reports have *cursed* tables where the results, as provided via Technical Reports, are clearly wrong. In each case, the cursed table is Table 8, where totals should match Table 7 in 2019 and Table 9 in 2020. But they don’t. It looks to us like Tables 7 and 9 provide plausibly correct information, though. At the same time, those taxed also change between years. So we drop Table 7 and use the most recent results below, pulling together Table 9 from the 2020 report in conjunction with Tables 10 and 11 (in 2019) and 11 and 12 (in 2020) to provide a sense of change over time in taxed properties. Here we get a direct sense of how many properties taxed in 2018 shifted to a tenancy exemption in 2019. And we get it again between 2019 and 2020. It’s plausible that these properties might’ve shifted into the rental market without the SVT. But it’s also plausible that it helped lead them there.  

Flows demonstrate other interesting changes over time. Perhaps surprisingly, only a minority of properties remain persistently subject to taxation between years. But new properties are added to SVT taxation at the same time as most properties from the previous year are removed. In short, there’s substantial fluctuation in tax incidence. This has compositional effects. In particular, it appears that Foreign Owned properties and Satellite Family properties have gradually diminished to a smaller, but relatively stable low level. Between 2018 and 2020, they seem to have been largely replaced by Other properties, mostly owned by residents of BC and other parts of Canada. For the most recent year, a cynical read might suggest that the SVT simply replaced higher-taxed Foreign owners of empty homes with lower-taxed Canadian owners of empty homes. 

<img src="{{< blogdown/postref >}}index_files/figure-html/svt-flows-1.png" width="1200" />


Worth noting that the 2020 results may end up overstating the final number of non-exempt properties, as has been the case for previous years. But we won't find out till 2021 results are released! Until then, we can see that part of the rise in properties owned by BC Residents is a rise in "Other Residential" properties, a category containing vacant residential land that became subject to the tax starting with the 2020 tax year.

<img src="{{< blogdown/postref >}}index_files/figure-html/svt-region-property-type-1.png" width="1200" />


We can also look more broadly at the declaration status of the 2018 and 2019 SVT properties in the following year, checking in which way SVT properties moved out of the SVT tax paying stock.

<img src="{{< blogdown/postref >}}index_files/figure-html/svt-flows-details-1.png" width="1200" />

Especially after the initial year Foreign Owners reacted by selling their properties and to an almost equal extent by renting them out. Again, this may be interpreted as a success of the SVT, but it may also just be part of the normal pattern of flows of properties. It is hard to make a definite call, we were unable to construct an at least somewhat robust counterfactual scenario.


## Change and Variation in Other Exemptions

Finally we demonstrate the range of other exemptions provided to the Speculation and Vacancy Tax. The list of exemptions is long, we will focus on the most common exemptions across all municipalities. The way the data is organized means that the "Other exemptions" category is unique to each municipality and contains all exemptions that aren't shown in the graph for the respective municipality. For instance, in Belcarra, many properties are deemed exempt because they're only accessible by water.

<img src="{{< blogdown/postref >}}index_files/figure-html/exemptions-overview-1.png" width="1200" />

## Municipal breakdown
For completeness we are adding municipal breakdowns of properties by municipality, keyed by the residency/tax declaration status of the respective owners, excluding the "BC Resident" category.


<img src="{{< blogdown/postref >}}index_files/figure-html/municipal-breakdown-declarations-1.png" width="1200" />

There is a bit of variation across municipalities, ranging from under 5% to over 10% of properties owned by other than a "BC Resident" as defined by the SVT, but things stay within the expected range and shares are surprisingly stubborn across the years. Of these, only a small fraction actually pay the SVT as can be seen in the next graph, now also including BC Residents.


<img src="{{< blogdown/postref >}}index_files/figure-html/municipal-breakdown-non-exempt-1.png" width="1200" />


Overall, once again, very few properties now pay the tax. While it varies from municipality to municipality, it rarely exceeds one percent of properties. And only for the very tiny and very unusual municipality of Belcarra does it reach two percent. Notably, Victoria and some nearby communities have a larger share of tax-paying properties than Metro Vancouver municipalities that often take the spotlight in discussions around the tax.


This view switches when we don't look at the number of properties subject to the tax and instead look at the revenue that the tax generates. For the revenue total number of properties and property valuations matter too, and Metro Vancouver municipalities with more expensive properties make a strong showing.



<img src="{{< blogdown/postref >}}index_files/figure-html/municipal-breakdown-revenue-1.png" width="1200" />

## Takeaway 

Overall, we're glad the BC Government is releasing data on the Speculation and Vacancy Tax, though we wish they'd do so in an easier and less error-prone fashion (What is up with the Cursing of Table 8?) The results demonstrate very little "toxic demand" leading to vacancies in BC, and provide valuable checks on estimates of "foreign" ownership. We also get a fun look at how properties shift status between years. At the same time, we continue to urge the BC government to reconsider certain aspects of the tax and its presentation. In particular, is toxic demand better if it comes from BC? If not, why does the tax code treat it that way? Moreover the government should recognize that just because residents of BC have spouses working abroad does not mean they're no longer residents of BC. 

As usual, the code for this post, including the code to scrape the data out of the PDFs, is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2021-11-21-three-years-of-speculation-vacancy-tax-data/index.Rmarkdown) for anyone to reproduce or adapt.












