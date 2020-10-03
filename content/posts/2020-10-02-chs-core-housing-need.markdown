---
title: CHS Core Housing Need
author: Jens von Bergmann
date: '2020-10-02'
slug: chs-core-housing-need
categories:
  - affordability
  - CANSIM
tags: []
description: "A quick overview over the freshly released Canadian Housing Survey data"
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-10-02-chs-core-housing-need_files/figure-html/vulnerable_core_housing_need-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
blackfriday:
  fractions: false
  hrefTargetBlank: true
---




Today StatCan released four more tables of data from the Canadian Housing Survey, all around the concept of *Core Housing Need*. Core housing need aims to measure housing stress based on affordability, suitability (crowding) and adequacy (disrepair). It applies to all households with shelter-cost-to-income ratio less than 100%, excluding non-family student-lead households, that aren't able to afford an adequate and suitable home in their region.

We want to give a quick overview what's in the new data release.



To start off, let's look at core housing need for priority vulnerable groups of the National Housing Strategy. It's good to see some of this data coming out. In particular it includes data on of first nations, visible minorities, seniors, young adults, immigrants and veterans which should help identify systemic gaps in our support systems. One important note is that the survey does not include First Nations reserves.

<img src="/posts/2020-10-02-chs-core-housing-need_files/figure-html/vulnerable_core_housing_need-1.png" width="768" />

Unfortunately the sample isn't thick enough to give good 95% confidence intervals for some of the categories. Out of th three metrics making up core housing need, housing inadequacy is the least prevalent, although Inuk, and to a lesser extent other First Nation people, stand out. There is a similar spike for Inuk in residential crowding, which is something [we have observed before](https://mountainmath.ca/housing_central_phrn_2019#9). Crowding is also elevated for recent refugees, West Asian, Black and Filipino populations.

Seniors living alone stand out for facing affordability challenges, as do several visible minority populations. 


Next up we focus on core housing need by tenure for select metro areas in Canada.

<img src="/posts/2020-10-02-chs-core-housing-need_files/figure-html/unnamed-chunk-2-1.png" width="768" />

Renters in social and affordable housing stand out, especially in Vancouver and Calgary, which is likely due to rental assistance programs that aren't counted as income (but as government transfers) with the full rent being reported. A BC senior receiving SAFER rental assistance would be such an example. To check if this is a Vancouver-specific phenomenon we can look how other areas in British Columbia fair.


<img src="/posts/2020-10-02-chs-core-housing-need_files/figure-html/unnamed-chunk-3-1.png" width="960" />

Next we look at living situation of households, with the case where the reference person in the household has experienced homelessness in their lives broken out separately.

<img src="/posts/2020-10-02-chs-core-housing-need_files/figure-html/unnamed-chunk-4-1.png" width="768" />

On the affordability front, one person households have a higher incidence of living in unaffordable housing, women living alone more so than men. Persons that have experienced homelessness before are at elevated risk in any of these categories, in particular for inadequate housing (disrepair) and they have the overall highest share in core housing need.



Overall, around 2% of reference persons in Canadian households have experienced homelessness.




That's it for this post, as usual, the code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-10-02-chs-core-housing-need.Rmarkdown) for anyone to reproduce or adapt for their own purposes.

