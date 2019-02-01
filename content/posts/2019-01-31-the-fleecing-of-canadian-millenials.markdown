---
title: The Fleecing of Canadian Millenials
author: Jens von Bergmann
date: '2019-01-31'
slug: the-fleecing-of-canadian-millenials
categories:
  - CANSIM
tags: []
description: "Income and net worth by age group in Canada."
featured: 'indexed_income-1.png'
images: ["https://doodles.mountainmath.ca/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/indexed_income-1.png"]
featuredalt: ""
featuredpath: "/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html"
linktitle: ''
type: "post"
---



A couple of days ago the New York Times published an opinion documenting several aspects of how [US Millenials are getting fleeced](https://www.nytimes.com/2019/01/27/opinion/buttigieg-2020-millennials.html?action=click&module=Opinion&pgtype=Homepage). [Generation Squeeze](https://www.gensqueeze.ca) has been doing a good job of highlighting what has changed for millennials compared to people their age in the past. The NYT article had some interesting data, and two charts in particular drew my interest, the change in median income by age group and the change in median net worth. So I decided to replicate them with Canadian data to see how they compare.

Straight-up comparisons across countries are always tricky, but since we are mostly looking at changes, issues due to slight differences in methods tend to divide out.


## Income
For income we turn to individual income of Canadians by age groups.




<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-2-1.png" width="768" />

To compare with US data, we index it at the start of our time series in 1976.

<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/indexed_income-1.png" width="768" />

It is quite striking how dramatically the income of seniors has increased. This pattern is also reflected In US data, but is not as pronounced. In US data, the 25 to 34 year old cohort came out even and all older age groups saw an inflation adjusted increase over the start year, whereas in Canada all age cohorts below the age of 45 came out negative. We should note here that indexing time series is sensitive to the start year, and the US data started a couple of years earlier. But this is unlikely to explain much of the discrepancy.


## Net wealth
Next up is net wealth. The only measure of net wealth we have in Canada is the Survey of Financial Securities, and we have only four time points. It is not as robust as our income data, so we have to be a little more careful, especially when indexing the data.



Again we start out with total net wealth over time. Splitting up net worth of families to individual family members is hard, so we report the net worth by economic family type, where we group by age of the primary household maintainer. Treating economic families and unattached individuals separately avoids bias due to compositional issues.

<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-4-1.png" width="768" />

This suggests that the Canadian net worth picture is decidedly different from the US numbers where net worth declined for all age groups below 55. 

<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-5-1.png" width="768" />

To understand changes over time we move to indexed data, although that leads to quite large confidence intervals. When looking at economic families we see through the board gains in net value. For unattached individuals the best-guess medians only show a decline for the 45 to 54 year range, although the confidence intervals are quite large so that this age group may well come out positive, or other age groups also may show a negative trend.


## Vancouver, Toronto, Montreal and Calgary
We can look for regional variations, picking out the larges four CMAs. 



### Income 
<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-7-1.png" width="768" />

There are some regional variations, but the big picture is similar, confirming that this is largely a Canadian and not a regional story.

<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-8-1.png" width="768" />

Toronto and Vancouver have negative income growth for all age groups except seniors over our timeframe, Calgary and Montreal manage to squeeze in two more age groups with positive income growth. 

### Wealth
CMA level data has smaller sample sizes and larger confidence intervals and some suppressed data. So we focus on economic families that have better data, and drop age groups with missing values.

<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-9-1.png" width="768" />



<img src="/posts/2019-01-31-the-fleecing-of-canadian-millenials_files/figure-html/unnamed-chunk-10-1.png" width="768" />

Only Toronto has small enough confidence intervals to be reasonably certain that net worth grew across age groups, but indexed growth for all CMAs is consistently above zero, with the exception of the 55 to 64 year old age group in Calgary. From this we can't conclude that there are significant regional differences in the change of net worsth across these CMAs.


## Next steps
In summary we see some parallels and some differences compared to the US. It would be interesting to dig deeper into these differences, or to pull out different components of net wealth, and treat housing separately. Maybe even treating primary and secondary residences separately. The code for this post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-01-31-the-fleecing-of-canadian-millenials.Rmarkdown) for anyone to reproduce or adapt for their own purposes.
