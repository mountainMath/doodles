---
title: Wealth vs income
authors: 
  - "Nathan Lauster"
  - "Jens von Bergmann"
date: '2020-02-19'
slug: wealth-vs-income
categories:
  - geeky
tags: []
description: "Wealth and income are not the same thing. And it matters. Especially in BC."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-02-19-wealth-vs-income_files/figure-html/wealth_income_matrix-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---









Wealth and income are different things. Wealth is measured in terms of assets minus debts at any given point in time. It can accumulate or deplete over a lifetime and across generations. By contrast, income represents some variation of how much money one makes over a given time period (usually a year). Most people get this on some level. But since both income and wealth deal with people and their money, the terms are also often used interchangeably. So it was that the CBC yesterday reported that ["B.C. budget 2020 promises new tax on wealthy to help ensure future surpluses"](https://www.cbc.ca/news/canada/british-columbia/bc-budget-day-carole-james-finance-2020-1.5466533) despite the actual new tax being a tax on high-income individuals. 

Here the difference matters for two reasons: 

1. it matters because wealthy people aren't always high income, and high income people aren't always wealthy, and
2. it matters because a wealth tax is quite distinct from an income tax, and in this headline the two are blurred together (fortunately the article clarified).

With wealth taxes in the news (and in multiple [Democrats' platforms](https://www.vox.com/policy-and-politics/2019/9/24/20880941/bernie-sanders-wealth-tax-warren-2020) in the US), it's important to separate out wealth taxes from income taxes. Here in Vancouver, as we've [noted before](https://homefreesociology.com/2019/11/27/property-tax-snacks/), our property taxes actually do a pretty good job of [taxing wealth](https://homefreesociology.com/2019/11/27/fun-with-real-estate-wealth/).^[And our property taxes are [still too low](https://doodles.mountainmath.ca/blog/2019/11/26/property-tax-snacks/)!]

In this post we'll focus on our first point: just how well do wealth and income line up together? Underneath this is also the question of how to measure wealth and what to include as income, we will just go with the standard definitions from StatCan's  [Survey of Financial Security](https://www150.statcan.gc.ca/n1/daily-quotidien/171207/dq171207b-eng.htm) to answer this question for [family net wealth and family income](https://www150.statcan.gc.ca/n1/pub/75-006-x/2019001/article/00005-eng.htm). The data allows us to divide up the Canadian population into equally sized quintiles (fifths) by net wealth and by income. What overlap do we see? The data also allows us to break out sub-areas of Canada, including the Atlantic provinces, Quebec, Ontario, the Prairie provinces, and British Columbia. So let's run those too!

First let's look at how income quintiles break down by wealth quintiles, as assessed all across Canada. How many families in the lowest income bracket fit into each wealth bracket? Are they all the lowest wealth bracket? Nope. 

<img src="/posts/2020-02-19-wealth-vs-income_files/figure-html/unnamed-chunk-3-1.png" width="864" />

We can see a clear relationship between wealth and income. But only about half of lowest income families in Canada fit into the lowest wealth category. The same is true on the other side of the distribution. Only about half of the highest income families fit into the wealthiest category. Moreover, there are wealthy (highest quintile) and poor (lowest quintile) households in each and every income quintile. Counter-intuitive as it may seem, there are clearly poor high income folks and wealthy low income folks. Not very many, but at any given point in time they definitely exist.

Let's look at some of the provincial differences, remembering that we're using Canada-wide quintiles. Looking at raw numbers, it's quickly evident that some provinces (Quebec and Atlantic Canada) are disproportionately lower-income, while others (the Prairie provinces) tend toward higher income. Ontario and BC are more inbetween. Looking at what percentage of each income quintile fit in each wealth quintile by province, the general pattern of a correlation between wealth and income is evident in all provinces. But looking more carefully, a few differences jump out, especially between BC and the Prairies. In BC, each income quintile has a higher proportion of families in the top wealth quintile than one might expect - including the lowest income quintile: wealthy low income folks. In the Prairies, by contrast, each income quintile looks less wealthy than one might expect. In each case, despite the correlation between wealth and income, there are also people showing up in each category. 

Flipping the chart around, we can look at how many families in the highest wealth bracket fit into each income bracket. Only about half of the wealthiest families in Canada are in the highest income quintile. There's even greater diversity in BC, where only about 40% of the wealthiest are in the highest income quintile.

<img src="/posts/2020-02-19-wealth-vs-income_files/figure-html/unnamed-chunk-4-1.png" width="864" />

Let's pull out BC from the rest of Canada and run the numbers matrix style. If there were a perfect correlation between income quintile and wealth quintile, then we'd see a bright diagonal line filled with 20% of families in each of the five diagonal cells, surrounded by twenty cells with 0% of families. If there were NO relationship between income quintile and wealth quintile, we'd see each of our twenty-five cells filled with roughly 4% of families. What we see is somewhere inbetween. For Canada as a whole, we see strong evidence of correlation at the margins (for highest and lowest quintiles), but the middle looks very mushy. For BC, we see a strong relationship between being in the top income quintile and the top wealth quintile. But everything else looks mushier than expected. In effect, BC stands out for its generally limited correspondence between wealth and income. 

<img src="/posts/2020-02-19-wealth-vs-income_files/figure-html/unnamed-chunk-5-1.png" width="768" />

What throws off the relationship? Many peoples' wealth represents savings over one or more lifetimes. So age matters, as does inheritance. Immigration can also affect patterns, with different results evidenced by program (e.g. investor), time in Canada, and wealth accrued in country of origin (Vancouver's [far from the only place](https://homefreesociology.com/2018/10/25/checking-in-with-numbeo/) where rapid escalation in prices have made millionaires of home owners). Asset inflation also matters, and BC's rapid appreciation in real estate wealth surely plays a role in its weirdness. As a reminder, capital gains accruing to primary residence don't show up in income statistics, but they definitely represent wealth. We could cap current exemptions on this enormous tax break for home owners, taxing these capital gains more like income. But we could also just levy an overall [wealth tax](https://www.brookings.edu/wp-content/uploads/2019/09/Saez-Zucman_conference-draft.pdf). Returning to a theme, taxing wealth is distinct from taxing income.

All of which is to say: wealth and income are not the same thing. And it matters. Especially in BC!

As usual, the code for the analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-02-19-wealth-vs-income.Rmarkdown).









