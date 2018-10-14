---
title: Council candidate neighbourhoods
author: Jens von Bergmann
date: '2018-10-13'
slug: council-candidate-neighbourhoods
categories:
  - cancensus
  - Vancouver
tags: []
description: 'Comparing what neighbourhoods council candidates live in.'
images: ["https://doodles.mountainmath.ca/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/housing-types-1.png"]
featured: 'housing-types-1.png'
featuredalt: ""
featuredpath: "/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html"
linktitle: ''
type: "post"
---




I haven't taken time yet to dive into the council candidate's data game, [Chrustopher Porter](https://twitter.com/cdnveggie) has been tearing it up with great posts, one on [candidate location](https://canadianveggie.wordpress.com/2018/09/15/mapping-at-the-2018-vancouver-election-candidates/), several on their [position on various housing issues](https://canadianveggie.wordpress.com/2018/10/06/vancouver-election-2018-primer-part-3-housing/) and a [compilation of endorsements](https://canadianveggie.wordpress.com/2018/10/11/vancouver-election-2018-primer-part-5-endorsements/).

[Dmitry Shkolnik](https://twitter.com/dshkol) has been [running some analysis on candidate's tweets](https://www.dshkol.com/2018/vancouver-mayor-race-twitter/).

[Nathan Lauster](https://twitter.com/LausterNa) dove into the [urbanist / preservationist divide](https://homefreesociology.wordpress.com/2018/10/10/a-very-imby-election/) first crowdsourced by the [Cambie report](https://cambiereport.ca).

Better late than never, I decided to jump in and look at candidate's neighbourhoods. The immediate surrounding of candidates should give some clues about who they interact with on a daily basis, at least for the candidates that are connected with their neighbourhoods in ways other than just driving through them to get to their home.

For this we grab census data form the 500m radius around their rough home location, geocoded from the zip codes that Christopher Porter copied from the disclosure documents and shared via a spreadsheet linked in his blog post.



Between mayor and council there are lots of candidates to make a really messy map of where they live and the neighbourhoods we consider.

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/unnamed-chunk-2-1.png" width="864" />

From here we use our standard tools to grab census data for a couple of variables from the 2016 census and use our [tongfen package](https://github.com/mountainMath/tongfen), as well as the down-sampling from out [dotdensity package](https://github.com/mountainMath/dotdensity), to estimate the variables in the given neighbourhoods. (Check [the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-13-council-candidate-neighbourhoods.Rmarkdown) if you need to know the details.)



## Transportation and tenure
We start by mapping out the active transportation (walk, bike, transit) to work and share of renter households.

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/unnamed-chunk-4-1.png" width="864" />

Active transportation correlates strongly with renter households, and this is also reflected in the graphs. We see that most parties cover a broad spectrum, except Coalition Vancouver (and to a lesser extent Vancouver 1st) that seem to bunch in the lower-left quadrant. I was surprised to see that COPE also does not reach out into the upper-right quadrant.

## Dwelling value and household income
No post about Vancouver is complete without talking about dwelling values and household income. 

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/unnamed-chunk-5-1.png" width="864" />

Coalition Vancouver, as well as some independents, score high on the dwelling value and the income scale, with NPA nd Vancouver 1st the only other parties to crack the $2M dwelling value mark. 

## Adjusted after-tax family income
Adjusted after-tax family income is probably a better way to compare income, so here a little graph on how the parties pan out in this scale. Not much surprising here with most bunching in the middle, as [income distribution in Vancouver is quite uniform](https://twitter.com/vb_jens/status/1041571195747917824).

We divided the income distribution into "Low" (bottom 30%), "Middle" (middle 40%), and "High" (upper 30%). The shares are relative to Canada's overall adjusted after-tax family income distribution.

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/unnamed-chunk-6-1.png" width="864" />


We see that only independents and ProVancouver have candidates in predominantly low-income areas. Both Coalition Vancouver and independents have candidates in predominately high-income areas.

## Housing types
When it comes to housing types, there is a much greater variety. We divided the structural types into "SFH" (single detached and suited single detached), "Missing middle" (Duplex and row/town houses and low-rise (four or fewer storeys)), and "Highrise" (five or more storeys). This is the same split that we have [mapped on CensusMapper before](https://censusmapper.ca/maps/717).

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/housing-types-1.png" width="864" />


## Population change and density
Another much talked about metric in this election is population change and density. 







<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/denity-pop_change-1.png" width="864" />

That huge outlier in terms of population change is Justin Caudwell, who apparently lives in the Olympic Village. Coalition Vancouver is quite heavily invested in areas with losing population, with only COPE, IDEA Vancouver, OneCity and YES Vancouver running no candidate living in neighbourhoods that lost population.

To focus in on this we graph just the population change.

<img src="/posts/2018-10-13-council-candidate-neighbourhoods_files/figure-html/unnamed-chunk-9-1.png" width="864" />


## Upshot
This adds another perspective to what may inform the candidate's position. As always, the code is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-10-13-council-candidate-neighbourhoods.Rmarkdown), feel free to grab it and reproduce the post, add different metrics or expand on this in other ways. To compute the population change we made use of an internal CensusMapper tiling that gives 2011 and 2016 data on a common geographies. To access this, you will have to grab the "label-fix" branch on the `cancensus` package until this is merged into master and the CRAN version gets updated.
