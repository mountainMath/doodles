---
title: Byelection Data
author: Jens von Bergmann
date: '2017-11-21'
slug: byelection-data
categories:
  - Vancouver
tags: []
description: "Results by voting place."
featured: 'vote_geography-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-11-21-byelection-data_files/figure-html/vote_geography-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-11-21-byelection-data_files/figure-html/"
linktitle: ''
type: "post"
---



The election data got posted on the [Vancouver Open Data website](http://data.vancouver.ca/datacatalogue/municipalElectionResults.htm) so we decided to take a very quick peek at how the candidates fared by polling station. Citizens can vote at any station they want, so there is are no voting districts. But proximity to home is probably a large factor in determining where people vote, although some may choose locations close to work or somewhere else convenient. For anyone that wants to refine the analysis, the R Notebook that generated this post [lives on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-11-21-byelection-data.Rmarkdown).






# Vote split by Voting Place
This graph gives an overview how the votes were split at each individual polling station.

<img src="/posts/2017-11-21-byelection-data_files/figure-html/unnamed-chunk-4-1.png" width="960" />

# Most Votes by Voting Place
For each voting place we looked at who got the most votes and plotted the result on a map to get an overview of the geographic distribution.



<img src="/posts/2017-11-21-byelection-data_files/figure-html/vote_geography-1.png" width="960" />
