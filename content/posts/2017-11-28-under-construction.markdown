---
title: Under Construction
author: Jens von Bergmann
date: '2017-11-28'
slug: under-construction
categories:
  - cmhc
tags: []
description: "We have record under construction, but we also have record length of construction."
featured: 'all_normalized-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-11-28-under-construction_files/figure-html/all_normalized-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-11-28-under-construction_files/figure-html"
linktitle: ''
type: "post"
---

Currently we are at record levels of dwelling units under construction in Metro Vancouver. At the same time, we are also at record timelines from building start to completion. Those two are of course related in that the more projects are being worked on simultaneously, the harder it is to find and coordinate all the labour and materials to finish the projects. There are other reasons too for escalating construction times. We are building taller projects than we used too, more of it is concrete than there used to be. Single detached construction times are probably lengthened by increasingly larger and more elaborate single family homes.

Recently our current record under construction inventory has received a lot of attention as an indication of future completions. But just looking at under construction can give us misleading messages about what to expect. To get a cleaner idea we should normalize by the average duration construction. For example, if the under construction inventory is 10 times what is normal, but completion times are also 10 times what's normal, then the expected rate of completions is no different than the normal. 


## Under Construction


<img src="/posts/2017-11-28-under-construction_files/figure-html/under_construction-1.png" width="864" />


## Length of Construction
The length under construction is the mean duration projects completed in a given month took to complete.

<img src="/posts/2017-11-28-under-construction_files/figure-html/length_of_construction-1.png" width="864" />

We right away notice a gap in the data for 1991 and 1992. This won't bother us too much, but will make some of our estimates later on less accurate for the relevant time frames.

Up until 2002 it took about 6 months to complete a single family home in Metro Vancouver, by now it takes about a year. Row/Townhouses have traded places with single family homes now as the product that completes fasted these days.

The increase in construction times around 2002 coincides with the increase in apartment construction, and the construction time lengthened for all product types in a similar fashion. That suggests that the primary cause of increased construction time is a labour shortage in the construction sector and not just the trend toward concrete and taller buildings.


# Normalized under Construction
To understand the relationship of under construction inventory to completions we normalize the under construction volume by simply dividing by the length of construction for projects completing that month, and compare that to completions by type.

<img src="/posts/2017-11-28-under-construction_files/figure-html/normalized_under_construction-1.png" width="960" />

The match is decent, but it is noticeably off. One reason is that there is a time lag between mid construction and completion, but we don't account for that when sloppily normalize the under construction inventory by the construction duration of the buildings that completed that month.

# Adding some time-shifts
We can get a little more fancy by shifting the time component of the construction duration by half the length of the duration. That way we shift the under construction duration from the time of completion to mid-construction, which should give a better fit.







This will inevitably leave us with some missing values here and there as the shifts in time are not uniform. And for the most recent dates we don't have anything to shift from, since we don't know the construction duration of the projects currently under construction that will complete in the future. We will interpolate the intermittent missing values linearly and extrapolate the values at the end by just using the average completion duration for the most recent six months.

<img src="/posts/2017-11-28-under-construction_files/figure-html/normalized_under_construction_2-1.png" width="960" />

We see that the match with the completions data has improved somewhat. But the part that we are most interested in, the most recent normalized under construction for Apartments, we still see a big gap between current completions and our normalized under construction.

That means we should expect the average construction duration to increase further, which will bring out normalized under construction closer to the completion curve.

Finally, zooming in on the composite metric for all product types, we see clearly that the total under construction inventory right now is at historic heights, barring dramatic increases in construction duration.

<img src="/posts/2017-11-28-under-construction_files/figure-html/all_normalized-1.png" width="864" />

But the under construction inventory, when normalized as expected monthly output based on completion times, does not look as extreme as the unnormalized graph at the very top. So more supply is coming, but don't be mislead by not accounting for the effect of longer construction times.



As always, the R notbook that generated this post lives [on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-11-28-under-construction.Rmarkdown), download it to reproduce the analysis, check how exactly it was done or make changes.
