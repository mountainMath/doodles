---
title: TOD Mode Share
date: 2016-04-20
categories:
  - Vancouver
  - Transportation
  - CensusMapper
slug: tod-mode-share
author: Jens von Bergmann
tags: []
description: 'Adding mode share to our TOD map.'
featured: 'mode_share.png'
images: ["https://doodles.mountainmath.ca/images/mode_share.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Just saw a [comment on the Pricetags blog](https://pricetags.wordpress.com/2016/04/20/surprising-densities-at-some-skytrain-stations/)
pointing to a nice [master's thesis](http://summit.sfu.ca/system/files/iritems1/9819/ETD4936.pdf)
investigating various TOD metrics around skytrain stations. I got curious how the 2011 transit mode share compares to the earlier
census years listed in the thesis. And how the mode share varies spatially.

<!-- more -->

With [CensusMapper](http://censusmapper.ca/maps/316) at my finger tips and building on the
[visuals from the previous post](http://doodles.mountainmath.ca/blog/2016/04/06/tod/) this is an easy exercise. 

We again simply map our concentric circles around the stations, but this time we turn them into pie charts to show the
commute to work mode share. And we show the values for the inner 400m circle and the 400m to 800m annulus separately. I
also added some basic land use data, green for parks, pink for instututional and light blue for commercial or industrial
to provide more context.

What we would expect to see is that the transit mode share is larger in the 400m buffer, but curiously this is not always the case.
 
Click, touch or hover to get the exact values. And sorry again, only new computers will get a meaningful result. Most
smart phones and tablets will have no problems.
<iframe src="/html/skytrain_mode_map.html" width="80%" height="500", style="margin:5px 10%;"></iframe>
<a href="/html/skytrain_mode_map.html#11/49.2430/-123.0350" class="btn btn-primary">Full screen view</a>

The City of Vancouver average transit mode share is 30%, for Metro it's 20%. Head over to [CensusMapper](http://censusmapper.ca/maps/316)
to explore transit mode share in the region (or anywhere else in Canada) in more detail.

## What I missed
The master's thesis was careful enough to exclude areas across the river from the analysis. That's good thinking, I only
took circular buffers around the stations to do this. As indicated in the [previous post](http://doodles.mountainmath.ca/blog/2016/04/06/tod/),
in the future we will add the capability to automatically generate isochrones, so areas 
within 5 or 10 minutes walking distance, and use these
as regions, instead of using circular 400m and 800m buffers around the stations.
