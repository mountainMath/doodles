---
title: Gross migration
author: Jens von Bergmann
date: '2018-08-16'
slug: gross-migration
categories:
  - cancensus
  - CensusMapper
  - Vancouver
tags: []
description: 'Counting those coming and leaving.'
images: ["https://doodles.mountainmath.ca/posts/2018-08-16-gross-migration_files/figure-html/gross_migration-1.png"]
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---




We have spent much digital ink on the [myth of fleeing Millenials](https://doodles.mountainmath.ca/blog/2017/05/16/lifeblood/), and related misconceptions around the [difference between changing sizes of age groups and net migration](https://doodles.mountainmath.ca/blog/2017/08/06/millennials-redux/). And one of our favourite [CensusMapper maps visualizes net-migration across Canada](https://censusmapper.ca/maps/731).

Today we want to take a slightly different angle and take a quick look at **gross migration**, that is look separately at in- and out-migration. More specifically, we are interested in separating out interprovincial and intraprovincial in- and out-migrants, as well as external in-migrants. Unfortunately the census does not have data on external out-migrants since they don't live in Canada at the time of the census. Duh.

### Components of gross migration
Here is a quick view of gross-migration by age group for selected CMAs.



<img src="/posts/2018-08-16-gross-migration_files/figure-html/gross_migration-1.png" width="864" />


We see how large a role external migration plays for Canada's "international arrival" metropolitan areas of Toronto, Vancouver and Montreal, with a more muted role in Calgary and much lower impact in Victoria and Ottawa.


### Components of net migration
To better understand the role of the "international arrival" CMAs, we can collapse the interprovincial and intraprovincial migration to their respective net migration. 


<img src="/posts/2018-08-16-gross-migration_files/figure-html/unnamed-chunk-2-1.png" width="864" />

Doing so brings the "international arrival" nature of the large CMAs, where lots of external migrants first settle and then disperse from there. For Ottawa - Gatineau and Victoria we see the "university slingshot" in action, attracting lots of in-migrants (domestic and internationally) in their 20s, and sending them off again across Canada to launch their careers in the 30s.

### Next steps
Lots of interesting things can be learned by diving further into this kind of data. At some point I might need a "demographics" category for my blog. As usual, the code is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-08-16-gross-migration.Rmarkdown) for anyone that wants to refine this. 

### Update (elder ferry)
I can't believe I missed the "elder ferry" effect in Victoria. Here is Nathan to add in this interesting observation. 

{{< tweet 1030333323174764546>}}

It'a worh pointing out that the net domestic in-migration of older people is inter-provincial, so people from outside of British Columbia moving to Victoria.

