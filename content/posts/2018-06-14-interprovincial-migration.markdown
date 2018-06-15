---
title: Interprovincial Migration
author: Jens von Bergmann
date: '2018-06-14'
slug: interprovincial-migration
categories:
  - CANSIM
tags: []
description: 'Playing with the cansim package to access and process NDM data.'
images: ["https://doodles.mountainmath.ca/images/interprovincial_migration.png"]
featured: ''
featuredalt: ''
featuredpath: ''
linktitle: ''
type: "post"
---



CANSIM switched over to the New Dissemination Model (NDM) this past weekend. What this means is that we now have better organized CANSIM data. Yay. But it also broke my R package to easily access and process cansim data. Not so yay. Luckily it was an easy fix to switch things over to the NDM, and the cleaning of data gets even easier. And I also build in functionality to access tables through the old trusty cansim numbers. But unfortunately there was no way to automatically keep the table format the same. Some some adjustments are needed for people wanting to run some of my previous posts that utilize cansim data.

# Refreshed `cansim` R package
The [refreshed cansim R package](https://github.com/mountainMath/cansim) is just as easy to use as the old one, and has some added functionality. As an example we will use interprovincial migration data from the last quarter and visualize it as a chord diagram. We ran across this in [this twitter thread](https://twitter.com/trevortombe/status/1007270402949672966) and thought it would make for a good quick demo. For illustrative purposes we include the code in the post instead of hiding it like we usually do.

First we look for tables with interprovincial migration that have origin and destination geographies using the built-in `list_cansim_tables` function (thanks [Dmitry](https://twitter.com/dshkol) for spotting a bug and fixing it!). The first time it is called it will take quite a bit of time as it is scraping through cansim table pages. Hopefully StatCan will provide better APIs for this. Make sure you set the `options(cache_path="some path")` option so that the data will be stored across sessions.


```r
library(tidyverse)
#devtools::install_github("mountainmath/cansim")
library(cansim)
#devtools::install_github("mattflor/chorddiag")
library(chorddiag)

list_cansim_tables() %>% 
  filter(grepl("interprovincial migrants.*origin.*destination",title))
```

```
## # A tibble: 2 x 6
##   title           table  former  geo    description           release_date
##   <chr>           <chr>  <chr>   <chr>  <chr>                 <date>      
## 1 Estimates of i… 17-10… 051-00… Provi… Quarterly number of … 2018-06-14  
## 2 Estimates of i… 17-10… 051-00… Provi… Annual number of int… 2018-06-11
```

We see there are two tables, one annual and one quarterly. Let's use the quarterly data.


```r
table_id <- list_cansim_tables() %>% 
  filter(grepl("interprovincial migrants.*origin.*destination.*quarterly",title)) %>%
  pull(table)

migration_data <- get_cansim(table_id) %>% normalize_cansim_values()
```

```
## Accessing CANSIM NDM product 17-10-0045
```

The `normalize_cansim_values` function from the `cansim` package cleans the data by expressing things as numbers instead of e.g. "thousands", normalizing percentages to be ratios and making inferences about the date format and try to automatically convert dates into R date objects.

To make the chord diagram we cut the data down to the last quarter, clip out the origin-destination matrix and feed it to the chord diagram.


```r
plot_data <- migration_data %>% 
  filter(Date==(.)$Date %>% sort %>% last) %>% # only get the last available quarter
  rename(Origin=GEO,Destination=`Geography, province of destination`) %>%
  mutate(Origin=sub(",.+$","",Origin), Destination=sub(",.+$","",Destination))

chord_matrix <- xtabs(VALUE~Destination+Origin, plot_data)

chorddiag(chord_matrix,groupnameFontsize=10,
          showTicks=FALSE, type="bipartite",
          groupnamePadding=5,
          categorynamePadding=150,
          width=800, height=600,
          groupColors=viridis::viridis(nrow(chord_matrix),option="magma"))
```

<!--html_preserve--><div id="htmlwidget-82f563352f146b10c514" style="width:800px;height:600px;" class="chorddiag html-widget"></div>
<script type="application/json" data-for="htmlwidget-82f563352f146b10c514">{"x":{"matrix":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,6065,1126,494,934,246,774,19,3689,125,468,2992,133],[0,0,0,0,0,0,0,0,0,0,0,0,0,6073,0,1046,145,163,84,383,12,3126,62,512,1186,70],[0,0,0,0,0,0,0,0,0,0,0,0,0,628,435,0,53,25,29,64,4,719,0,81,478,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,520,296,87,0,138,0,498,10,1046,91,361,63,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,329,52,31,124,0,21,196,27,511,60,97,20,16],[0,0,0,0,0,0,0,0,0,0,0,0,0,248,63,47,0,44,0,36,33,40,5,21,10,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,621,357,124,649,311,32,0,31,1403,142,151,89,46],[0,0,0,0,0,0,0,0,0,0,0,0,0,41,13,30,18,0,4,8,0,229,0,52,0,16],[0,0,0,0,0,0,0,0,0,0,0,0,0,4219,3495,1692,883,696,141,1555,121,0,418,4405,1238,111],[0,0,0,0,0,0,0,0,0,0,0,0,0,98,28,13,173,52,6,48,0,294,0,53,13,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,635,638,105,408,161,6,228,28,3232,26,0,104,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1688,465,668,18,63,38,57,13,568,15,89,0,19],[0,0,0,0,0,0,0,0,0,0,0,0,0,103,159,5,0,4,12,19,0,93,13,21,34,0],[0,6073,628,520,329,248,621,41,4219,98,635,1688,103,0,0,0,0,0,0,0,0,0,0,0,0,0],[6065,0,435,296,52,63,357,13,3495,28,638,465,159,0,0,0,0,0,0,0,0,0,0,0,0,0],[1126,1046,0,87,31,47,124,30,1692,13,105,668,5,0,0,0,0,0,0,0,0,0,0,0,0,0],[494,145,53,0,124,0,649,18,883,173,408,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[934,163,25,138,0,44,311,0,696,52,161,63,4,0,0,0,0,0,0,0,0,0,0,0,0,0],[246,84,29,0,21,0,32,4,141,6,6,38,12,0,0,0,0,0,0,0,0,0,0,0,0,0],[774,383,64,498,196,36,0,8,1555,48,228,57,19,0,0,0,0,0,0,0,0,0,0,0,0,0],[19,12,4,10,27,33,31,0,121,0,28,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3689,3126,719,1046,511,40,1403,229,0,294,3232,568,93,0,0,0,0,0,0,0,0,0,0,0,0,0],[125,62,0,91,60,5,142,0,418,0,26,15,13,0,0,0,0,0,0,0,0,0,0,0,0,0],[468,512,81,361,97,21,151,52,4405,53,0,89,21,0,0,0,0,0,0,0,0,0,0,0,0,0],[2992,1186,478,63,20,10,89,0,1238,13,104,0,34,0,0,0,0,0,0,0,0,0,0,0,0,0],[133,70,0,0,16,25,46,16,111,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"options":{"type":"bipartite","width":800,"height":600,"margin":100,"showGroupnames":true,"groupNames":["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon","Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"],"groupColors":["#000004FF","#100B2EFF","#2D1160FF","#51127CFF","#721F81FF","#932B80FF","#B63679FF","#D8456CFF","#F1605DFF","#FB8861FF","#FEAF77FF","#FED799FF","#FCFDBFFF"],"groupThickness":0.1,"groupPadding":0.0349065850398866,"groupnamePadding":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"groupnameFontsize":10,"groupedgeColor":null,"chordedgeColor":"#808080","categoryNames":["Destination","Origin"],"categorynamePadding":150,"categorynameFontsize":28,"showTicks":false,"tickInterval":100,"ticklabelFontsize":10,"fadeLevel":0.1,"showTooltips":true,"showZeroTooltips":true,"tooltipNames":["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon","Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"],"tooltipFontsize":12,"tooltipUnit":"","tooltipGroupConnector":" &#x25B6; ","precision":"null","clickAction":null,"clickGroupAction":null}},"evals":[],"jsHooks":[]}</script><!--/html_preserve-->

The chord diagram is interactive, which makes it easy to read off the various values as needed.

That's it. Feel free to grab the code and play with the data. Analyzing CANSIM data has never been this easy. As always, the code [lives on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-06-14-interprovincial-migration.Rmarkdown) if you want to download it instead of copy-pasting it out of this post.

<script src="/widgets/my_htmlwidgets.js"></script>
<script src="/widgets/d1_files/chorddiag/chorddiag.js"></script>
<script src="/widgets/d1_files/chorddiag-binding/chorddiag.js" ></script>
<script src="/widgets/d1_files/d3/d3.min.js" ></script>
<script src="/widgets/d1_files/d3-tip/index.js"  ></script>

