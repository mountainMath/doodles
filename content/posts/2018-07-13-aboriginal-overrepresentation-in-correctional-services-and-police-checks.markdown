---
title: Aboriginal overrepresentation in correctional services and police checks
author: Jens von Bergmann
date: '2018-07-13'
slug: aboriginal-overrepresentation-in-correctional-services-and-police-checks
categories:
  - CANSIM
  - cancensus
  - Vancouver
tags: []
description: 'The long legacy of Canadian aboriginal relations'
images: ["https://doodles.mountainmath.ca/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/aboriginal_adult_overrepresentation-1.png"]
featured: 'aboriginal_adult_overrepresentation-1.png'
featuredalt: ""
featuredpath: "/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/"
linktitle: ''
type: "post"
---




In the past weeks I got interested in several news stories on aboriginal [youth admissions to correctional services](http://www.cbc.ca/news/canada/manitoba/youth-incarcerated-indigenous-half-1.4720019), [adult incarceration rates](https://newsinteractives.cbc.ca/longform/correctional-healing-lodges-aim-to-reduce-rising-rates-of-indigenous-inmates-but-numbers-continue-to-climb) and [frequency of getting carded](https://globalnews.ca/news/4328087/1-in-5-people-carded-by-vancouver-police-in-2016-were-indigenous-women-complaint/). I have this habit that when something interests me I go grab the original data and take a look myself. Having done this three times on related issues within a fairly short timeframe I decided to throw my code snippets together into a blog post.

# TL;DR
The takeaway is that no matter how you look at things, aboriginal people are overrepresented in our correctional systems, as well as when it comes to just getting carded on the street. This clearly shows that the long shadow of Canada's ugly history towards aboriginal people is still very present in today's experience of aboriginal people. It points to sytemic failures within the Canadian system lasting to this day, much work is still to be done along the path to reconciliation.

# Youth admissions to correctional services
This is the first article I read, and in many ways the most troubling. If we can't reduce youth admissions to correctional services, it will be even harder to reduce adult incarceration rates. Indeed, [another report on this topic](http://www.cbc.ca/news/indigenous/indigenous-youth-overrepresented-justice-system-1.3554394) notes that

>   Sinclair recalls that in a survey conducted in 1991, more than 70 per cent of adult inmates in the federal system had prior experience with the child welfare system.










<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-4-1.png" width="864" />

Here we added the share of the youth (under 20) population with aboriginal identity in 2016 as horizontal black lines. We see that the the frequency of admissions of youth with aboriginal identity is consistently above the aboriginal share in the general population in some provinces.

We can split the data into groups of correctional services.

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-5-1.png" width="864" />

This shows a discrepancy in the type of correctional services for aboriginal youths. 


We can normalize the data by dividing by the share of aboriginal youth in the overall youth population in each region in 2016 to show the "factor of overrepresentation". The share of aboriginal youth in the population may have changed over time, this analysis could be refined by folding in older census data.

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-6-1.png" width="864" />

This shows alarmingly high rates for British Columbia, as well as Alberta, although Alberta is missing data for recent years. The overall Canadian numbers are skewed when looking at sub-types like Provincial director remand that are dominated by a few provinces with higher aboriginal share.

Looking at Manitoba in particular

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-7-1.png" width="864" />

we notice that the factor of overrepresentation is highest for secure custody and lowest for community sentences, which should receive more scrutiny.


# Adult custodial admissions




Just like before we can look at the share of admissions to custodial services that have aboriginal identity, which has been climbing Canada-wide as [reported](https://newsinteractives.cbc.ca/longform/correctional-healing-lodges-aim-to-reduce-rising-rates-of-indigenous-inmates-but-numbers-continue-to-climb) by [Angela Sterritt](https://twitter.com/AngelaSterritt).

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-10-1.png" width="864" />

Splitting this out by type of admission

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-11-1.png" width="864" />

we again notice disparate shares in some provinces. We can again normalize the data by the share of aboriginals in the adult (20+) population to examine the factor of aboriginal overrepresentation.


<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-12-1.png" width="864" />

Here we see that Alberta and British Columbia are again the provinces with the highest aboriginal overrepresentation, and we also notice that the the overrepresentation has been getting worse over time in some provinces.

These graphs contain a lot of information and can be messy and difficult to read. To clean things up a bit we can focus on the last available year only.

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/aboriginal_adult_overrepresentation-1.png" width="864" />

# Vancouver Street Checks
Lastly we turn to Vancouver street checks. It was [reported yesterday](https://globalnews.ca/news/4328087/1-in-5-people-carded-by-vancouver-police-in-2016-were-indigenous-women-complaint/) that "1 in 5 women ‘carded’ by Vancouver police in 2016 were Indigenous". The Union of BC Indian Chiefs and (UBCIC) and the BC Civil Liberties Association (BCCLA) have filed a complaint with the Office of the Police Complaints Commissioner (OPCC) over data suggesting Indigenous people were being disproportionately street-checked.

This complaint is based upon data released via an FOI and posted on the [Vancouver website](https://vancouver.ca/police/organization/public-affairs/freedom-of-information.html). It's in PDF format, so it requires a bit of scraping and massaging to get it into processeable form.



The data contains a breakdown of street checks by Ethnicity and Gender and we see how female aboriginals are disproportionally represented in the data.

<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-14-1.png" width="864" />

We can use data from the 2016 census for the City of Vancouver, as well as Musqueam 2 which is also part of the VPD jurisdiction, to compute the factor of overrepresentation like we did before.




<img src="/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks_files/figure-html/unnamed-chunk-16-1.png" width="864" />

This shows that aboriginal women are overrepresented by a factor 10, although there was a slight drop in recent years. Male aboriginal overrepresentation has been consistently lower, but trending slightly upward. People will not be surprised that black males are the next-most overrepresented group.

# Next steps
These numbers are disturbing, and this analysis is just scratching the surface. It deserves more detailed look province by province. The disparate rates for different custodial services should also be examined more closely, and in this post we have not explored the full breakdown of custodial services that is available in the data.

As always, the code for the analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-07-13-aboriginal-overrepresentation-in-correctional-services-and-police-checks.Rmarkdown), the code automatically pulls in all the data needed and reproduces the analysis. This should make it fairly straightforward for anyone to copy, adapt and refine the results.
