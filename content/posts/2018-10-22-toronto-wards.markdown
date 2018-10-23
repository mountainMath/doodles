---
title: Toronto wards
author: Jens von Bergmann
date: '2018-10-22'
slug: toronto-wards
categories:
  - Toronto
  - dotdensity
  - CensusMapper
  - cancensus
  - geeky
tags: []
description: 'Fun with Toronto wards and census data.'
images: ["https://doodles.mountainmath.ca/posts/2018-10-22-toronto-wards_files/figure-html/non_eligible-1.png"]
featured: 'non_eligible-1.png'
featuredalt: ""
featuredpath: "/posts/2018-10-22-toronto-wards_files/figure-html"
linktitle: ''
type: "post"
---






Vancouver had elections on Saturday, today Toronto had their elections. And as opposed to Vancouver, Toronto has wards. Which makes things more fun, as we can look at census data for each ward to understand how people voted in the ward. We ran a [very similar type of analysis the other day for Vancouver](https://doodles.mountainmath.ca/blog/2018/10/17/the-rise-and-fall-of-vancouver-eligible-voters/), so this is an easy add.





The Toronto Open Data catalogue has [data for the ward boundaries](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#29b6fadf-0bd6-2af9-4a8c-8c41da285ad7) and a [custom tab with census data](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#7d109f12-1623-858f-f56d-9c312946ed40). All we need to do is download the data and link them. To check that it works we start with a population density map by wards.

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-4-1.png" width="768" />


Now to more interesting things. Results aren't all in yet, so let's look at eligible voters, so citizens aged 18 and up. The only problem is, the city did not pull that variable for their custom tab.

What we need is to estimate eligible voters in each ward from regular census data. Enter TongFen.

## TongFen
The [TongFen R package](https://github.com/mountainMath/tongfen) that automates the process of estimating census data for arbitrary regions. And we can use the [dotdensty package](https://github.com/mountainMath/dotdensity) facilitates using Dissemination Block population and region data to refine the estimate.









Before we get serious, let's take this for a test ride and look at some census data that the City of Toronto did pull for the wards. And compare it to our TongFen estimates.

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-9-1.png" width="768" />

This shows that the difference between the estimates and the variables are quite sizable, up to a little over 1%, for most variables and up to 3% for non-permanent residents. There are only somewhere between 1230 and 9920 non-permanent residents per ward, so only fairly small errors are needed to produce a 3% error.

But if we are interested in derived quantities, like the share of non-permanent residents, then we should expect better results. I will spare you the math, but we expect some of the errors to divide out. And we can see this if we look at the difference in the percentage shares.

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-10-1.png" width="768" />

The come out consistently less than a quarter percent. That's pretty good and gives us confidence that we can use TongFen to estimate the share of eligible voters in wards.

First let's look at what fraction of eligible voters lives in each ward.

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-11-1.png" width="768" />

Ward 3 is definitely the winner, with 1.53 times the number of eligible voters than Ward 16.

I picked up that there are some [discussions in Toronto to allow permanent residents to vote](https://twitter.com/Diane_Dyson/status/1054418334920323072). And Doug Saunders [argued this point earlier this year](https://www.theglobeandmail.com/opinion/democracy-at-the-bottom-of-a-deep-fryer/article15197439/)
So let's check what percentage of the adult population in each ward is not eligible to vote. (There is a slight issue in that citizen's are only reported for the population in private households that we will gloss over here.) 

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/non_eligible-1.png" width="768" />

This shows that this is not just a question about residency and allegiance, but also about geography. In Ward 18 a fill 28.9% of adults aren't eligible to vote, whereas in Ward 25 only 9.70% aren't eligible. This includes non-permanent residents, for which we don't have age data. If we assume all non-permanent residents are adults, so discounting school-aged non-permanent residents, we get slightly lower numbers as the following graph shows.


<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-12-1.png" width="768" />

As expected this does not change things by much.

## More TongFen
For geeks only, a little more details on TongFen. We mentioned at the beginning that we go down to census block data to derive the estimates. It's a good exercises to compare what happens when we only use Dissemination Area or even Census Tract level data to derive the estimates. Let's do a quick comparison.

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-13-1.png" width="768" />

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-14-1.png" width="768" />

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-15-1.png" width="768" />

<img src="/posts/2018-10-22-toronto-wards_files/figure-html/unnamed-chunk-16-1.png" width="768" />

We see that census tracts can lead to very large errors. When using variables that have stronger spatial gradients this will be even more pronounced. That's why trying to validate TongFen estimates is important. And of course doing the little extra work to take advantage of of Dissemination Block data. Incidentally, we suspect that the botched numbers that prompted our recent [Vancouver eligible voter fact-check](https://doodles.mountainmath.ca/blog/2018/10/17/the-rise-and-fall-of-vancouver-eligible-voters/) may have been the product  of a poorly executed TongFen.

## Next steps
That's it for tonight, I might do another post once the election data comes in. Or maybe someone that understand Toronto better is interested in [grabbing my code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-22-toronto-wards.Rmarkdown) and doing a more in-depth analysis.
