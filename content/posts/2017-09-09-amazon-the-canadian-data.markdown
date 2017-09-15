---
title: Amazon - The Canadian Data
author: Jens von Bergmann
date: '2017-09-09'
slug: amazon-the-canadian-data
categories:
  - cancensus
  - CensusMapper
tags: []
description: "Playing the Amazon Game"
featured: ''
featuredalt: ""
featuredpath: ""
images: ["https://doodles.mountainmath.ca/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/all_cma-1.png"]
linktitle: ''
type: "post"
---

I wasn't really getting into the Amazon HQ2 thing, but then the [Upshot](https://www.nytimes.com/interactive/2017/09/09/upshot/where-should-amazon-new-headquarters-be.html?smid=tw-share&_r=0) did some analysis that excluded Canadian metros. That's not right. So I decided to fill in the gap. Our [`cancensus`](https://github.com/mountainMath/cancensus) package is perfect for the job. This post is generated from an R markdown document, which is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-09-09-amazon-the-canadian-data.Rmarkdown) for anyone interested in refining this.




## Canadian Metropolitan Areas
It probably goes without saying that omitting Canadian cities from the list is more than just a small inconvenience. The attractiveness of a location in Canada for a company that will undoubtedly want to attract talent from beyond national boundaries can't be understated in today's political environment. And recent changes to Canada's work visa process for tech workers, where [work visas are now issued within two weeks of application](http://www.cic.gc.ca/english/work/employers/gss.asp), stands in stark contrast with developments south of the border.

So let's start with the Canadian Census Metropolitan Areas.

```r
#devtools::install_github("mountainmath/cancensus")
library(cancensus)
#options(cancensus.api_key='your api key')
provinces <- get_census(dataset='CA16',regions=list(C='01'), geo_format='sf', level='PR')
cmas <- get_census(dataset='CA16',regions=list(C='01'), geo_format='sf', level='CMA')
```




<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/all_cma-1.png" width="960" />

Our candidate regions are 

> Toronto, Montréal, Vancouver, Calgary, Ottawa - Gatineau, Edmonton, Québec, Winnipeg, Hamilton, Kitchener - Cambridge - Waterloo, London, St. Catharines - Niagara, Halifax, Oshawa, Victoria, Windsor, Saskatoon, Regina, Sherbrooke, St. John's, Barrie, Kelowna, Abbotsford - Mission, Greater Sudbury, Kingston, Saguenay, Trois-Rivières, Guelph, Moncton, Brantford, Saint John, Peterborough, Thunder Bay, Lethbridge, Nanaimo, Kamloops, Belleville, Fredericton, Chilliwack, Red Deer, Sarnia, Drummondville, Prince George, Granby, Sault Ste. Marie, Medicine Hat, Wood Buffalo, North Bay, Grande Prairie

Since none of the regions are in the Territories we will drop them from the map.



## Areas with at least one million people where job growth is strong …
That's an easy one, let's get to work and filter down to the ones with at least 1 million people.


```r
cmas <- cmas %>% filter(Population >= 1000000)
basemap + geom_sf(data=cmas, color=cma_color,fill=cma_color) + lambert
```

<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/round1-1.png" width="960" />

This leaves us with 6 regions, namely 

>  Montréal, Calgary, Toronto, Vancouver, Edmonton, Ottawa - Gatineau

To keep things simple for use we use employment growth as a proxy for job growth. And let's use 2006 and 2011 numbers since 2016 numbers aren't out yet and we are too lazy to look up the CANSIM statistics. The [CensusMapper API tool](https://censusmapper.ca/api) makes it straight forward to locate the relevant variables and copy-paste the `cancensus` data import call, or we can use the `cancensus` search function.



Hiding some details (they are available in the R notebook) of pulling in the data, let's impose a cutoff of at least 5% growth over the 5 year period between the censuses.

```r
cmas <- cmas %>% filter(employment_change >= 0.05)
basemap + geom_sf(data=cmas, color=cma_color,fill=cma_color) + lambert
```

<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/round2-1.png" width="960" />

Which drops Montreal from our list and, displaying the growth rates for additional information, leaves us with

> Calgary: 10.2%, Toronto: 8.1%, Vancouver: 8.9%, Edmonton: 12%, Ottawa - Gatineau: 9.8%


## … and the right labor pool is large and growing …
Here we are looking for areas where "more than one in eight workers is in an industry related to tech, science or professional services", so let's grab the data for the industry categories "Information and cultural industries" and "Professional, scientific and technical services".



Applying the filter we are left with

```r
cmas <- cmas %>% filter(tech_ratio_11 >= 1/8)
basemap + geom_sf(data=cmas, color=cma_color,fill=cma_color) + lambert
```

<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/round3-1.png" width="960" />

>Calgary: 12.9% -> 13.9%, Toronto: 12.8% -> 13.9%, Vancouver: 12.2% -> 13.3%,

and we can see that the ratios were growing in all regions from 2006 to 2011.

## … and the quality of life is high …
That's a tricky measure, let's follow the Upshot's lead and compare rents. Since the new census data is not in yet, and the rent data is prone to change even faster than the already fairly old employment data we used, let's turn to CMHC to pull the newest rent data using our still fairly rough `cmhc` package to get the October 2016 median rents for a 2 bedroom unit in a purpose built rental. These aren't turnover rents but taken from the entire purpose built rental stock for the metro area, but they should give us a consistent way to compare.

```r
#devtools::install_github("mountainmath/cmhc")
library(cmhc)
parse_integer <- function(x){return(as.integer(sub(",", "", x, fixed = TRUE)))}
cmas$rent <- as.numeric(lapply(cmas %>% pull("GeoUID"), function(geo_uid){
  return(get_cmhc(cmhc_primary_rental_params(as.character(census_to_cmhc_translation[geo_uid]),"2.2.21","rent_median_amt", "2")) %>% filter(X1 == "2016 October") %>% pull("2 Bedroom")) %>% parse_integer
}))
```
The results are 

> Calgary: $1,204, Toronto: $1,250, Vancouver: $1,305.

That's really not all that much information, let's look at the broader historic trends in rental availability and in rents.


<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/cmhc_graph-1.png" width="960" />

We can clearly see the boom-bust cycles in Calgary that is a major driver of the vacancy rate, and the rents reacting in response to the changing vacancy rate. In Toronto we notice a brief time around 2004 when the vacancy rate was flirting with breaking the 5% barrier where (nominal) rent increases halted, but poor data quality hinders us from finding out exactly what happened. In Vancouver we see consistent rent increases, ranging from moderate to severe at times when the Vacancy rate drops below 1%, only held at bay by rent control. And we notice a nasty looking uptick in same-sample rent growth at the end after several years of very low and dropping vacancy rate.

Going off the CMHC rent numbers, as well as the history of rent changes, we eliminate Vancouver. It's proximity to Seattle it made it a poor choice to start with.
<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/round4-1.png" width="960" />


## … and workers can easily get around — and out of town …

Let's pull in the median commute duration and active transportation mode share.



> Calgary: 21.9% (25.2 minutes), Toronto: 29% (30.3 minutes).

There is no clear winner here, Toronto has a higher active transportation mode share but also higher commute times. The mountains with destinations like Banff and Lake Louise not far and fairly easily accessible give Calgary a slight up in the "getting out of town" race.

## … and there is space and a willingness to pay to play
Let's assume Amazon wants an urban campus, the question of space becomes one of willingness to respond to and accommodate the necessary growth in office space and space for people to live, something that Calgary has been doing quite successfully during their energy industry boom-bust cycles. One would probably be less confident saying the same about Toronto, especially in light of the recent discussion about a single mid-rise condo building in the Annex.


## The Winner: Calgary
That leaves us with a sole candidate, Calgary, a city frequently ranked near the top of global livability indices, situated in proximity to beautiful national parks in the Rocky Mountains, with the recent expansion of their light rail system and downtown bike infrastructure not yet be reflected in our numbers, with an existing and growing pool of tech-related professionals and currently a good amount of office space already built and available. 
<img src="/posts/2017-09-09-amazon-the-canadian-data_files/figure-html/winner-1.png" width="960" />

## Calgary vs Denver
International comparisons are hard. I have lived in both cities, in Denver for a year as a student, in Calgary for a couple of years doing research and teaching. Personally I like both cities, but would prefer Calgary as a place to live. But that's just my personal preference.

## Think I didn't use the right metrics?
Do you feel I unjustly threw out some candidates? Don't trust my numbers? Spotted a mistake? Maybe I used the wrong metrics? No worries. This post is written as an R markdown document with all the code embedded to generate the numbers. Just [grab it from GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-09-09-amazon-the-canadian-data.Rmarkdown) and modify it to fit your preferences!



