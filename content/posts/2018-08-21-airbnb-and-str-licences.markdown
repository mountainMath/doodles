---
title: Airbnb and STR licences
author: Jens von Bergmann
date: '2018-08-21'
slug: airbnb-and-str-licences
categories:
  - Vancouver
  - rental
tags: []
description: 'Checking in on Aribnb operator complicance'
images: ["https://doodles.mountainmath.ca/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/airbnb_complicance_map-1.png"]
featured: 'airbnb_complicance_map-1.png'
featuredalt: ""
featuredpath: "/posts/2018-08-21-airbnb-and-str-licences_files/figure-html"
linktitle: ''
type: "post"
---






We are getting close the [end of the STR grace period ending August 31st](https://vancouver.ca/doing-business/short-term-rentals.aspx), so it's time to take a look at compliance of the STR operators. For today we will just look at [Airbnb](https://www.airbnb.ca/s/Vancouver--BC/homes?query=Vancouver%2C%20BC&refinement_paths%5B%5D=%2Fhomes), which is the largest STR listings platform. Other larger listings platforms are [VRBO](https://www.vrbo.com/results?petIncluded=false&ssr=true&adultsCount=2&childrenCount=0&neLat=49.315593397975874&neLong=-123.06274539513674&swLat=49.22161586817295&swLong=-123.15544253869143&zoom=13&q=Vancouver%2C%20BC%2C%20Canada&from-date=2018-08-23&to-date=2018-08-29) or [Craiglist](https://vancouver.craigslist.ca/search/vac).

## How did we get here?
The concern over short term rentals is a fairly new phenomenon. As recently as 2013 a local columnist [praised the benefits of Airbnb in generating higher incomes and side-stepping the resiential tenancy act](https://www.theglobeandmail.com/real-estate/in-high-cost-vancouver-the-trick-is-getting-strangers-to-pay-the-rent/article15676047/). In the following years potential negative impacts of Airbnb slowly entered the public debate, [Karen Sawatzky](https://twitter.com/karensawa)'s [excellent master's thesis](http://summit.sfu.ca/system/files/iritems1/16841/etd9840_.pdf) provided the foundation for much of the debate, her [slides from the PHRN in 2015](http://bcnpha.ca/wp_bcnpha/wp-content/uploads/2015/12/2015.11.25-Sawatzky_Airbnb_PHRN_web.pdf) give a good overview over the main points.

This led to a [City of Vancouver council motion in April 2016](https://council.vancouver.ca/20160406/documents/pspc10.pdf) to direct staff to study the "impact of short-term rentals on housing stock", "options to mitigate negative impacts", "steps that other cities are taking to address these issues", and to "seek co-operation from Airbnb and other listing services, including detailed data on listings, to ensure an accurate assessment of the issue", and "to consult with the Renters Advisory Committee, the tourism industry, and others as needed on the City's response to this issue". 

Lots of "process" and two years later this resulted in the data sharing MOU with Airbnb, with Airbnb agreeing to reject listings without a licence number after August 31st, 2018 and sharing data on hosts, licences and addresses with the city thereafter.

## The Rules
To recap, the STR rules in the City of Vancouver defines a *short term rental* (STR) as a unit rented out for less than 30 days at a time. To operate an STR legally within the City of Vancouver the operator needs to have an STR licence. After August 31st any operator operating an STR without a licence faces [fines up to $1,000](https://vancouver.ca/doing-business/short-term-rentals.aspx?utm_campaign=short-term-rentals&utm_medium=Vanity&utm_source=short-term-rentals_Vanity).

The STR business licence needs to be displayed on all listings.

## Airbnb
The City agreement with Airbnb makes enforcement a lot easier. The rules require the display of a licence on each ad, and failing to display a valid licence is an easily enforceable offence, with Airbnb sharing host, licence and address information. The City won't have to check if a suite actually got rented out, the mere act of advertising it is an offence.

The licence information, if provided, is already displayed on Airbnb listings. That gives us the opportunity to gauge compliance at this point in time, a week and a half before the grace period runs out. And we can compare that with the [Business licence data from the City](https://data.vancouver.ca/datacatalogue/businessLicence.htm).

The data is not perfect, it takes a bit of effort to convince the Airbnb website to divulge the information we require for this, and listings are in constant flux. But it gives a reasonable good indication of where we are at at this point in time.

### Compliance
Our first question is compliance, how many listings have submitted a valid licence. 




Our scrapes picked up 4,768 listings within the City of Vancouver proper. (Read further below about some caveats regarding the geography).

We have [looked at STR business licence data before](https://doodles.mountainmath.ca/blog/2018/05/25/short-term-rental-licences/), which makes it easy to fold it into the Airbnb data. The city dataset gets updated on a daily basis, so we are assuming the licence data from the city is up-to-date. It contains 218 licences marked as "pending", so these are intermediate licences still making their way through the bureaucracy. 


<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-4-1.png" width="864" />

Interestingly, 10 of these pending licences already found their way onto Airbnb. Concerning is the appearance of 10 licences marked as "Inactive" or "Gone out of business" in listings. Similarly, there are 62 licences that are formatted like City licence numbers but have no match in the City dataset. Then there are 199 entries with the word "Exempt" in the licence field, with some noting in the description that they only rent for periods greater than 30 days, plus another 51 listings with other text in the licence field that does not match the City licence format. Most of those claim to be exempt because they rent for longer than 30 days or pledge to apply for their licence soon. 

### Exempt licences
The obvious thing to check for listings that claim to be exempt is what *minimum stay* is set within Airbnb, that is the minimum number of nights that need to be booked, and then compare that to the licence status of the listings.

<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-5-1.png" width="864" />

There are a surprising (to us) number of long-term listings, so listings with a minimum stay of 30 days or more. While listings with minimum stay of at least 30 days have higher proportion of missing and "Exempt" listings, the majority of listings claiming to be "Exempt" are not listed as long-term rentals on Airbnb. The same is true for listings with missing licence information. We might be missing some other type of rental that are exempt from getting a licence, or the enforcement department will be busy next month.

As an aside, there may be some legal wiggle room to set the minimum stay to 29 instead of 30, as the minimum stay counts nights not days.

### Multiple licences

The vast majority of the 2,065 STR operators have a single licence, but some have more than one active license.
<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-7-1.png" width="864" />

Some of these cases are operators that advertise several rooms or spaces in shared rooms in their house. But another is what appears to be renting out main unit, basement suite and laneway house as three separate units with operators living off-site. Again, we suspect that these cases will be subject to enforcement soon.

### Multiple listings
We can also slice the data the other way around and look for operators with more than one listing on Airbnb.

<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-8-1.png" width="864" />

In total 683 operators have more than one listing, most of those have two, but one operator has 36. Some of these will be people renting out several rooms within the primary residence that they live in. Not sure what the rules say about that. But looking through the data it's obvious that there are also people operating multiple units. And people operating hostel-like accommodation. Some may be hotels or bed and breakfast operators cross-listing, but browsing the data it is clear that that there are plenty that don't fit these categories. I am curious to see how they will fare after the grace period runs out.

## Multiple listings with same licence
Lastly we can look at issued licenses and check for how many listings they were used. 

<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-9-1.png" width="864" />

It turns out some licences are used for several listings, up to 8 in some cases. I am not entirely clear what the rules are when one operator lists several rooms (or just several beds) in their house, but I was under the impression that one could not rent out several "entire home/apt" units under the same licence. 

Filtering down to listings that are entire homes or apartments, we still get a sizable number of licences used on more than one listing.

<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-10-1.png" width="864" />

That seems problematic.

## Geography
Just for the fun of it we can also look at the geography of listings. We are already familiar with geographic distribution of listings via the work of [Inside Airbnb](http://insideairbnb.com/vancouver/), so there is not much new to be learned here. But for completeness we show the listings by licence status. Locations are only approximate.

<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/airbnb_complicance_map-1.png" width="864" />


## Jurisdictions
The last point we want to touch on is that of jurisdictions. Vancouver is a case where address and jurisdiction don't match. Everyone in the City of Vancouver has a Vancouver address, but not everyone with a Vancouver address lives in the City of Vancouver. The latter category is comprised of Musqueam 2, UBC, UNA and the UEL. Musqueam 2 are covered under some City of Vancouver planning procedures, but it is not clear to us if the Airbnb rules apply in Musqueam 2. The rules don't apply in UBC, UNA or UEL homes.

For us that brings some difficulties in reliably identifying listings within the City of Vancouver. The following map gives an overview on matching listings to jurisdictions, either by geography and name, by geography only, name only, or neither.


<img src="/posts/2018-08-21-airbnb-and-str-licences_files/figure-html/unnamed-chunk-11-1.png" width="864" />

We went by geography only for all of the above analysis, and looking at the map it seems that we got some cases wrong along Boundary Road and possibly near Blanca in Little Australia. We are also missing some cases located (possibly by accident) within False Creek. We could use the *neighbourhood* field from Airbnb to help decide some of these edge cases, but that field is not always populated and does not distinguish Musqueam 2 (although maybe we should include that area anyway). For this post we will live with those misclassifications.


## Next steps
We will revisit this in early September after the grace period expires. At that point every listing will have to have the licence number field populated on Airbnb to stay visible. Unless we see a huge spike in business license applications we should either see a lot of listings coming offline or a slew of bogus licence numbers appear. The latter option will likely turn out costly for operators choosing to go that route, as Airbnb will begin sharing data on hosts, addresses and licence numbers for CoV to compare with their dataset. The September/November time frame is when we will learn how effective Vancouver's Airbnb regulation really is. Ether way, the bylaw officers will be busy.


