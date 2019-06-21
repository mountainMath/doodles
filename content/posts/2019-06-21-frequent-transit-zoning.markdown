---
title: Frequent transit zoning
author: Jens von Bergmann
date: '2019-06-21'
slug: frequent-transit-zoning
categories:
  - OSM
  - Transportation
  - Vancouver
  - zoning
tags: []
description: "Quantifying zoning in Vancouver's frequent transit network."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-06-21-frequent-transit-zoning_files/figure-html/frequent_transit_zoning_map-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
blackfriday:
  fractions: false
  hrefTargetBlank: true
---






Today I saw a [particlarly uniformed tweet](https://twitter.com/paulgfinch/status/1142053136644751362?s=21) claiming that "the most important areas to densify are near transit and are mostly upzoned already". I tend to agree with the first part, but the notion that our frequent transit network is "mostly upzoned already" is plain wrong. I suspect that a lot of other casual observers share the misconception. So I decided to take this as an opportunity for a quick post to quantify zoning in our frequent transit network.

For this I am taking a similar approach to [the work with Denis Agar](https://doodles.mountainmath.ca/blog/2019/02/21/planned-displacement/) where we built the frequent transit network from actual transit schedules and cut it down to residential land use. In short, we defined the frequent transit network as areas around stops that are served by transit every 16 to 20 minutes during 6am-9pm Weekdays, 7am-9pm Saturdays, 8am-9pm Sundays & Holidays, refer to the [previous post for details](https://doodles.mountainmath.ca/blog/2019/02/21/planned-displacement/). This definition comes up with a similar coverage area as TransLink does for their definition of frequent transit network. For the purposes of this post we are throwing out areas covered by parks, roads and other transportation uses, cemeteries, ports and airports and only focus on residential, commercial, industrial and undeveloped/unclassified lots.



We then categorize the resulting area by it's zoning, grouping them into low density (RS, RT, FSHCA, ..), multi-family (RM, CD, ...), commercial, and industrial zoning. Some of our categories are a little rough and could probably use refining, especially when categorizing lots zoned *Comprehensive Development* into commercial or multi-family, but this seems to do a pretty good job for the purposes of this post.






<img src="/posts/2019-06-21-frequent-transit-zoning_files/figure-html/frequent_transit_zoning_map-1.png" width="768" />

This illustrates well how good the coverage of our current frequent transit network within the City of Vancouver already is. And as transit keeps improving, hopefully we will be able to fill in the remaining gaps.

To wrap this up we quantify the area taken up by each of our zoning categories within the frequent transit network.

<img src="/posts/2019-06-21-frequent-transit-zoning_files/figure-html/unnamed-chunk-3-1.png" width="768" />

This shows very clearly how far off the claim that areas in our frequent transit network are "mostly upzoned already" really is. Which is another manifestation of the loss of social welfare due to overly restrictive land use planning, which forces people to live further away from jobs and amenities. On the upside, the vastness of the low-density zoning in our frequent transit network provides a great opportunity, also known as the [*Great House Reserve*](https://shop.bookstore.ubc.ca/p-88146-death-and-life-of-the-single-family-house-lessons-from-vancouver-on-building-a-livable-city.aspx), to move our region forward.

## Next steps
If you are interested in refining this by e.g. fine-tuning the land use or zoning categories used, or maybe classify by land use instead of zoning, feel free to [grab the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-06-21-frequent-transit-zoning.Rmarkdown) and make the appropriate changes.

