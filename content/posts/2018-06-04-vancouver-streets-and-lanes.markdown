---
title: Vancouver Streets and Lanes
author: Jens von Bergmann
date: '2018-06-04'
slug: vancouver-streets-and-lanes
categories:
  - Vancouver
  - Transportation
  - land use
tags: []
description: "How much space is taken up by roads right-of-ways?"
images: ["https://doodles.mountainmath.ca/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/street_widths-1.png"]
featured: 'street_widths-1.png'
featuredalt: "Street Widths"
featuredpath: "/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/"
linktitle: ''
type: "post"
---




[Mitchell Reardon](https://twitter.com/MitchellReardon) asked me a question about lanes in the City of Vancouver: "Do you happen to have a figure (or quick way to calculate) the number of laneways in Vancouver, and the amount of space they take up?" I have [looked at the overall space taken up by roads before](https://doodles.mountainmath.ca/blog/2016/02/29/land-use/) using the Metro Vancouver land use dataset, but never looked just at lanes. But that's easy enough to do thanks to [the streets package in Vancouver's Open Data Catalogue](http://data.vancouver.ca/datacatalogue/cityStreets.htm). So I decided to run the numbers. And write up a quick blog post for posterity, in case someone has questions or wants to refine this.

Given the sheer mass of land dedicated to streets right-of-ways in Vancouver we should be paying a lot more attention to this. Transportation corridors can be a great resource for public space and even parks as Vancouver's ratio of park space to people is slowly declining. The Arbutus Corridor is just the latest example of how a transportation corridor can be repurposed, and the proposals on how to shape the individual sections looks amazing.

You should also check out [Mitchell's article in Spacing](http://spacing.ca/vancouver/2018/06/04/alleys-laneways-life-buildings/) on lanes, the space they take up, and what else could be done with some of that space.





# The Streets
The dataset distinguishes three types of streets, "city streets", "lanes", and "non city streets". Let's take a look what these are.



<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/all_streets-1.png" width="864" />

We see that non city streets are private strata roads (e.g. Champlain Heights or Tugboat place) or ministry roads like Highway 1 or the roads in Stanley park. We also not that the dataset includes some roads outside of CoV, including the ones in Musqueam 2 that in many cases is included in CoV planning. There is a judgement call to be made if we should include Musqueam in our analysis, we did include it in our previous post. (Of note here is that the Metro Vancouver land use dataset did not include non city roads.) But Mitch's question just mentions Vancouver, so let's stick with that for this post.

<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/cov_streets-1.png" width="864" />

# Road ROW widths
To understand how much space the roads right of ways take up we need to know how wide each road segment is. Conveniently enough the dataset has information on that. Unfortunately, the individual road segments aren't labelled, but the widths dataset consists of points at which measurements (or estimates) were taken. We can fold those in to label the segments that we can identify that way. It's a bit messy as the location of the measurements do not exactly coincide with road segments. We take the approach that each measurement applies to exactly one road segment, the one closest to it.

This kind of matching gets messy (and computationally expensive) fast, [check the code]() if you need to know the details of how we wrangled the data.





The following gives an overview of the result of our matching process.

<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/have_widths-1.png" width="864" />

It turns out that we have very good information on lane widths, ok information on regular city streets and poor information on non-city streets. In fact, it seems likely that the city does not have any data on the width of non-city streets and the few we found are due to faulty assignments in our matching algorithm.

One way to fill in the gaps is to assign the average width of the roads that we do know the width for to the unknown ones for each street type. Here is what our algorithm found.


|Type            |Use                |Have Width Data |Total Length |Average Width |
|:---------------|:------------------|:---------------|:------------|:-------------|
|city street     |Arterial           |53%             |222.5 km     |25.2 m        |
|city street     |Closed             |100%            |0.4 km       |20.1 m        |
|city street     |Collector          |50.1%           |41.2 km      |22.3 m        |
|city street     |Leased             |100%            |0.2 km       |20.1 m        |
|city street     |Recreational       |100%            |0.1 km       |15.2 m        |
|city street     |Residential        |49.2%           |1,079.4 km   |19.5 m        |
|city street     |Secondary Arterial |51.2%           |91.2 km      |22.5 m        |
|lane            |lane               |98.8%           |774.6 km     |6 m           |
|non city street |non city street    |4.38%           |123.4 km     |17.4 m        |





# Mapping Widths
The last thing to do is to to get a clear handle on Vancouver's streets based on their width. Before we get there we want to take stock of the road widths data we have derived so far.

<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/width_histogram-1.png" width="480" />

We can also represent this visually on a map.

<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/street_widths_color-1.png" width="864" />

# Area Covered by Streets
With the missing widths estimated by using averages for each type we can now compute the total area each street type takes up, and what ratio of total Vancouver land area that is. We have to be a little mindful how to do this properly. Our street segments connect at the centre lines. If we just multiply the length of each segment by it's width we will count the intersections double.

A cleaner way to do this is to turn the street network into a polygon by buffering each segment with half the street widths and bake this into one big polygon in which any overlapping areas will only appear once. That won't allows us to separate out the area taken up by lanes though, which was the original question. But that's easy to fix, we just need to do this procedure separately for each street type and then union, intersect or take differences depending on what question we want answered. We won't distinguish between city and non-city streets for this, but separate out lanes. And we will also refine the total length of lanes calculation by only counting the length of the lanes up to the road right-of-way instead of to the middle of the road.





|Type           |Length    |Area       |Share of City Land |
|:--------------|:---------|:----------|:------------------|
|Lane           |678.6 km  |4.078 km²  |3.5%               |
|Regular Street |1558.3 km |29.013 km² |25.2%              |
|Total          |2333 km   |36.583 km² |31.8%              |


One should emphasize again that this is road right of way, not just the paved surface area. It includes sidewalks, nature strips and [encrouchments](https://twitter.com/vb_jens/status/745749345291513856).

The individual street types add up to a total area of 33.091 km² covering 28.8% of City of Vancouver land area. Note that this is a slightly different result from what we got [previously using Metro Vancouver land use data](https://doodles.mountainmath.ca/blog/2016/02/29/land-use/), with the difference being explained by  Metro Vancouver land use data not counting non-city streets and including Musqueam 2.

Lastly we can map the lane and street polygons to get a visual representation of the actual area taken up by the roads right of way.

<img src="/posts/2018-06-04-vancouver-streets-and-lanes_files/figure-html/street_widths-1.png" width="864" />

As always, the R Notebook underlying this post [lives on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-06-04-vancouver-streets-and-lanes.Rmarkdown). Download it to reproduce this, or modify it to fit your purposes.
