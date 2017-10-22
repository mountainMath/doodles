---
title: Boomer Exodus?
author: Jens von Bergmann
date: '2017-10-21'
slug: boomer-exodus
categories:
  - cancensus
  - CensusMapper
  - Vancouver
tags: []
description: "Change in size of age groups vs net migration"
featured: 'yvr_age_pyramids-1.png'
images: ["https://doodles.mountainmath.ca/posts/2017-10-21-boomer-exodus_files/figure-html/yvr_age_pyramids-1.png"]
featuredalt: ""
featuredpath: "/posts/2017-10-21-boomer-exodus_files/figure-html"
linktitle: ''
type: "post"
---

The dire home affordability in Vancouver weights heavily on everyone's mind and it seems like we reflexively try to explain everything that is happening, or that we think is happening, though that lens. After we seem to have thankfully left the [meme that millennials are fleeing Vancouver](https://doodles.mountainmath.ca/blog/2017/05/16/lifeblood/) behind, an article [claiming that Vancouver's middle-aged population is leaving](https://beta.theglobeandmail.com/real-estate/vancouver/vancouvers-middle-aged-exodus-raises-concerns-about-citys-economic-future/article36585479/) keeps popping up in my Twitter feed. The data point in the story is that between 2006 to 2016 the City of Vancouver saw a 13% drop in the number of people in the 40 to 44 year age group. And that certainly is a big drop. But contrary to what the article claims this is not evidence that any group of people are "leaving" Vancouver.

# The Paradox
I got curious how my (somewhat biased) twitter feed interprets the 13% drop, so I started a poll.
{{< tweet 921560974422827010 >}} Let's just say the performance was sub-optimal. The correct answer is that Canada overall saw a 14% (13.6% to be precise) drop in the number of people in the 40 to 44 year age group. And that's despite the total population of Canada growing by 11% in that time frame. But this gives me a great excuse to explain what's going on in more detail.

So where are those 40 to 44 year olds going? Nowhere, they are just getting older. The 40 to 44 year old age group in 2006 is the tail end of the boomers. In 2016, these people are 50 to 54 year old, and there are fewer people coming after them to fill the 40 to 44 year old bracket in 2016.



```r
library(cancensus)
library(cancensusHelpers)
plot_data <- get_age_data('CA16',list(C="01"))

ggplot(plot_data, aes(x = Age, y = Population, fill = Gender)) + 
  geom_bar(stat = "identity") +
  age_pyramid_styling +
  labs(title=paste0("Canada 2016"))
```

<img src="/posts/2017-10-21-boomer-exodus_files/figure-html/canada_age-1.svg" width="672" />

There is a reason the boomers are called the "boomers". We can clearly identify the sharp tail as people that were over 50 years old in 2016. Another way to visualize is to follow the size of the 40 - 44 year old age bracket through time. Timeline data is available at CANSIM, and we utilize the convenient `CANSIM2R` package for that.

```r
library(CANSIM2R)
data <- getCANSIM('0510001',showLabels = FALSE) %>% filter(i=="Canada")
ggplot(data,aes(x=t,y=V56)) +
  geom_line(color="blue") + geom_point(color="steelblue") + 
  age_time_styling
```

<img src="/posts/2017-10-21-boomer-exodus_files/figure-html/age_timeline-1.svg" width="672" />

We can clearly see how the boomers age through this age bracket, cresting in 2005 and dropping off quite sharply and flattening out in 2010.


# Some basic demographics
To understand what's going on we need to separate several different concepts:

* Change in size of a fixed age group
* Net Migration of age cohorts
* Mobility by age cohort

These two concepts are often confused, which leads to wrong interpretation of data. The change in the size of an age groups between two (census) years compares different people to one another. The ones that are 40 to 44 year olds in 2006 are different from the ones that are 40 to 44 years old in 2016. Therefore, this gives no information about people "leaving", it just gives some indication how demographics are shifting. And even that it only does half-heatedly. To understand how demographics are changing it is often more useful to look at the change in the share that an age group has out of the whole population. That way we can separate out the changes in an age group from overall population growth.

Net migration on the other hand looks at (net) flows of people. For this, we need to compare 40 to 44 year olds in 2006 to the 50 to 54 year olds in 2016. We'll want to apply mortality rates along the way, but when subtracting the two we get the "net" migration of the original 40 to 44 year old age group between 2006 and 2016. When we do this for Canada, we see that the 40 to 44 year old cohort from 2006 did not go anywhere (on balance), in 2016 there were 4.6% more people in that cohort than would be expected just based on natural death rates.

Mobility looks at how many people (in a given age group) living in a given region lived in the same region 5 years (or some other time frame) earlier. When combined with net migration, this allows us to not just see the net migration, but also the rate at which people of similar ages moved in and out. This allows us to gauge the size of the in and outflow of people that can happen even if the net migration is zero.

# Vancouver
How does all of that fit in with Vancouver? We know that the population in the 40 to 44 year old age group dropped by 13% 2006 to 2016. But how much of this drop is due to net migration, and how much is just because boomers are aging out of this group and there are fewer people in the next age groups further down that are aging into it? This is mostly an academic exercise of aging forward, killing off, and subtracting, but the result is not really relevant. What's generally more interesting is the two separate phenomena: change in size of a fixed age group, and also net migration by age group. 

For example, change in size of a fixed age group is very important for the school board, because this directly effects their enrolment. It can inform policy that can try to adapt to these changes.

<a href="https://censusmapper.ca/maps/731"><img src="/images/net_animated.gif" style="width:50%;float:right;margin-left:10px;"></a>
Net migration can inform us how populations are moving around by age group. This tells us how people, on balance, are reacting to certain stimuli by "voting with the choice of where to live" by age group. 

The 40 to 44 year old cohort in 2006 did experience net out-migration by 5.2% by 2016 whereas Metro Vancouver overall saw a 7% net in-migration. So the article did not get it wrong that some of the people that were 40 to 44 year old in 2006 were leaving Vancouver, the proportion is just smaller than the wording implied. So I am somewhat nit-picking here and this should not be read as a direct critisim of what the article is speaking to, but rather a refinement.

Vancouver is quite interesting that way, as the central region in Metro Vancouver it is a strong magnet for young people in their late teens, their 20s, and very early 30s. After that we see a slight net drain in age groups, and a somewhat stronger drain in the *under 5* age group. To understand what's going it is best to explore using our live [interactive net migration map](https://censusmapper.ca/maps/731), more details on that map can be [found in a previous blog post](https://doodles.mountainmath.ca/blog/2017/05/16/lifeblood/). This map is for the 2011 to 2016 time span, net migration patterns for earlier time frames is very similar. What we can see is, for lack of a better term, the "generational pulse" of our region. At the Metro Vancouver level we see very little net outflow, the only age groups that show a light 1% net drain among the 50 to 60 year olds. But within the region, there is a lot more net migration.

These net migration patterns are quite similar to those in other metropolitan regions, the "generational pulse" can easily be observed in Toronto, Calgary or Montreal, although one has to observe this at the census tract geography as these cities have much more expansive "central" municipalities.

This inter-metro net migration has interesting implications on the relative size of the age groups of the municipalities in the region. We can compare the age pyramids of different municipalities to visualize the effect.

<img src="/posts/2017-10-21-boomer-exodus_files/figure-html/yvr_age_pyramids-1.png" width="864" />

We see that each municipality has it's own demographic fingerprint in terms of the age distribution, the shape of which is formed by net migration patterns, including those introduced by varying birth rates like the baby boomer bump that we can still make out in all of these graphs.


# Takeaway
Change in size of age groups and net migration are two different concepts. They can align at times, essentially when the age distribution is uniform, but often don't. Looking at the Canada-wide change in the 40 to 44 year old age group 2006 to 2016, vs the net migration of the 40 to 44 year old cohort in 2006 compared to 2016 is a great example of that. The size of the age group shrank by 13.6%, but the the age cohort experienced a net in-migration of 4.6%.

Want to refine this further? As always, the code that ran the numbers and made the graphs is embedded in this blog post. Just grab it from our [GitHub repo](https://github.com/mountainMath/doodles/blob/master/content/posts/2017-10-21-boomer-exodus.Rmarkdown) if you want to play with it.


