---
title: Journey To Work
author: Jens von Bergmann
date: '2017-11-29'
slug: journey-to-work
categories:
  - cancensus
  - CensusMapper
tags: []
description: "City of Vancouver commuting and reverse commuting."
featured: 'van_commute.png'
images: ["https://doodles.mountainmath.ca/images/van_commute.png"]
featuredalt: ""
featuredpath: "/images/"
linktitle: ''
type: "post"
---

The last larger dump of census data arrived today with lots of interesting variables. We wanted to have a quick look at commuting data.




# Journey to Work
Journey to work data tells us about where people work relative to where they live.  


We first look at what proportion of the population of Metro Vancouver municipalities lives in the same community that they work in.
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/same_muni-1.png" width="672" />

On CensusMapper we have an [interactive Canada-wide map for that](https://censusmapper.ca/maps/978). As the central municipality, the City of Vancouver has the highest proportion of residents that work in the same community that they live in. Let's take a deeper look at the commute patters for workers that work in the City of Vancouver, as well as those that live there.

Overall there are 344,440 people working in the City of Vancouver, 187,355 of which (54.4%) are living in the City of Vancouver and the rest commuting in from outside the city. Most of these come from within Metro Vancouver, but NA, or NA%, are coming from outside of Metro Vancouver.

The top 15 trip to work destinations outside of the City of Vancouver for workers living inside the city are
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-3-1.png" width="672" />

We can also map Metro Vancouver communities by what proportion of City of Vancouver workers live there.

<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-4-1.png" width="672" />


# Reverse Commuting
Next we look at reverse commuting, that is what municipalities the 88,135 among the 275,490 workers (32%) living in the City of Vancouver that work outside the city work it.

The top 15 trip to work origins outside of the City of Vancouver are
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-5-1.png" width="672" />

We can also map Metro Vancouver communities by what proportion of City of Vancouver workers live there.

<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-6-1.png" width="672" />

# The Flow


Another way to look at the commute data within Metro Vancouver is to make a chord diagram to show the flow of commuters within and between municipalities. To keep things manageable we contain ourselves with the 13 most commuter-heavy communities.


<!--iframe seamless src="/widgets/d1.html" width="100%" height="700"></iframe-->
{{< figure src="/images/van_commute.png" title="Commute Flows in Metro Vancouver" >}}


Originally I wanted this as interactive diagram, but could not figure out how to include html widgets into my blog setup. It works when I run it locally, but not when . So a static images it is.

I think it would be nice to have some interactive and animated maps that allow one to explore commuting patterns. But this will have to wait for another day. As always, the underlying R Notebook that generated this post lives [on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-11-29-journey-to-work.Rmarkdown) for anyone interested in reproducing or adapting this post for a different region or elaborating on it in other ways.
