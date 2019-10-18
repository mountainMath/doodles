---
title: Rents and incomes
author: Jens von Bergmann
date: '2019-10-17'
slug: rents-and-incomes
categories:
  - CANSIM
  - cmhc
  - cancensus
  - Vancouver
  - rental
tags: []
description: "In Vancouver (both City or Metro), median rents have tracked median incomes quite well. (Although some misleading information that is making the rounds suggests otherwise.)"
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2019-10-17-rents-and-incomes_files/figure-html/median_income_rent-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
draft: false
blackfriday:
  fractions: false
  hrefTargetBlank: true
---




Following up on our [previous post on rents and vacancy rates](https://doodles.mountainmath.ca/blog/2019/10/16/rents-and-vacancy-rates/) there is another rental stat originating from City of Vancouver documents that is making the rounds and that is misleading. Again, our housing crisis is fundamentally a rental crisis, so it’s important to keep the numbers straight so that we can better focus our energy and resources. This one is a bit more serious, but still has been [making the rounds quite broadly on social media](https://twitter.com/nicholas_falvo/status/1160632600009908226).

<img src="/images/cov_rents_incomes.png" style="width:45%;float:left;margin-right:10px; ">
The graphs purports to show that average rent increased by 75% while median income increased only by 18%. It originates from [page 14 of the Housing Vancouver Strategy](https://council.vancouver.ca/20171128/documents/rr1appendixa.pdf#page=14), but it comes with the caveat that the income change has been adjusted for inflation, while the rent increase is reported as nominal. The graph is misleading as most people won't understand the fine print and assume the rent change and income change numbers are directly comparable. Which is not the case. A better way to graph the data is to either adjust both income and rents, or none.

There are some other issues too. The choice of time frame is odd. The data is using census data, which only has incomes for 2000, 2005, 2010, and 2015, but reports these based on where people live in the respective year after (the census years). We would probably be better off using CRA T1 data that is available on an annual basis, we will do that further down. For now, let's just see what happens when we follow the Housing Vancouver Strategy and use census income numbers. Moreover, it probably makes more sense to use median rents instead of averages. (Interestingly, median rents increased more than average rents.) Separating out bedroom types is not that important when looking at the rent change index, although three or more bedroom rents rose noticeably slower than the rest. Another choice is how to adjust for inflation. It probably makes most sense to use the Metro Vancouver consumer price index, although other choices, e.g. the national CPI, will only change the absolute value of the index and not the relationship between the rent and income index. Lastly, the document is not clear on what income are being used in the graph. It talks about "local incomes", which is unhelpful in understanding the definition used. We are hypothesizing that the report used household income, as other parts of the report mentioned household income and households directly map to dwelling units. 

<img src="/posts/2019-10-17-rents-and-incomes_files/figure-html/unnamed-chunk-1-1.png" width="768" />

We can also express this in inflation adjusted terms.

<img src="/posts/2019-10-17-rents-and-incomes_files/figure-html/median_income_rent-1.png" width="768" />

Either way, median rents and median household incomes in the City of Vancouver have both risen roughly in unison, with rents slightly outpacing incomes.

It is worthwhile to separate out the changes by bedroom type. 

<img src="/posts/2019-10-17-rents-and-incomes_files/figure-html/unnamed-chunk-2-1.png" width="768" />

It is interesting to see that real rents for three or more bedrooms did decrease at times, although the small sample size tells us we should not put too much weight into this. Moreover, the *Total* rent was higher than any of the individual rents in 2015, which points to a change in composition, probably driven by a mixture of location effects as well as by City of Vancouver requirements for 2 and 3 bedroom units, which generally fetch higher rents, having an impact on the unit mix and pulling up the total rent change.

Census data is only available every five years, using census data for incomes makes it hard to track the relationship of rents and incomes in a timely fashion. Rather than relying on census data for incomes, we can also measure changes in incomes using the annual T1 taxfiler data for census families and unattached individuals. (Alternatively we could use income of economic families.) Right now we don't have a cross tab at the city level available, but this will likely change in the not too distant future. For now, we will investigate changes in rents and incomes at the metro level.





<img src="/posts/2019-10-17-rents-and-incomes_files/figure-html/unnamed-chunk-4-1.png" width="768" />

The graph is somewhat messy with the large number of timelines, but it paints a very similar picture to the previous one in that incomes of couple families tracks rents quite well. The same can't be said for persons not in census families. It's worthwhile to investigate this further. Persons not in census families contains a rage of of subgroups that don't expect to see changes in income, for example students, which will pull down changes in median income. Persons not in census families also don't map well to households, especially in Vancouver with their [high share of complex households](https://doodles.mountainmath.ca/blog/2017/12/01/what-s-a-household/), which makes it difficult to directly compare their relationship to rents with that of census families. We again notice the volatility in the three or more bedroom rent estimate, which is less robust due to the relatively low number of such units. 

For completeness we also show the change in real terms by adjusting income and rent changes by overall CMA level inflation.

<img src="/posts/2019-10-17-rents-and-incomes_files/figure-html/unnamed-chunk-5-1.png" width="768" />

We also note how T1 taxfiler data lags the rent data, as tax declarations always lag one year, with further processing by the CRA and StatCan delaying the release of the data even further.

## Upshot
Median rents have tracked median household incomes quite well in the City of Vancouver. Similarly, Metro Vancouver median rents have tracked median family incomes. This on it's own does by no means mean that all is well in the rental market. With our [anemic vacancy rates](https://doodles.mountainmath.ca/blog/2018/11/28/vacancy-rate-and-rent-change/) this is likely the result of sorting by income, with lower income people getting pushed out and higher income people staying. We have noticed [clear signs of exactly this sorting by income happening in the City of Vancouver](https://doodles.mountainmath.ca/blog/2017/09/26/evolution-of-the-income-distribution/).

Renters are also facing a loss in mobility, with [turnover rents being significantly higher than (rent controlled) stock rents](https://doodles.mountainmath.ca/blog/2018/11/28/moving-penalty/).

Another point of caution is that we looked at overall income changes, not specifically at income for renters only. It might be worthwhile to make the effort to dig into this further, look into the full income and rent distributions, and also split off market rentals from subsidized rentals and treat student households separately. But that would require a custom tabulation and is beyond the scope of a blog post. From other data we know that shares of renter households with shelter-cost-to-income above the 30% or 50% thresholds [have not changed much or even decreased over the time period](https://doodles.mountainmath.ca/blog/2017/10/26/a-first-look-at-vancouver-housing-data/), indicating that this may not yield much different results.

Rents tracking income changes also means that things have not gotten better. Renters have been struggling for a long time with high rents and a larger than comfortable share of their income going toward shelter costs. 

Digging deeper into the data helps us to better understand the issues renters are struggling with. Instead of casting this as an issue of "local incomes" diverging from rents, which is not the case as we have seen, we should focus on reducing the sorting pressure by creating more homes for renters. Below-market rentals will be most effective in this, and we should mobilize all the federal, provincial and local resources we can get to make that happen. But [adding housing in general, which has mostly been market housing, has also generally helped low income populations to maintain or even grow their size](https://doodles.mountainmath.ca/blog/2019/09/02/low-income-vs-new-dwellings/).

As usual, the [code for this post is available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-10-17-rents-and-incomes.Rmarkdown) for anyone to reproduce and adapt for their own purposes.
