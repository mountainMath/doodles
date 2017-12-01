---
title: Journey To Work
author: Jens von Bergmann
date: '2017-11-29'
slug: journey-to-work
categories:
  - cancensus
  - CensusMapper
tags: []
description: "City of Vancouver commuting and reverse commuting."
featured: 'van_commute.png'
images: ["https://doodles.mountainmath.ca/images/van_commute.png"]
featuredalt: ""
featuredpath: "/images/"
linktitle: ''
type: "post"
---

The last larger dump of census data arrived today with lots of interesting variables. We wanted to have a quick look at commuting data.




# Journey to Work
Journey to work data tells us about where people work relative to where they live.  


We first look at what proportion of the population of Metro Vancouver municipalities lives in the same community that they work in.
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/same_muni-1.png" width="672" />

On CensusMapper we have an [interactive Canada-wide map for that](https://censusmapper.ca/maps/978). As the central municipality, the City of Vancouver has the highest proportion of residents that work in the same community that they live in. Let's take a deeper look at the commute patters for workers that work in the City of Vancouver, as well as those that live there.

Overall there are 344,440 people working in the City of Vancouver, 187,355 of which (54.4%) are living in the City of Vancouver and the rest commuting in from outside the city. Most of these come from within Metro Vancouver, but NA, or NA%, are coming from outside of Metro Vancouver.

The top 15 trip to work destinations outside of the City of Vancouver for workers living inside the city are
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-3-1.png" width="672" />

We can also map Metro Vancouver communities by what proportion of City of Vancouver workers live there.

<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-4-1.png" width="672" />


# Reverse Commuting
Next we look at reverse commuting, that is what municipalities the 88,135 among the 275,490 workers (32%) living in the City of Vancouver that work outside the city work it.

The top 15 trip to work origins outside of the City of Vancouver are
<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-5-1.png" width="672" />

We can also map Metro Vancouver communities by what proportion of City of Vancouver workers live there.

<img src="/posts/2017-11-29-journey-to-work_files/figure-html/unnamed-chunk-6-1.png" width="672" />

# The Flow


Another way to look at the commute data within Metro Vancouver is to make a chord diagram to show the flow of commuters within and between municipalities. To keep things manageable we contain ourselves with the 13 most commuter-heavy communities.

<link rel="stylesheet" href="/widgets/d1_files/chorddiag/chorddiag.css">
<style>
.chorddiag.html-widget svg{
  padding:5%;
}
</style>
<!--html_preserve--><div id="htmlwidget-207f7d1fdfe1c8516509" style="width:700px;height:600px;" class="chorddiag html-widget"></div>
<script type="application/json" data-for="htmlwidget-207f7d1fdfe1c8516509">{"x":{"matrix":[[0,0,0,0,0,0,0,0,0,0,0,0,0,31940,10580,2690,175,2315,2620,6755,1705,2840,11380,4320,15225,25090],[0,0,0,0,0,0,0,0,0,0,0,0,0,2710,12870,385,0,770,2665,1285,195,325,8785,310,3385,1985],[0,0,0,0,0,0,0,0,0,0,0,0,0,2030,1040,11835,45,1620,545,1480,130,230,2630,2180,14775,3425],[0,0,0,0,0,0,0,0,0,0,0,0,0,1195,355,445,1665,115,95,285,185,395,805,1425,960,10295],[0,0,0,0,0,0,0,0,0,0,0,0,0,640,765,630,0,16275,1185,340,90,130,12005,285,13405,885],[0,0,0,0,0,0,0,0,0,0,0,0,0,165,870,55,0,390,11085,120,0,35,4145,60,705,245],[0,0,0,0,0,0,0,0,0,0,0,0,0,3130,2255,850,0,645,805,5830,170,250,2405,645,4770,2640],[0,0,0,0,0,0,0,0,0,0,0,0,0,1580,860,135,25,105,275,335,6675,5445,2540,300,935,3755],[0,0,0,0,0,0,0,0,0,0,0,0,0,1535,675,125,0,195,245,265,3715,7800,2500,255,795,3545],[0,0,0,0,0,0,0,0,0,0,0,0,0,2680,6955,960,0,8005,6745,975,2800,3195,0,705,13225,6630],[0,0,0,0,0,0,0,0,0,0,0,0,0,7145,2040,7155,230,1505,640,2960,490,740,3940,43435,15465,23905],[0,0,0,0,0,0,0,0,0,0,0,0,0,3660,2840,6755,70,10785,1985,2575,210,585,14320,2075,85020,5735],[0,0,0,0,0,0,0,0,0,0,0,0,0,35345,12560,7435,1420,2765,3385,9565,7220,11260,21340,20275,24515,187355],[31940,2710,2030,1195,640,165,3130,1580,1535,2680,7145,3660,35345,0,0,0,0,0,0,0,0,0,0,0,0,0],[10580,12870,1040,355,765,870,2255,860,675,6955,2040,2840,12560,0,0,0,0,0,0,0,0,0,0,0,0,0],[2690,385,11835,445,630,55,850,135,125,960,7155,6755,7435,0,0,0,0,0,0,0,0,0,0,0,0,0],[175,0,45,1665,0,0,0,25,0,0,230,70,1420,0,0,0,0,0,0,0,0,0,0,0,0,0],[2315,770,1620,115,16275,390,645,105,195,8005,1505,10785,2765,0,0,0,0,0,0,0,0,0,0,0,0,0],[2620,2665,545,95,1185,11085,805,275,245,6745,640,1985,3385,0,0,0,0,0,0,0,0,0,0,0,0,0],[6755,1285,1480,285,340,120,5830,335,265,975,2960,2575,9565,0,0,0,0,0,0,0,0,0,0,0,0,0],[1705,195,130,185,90,0,170,6675,3715,2800,490,210,7220,0,0,0,0,0,0,0,0,0,0,0,0,0],[2840,325,230,395,130,35,250,5445,7800,3195,740,585,11260,0,0,0,0,0,0,0,0,0,0,0,0,0],[11380,8785,2630,805,12005,4145,2405,2540,2500,0,3940,14320,21340,0,0,0,0,0,0,0,0,0,0,0,0,0],[4320,310,2180,1425,285,60,645,300,255,705,43435,2075,20275,0,0,0,0,0,0,0,0,0,0,0,0,0],[15225,3385,14775,960,13405,705,4770,935,795,13225,15465,85020,24515,0,0,0,0,0,0,0,0,0,0,0,0,0],[25090,1985,3425,10295,885,245,2640,3755,3545,6630,23905,5735,187355,0,0,0,0,0,0,0,0,0,0,0,0,0]],"options":{"type":"bipartite","width":700,"height":600,"margin":100,"showGroupnames":true,"groupNames":["Burnaby (CY)","Coquitlam (CY)","Delta (DM)","Greater Vancouver A (RDA)","Langley (DM)","Maple Ridge (CY)","New Westminster (CY)","North Vancouver (CY)","North Vancouver (DM)","Rest","Richmond (CY)","Surrey (CY)","Vancouver (CY)","Burnaby (CY)","Coquitlam (CY)","Delta (DM)","Greater Vancouver A (RDA)","Langley (DM)","Maple Ridge (CY)","New Westminster (CY)","North Vancouver (CY)","North Vancouver (DM)","Rest","Richmond (CY)","Surrey (CY)","Vancouver (CY)"],"groupColors":["#440154FF","#481F70FF","#443A83FF","#3B528BFF","#31688EFF","#287C8EFF","#21908CFF","#20A486FF","#35B779FF","#5DC863FF","#8FD744FF","#C7E020FF","#FDE725FF"],"groupThickness":0.1,"groupPadding":0.0349065850398866,"groupnamePadding":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"groupnameFontsize":10,"groupedgeColor":null,"chordedgeColor":"#808080","categoryNames":["Work","Home"],"categorynamePadding":100,"categorynameFontsize":28,"showTicks":false,"tickInterval":10000,"ticklabelFontsize":10,"fadeLevel":0.1,"showTooltips":true,"showZeroTooltips":true,"tooltipNames":["Burnaby (CY)","Coquitlam (CY)","Delta (DM)","Greater Vancouver A (RDA)","Langley (DM)","Maple Ridge (CY)","New Westminster (CY)","North Vancouver (CY)","North Vancouver (DM)","Rest","Richmond (CY)","Surrey (CY)","Vancouver (CY)","Burnaby (CY)","Coquitlam (CY)","Delta (DM)","Greater Vancouver A (RDA)","Langley (DM)","Maple Ridge (CY)","New Westminster (CY)","North Vancouver (CY)","North Vancouver (DM)","Rest","Richmond (CY)","Surrey (CY)","Vancouver (CY)"],"tooltipFontsize":12,"tooltipUnit":"","tooltipGroupConnector":" &#x25B6; ","precision":"null","clickAction":null,"clickGroupAction":null}},"evals":[],"jsHooks":[]}</script><!--/html_preserve-->
<!--iframe seamless src="/widgets/d1.html" width="100%" height="700"></iframe-->
<!--{{< figure src="/images/van_commute.png" title="Commute Flows in Metro Vancouver" >}}-->
<!--script src="/widgets/d1_files/htmlwidgets/htmlwidgets.js"></script-->
<script src="/widgets/my_htmlwidgets.js"></script>
<script src="/widgets/d1_files/chorddiag/chorddiag.js"></script>
<script src="/widgets/d1_files/chorddiag-binding/chorddiag.js" ></script>
<script src="/widgets/d1_files/d3/d3.min.js" ></script>
<script src="/widgets/d1_files/d3-tip/index.js"  ></script>

~~Originally I wanted this as interactive diagram, but could not figure out how to include html widgets into my blog setup. So a static images it is.~~ Ok, I hacked my blog to include the interactive widget.

I think it would be nice to have some interactive and animated maps that allow one to explore commuting patterns. But this will have to wait for another day. As always, the underlying R Notebook that generated this post lives [on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-11-29-journey-to-work.Rmarkdown) for anyone interested in reproducing or adapting this post for a different region or elaborating on it in other ways.
