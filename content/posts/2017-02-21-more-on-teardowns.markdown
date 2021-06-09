---
title: More on Teardowns
authors: 
  - Jens von Bergmann
  - <a href="https://sala.ubc.ca/people/faculty/joe-dahmen">Joe Dahmen</a>
date: 2017-02-21
categories:
  - Vancouver
  - teardowns
  - Assessment Data
  - zoning
slug: more-on-teardowns
tags: []
description: 'Some more details behind our data story on teardowns.'
featured: 'teardowns_animated.gif'
images: ["https://doodles.mountainmath.ca/images/teardowns_animated.gif"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---


A little over a year ago we ran some analysis
[on teardowns](http://doodles.mountainmath.ca/blog/2016/01/18/redevelopment/)
of single family homes in the City of Vancouver. We used the City of Vancouver
open data to understand why some single family homes got torn down and other's don't.

Relying entirely on open data, there were some important questions that could not
be answered. So together with Joe Dahmen at UBC's School Of Architecture And Landscape Architecture
we came back to the question
and folded in transaction data from BC Assessment to add some more details and rigor.

The result turned out quite similar to what our initial cruder methods came
up with, but it lead to some important refinements.

<a href="https://mountainmath.ca/teardowns"><img src="/images/teardowns_animated.gif" style="width:50%;float:right;margin-left:10px;"></a>
We won't go into the details of the findings here, you can
<a href="https://mountainmath.ca/teardowns" target="_blank" class='btn btn-default'>read the online data story</a>
if you are interested. Instead we will go into a little more details how
the analysis was done and what is still missing.

<!-- more -->

The most critical piece that we added was transaction data, that is
which properties got sold in what year. Almost all properties that got
torn down were associated with a property transaction in the 4 years
around it getting torn down rebuilt.

This allowed us to refine the question from "why did building A get torn
own and building B did not" to ask the same question only considering
transacted buildings.

Conditioning on the most important determinant of a building getting torn down,
the transaction, we could focus in much better on what building-specific
parameters are driving teardowns.


## Variables
We had annual assessment data pegged at July 2005 through July 2016, although
we excluded the July 2016 data for some parts of the analysis as the value
gains that year where
[quite extraordinary](http://doodles.mountainmath.ca/blog/2017/01/16/2017-assessment-data/)
and prices have come down
a bit since then. We felt that this most recent assessment may not be a good
launching point to project the future from.

Unfortunately, the number of variables for teardowns that we have is
quite limited. We only have good data on assessed land values, assessed
building values and lot area. For a very small subset of about 500 buildings
we also have the building age of the building that got torn down. We have
GFA estimates for buildings that got torn down after 2009 through the
[analysis of LIDAR data](http://doodles.mountainmath.ca/blog/2016/03/05/physical-sfh-form-over-time/)
that we did, but those estimates are quite crude and again only cover a portion of our
time frame.

A crucial variable that we are still missing is the actual time of the building
demolition. We inferred this from the time a new building got completed on that
property, but this inevitably introduces noise to the data. It makes it
difficult to pick the right time to calculate the relative building value. Moreover,
there may be the occasional property that got built on vacant land, so nothing got torn down.
This was less an issue for the analysis part, where we had ways to filter out such properties,
but it did cause some problems with the visualization part of the project. We did filter out
some properties manually that we could identify as being built on vacant land within
the timeframe of the visualization, namely some properties on Deering Island.

On top of that, the decision to demolish the building was often made long
before the building got torn down. Waiting times on demolition permits can be quite long, depending
on the property. Having access to building permit data would help sharpen
this variable. The word from the friendly open data folks is that the
City of Vancouver is working on making these public, maybe an FOI request
can help them speed up the process.

## Noise
The most important source of noise in our data is that fact that assessment
data is only accurate *on average*. For particular buildings it can be substantially
off. We suspect that this is one of the reasons why for
buildings that are assessed to be essentially worthless,
the teardown probability tops out at a little above 60%. So someone
paying $2.5 million for a house that is worth only $10,000 to move in and live
in that house makes absolutely no sense. If the building like this did not get torn down,
we hypothesize one of three scenarios:

1. The building was purchased as a pure investment vehicle and rented out
until an opportune time to re-develop or sell the property.
2. The assessment grossly undervalued the building.
3. The building was extensively renovated.

We have looked through the data and have found little evidence that scenario 3 is
playing out in significant numbers. Extensive renovations show up in assessment
data via building value gains and the "year improved". We don't have
data to assess the other two hypotheses.


## Model
Given that limited variables we trained a handful of models on our data to see
how to best predict future teardowns. In all models we used, the relative
building value was the single most predictive variable, accounting for well over
80% of explanatory power no matter what methods we used. Moreover, the
performance of more complex machine learning models was not markedly better
that using a simple logistic regression. Similarly, dropping all other variables
except the relative building value only slightly decreased the skill of our
model.

One way to improve on our model is to use a proper survival analysis that
can better account for data that is only available for certain time frames.
For example, teardown early in our time frame suffer from the shortcoming that
we don't have transaction data reaching back far enough to link the teardown
to a transaction. Or more to the point, be able to compare it to other
transacted properties that didn't get torn down. Similar problems occur
at the end of our time frame, and with variables that are only available
in certain sub time frames.


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