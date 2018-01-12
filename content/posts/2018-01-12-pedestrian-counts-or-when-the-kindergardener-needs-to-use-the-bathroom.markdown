---
title: Pedestrian counts, or when the kindergardener needs to use the bathroom
author: Jens von Bergmann
date: '2018-01-12'
slug: pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom
categories:
  - Surrey
  - Transportation
tags: []
description: "Beg buttons."
featured: 'proximity-graph-1.png'
images: ["https://doodles.mountainmath.ca/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/proximity-graph-1.png"]
featuredalt: ""
featuredpath: "/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html"
linktitle: ''
type: "post"
---



Two days ago [we took a first look at motor vehicle traffic counts](https://doodles.mountainmath.ca/blog/2018/01/09/school-traffic/), now it is time to turn to pedestrian lights. Everyone knows the "beg buttons" that pedestrians need to push for the pedestrian signal to turn green. If you forget to push the pedestrian light might stay red even if parallel motor vehicle traffic has a green light, all in the name of efficiency of motor vehicle traffic.

# Beg buttons
The only good thing about beg buttons is that they leave data traces, and we want to see if we can extract useful information from them. But there are some challenges. Unlike the traffic light induction loops, the beg buttons don't count pedestrians. They count "begs". So the kindergardener that really needs to use the bathroom and keeps "begging" in half-second intervals will easy register upward of 100 begs in the system, while the 50 zen-like people lining up at the light where only the first one registered a single beg counts as 1. Some of these issues could be resolved with fine temporal resolution of the data, but [Surrey's data](http://data.surrey.ca/dataset/traffic-loop-count) comes aggregated to 15 minute intervals. That still gives us some way to account for the kindergardener hopping from one leg to the other by making some assumptions about signal cycle frequency and capping the counts. So let's see where this gets us.

# Begs
One good thing about blog posts is that more knowledgeable people than me add information. [Chad Skelton added information about school start and end times](https://twitter.com/chadskelton/status/950989370462420993), and the friendly folks at [Surrey Open Data](https://twitter.com/SurreyOpenData) hooked me up with their traffic engineer in charge of the data who explained to me how to extract the beg button data. We will gloss over the details, if you need to know you are probably better served to [look at the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom.Rmarkdown) than to read through my ramblings.






Using the same methods as in our [previous post](https://doodles.mountainmath.ca/blog/2018/01/09/school-traffic/) we take begs from Tue, Wed, Thu for three weeks prior and post school start this past summer.

<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/unnamed-chunk-3-1.png" width="864" />

The difference between the days before and after the start of school is quite pronounced, we average further over the three weekdays to get a cleaner picture.

<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/unnamed-chunk-4-1.png" width="864" />

The start of school stands out even more in pedestrian begs than in motor vehicle traffic, although the overall numbers are much smaller. The spikes around the school start time, which is between 8:30am to 9am depending on the school, as well as around pickup time, which varies between 2:30pm and 3pm, are very visible.

# Schools
Just like before we want to refine this by adding in proximity to schools as another variable.





We divide beg buttons into two groups, one within 200m of a school and the other more than 200m away from schools. 




<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/unnamed-chunk-7-1.png" width="672" />

Armed with this data we can run our analysis separately for the two types of beg buttons.

<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/unnamed-chunk-8-1.png" width="864" />

For all weekdays we see that the spike in begs is significantly more pronounced in proximity to schools.

<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/proximity-graph-1.png" width="864" />

Aggregating over all three workdays we also notice a another distinct peak between 11am and 12pm. It is less pronounced than the dropoff and pickup peaks and we have no intuition what might cause this, but maybe someone else knows.

# Filtering out the urgency
So far we have only looked at the total number of begs, it's time that we alleviate the problem of the kindergardener in need for a bathroom. The maximum begs in a 15 minute window in our dataset is 482 begs. We feel the pain of the kid that pushed that button and sincerely hope they reached the bathroom in time. The data mess this caused is fairly simple to deal with in comparison. [NACTO pegs the ideal traffic cycle length in an urban setting at 60 to 90 seconds](https://nacto.org/publication/urban-street-design-guide/intersection-design-elements/traffic-signals/signal-cycle-lengths/), so let's just assume that the signal cycle length is 1 minute. That means if you just missed the green light, you will have to wait a minute for the next green. So our 15 minute window has at most 15 green phases. Then we can transform our unit of "begs" to an estimated number of "pedestrian crossing cycles", that is cycles where at least one (and possibly more than one) pedestrian is crossing by capping the number of begs to 15. In other words, assuming a 1 minute signal length we are trying to count our 50 zen-like people the same way as the kindergardener in need of urgent relief.


<img src="/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom_files/figure-html/unnamed-chunk-9-1.png" width="864" />

So even just looking at (an estimate of) pedestrian cycles we notice an uptick during school days, that is more pronounced closer to schools.

# Summary
The great news is that children still walk to school! The number might be lower than we would like, but it's big enough to show up in data. And the relative effect is larger than the one in motor vehicle traffic, which probably means that generally we drive too much.

As always, the code to reproduce this analysis is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2018-01-12-pedestrian-counts-or-when-the-kindergardener-needs-to-use-the-bathroom.Rmarkdown) for anyone interested in reproducing or refining the methods.
