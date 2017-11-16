---
title: StatCan Web Maps
author: Jens von Bergmann
date: '2017-11-15'
slug: statcan-web-maps
categories:
  - CensusMapper
  - cancensus
tags: []
description: "Welcome to the world of web mapping!"
featured: 'statcan_web_map.png'
images: ["https://doodles.mountainmath.ca/images/statcan_web_map.png"]
featuredalt: ""
featuredpath: "/images/"
linktitle: ''
type: "post"
---

Not sure how long this has been live, but this morning fellow `cancensus` developer Dmitry flagged a new StatCan feature. [Interactive thematic web maps](http://www12.statcan.gc.ca/census-recensement/2016/dp-pd/dv-vd/cpdv-vdpr/index-eng.cfm). Essentially it enables users to choose from the a selection of 2016 census variables and map them. You can zoom and pan around, and select the aggregation levels to display the data at down to census tracts. And there is a option to download single variables as CSV.

After building and running [CensusMapper](https://censusmapper.ca) for over two years now I have some opinions.

# The Good
There are a couple of things I like. The map is using a conic projection instead of the ubiquitous web Mercator. That's a big plus, especially for a country like Canada where web Mercator grossly dilates the northern parts. I probably would have chosen a different base longitude to make the 49th parallel appear more horizontal though. But I am in no position to criticize that choice, CensusMapper is still using web Mercator. Next, they have comparative widgets at the bottom which provide some context.

# The Bad
On the downside, my first impression was that the tool feels clunky. And it's essentially useless on mobile. It's hard to overestimate the importance of mobile these days, getting quick information on the go is a big way of how people consume data these days. 35% of visits on CensusMapper are from mobile (excluding tablets), and the share of mobile usage is growing.

The portal only has data for the most recent (2016) census, and only a small subset of variables. Of course some of this might change, but give the choice of ESRI architecture that seems unlikely. The licensing fees StatCan likely pays for this tool in it's current limited state are likely already quite expensive. There is a reason why CensusMapper shied away from using big corporation technology. These platforms simply don't allow efficient mapping of census data, whereas there is zero penalty on the CensusMapper platform to [make all variables available for users to map](https://censusmapper.ca/maps/new).

The technology underlying the StatCan map also can't be adapted to allow for the type of flexible mapping CensusMapper was built for, where a user can type an arbitrary function based on census variables in their browser window and instantly map the result variable. Simple examples of maps are a [Gini coefficient](https://censusmapper.ca/maps/840) or a [diversity index](https://censusmapper.ca/maps/902) or models that aim to [estimate transportation costs](https://censusmapper.ca/maps/308) based on census variables. And more elaborate maps like for example [net migration patterns](https://censusmapper.ca/maps/731) would likely require significant re-design of their platform, if at all possible. The flexibility for general web users to build these kind of more complex maps derived from census data is either very hard or simply not possible with existing big corporation technology. Sadly I have not been able to justify spending the time to beef up the interface to this to make this available to the general public, but there is quite a few people that I have given access to this feature and they have made some amazing maps aimed to inform policy.

The "sharing" feature is very limited, it does not even remember the map location and zoom level. Should not be hard to update that though, so this should only be a temporary issue.


# My 2<span style="font-size:0.5em">c</span>
I should start my commentary off by stating that I pitched CensusMapper to StatCan about 2 years ago. I built CensusMapper [to fill an information gap](https://doodles.mountainmath.ca/blog/2015/09/28/census-mapper/), where only experts could have access to census data. StatCan was not interested in supporting or absorbing CensusMapper in their quest of making census data more widely available to non-experts. It's important to stress that CensusMapper is not a polished product. I'd call it a functional demonstration of how census data can be opened up to the general public. And there are obvious ways to expand on it too. The reason why I don't fix the issues and add functionality is mostly that I simply can't justify putting in the time and effort into a free product. And I have no interest in closing CensusMapper off and selling the services it offers in order to fund continued improvements. There are already commercially available products with partially overlapping functionality, and it's not really the thing I enjoy doing.

In the meantime I have glanced down the dark abyss of the government procurement process. It's as drawn out and clunky as the new StatCan map, and while running a small and agile company like MountainMath I simply can't get myself to participate in the long drawn-out process when I could be doing interesting things instead. There are some people in government that have managed to take the pain out of this process and contacted me directly and helped me navigate this without wasting enormous amounts of time to leverage the agile and cost-effective abilities of a small company like MountainMath to deliver great value at low cost. I am looking forward to sharing some results of such a collaboration in the near future.

From two years ago when I started CensusMapper as a side project to now my focus has shifted considerably. Some of this is reflected in me opening up the CensusMapper APIs to the general public to easily access census data. And the work on [`cancensus`](https://github.com/mountainMath/cancensus), which is an R wrapper around the CensusMapper API and facilitates fast, transparent and reproducible analysis based on census data.

The StatCan data download functions, including the one integrated into the new mapping tool, are a good step forward into the right direction. But they are a far cry away from an API, as all the people that relying on the "Member ID", the variable identifier StatCan has been using in their census release datasets for 2016, can attest to. StatCan reshuffled the match between Member ID and variables in their last update of 2016 census data. As far as I know, StatCan still plans of providing data APIs. Originally the 2016 census was supposed to be released using the "New Dissemination Model" based on APIs, and I am looking forward to when the API will get done. In the meantime, CensusMapper has APIs for the 2006, 2011 and 2016 censuses that are open and free for anyone to use. They have the disadvantage of not coming directly through an "authoritative" StatCan website, but on the upside they are designed with the needs of analysts in mind, with for example the ability to select data for mixed (by aggregation level) geographies

In summary, it's a great step forward. But I don't anticipate the need for open tools like CensusMapper and the CensusMapper API to go away anytime soon.
