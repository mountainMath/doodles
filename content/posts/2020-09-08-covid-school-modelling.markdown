---
title: Covid school modelling
author: Jens von Bergmann
date: '2020-09-08'
slug: covid-school-modelling
categories:
  - covid-19
tags: []
description: "Looking at the impact of different test, trace and isolation protocols."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-09-08-covid-school-modelling_files/figure-html/tti-comparison-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---








BC schools are about to restart, and there is a high level of anxiety among parents and teachers. In this post I want to

* outline some common concerns, and
* run some modelling adapted from the [University of Washington network-based model](https://github.com/ryansmcgee/seirsplus) to test the relative effectiveness of various test, trace, and isolate (**TTI**) scenarios.

## Cases in schools
It is important to understand that there will be cases at schools. Quebec already has [over 180 schools](https://www.covidecolesquebec.org/liste-alphabtique) with reported cases, Ontario had over 7 on their first day of school. Even in Metro Vancouver [we already had an exposure at a school](https://globalnews.ca/news/7321613/covid-19-exposure-west-vancouver-school/) that started a week early. 

But this is not in of itself alarming. We need to distinguish between two types of cases, 

* external introductions, and
* transmissions at school.

The former is inevitable, given our current levels of community spread. It will lead to school disruptions because it forces some children and teachers into precautionary quarantine. But external introductions are not a reason why we should worry about sending kids back to school.

The second, transmissions at school, is more concerning as it means that schools are contributing to an accelerated spread as children are carrying the infection back into their homes and out of the school community. The possibility of transmissions at schools is at the core of everyone's concerns.

There are plenty of examples of outbreaks at schools, [including in Canada](https://montrealgazette.com/news/coronavirus-infects-nine-of-11-students-in-trois-rivieres-classroom). And more recently there have already been two outbreaks at Quebec schools after reopening, including one where [four teachers tested positive](https://www.cbc.ca/news/canada/montreal/covid-polyvalente-deux-montagnes-polyvalente-charlesbourg-1.5705978). The question is if the BC back to school protocol is enough to prevent in-school transmissions.

Let's go through some of the main concerns people have about BC's school reopenings.

## Concerns
Provincial guidelines cap learning group sizes at 60 students for elementary and middle schools and 120 for high schools, where the decision to allow larger cohort sizes for older students seems to be oriented more on current school workings than epidemiological considerations.

Much of the implementation details have been offloaded to local school boards, while the province is not making critical information like community spread rates available. 

The province hasn't released modelling that informs the school reopening, and implementation details of how the province plans to detect and manage outbreaks are fuzzy. This makes it difficult to independently evaluate the reopening plan.

### Community spread
The level of community spread is the most important factor in setting guidelines for school reopening, but unlike other provinces BC is not making community spread statistics available at finer geography. The closest we have is daily case numbers at the Health Authority geography, as well as two-week averages of new daily cases at the Health Region geography that (I am guessing) will get published every 2 weeks in image form. We also have provincial level data on new cases by symptom onset date and type of exposure published occasionally in the surveillance reports in image form. None of this is sufficient to make informed decisions at the school district level in our environment of rising case numbers, let alone make adjustments for individual schools within a school district that may face a higher risk. (And don't get me started on the broader Covid data issues in this province.)

Province wide we see that weekly case numbers have been rising, and new confirmed cases are now higher than they were in spring when schools initially closed down and later reopened under stricter rules than now. But our testing protocol has since changed, and we were likely missing more cases back then than we are now. 

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-2-1.png" width="672" />



Apart from higher numbers, we are also seeing higher share of cases being school-age children. Children are still under-represented in case counts, but this may partially due to children having a higher share of asymptomatic cases and even symptomatic cases generally experience much milder symptoms and might not seek testing. 

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-4-1.png" width="672" />

### Implementation details
Modelling school reopening is hard, a detailed understanding of individual level virus transmissions in the school setting is still missing. What we can do is

* run relative modelling scenarios to understand what kind of interventions, ranging from cohort sizes to mask policies, and to test, trace and isolate (TTI) protocols, compare to one another in likely reduction of spread, and
* look at other regions that already opened schools and learn from their mistakes.

The province seems to be betting on the second option, at least I have not seen any official models looking at different school protocol implementations. In particular, provincial health officials have been pointing at Germany as one of the places they are monitoring. And indeed, the general school guidelines outlined above are in line with what we see in Germany, and so far there have been only a few transmission clusters at German schools, and they got under control fast.

For example, in one school [a teacher tested positiv after developing symptoms](https://www.berliner-kurier.de/berlin/corona-ausbruch-in-der-schule-elf-infizierte-an-spandauer-gymnasium-li.101233) which triggered broad testing of 120 students, turning up 10 infected students across three cohorts. All of the infected students were taught by the infected teacher and none of the showed symptoms at the time of the test. The positive students triggered further testes and contact tracing outside of the school network without any new cases showing up. The school moved to online learning for a week and all students are set to get re-tested before returning to in-person learning.

Implementation details matter, and and from the example we see that philosophically Germany is taking a very different approach to TTI than BC has done. To highlight the difference, it's worthwhile to look at how BC has been approaching outbreaks at Long Term Care facilities. BC has moved early to prevent caregivers from working at multiple Long Term Care centres, which has cut the spread between centres and is probably the most important intervention to reduce the number of outbreaks. But in managing outbreaks once they occur provincial health officials have repeatedly insisted that they don't want to test non-symptomatic staff and residents. The strategy has been to increase monitoring for symptoms, and then isolate and test symptomatic people only. As a reason [officials have been pointing to a false negative rate of 30% of the PCR tests](https://twitter.com/RonaldNHughes/status/1302472144664764417?s=20) (which strikes me as a tad high but that's besides the point), so PCR does not give conclusive answers on who is infected and who isn't. Without going into details, claiming that one should pass up on the option to identify 70% of infected cases early, especially in a high vulnerability environment, defies logic. It's [a question of fairly straight-forward mathematics](http://ctbergstrom.com/publications/pdfs/working-frequency-accuracy.pdf) to verify that even test with low sensitivity can help suppress outbreaks, and simulation studies confirm this. Notably, the provincial [Back to School Plan](https://www2.gov.bc.ca/gov/content/education-training/k-12/covid-19-return-to-school) makes no mention of testing in case of an exposure at a school.

This does not bode well for chances of a robust provincial TTI strategy in the much lower vulnerability school setting, but hopefully the province will change their mind on this and also follow this aspect of Germany's model.

### Cohort sizes
This is where the size of the community spread and the TTI strategy come together. The size of the community spread determines how many cases will likely get introduced into the schools, and the TTI strategy negotiates the balance between quarantining a large number of students and risking in-school transmissions. The way this has played out in Germany is that once a case is detected, the whole class is immediately isolated. Comprehensive testing will then determine if and how classes can resume. Depending on situations and test outcomes, this has lead to entire classes and even cohorts or schools getting quarantined, as well as cases where everyone except closest contacts were able to return to in-person classes after testing. And everything in between, for example a case where the entire class was quarantined and the rest of the cohort was allowed back while wearing masks full-time.

If community spread is low then implementation details don't matter that much. But at moderate or higher community spread, like parts of BC is facing right now, implementation details become important as we will see in the modelling below. If we don't broadly test in an outbreak we are forced to choose to either quarantine a large number of students or risk spread in the schools. 

### The A-word
At the beginning of the pandemic we have been focusing on two of the three main modes of respiratory viral transmission: formites and droplets. But increasingly we have evidence that the third one, aerosols, plays an important role too, in particular during outbreaks. Aerosols don't play much of a role outdoors where they get dispersed fast, while droplets and formites behave fairly similarly to indoors. But aerosols become increasingly important the less ventilated a place is. We know by now that viral dose matters for infections as well as severity of Covid-19, and aerosols generally carry a lower dose than droplets. But if a room is not well ventilated, or even worse, air is internally recirculated, aerosols can accumulate enough to become effective infection sources that can trigger larger outbreaks.

In Germany the schools are currently keeping windows and doors open as much as possible, and there is an ongoing discussion on adding or upgrading HVAC systems so that good ventilation can be maintained into winter. Ontario has similarly been dedicating funds to improve ventilation in schools, although the total amount seems insufficient to guarantee good ventilation in all schools. In BC there hasn't been much discussion about measures to improve school ventilation from provincial health officials that go beyond recommendations to open windows, although there is a side remark in the [Back to School Plan](https://www2.gov.bc.ca/gov/content/education-training/k-12/covid-19-return-to-school) only mentions improvements in ventilation as a possible use of federal funds. And simple measures like opening windows and doing everything possible to increase ventilation is curiously absent from the BC Back to School Plan.

In short, in the short term ventilation is likely not a major concern as the weather is still warm and we can keep windows open to maintain a steady exchange with outside air. (Classrooms without windows are likely already serviced by and  HVAC system and schools should make sure their throughput is maximized and filters be installed on any recirculating components.) But this strategy is bound to run into problems as soon as it gets colder, with many BC school currently having neither an HVAC nor any other in-class filters installed.

## The model
To understand the tradeoffs in school spread we are adapting the [University of Washington network-based model](https://github.com/ryansmcgee/seirsplus) and tweaking it for our purposes. The model is a standard SERIS model with the usual adaption of including infectious pre-symptomatic and asymptomatic compartments to fit what we know about Covid-19 spread, as well as having separate compartments for quarantined states that help us model the TTI cycle. This model differs somewhat from the one the province has been showing off in their press conference in that the model used by the province is a mean-field model where all individual in a compartment are assumed to behave in identical ways (with some added compartments to allow for some non-compliance with social distancing). These models have a hard time modelling outbreaks, and the are generally fitted to data that excludes cases from outbreaks. (There are a variety of other models that have also been used in BC, although less prominently.)

The model we are using is a network-based model that allows variability at the individual person level. This makes it easy to adapt to the school setting and also allows for enough variability to model outbreaks and potential super-spreader events. At the same time the model's number of parameters is huge, getting reliable predictive estimates from such a model requires imposing structure informed by what we know about the spread of the virus. And we don't really have a good enough understanding to fix these all in place.

While we can roughly calibrate the parameters to fit with what we have seen in other places, it makes it hard to use the model to predict exactly what will happen as we reopen schools. But it still allows to test how different settings impact the spread. What happens when community spread goes up? How do cohort sizes impact transmissions at schools? How do different TTI strategies impact school operations. We will look at some of these questions.

For this post we will only highlight some of the more important parameters we are setting, for more detail we [refer the interested reader to the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-09-08-covid-school-modelling.Rmarkdown).












To set up the model we build a school network that is roughly based on the provincial guidelines. Elementary cohorts have about 60 students, secondary cohorts have 120. Each classroom is strongly connected, and there are some connections between classrooms, in the secondary schools more than in elementary schools. Cohorts also feature some inter-connections, which we attribute to siblings and playdates.

We divide each classroom into yet again smaller groups of around 4 students, which we think of mini-networks with stronger connections. Other within-classroom connections are weighted down by 30%.

We omit teachers in this model out of laziness, so we won't be able to use this current version to answer questions about the effect of interrupting teacher-to-teacher connections, different masking procedures or the effect of resource teachers that move between classrooms.

Teachers do play an important role in this because they are much more effective as spreaders as they talk (and thus produce aerosols) at higher rates, because they likely have stronger connections to students than students on average to each other, and because they are more vulnerable to negative outcomes in case they contract the virus. This is something that should be dealt with in subsequent modelling.

To account for different classroom conditions, in particular different levels of crowding and ventilation, we scale down the transmission rates for each classroom based on a random factor uniformly distributed between 0.2 and 0.7. Ventilation levels is a key assumption, in subsequent modelling we might want to make this time dependent to account for weather getting successively colder which will reduce ventilation in classrooms without HVAC systems.

In our model we are considering a school district with a total of 42,000 students, roughly modelled on VSB.

## Elementary school learning group network
Here is a graph of a prototypical elementary school network in our model. We see three classrooms, and smaller sub-network within each classroom. There are also some connections between classrooms within the cohort.

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-10-1.png" width="672" />



## Secondary school learning group network
Similarly, for secondary schools we have 6 classrooms in the cohort, again with smaller mini-clusters inside each classroom and connections between classrooms. One could probably improve on this model, but it will do for our purposes.

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-12-1.png" width="672" />



## General Covid-parameters
We need to set some basic covid-related parameters that govern the spread. These are fairly standard parameters that have been used in modelling, we include graphs of their distribution for convenience.


```
## Individual R0:  mean = 2.50, std = 0.50, 95% CI = (1.62, 3.58)
```

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-14-1.png" width="672" />

The distribution of `\(R_0\)` sets the general infectiousness of the virus, and we will draw from this distribution to assign each person how infectious they are in our model.


```
## latent period:  mean = 2.20, std = 1.11, 95% CI = (0.60, 4.86)
## 
## pre-symptomatic period:  mean = 2.99, std = 1.78, 95% CI = (0.56, 7.40)
## 
## (a)symptomatic period:  mean = 3.99, std = 1.60, 95% CI = (1.50, 7.67)
```

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-15-1.png" width="672" />

Similarly we assign a distribution for the latent, pre-symptomatic and symptomatic (or asymptomatic in case the person does not develop symptoms) periods.



Hospitalization (and death) is not a critical parameter for our model as children generally have comparatively low rates, but we include these in the model anyway.



Lastly we need to tell the model how to go from a general `\(R_0\)` to individual level pairwise transmission probabilities. We depart from the standard implementation of the model and replace the normalization by node degree by 6, essentially assuming that on average people have 6 close contacts a day outside of their home. This is a bit of a fudge factor, and the main reason that the estimates should not be used as predictions, but that we should look at relative usefulness of interventions. 

## Testing and quarantine protocol
Lastly, we need to settle on the TTI protocol. Unfortunately we don't have details on how BC will do this. If Long Term Care centres are a guide we won't be testing non-symptomatic contacts or classmates, and will be conservative in quarantining students. In the Metro Vancouver case some students and staff were asked to self-quarantine for two weeks. The school was not told if the index case was a student or staff, or if students were exposed to an outside index case. This makes it hard to gain insight in how exactly TTI is handled, but it does not appear that BC is employing broad testing like what has been done in many cases in Germany. But again, it is hard to draw too many conclusions from this since the details of the exposure aren't known.

Given what we do know, we assume that that positive cases in schools will self-isolate with 100% probability. Symptomatic cases will self-isolate with 90% probability, some might ignore or misinterpret their symptoms and the symptoms will go undetected at the school. We assume that the entire closer within-classroom networks will quarantine if it has a positive case, and some of the other contacts within and outside of the classroom will also self-isolate.

We assume a time-varying false positive rate around 20%, depending on the state of the infection.




## Exogenous introductions and other assumptions


We assume that there are 2.8 new cases per 100,000 population in the the school district we are looking at, which matches the rate VSB was seeing about two weeks ago. These numbers are outdated and likely higher now, but that's the last numbers that were made public. We furthermore assume that the rate among children is similar to the overall rate, which roughly aligns with provincial data by age after accounting for higher asymptomatic cases that will likely fall through the provincial testing protocol. Our model assumes that 40% of cases are asymptomatic.

This sets up the model with 5 exposed children on day 1 and an exogenous introduction of around 1.2 introductions per day or 70.6 introductions over our 60 day modelling period.

We assume that transmission rates between children are at 75% of that of adults, and that pre and asymptomatic cases are on average only 75% as infectious as symptomatic cases. We also allow for a small percentage of random close interactions independent of the established contact network.

## Simulated scenarios
The model is probabilistic in nature, each model run differs slightly from the previous. For robust estimates we should average over several runs, but for our purposes a single model run should to do show the general effect of modifying the interventions.



Running the model for 60 days we get 428 total infections.
We can visualize the infected and quarantined population over time.


<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-21-1.png" width="672" />








The graph shows how many students are in the exposed or infectious stages, as well as their quarantined counterparts. The green susceptible population in quarantine are non-infected students that were forced into quarantine.


## Isolating the entire class



<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-25-1.png" width="672" />



That brings it down to 339 total infections over the 60 day period, at the cost of quarantining more students.


## Testing all contacts
Here we consider testing all contacts, including the entire classrooms, but only immediately isolating the closer in-classroom networks of a positive case.



<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-28-1.png" width="672" />



That brings it down to 315 total infections over the 60 day period, at the cost of quarantining more students.

## Random testing
Another way to reduce the number of infections is to add random testing. In schools we expect a fair share of asymptomatic cases, which we will never catch before they infect others unless we introduce random testing. We run a model that's the same as the previous with additionally a quarter of the students are randomly tested each day. 




<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/unnamed-chunk-31-1.png" width="672" />



That brings it down to 153 total infections over the 60 day period, at the cost of quarantining more students.


For better comparison, here are the results for all model runs in one graph.

<img src="/posts/2020-09-08-covid-school-modelling_files/figure-html/tti-comparison-1.png" width="672" />

This makes it easy to see the tradeoffs between the different strategies and how different quarantine and testing protocols impact the spread in the school (yellow and red colours) as well as the precautionary quarantine of non-infected people (green). The model (naively) assumes perfect quarantine, quarantining the entire classroom instead of smaller contact networks within classrooms predictably leads to smaller outbreak sizes but a larger number of healthy students in quarantine. A middle ground between these two is only quarantining smaller contact networks within classrooms by default but test and tracing the entire contact network. This leads to a similar sized outbreak with much fewer healthy children being quarantined.

Especially in school environments the asymptomatic cases present a challenge. That's where random testing can be helpful as it can detect index cases early and avoid or reduce outbreaks. The random testing scenario assumes an aggressive testing regimen where a random sample of a quarter of the students gets tested daily. We don't have the testing capacity to do this right now, but this is something to consider, especially with cheaper fast-turnaround saliva tests starting to become available. These antigen tests have lower sensitivity and specificity, but those disadvantages are outweigh by their fast turnaround time and ease of use. And that it is in principle much easier to produce these kind of tests at volume and actually use them broadly in schools. This would likely still be complemented by PCR tests to weed out false positives.

## Upshot
What can we learn from this? The number of infections in school aren't the main focus. As explained before, the model is hard to calibrate and not that useful to make accurate predictions. The cases the model produces are at the upper end of what one might expect to see. What it does show is how implementation details on the test, trace and isolate response matter to moderate the outbreak size.

The specific implementation of our TTI protocol matters in controlling school outbreaks, and it can be the difference between schools being infection accelerators and places that experience occasional exposures but don't add significant transmissions.

There are many interesting questions unanswered. The role of classroom and cohort sizes is one of them, the role of exogenous background spread that can seed school cases is another, and the feedback between school cases and background spread was also ignored in this post.

Ideally we first get a better idea what our TTI protocol will look like, and then run an updated post where we fix the TTI and look at how other factors vary, otherwise there are too many moving parts for one post.

As usual, the code for the post is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-09-08-covid-school-modelling.Rmarkdown) for anyone to reproduce or adapt for their own purposes.
