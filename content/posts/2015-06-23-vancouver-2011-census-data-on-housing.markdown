---
title: Vancouver 2011 Census Data on Housing
date: 2015-06-23
categories:
  - Vancouver
slug: vancouver-2011-census-data-on-housing
author: Jens von Bergmann
tags: []
description: "Playing with Census Data"
featured: 'affordability.jpg'
images: ["https://doodles.mountainmath.ca/images/affordability.jpg"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

Last week my friend Alejandro emailed me some census data. After sitting on it for a couple of days I decided one evening
to take a look and map the dissemination areas. The dataset contained 125 fields around housing and income. So I started
plucking some of the fields off the table and mapping them.

It did not take long and colorful maps started showing up. Another evening and lots of map layers later I put the
[Vancouver Census Map](https://mountainmath.ca/census) online
for people interested to look through the census graphs. The number of layers became a little unwieldly, just pick and
choose what you are interested in.


### So what exactly does the Census Data show? 
<!-- more -->
The data is aggregated at the Dissemination Area level and rounded to protect privacy. That leaves some artefacts, but
generally gives a very detailed picture of what is going on in different parts of the city. The biggest drawback is the
age, the data is now 4 to 5 years old. Lots of things happened in the meantime, we will have to wait until 2016 for the
next Census Canada dataset.

### Where to go from here? 
When I get around to it I might map all of Metro Van Census data. It won't take any time to re-run the import script for
the larger dataset, but I will need to show higher aggregation level data at lower zoom levels to keep it repsonsive
for slower machines, just like I did for the [Vancouver Assessment Map](https://mountainmath.ca/map/assessment)

I should probably also take a look at what other fields are available, the 'affordability' map linked above uses
individual income for full-time employees instead of combined household income, which differes from how affordability
is usually calculated. The reason is that the data I had did not have the household income. Not sure if it is available
at the dissemination area aggregation level, but if it is that one should be used. But I am lazy, so for now that's it.
