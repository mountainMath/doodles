---
title: Teardowns and Emissions
author: Jens von Bergmann
date: '2018-05-23'
slug: teardowns-and-emissions
categories:
  - Assessment Data
  - cancensus
  - cmhc
  - CANSIM
  - land use
  - Vancouver
  - zoning
tags: []
description: "Analysing the impact of Vancouver's teardown cycle on carbon emissions."
images: ["https://doodles.mountainmath.ca/posts/2018-05-16-teardowns-and-emissions_files/figure-html/middle-finger-1.png"]
featured: 'middle-finger-1.png'
featuredalt: ""
featuredpath: "/posts/2018-05-16-teardowns-and-emissions_files/figure-html"
linktitle: ''
type: "post"
draft: true
---



Last year we took a detailed look at [Single Family teardowns in Vancouver](https://mountainmath.ca/teardowns), that is houses in RS or "Single Family" zoning that got torn down. We focused exclusively on those homes in RS zoning because these have to be replaced by another, often  bigger, Single Family home. Using historical data we build a probabilistic model to predict future teardowns in Vancouver. If you haven't taken the time yet to read through the data story, you [probably should do that right now](https://mountainmath.ca/teardowns). The rest of this post assumes the reader is familiar with the concepts explained in the data story.

<a href="https://mountainmath.ca/teardowns"><img src="/images/teardowns_animated.gif" style="width:50%;float:right;margin-left:10px;"></a>
Now the second part of this work, taking our understanding of the land economics of teardowns and our teardown predictor, and investigated the impact on CO2 emissions. There are two opposing mechanisms at work. A new home starts out in a deep carbon hole dug by the embodied energy associated with the teardown/rebuild process. But these homes are more carbon efficient than the ones they replaced, so over time they will come out net carbon-positive. In simplified form the question is how long does it take to dig out of the hole and will these new homes stay around long enough before the teardown cycle again rolls over them?

Our paper, co-authored with [Joe Dahmen](https://sala.ubc.ca/people/faculty/joe-dahmen) and Misha Das that just got [published in Energy and Buildings](https://www.sciencedirect.com/science/article/pii/S0378778817325549) shows that it's complicated. 

## TL;DR
Single Family homes built to current emission standards will not survive long enough in order to pay back their carbon debt due to teardown/rebuilt. Homes built to CoV 2025 emission standards will generally survive long enough to come out net carbon positive, although this is only true for the first iteration of the teardown cycle. 

The teardown index links carbon emissions to land value changes. For every 1 percent increase in land values we expect to see an additional 130 thousand tons of emissions. However, a flat or even a falling market does not mean a stop in teardown-related emissions, much of the dynamic is already baked in through decades of continued land appreciation.

Caution should be exercised when trying to generalize the findings to other cities, the results depend to a large degree on Vancouver's land economics, as well as the specific emissions profile of the current building stock and the emissions regulations moving forward.

The main takeaway is that accounting for embodied carbon is an essential step in understanding overall emissions, and should be part of any policy that aims to reduce emissions. 

# What the paper did and did not look at
The paper focuses on the scenarios where the predominant form of upgrading low value housing stock is by teardown/rebuilt.
An alternative scenario that one usually considers in this context is deep emission retrofits, but according to permit data these scenarios are relatively rare in Vancouver. Another fairly Vancouver-specific scenario, the "character revitalization", does not save much carbon compared to a teardown/rebuilt, and because of that we did not consider it as a separate category.

The paper does not touch on the difference between energy and carbon. It focuses entirely on carbon, the reason being that this is what the City of Vancouver regulations target. In BC our electricity is very low in carbon, which means that a home heated by electricity could have high operating energy but low operating carbon emissions. Focusing on carbon instead of energy effectively takes the view that energy is local. We can take a more global view and consider that more energy efficient buildings in Vancouver, so buildings using less electricity to heat, will lead to lower carbon emissions elsewhere because that saved electricity can be exported to areas that have a more carbon-intensive energy mix and thus reduce the need for more carbon-intensive electricity there. This point of view is beyond the scope of our paper.

Things get complicated really fast when starts to consider embodied carbon in policy. Only considering operating carbon is the much simpler first step. All we need to consider is a single building project. If we build the building to a higher emission standard we know exactly how much carbon we will save per year compared to a reference building. As such the City of Vancouver building standards have been effective at reducing (operating) emissions. Adding in embodied carbon significantly broadens what we have to consider. There are some building specific aspects, for example the carbon intensity of materials used in the building. But we very quickly get into general land-use questions.

The scope at which questions about emissions are considered matters. A lot. At the scope of a single building project, all that counts is operating (and recurring) emissions, and we have quite forward looking policy in Vancouver. 

If we broadened the scope to think of electricity as being traded across provincial and state/country boundaries, we might want to strengthen the standards to target energy and not just emissions.

The paper broadens the scope to look at individual parcels and keeping zoning fixed. At that level we have to take embodied carbon into consideration and we see, given our teardown cycle, that embodied carbon significantly impacts the savings our operating emission standards achieve, and in many cases dominate in the sense that simply leaving older and less efficient buildings remain can be preferable to replacement with more carbon efficient buildings.

That scope is also artificially narrow, but that's how research works. A question gets divided up into small pieces that get carefully examined one by one. If we think more generally in terms of carbon emissions and policy implications, we need to go beyond looking at single lots with fixed zoning and also consider land use in the City and the region. In fact, some of these parameters already got loosened, after the writing of the paper the City of Vancouver has changed zoning to allow infill on a subset of single family lots. This will likely have an effect on the teardown probabilities, although not enough time has passed yet to estimate, or even take a guess at, how big this effect will be. It will be interesting to observe this moving forward.

The purpose of this blog post is to explain some of the findings of the paper in more general terms and position them in the broader context of land use and growth.

# Emissions and Land Use
There is a large body of literature discussing the impact of land use change on carbon emissions. Much of that focuses on impacts of converting greenfield of various type to residential, industrial or commercial use, but there is also a fair amount of work looking at the impacts of built form on emissions, looking through the lens of buildings, transport or both. While generally people seem to find lower emissions for both transport and buildings in higher density forms, the findings are often quite context-specific and don't easily generalize across continents, climate zones, countries or even cities.

While discussion around the general relationship between land use and emissions are not new to Vancouver, a more detailed look at the interplay between policy, land use, and building and transportation related emissions in the Vancouver context would be beneficial. We can't do all of this in this post, where we will just be scratching the surface regarding these questions.

## Growth
What breaks many of our assumptions is that Vancouver is growing. Quite substantially so, [current projections](http://www.metrovancouver.org/services/regional-planning/PlanningPublications/TableA1-PopDwelUnitEmpProjforMVSubregMuni.pdf) add about 1 million people to our 2.5 million region by 2041, 130,000 of which are projected to settle in the City of Vancouver. Growth projections are hard (and always wrong), and may well turn out differently, especially in regard to where in the region the growth will land. Current plans, with a much lower growth rate in the City of Vancouver compared to the rest of the metropolitan region is sure to put more pressure on housing in the centre of the region.

In terms of emissions this means that we are looking at a scenario where we have to create new dwelling units to accommodate that growth. So next to worrying about how we maintain, renew and upgrade our existing building stock and what the implications on emissions are, we also need to consider how we will accommodate the population growth and it's impact on emissions. Which gets complex very fast.



The landscape this is set against is that currently 67% of our residential land use is zoned RS, a share that increases to 79% when we add in the RT zones and First Shaughnessy that have similar densities. if we add in land taken up by single family or duplex homes outside of these zones the share jumps to 81%, but all of these areas combined house less than half of the population. On a basic level, the question that this opens up is how we want to grow as a city (and a region), squeeze new housing into a few sites outside of or on the fringes (along the arterials) of RS, RT and FSD zoning, or allow denser housing forms within what [Nathan Lauster called the Great House Reserve](http://www.temple.edu/tempress/titles/2418_reg.html).

Vancouver has strong population growth and most sites already have buildings on them. In that situation we will have to densify by tearing down some buildings. What really matters from a systems perspective is our ability to add new units while keeping emissions as low as possible. So we need to minimize the ratio of demolitions to new construction. 


## RS zoning
Vancouver Single Family (RS) zoning is more complex than the name might suggest. Before we dive deeper into the teardown and construction data we should take a moment to survey the current landscape. Current RS zoning allows for a basement suite and a laneway house, according to 2016 census numbers and BCA roll data about 42% of Single Family homes (inside and outside of RS zoning) have secondary suites.

We finally have detailed permit data available for the City of Vancouver, but only for 2017 onward. While permit data does not directly correspond to what is happening on the ground, it gives us a much better proxy than what we had before to what is actually getting built.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-2-1.png" width="864" />

This shows that the landscape of building in RS is a lot more complicated than just teardown/rebuilts, we build almost as many laneways as we are tearing down and rebuilding main houses. Laneways are their own detached houses on single family lots (and are counted as separate "Single Detached" houses in the census, assuming the census found them) and typically have between 700 and 1,000 sf of living space.

Looking at the permit value we should point out that this reflects the building value of the newly built home, our [teardown data story](https://mountainmath.ca/teardowns) has more detailed data on how the building values of new builts relate to underlying land values. The permit value indicate a clear bias of secondary suites toward less expensive construction. Folding in what we know about how this relates to land values, namely that permit value tends to be proportional to land value, explains some of the clear geographic bias of suites in our building stock that is evident in census data.

Suites are a bit of a Schrödinger's cat of our building stock, and suites are the most likely type of housing to register as unoccupied in the census [as we have explained before](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/). The pure existence of a suite does not mean we have actually added a dwelling unit, the suite may be "offline" or absorbed within the main unit. Suites are also [hard to track through time](https://doodles.mountainmath.ca/blog/2017/12/11/some-thoughts-on-the-supply-myth/), most estimates rely on census counts that are better at discovering unpermitted suites. But changes in the count of suites in the census could stem from new suite conversions or new builts with suites, as well as the census simply getting better at finding suites with each census. Permit data may indicate that there may be a 4:3 equilibrium in suited vs unsuited homes, but this does not take into account what these homes replace, how changing market conditions will effect this ratio (given the bias against higher valued properties), and the number of suite conversions or reversions. 

Going by permit data we have been starting 1,247 houses in RS zoning in 2017, where only the 575 laneway homes and possibly a slight increase in suites have been actually adding dwelling units. At the same time, the population in RS zoning has actually [stagnated or even slightly dropped between the 2011 and 2016 censuses](https://doodles.mountainmath.ca/blog/2017/03/06/rs-population-change/), the addition of new dwelling units was not large enough to counter-act the trend to smaller household sizes. All the while the City of Vancouver overall grew by 4.6%, and all that growth landed outside of the RS zones.

What ultimately matters is less the built form on the ground, but more how people actually use these homes. The following graph shows the "Suite Index" in Vancouver. Broadly speaking the suite index shows the share of single family lots that are suited, but it refines that concept to only focus on those that are actually occupied. So we count a suited home with an unoccupied suite only as half. Areas with fewer than 50 (occupied) single family lots are greyed out.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-3-1.png" width="864" />


The bias of (occupied) suites in areas of lower land values is striking, and this helps explain that the west side has been losing population between 2011 and 2016, and in fact the east side has seen a small (~0.5%) population gain during that time frame. 

## Emissions
Now let's tie all of this back to emissions. Vancouver is growing, and we need to build more homes. And building homes causes emissions. So do the induced transportation patterns. We are probably better off if people live close to their jobs and walk, bike or take transit to work. Or at least drive shorter distances. Embodied energy in buildings can be very roughly approximated by the weight of the building. Concrete is heavy, and emits a lot of carbon in the curing process. From an emissions perspective we want to move away from concrete, but concentrating growth in the relatively small area outside of RS, RT and FSD in Vancouver means that we have to build taller buildings and generally rely more on concrete.

At the same time we should be focusing our building activity on actually adding units. Tearing down a single family home and building a 6-plex in it's place will accrue a fair amount of embodied carbon debt, but tearing down the home and replacing it with yet another single family home, and accommodating the growth of the remaining units by adding a floor to a highrise accumulates a larger carbon debt.

The single family teardown cycle is chiefly responsible for Vancouver's ineffectiveness of adding dwelling units. Vancouver has been seeing a fair amount of construction, but CMHC estimates that for each five units built in Metro Vancouver one gets torn down. StatCan has published a new data series starting at the beginning of 2018 with monthly permit data, where we can roughly reproduce this relationship, keeping in mind that we only have two months of data right now, so we should expect quite some volatility.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/middle-finger-1.png" width="864" />

Comparing five metropolitan areas we clearly see the relatively high rate of demolitions like a middle finger held to the face of record construction levels. The primary target for reducing embodied carbon emissions is to shrink the size of this middle finger. And at the same time transition to lower carbon building materials and built form that accommodates them. While this is based on only 2 months of data, the Metro Vancouver demolitions to completions ratio in this graph matches longer term data that we now turn to.

To better understand the nature of the middle finger, we can take annual demolitions data from the [Metro Vancouver Housing Databook](http://www.metrovancouver.org/services/regional-planning/PlanningPublications/MV_Housing_Data_Book.pdf) and compare that to completions data from CMHC. The demolitions data originates mostly from Statistics Canada and has some data quality issues, but it's the best we have.



<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-5-1.png" width="864" />


We can plot the quotient of demolitions to completions to better understand how these two relate.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-6-1.png" width="864" />

The 10 year average is indicated by the dashed horizontal lines, Burnaby and Vancouver are both above the Metro Vancouver average. (A bit of caution should be exercised for Richmond, demolitions data from Richmond comes directly from the City of Richmond and not via Statistics Canada and the difference in methods may cause problems when comparing data.)

From here we can take a closer look at what is causing the high demolitions to completions ratio of about 1:5 in the City of Vancouver by drilling into what types of housing get completed and torn down.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-7-1.png" width="864" />

We see that ground-oriented demolitions and completions tracked very well until about 2011, the difference can be explained by Laneway completions as the following graph shows, townhomes and rowhouses might have a small impact too.

<img src="/posts/2018-05-16-teardowns-and-emissions_files/figure-html/unnamed-chunk-8-1.png" width="864" />

The majority of demolitions in the City of Vancouver were single detached homes to be replaced by another single family home. This part of our construction is unproductive in the sense that it does not add to our dwelling stock. These are chiefly responsible for our "demolitions middle finger", although the most recent uptick in apartment demolitions in Vancouver is something to closely watch.

<!-- ## Burnaby -->
<!-- Before we conclude we want to have a quick look at Burnaby, which has the highest demolitions to completions ratio in the region, and check the numbers by type of dwelling. -->



<!-- Again ground-oriented construction and demolitions almost cancel out, but Burnaby has a much higher apartment demolitions to constructions ratio than compared to Vancouver. -->

# Conclusion
Embodied carbon matters. A lot. And we should start tracking embodied (and recurring) carbon, and have a robust discussion in Vancouver on how to move forward. Carbon is not our only problem of course, affordability is the big problem that always peeks over our shoulder no matter what we are doing. We need smart ways that attack both these problems.

Looking at building materials is one part, recent advances in CLT may well play a role in this. CLT promises a reduction in carbon, shorter completion times, and lower cost compared to traditional concrete construction. And higher durability and stability compared to traditional wood.

But the biggest part in this is probably land use. Allowing denser housing in RS (and RT and FSD) can spread growth more evenly throughout the city, reduce our reliance on concrete, significantly lengthen our teardown cycle by putting more valuable buildings on our land (and by stratification), and reduce the size of our demolitions to construction middle finger.

As always, the code underlying the analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-05-16-teardowns-and-emissions.Rmarkdown) for anyone to reproduce or adapt for their own purposes.


<script>
function resetImages(){
  var a=$('img');
  for (i=0;i<a.length;i++) {
        var img=$(a[i]);
        imgsrc = img.attr('src');
        if (imgsrc.slice(imgsrc.length-4)=='.gif') {
            img.attr('src', '');
            img.attr('src', imgsrc);
        }
    };
    setTimeout(function(){
        resetImages();
    },25000);
}
setTimeout(function(){
    resetImages();
},25000);
</script>
