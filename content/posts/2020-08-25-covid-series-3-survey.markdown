---
title: Covid Series 3 Survey
author: Jens von Bergmann
date: '2020-08-25'
slug: covid-series-3-survey
categories:
  - covid-19
  - CANSIM
description: "A quick tour through Covid series 3 survey data."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-08-25-covid-series-3-survey_files/figure-html/health-risk-concerns-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---



I was browsing the [Canadian Perspectives Survey Series 3](https://www150.statcan.gc.ca/n1/en/catalogue/45250007) on **Resuming Economic and Social Activities During COVID-19** and thought that some of the results were interesting. I don't have time to do a detailed post on this, but thought that others might enjoy a quick series of graphs highlighting some of the result. The survey is only released as microdata, and I have not seen much uptake or reporting other than the high-level results put out by StatCan in The Daily.

StatCan PUMF microdata can be a bit of a pain to work with, StatCan does not include general purpose metadata. It comes as a flat fixed-width file and the metadata needs to get scraped out of language-specific command files. This shows that StatCan still has a long way to go to actually open up their data. The secondary purpose of this post is to share code to parse the SPSS command files to scrape out the metadata needed to read and interpret the PUMF data. The code for the post [can be found on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-08-25-covid-series-3-survey.Rmarkdown).



## Tracing app
Part of my motivation to look at the data was to understand people's attitudes toward the contact tracing app. To start off we can look at how likely people say they will use the app. This is important, as the usefulness of the contact tracing app depends to a large degree on how many people will install it. Research says that that the app will start to become useful when about 15% of the population has the app installed, and a much-cited preprint estimates that starting [at an adoption rate of 60% the app could suppress the epdimeic on it's own without other major interventions](https://045.medsci.ox.ac.uk/files/files/report-effective-app-configurations.pdf). This has often been misrepresented to mean that the app won't be useful below 60% adoption rate, which is false.

The other part about the Canadian contact tracing app I am interested in is privacy concerns. Generally Canadian provinces have botched this badly. Alberta started out with rolling out a contact tracing app with centralized design, that is quite a bit more privacy invasive than our national app (and also was next to useless on iOS). BCCDC went completely overboard and [pitched the possibility of a location based app to BC residents in their covid survey](https://twitter.com/vb_jens/status/1260637672772472833?s=20), which is not just a stupid thing to ask but also serves to poison the well for much more privacy focused (and at the same time more effective) solutions like Canada's national contact tracing app.

Given that, I was [somewhat dismayed that a StatCan survey gave people the option to give *I don't want the government to have access to my location data* as a possible answer](https://twitter.com/vb_jens/status/1294493725100404736?s=20) to why they don't want to use the contact tracing app. But [as others poited out to me](https://twitter.com/chadskelton/status/1294740415581585409?s=20), this might still be good information to have (although I am not convinced it needs to be an offial government survey that asks this question), it's a fine line between collecting information and amplifying misinformation.

But what's done is done, so we might as well look at the data.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-2-1.png" width="768" />

Turns out 55% of respondents are at least somewhat likely to install the app. Not enough to reach the 60% install base, especially when accounting for the fact that only [about 80% of Canadians have a smartphone](https://www.statista.com/statistics/467190/forecast-of-smartphone-users-in-canada/) and not all smartphones can run the app. But it's certainly enough for the app to be useful and help reduce the spread alongside other measures.


Let's check in more detail how comfortable the people that said they were at least *somewhat likely* to install the app are with the data sharing. Of course this is a weird question, it's essentially equivalent to asking how comfortable people are walking around with wifi or bluetooth turned on and thus their MAC address being advertised. But most won't read the question this way and again, I am not sure how I feel about misleading questions being asked on a government survey that could result in lower adoption. But here we go.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-3-1.png" width="768" />

Similarly we can look at the reasons people were *somewhat unlikely* or *very unlikely* to use the app.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-4-1.png" width="768" />

And what do you know, people flocked to the *invasion of privacy* and *don't want government to have my location data* answers. But also very interesting that many answered that they won't install it because they believe not enough people will install it. Some mixture between misinformation about what kind of install base makes this app useful and just circular logic.

As expected, not having a smartphone or data plan also shows up as a reason.

## Vaccines
Another interesting question is that of vaccines and attitudes toward them.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-5-1.png" width="768" />

The good news is that the vast majority of Canadians would get a vaccine it if was available. Let's look at the reasons the others give.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-6-1.png" width="768" />

Some of those unlikely to take the vaccine simply want to wait until they are convinced it's safe, but more aren't confident that the vaccine, whenever we get one and whichever we get, will be safe, or have general concerns about risks and side effects. The percentages of people with these concerns seem a bit higher than the overall anti-vaxxer attitudes in Canada, maybe because of talk about 'fast-tracking' of a covid vaccine.

There are also people that don't think a vaccine is necessary.

And then there are people with pre-existing conditions. And interesting 295,308 people (respondents weighted and scaled to the Canadian population 15 years old or older) that say they think they have already had Covid, which is not out of line with the 104,204 confirmed covid-19 cases in Canada by June 30, the release date of the survey, indicating under reporting cases of up to a factor 3, depending on assumptions about how many may have mis-diagnosed themselves.

## Vaccines vs tracing apps
One interesting question is around attitudes toward vaccines vs attitudes toward tracing apps.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-7-1.png" width="768" />

People that say they are very likely to get vaccinates also said that they were very or somewhat likely to install the contact tracing app. Which is not surprising, given that effective contact tracing can have effects similar to a vaccine. But there are interesting outliers, people that are very likely to get vaccinated but very unlikely to use the contact tracing app. And of course people that are very unlikely to either get vaccinated nor use the app.


## Commute to work
Another interesting question was about changes in commute to work pre and during covid-19.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-8-1.png" width="768" />

The diagonal dominates in all rows and columns except the telework during covid 19 and public transit before covid 19. 

## Precautions
Another interesting question is on what kind of precautions people are taking.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/precautions-1.png" width="768" />

Turns out Canada is really good at washing hands but has failed to evolve with the science to take the same level of precautions against transmission through aerosols.

## Health risk concerns
People are concerned about health risks when resuming various activities as safety measures are relaxed. 

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/health-risk-concerns-1.png" width="768" />

## Fear of being targeted
An interesting set of questions revolve around people being afraid that they are being the target of unwanted behaviours because they may be judged for putting others at risk.


<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-9-1.png" width="768" />

Almost 20% answered Yes to this. Let's look at what their concerns are.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-10-1.png" width="768" />

The main concern people have is that they will be targeted for not wearing a mask. Health conditions that may be mistaken for Covid-19 also rank prominently. 

## Preparing for potential future waves
The way people are preparing for potential future waves is interesting.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-11-1.png" width="768" />

Cancelling travel plans seems to be on top of the list for Canadians, followed by stockpiling and home repairs. Upgrading internet speeds is generally a low concern.

## Economic recovery
Another question was about what people would spend more or less money on as stores and businesses reopen relative to pre-covid spending.

<img src="/posts/2020-08-25-covid-series-3-survey_files/figure-html/unnamed-chunk-12-1.png" width="768" />

It's interesting that in most categories people don't think they will change their spending habits, and generally there are not vastly different numbers estimating they will spend less as the ones estimating they will spend more in that category.

## Next steps
There are more variables in the data that we haven't looked at yet, and there are interesting ways to cross-tab the data. As usual, the code for this post [can be found on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-08-25-covid-series-3-survey.Rmarkdown) for anyone to reproduce and adapt for their own purposes.

