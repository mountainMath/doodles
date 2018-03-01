---
title: Extra School Tax
author: Jens von Bergmann
date: '2018-02-28'
slug: extra-school-tax
categories:
  - Assessment Data
  - taxes
  - Vancouver
tags: []
description: 'Impacts of the Extra School Tax in City of Vancouver'
images: ["https://doodles.mountainmath.ca/posts/2018-02-28-extra-school-tax_files/figure-html/school_tax_map-1.png"]
featured: 'school_tax_map-1.png'
featuredalt: ""
featuredpath: "/posts/2018-02-28-extra-school-tax_files/figure-html"
linktitle: ''
type: "post"
---






The new BC provincial budget had lots of interesting changes. One of them is the additional school tax on residential properties, charged at a rate of 2 basis points (0.002) of the assessed value above $3M and an additional 2 basis points of the assessed value above $4M.

After some initial confusion the province clarified that this tax will not to apply to purpose built rental buildings, each of which is typically one single taxable property, which can easily breach the $3M threshold for multi-unit buildings. This would have resulted in a hit of a little over $100 per unit per month for the average rental unit, which would not apply to a similar condo development because the it would be applied to each individual unit, few of which would break the $3M threshold.




Separating out all properties the tax applies to is not as trivial as it should, mostly because the data needed to determine this is not public. But we can get a pretty good approximation my merging CoV open data on property parcels, zoning, tax data and Metro Vancouver land use data. I will skip the details, people that will want to know how it's done most likely already know this.

Narrowing down to residential land uses, throwing out the purpose built rental buildings and the commercial components of mixed use properties, we see that the new school tax will apply to roughly 21k properties and adds up to around $112M in revenue for properties within the City of Vancouver. There is a slight bit of uncertainty in these estimates as we may not be properly catching the most recent developments, might not properly filter renter building get caught in data problems when merging data sources that aren't perfectly in sync, but this gives us a good base to understand the impact of this tax.

To understand the geographic distribution of these we can aggregate the total tax payable up by physical lot. For single family homes, there is nothing to aggregate, but for condo buildings (or land strata) we want to sum up all the extra tax for each individual condo unit (if any) and visualize the resulting total for the entire building.

<img src="/posts/2018-02-28-extra-school-tax_files/figure-html/school_tax_map-1.png" width="864" />

Overall the tax mostly hits single family homes, around 20k for a total of $100M. The remaining 1k units hit by the tax are mostly condos, adding up to a total of $12M. 

Geographically, the west-side single family homes dominate. But those aren't the properties that generate the highest school tax. Some of the high-value condo buildings rack up more as the top 20 list shows:


|Address              |Extra Tax  |
|:--------------------|:----------|
|277 THURLOW ST       |$1,504,478 |
|1011 CORDOVA ST W    |$1,255,520 |
|1139 CORDOVA ST W    |$1,052,272 |
|1169 CORDOVA ST W    |$  750,152 |
|1281 CORDOVA ST W    |$  649,738 |
|1233 CORDOVA ST W    |$  646,782 |
|428 BEACH CRES       |$  569,882 |
|1328 MARINASIDE CRES |$  559,246 |
|1560 HOMER MEWS      |$  525,500 |
|181 ATHLETES WAY     |$  374,896 |
|3085 POINT GREY RD   |$  301,348 |
|4707 BELMONT AVE     |$  273,280 |
|4719 BELMONT AVE     |$  172,736 |
|2815 POINT GREY RD   |$  169,500 |
|4743 BELMONT AVE     |$  157,808 |
|1388 THE CRESCENT    |$  155,976 |
|4857 BELMONT AVE     |$  152,920 |
|1861 BEACH AVE       |$  148,896 |
|4773 BELMONT AVE     |$  147,104 |
|1919 BEACH AVE       |$  145,824 |

As always, the code that made this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-02-28-extra-school-tax.Rmarkdown).
