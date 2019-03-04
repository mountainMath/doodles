---
title: Airbnb updates
author: Jens von Bergmann
date: '2019-03-02'
slug: airbnb-updates
categories:
  - Vancouver
  - rental
tags: []
description: "Checking in on the state of Airbnb in Vancouver."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-03-02-airbnb-updates_files/figure-html/airbnb-room-type-map-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---















About half a year ago I did a [post on Airbnb data](https://doodles.mountainmath.ca/blog/2018/08/21/airbnb-and-str-licences/) back when enforcement of the Short Term Rental (STR) regulation came into full effect starting September 2018 and have not really writing things up since then. Probably time for an update post. What has happened since, and what have we learned?

## Overview
Let's take a look how listings evolved. 

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-5-1.png" width="864" />

After the initial purge of listings before the start of enforcement, not much changed. The initial purge removed a bunch of listings, and flipped listings without a licence number to a minimum stay of 30 days.

The number of listings has been slowly creeping up, with a couple of dips along the way. 

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-6-1.png" width="864" />

Viewed by minimum stay, the minimum number of nights a listing can be booked through the Airbnb website, we see that the vast majority of the listings with *missing* licence information are "long term" (30 days or more) listings. These are not covered by the STR rules. Some listings are *exempt* as they are cross-listings of regular hotels or B&Bs, but we have no way to verify the legitimacy using our data without going through the listings one by one. Some other listings have licence numbers that are malformed, or have the correct format but have no match in the City of Vancouver STR licence database.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-7-1.png" width="864" />

## Short term rentals
For the rest of the post we focus exclusively on short term rentals, that is listings with minimum stay of fewer than 30 days.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-8-1.png" width="864" />

Currently 66.8% of the STR listings are *Entire home/apt* with almost all of the the remainder being private rooms. The number of *Entire home/apt* has been slowly increasing while the number of *private rooms* has been fairly stable.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/airbnb-room-type-map-1.png" width="864" />

To better understand the flow of new listings coming online and old listings getting discontinued, we colour by time the listings first came online.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-9-1.png" width="864" />

This shows that there has been a steady decline in listings from before the Sept 1, 2018 deadline, with new listings coming online to take their place. It is not clear if or to what extent the new listings coming online are just re-brandings of the same physical home that went offline earlier, or if these sets of homes are disjoint.

## Compliance
Determining compliance is hard. Part of that is that I am still not entirely clear on the STR rules. It is my understanding that short term rentals are allowed if 

* the host has a valid licence for the listing,
* the host rents out at most one listing,
* the home is the primary residence of the host, and
* the listing is either the hosts primary residence, or it is a room (or section) of hosts' home.

In particular, hosts are not allowed to rent out multiple listings, and each licence can only be used for one specific booking at a time. Moreover, owners of a property cannot STR a property unless it is their own primary residence, renting it out for half a year long term so it is someone else's primary residence and then renting it out short term for the rest of the year violates the rules.

### Valid licences
Advertising a short term rental in the City of Vancouver requires a licence. The city has been handing out licences since the rollout about a year ago.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-10-1.png" width="864" />

The graphs shows the initial spike when the city started the licence process, although the bunching at the first date may well be an artifact of the dataset lumping all previous licences together to the date when the dataset first started. The next spike we see coincides with the STR enforcement coming into full effect September 1, 2018. Then we see a spike in December, continuing into January, renewing the 2018 licences for 2019.

This process is still underway, only around half of all licences have been renewed for 2019 as of now.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-11-1.png" width="864" />

It's unclear to me what the cutoff is by when people have to have their 2019 licence in place, whether it's January 1st, or if there is a grace period. Some don't seem to be in any rush to get their 2019 licence.

The *valid format* licences are licences that are formatted like proper City of Vancouver STR licenses, but don't match anything in the city licence database. These could be cases of typos or made-up licences, we were too lazy to run a fuzzy-match to identify possible typos. 

Licence with *invalid format* are entries in the licence field that don't come close to match the STR licence format and can [be quite creative at times](https://www.cbc.ca/news/canada/british-columbia/thousands-of-vancouver-airbnb-listings-still-without-licence-in-lead-up-to-deadline-analyst-1.4805152). Licences marked as *exempt* are hosts self-declaring exempt status. Hotels or registered B&Bs are exempt from the licence requirement, and it requires manual work going through the listings to judge if they likely fall under these categories, which we have not done.

Some listings have *pending*, *inactive* or *cancelled* licences. I am unsure if listing with pending licences complies with regulations, but using licences marked by the city as *inactive* or *cancelled* surely  won't.
  

The cases with *missing* licences are a mixture of regular hotels or B&Bs cross-listing on Airbnb, as well as people evading the licence field requirement by tagging their listing as being in a different municipality (sometimes using a different language for the city name) while geo-locating in Vancouver as [has been reported before](https://bc.ctvnews.ca/loophole-appears-to-help-some-airbnb-hosts-evade-city-rules-ctv-investigation-1.4225376). 

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-12-1.png" width="864" />

Spot checks show that listings with field correctly labelled as "Vancouver" seem to be mostly hotels that are cross-posting, except for the surge of these in January. The ones that have different text in the city field seem to be individuals that appear to have found a way around the Airbnb licence requirements, possibly inadvertently so.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-13-1.png" width="864" />



### Multiple listings per host or licence
I am guessing that hosts having multiple listings or there being multiple listings on the same licence is ok as long as hosts only book one listing per host and/or licence at any given time. For example, a host has several rooms in their home that they list as STR, dynamically deciding which one to rent out on demand but never booking more than one simultaneously. This is probably in concordance with legislation, but it is hard to verify that only one of the listings is booked at any given point in time and it opens the doors to abuse.

The situation becomes much clearer when there are several *entire home/apt* units listed by a single host or on a single licence, as a host can't possibly have more than one primary residence.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-14-1.png" width="864" />

Looking at timelines we note how the initial purge dramatically decreased the aggregate number of STR listings in excess of one listing per host. When only looking at listings with a valid licence, the aggregate number of listings in excess of one listing per licence is lower and did not see a drop with the deadline coming in, mostly because people were still scrambling to obtain a licence. Both timelines hint at a slight decline in the recent months, but it takes some imagination to paint that as a success for compliance.

Most of the hosts or licences that have more than one listing list multiple *private rooms*, followed by hosts or licences simultaneously advertising two or more *entire home/apts*. These, together with hosts or licences with two more more *entire home/apts* as well as one or more *private room(s)*, are probably the most obviously problematic listings, as each host can have at most one primary residence. Taken together, there are 183 hosts with valid licence and multiple *entire home/apts* listed, totalling 274 listings above the one *entire home/apt* per host that the rules might allow.

This seems to be a persistent problem.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-15-1.png" width="864" />

Counts per licence are lower because there are hosts using multiple licences. Licences with more than one *entire home/apt* strikes me as a clear violation of STR rules, what is less clear to me is if Airbnb "hosts" can act as agents for individual STR landlords and manage the airbnb presence for them. If allowed, this would mean some of the multiple *entire home/apt* listings per host may be compliant with STR rules.

### Non-primary residence *entire home/apt*
For an entire home/apt to be used as a STR, it needs to be the hosts primary residence, For example if the host lives at the home most of the times, but is out of town over the weekend, or away on vacation, and uses it as a STR during those times, that's in perfect compliance with the STR rules.

If however the host uses the home full-time for Airbnb, or maybe uses it for half of the year and then rents it out long-term for the other half of the year, this would be in violation to Airbnb rules.

This is where things get tricky. We don't actually know how long a home gets rented out. Airbnb does not share that data, although some jurisdictions have [managed to obtain court injunctions to force Aibnb to release bookings data](https://www.sueddeutsche.de/muenchen/airbnb-muenchen-klage-1.4249813). For now all we can do is make some educated guesses based on the availability indicated in the calendar, as well as the number of reviews left on Airbnb. Calendar availability is quite tricky, we don't know why some days are blocked and others are open. Are days blocked because the listing is booked or because it serves as primary residence during that time? When there are large open periods in the calendar available for booking we could infer that all of them could be booked out. But some hosts may set a high price and wait for some people to pick a selection of time slots and go on a mini-vacation during those times only. Which could be in compliance with the regulation, depending on how often this occurs.

Reviews are a clearer indication of an actual booking. Not every Airbnb visit will result in a review, but if a new review is posted there was a visit sometime before.


To this end, we look at STR listings that are *entire home/apt* with valid licences that were online on or before Sept. 1, 2018 and also in February 2019, and we count the number of reviews they have gained in this time period.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-17-1.png" width="864" />

We see a lot of listings with very few reviews, which is consistent with use as a principal residence. But there are also listings that accumulated more than 20, more than 40 and even more than 60 reviews in this six month time period. Depending on the average length of stay, and the rate of guests leaving reviews, these numbers are indicative of full-time STR use.

Looking at the cumulative distribution helps understand how many listings have at least 20 or 30 reviews.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-18-1.png" width="864" />

We see that there are 405 listings with at least 20 reviews, where it becomes questionable whether these listings are really primary residences of the host.

To take this even further we mix in data from we started to collect data. Murray Cox, who is running [Inside Airbnb](https://twitter.com/InsideAirbnb) has [made his scrapes available](http://insideairbnb.com/get-the-data.html). He has earlier scrapes, and we can fold them into our analysis,






Taking the scrape from April 11, 2018, we can compare that to our latest scrape for a roughly 10 months span. We get 32,980 listings that were active on both dates and are listed now as entire apartment short term rentals with valid licence. 

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-21-1.png" width="864" />

Again, a good portion of listings appear to comply with the STR regulation, but it is really hard to see how listings at the higher end of the review count spectrum can be principal residences.


## Long term and short term
Another possible violation of the requirement that homes be the principle residence of the host is scenarios where the a property is rented out full time, half the time as long term rental (which avoids the empty homes tax for the property), and then renting them out short term for the rest of the time.

Looking at the second graph from the top of this post, properties with a valid STR licence listed on Airbnb as long term rentals stand out as curious. If people rent their property long term, they don't need an STR licence. Moreover, properties listed for long-term rentals are unlikely to be primary residences of the host. And if they are not primary residences of the host, they can't be rented out short term. 

So let's take a look how many of these properties were listed for short term rental at some point in time.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-22-1.png" width="864" />

A large chunk of these homes were only listed as long term rentals. But there is also some switching between long and short term rentals going on, which possibly skirts STR rules only allowing hosts to rent out their own primary residence.



## Suites and laneways
Suites and laneway houses are not allowed as STR unless they have a long-term tenant that rents them out with the landlord's permission. They can be hard to find in the data without manually looking though individual listings, but we can get a (lower bound) estimate by searching for terms like "laneway home" or "garden level suite" in the title and description of listings.






<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-25-1.png" width="864" />

A fairly conservative search aimed to minimize false positives identifies 103 secondary suites and 24 laneway houses that are currently listed as STR. Again, some of these only rent out occasionally and are in compliance if rented out by the long-term tenant of these units with permission from the owner.

<img src="/posts/2019-03-02-airbnb-updates_files/figure-html/unnamed-chunk-26-1.png" width="864" />

Looking at the number of reviews, we notice again that some of these rent out at high volume and are unlikely to be principal residences.


## Upshot
Not much has changed in the overview statistics since the full STR rule enforcement in September. The data should strong indications that a portion of hosts aren't in compliance with the regulations. To go beyond some of the obvious cases or use this kind of overview data to inform audits, one would have to look deeper at individual listings. 

Given the strong indication of ongoing abuse in overview data, as well as a flood of examples of individual cases that people browsing through listings have documented, it might be time for the city take another look at how to strengthen some of their existing regulations to increase enforceability. Regulations like this are are rarely one-shot wonders, but require some adjusting and tweaking to make more effective. 


