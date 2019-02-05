---
title: Vancouver election individual ballots
author: Jens von Bergmann
date: '2019-02-04'
slug: vancouver-election-individual-ballots
categories:
  - Vancouver
tags: []
description: "Individual ballot data is great, let's put it to work!"
featured: 'party_correlation-1.png'
images: ["https://doodles.mountainmath.ca/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/party_correlation-1.png"]
featuredalt: ""
featuredpath: "/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html"
linktitle: ''
type: "post"
---





The City of Vancouver [made individual ballot data available](https://data.vancouver.ca/datacatalogue/anonymousBallotMarking.htm). So the vote choice on each individual ballot. It's been out for a couple of days now, and I have been quietly hoping someone else would write something up. But I got too curious, so here is a super-fast write-up. We focus on mayor and council votes only. There were 21 candidates for mayor and 71 for council to choose from, and each voter was allowed to vote for (at most) one mayoral candidate and up to ten council candidates on their ballot.

## Number of votes per ballot
There were 175,399 valid ballots by people eligible to vote for mayor and council. The first question we have is how people were using their votes. Did people make use of all their 11 possible votes for mayor and council candidates, or did the vote for fewer, either because there weren't 11 they liked on the list (unlikely, given the large choice), or because they did not want to go through the troubles of evaluating all individual candidates and just went with one party only, or because they were 'plumping' their votes. Plumping refers to people voting for a few first-choice candidates and denying their second-choice candidates a vote in case they might narrowly overtake their first-choice candidates in the overall counts.

<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-2-1.png" width="768" />

We see that a slight majority of people 53.8% made use of all their votes, the other ballots had fewer than 11 mayor and council votes. To take a better look into that we are showing the party makeup of all votes by number of total votes per ballot. With our strong showing of independent mayoral candidates we focus only on council votes for this.

<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-3-1.png" width="768" />

We see that the ballots with exactly 8 council votes are dominated by votes for the NPA -- which incidentally ran 8 candidates. 




## Party votes
This brings us to the next section, where we investigate the role parties played in the election. The previous graph  leads us to look into **single party ballots**, that is ballots where only a single party got votes.

<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-5-1.png" width="768" />

This shows that NPA lead in the number of single-party-only ballots, but with 8 candidates they also have the advantage of single-party-only ballots not "wasting" too many votes. Compared with e.g. One City, where single-party-votes "wastes" 8 votes as there were only two candidates. It's interesting to see that quite a few ballots only had independent candidates. 

We can widen the scope slightly to look at combination of parties.

<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-6-1.png" width="768" />

A more comprehensive view that also takes into account the number of votes each party got can be gotten by looking at correlations across all parties.

<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/party_correlation-1.png" width="768" />

This shows that NPA votes anti-correlate with every other party, with Coalition Vancouver and YES Vancouver showing the lowest negative correlation. We also see a emergence of a weak voting block made up of COPE, Greens, One City and Vision. Coalition Vancouver also anti-correlates with all other parties, although having almost neutral correlation with Pro Vancouver and YES Vancouver. Independents show the highest correlation with One City.

The ordering of the parties in the plot was done by hierarchical clustering on the correlations, and it interesting how well it picks out adjacencies in the parties. Independents scatter a bit, showing some correlation with One City and (to a weaker extent) Vision, and also some weak  correlation with Pro Vancouver and YES Vancouver.   


## Candidates
So parties matter, but people vote for candidates and not parties. And no party got all their candidates elected, so people did pick and choose among party candidates. Looking at the top 30 council candidates (by total votes) and top 5 mayoral candidates, we can correlate the votes on each ballot just like we did with the parties. Apologies to the candidates that got dropped off, the good news is that it only takes a [one-line change in the code](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-02-04-vancouver-election-individual-ballots.Rmarkdown) to change that in case someone wants to slice the data differently.


<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-7-1.png" width="768" />

As to be expected, the hierarchical clustering again brings out the parties even though we did not use party affiliation to make this graph. The fact that there was only one vote for mayoral office shows in anti-correlations between all mayoral candidates. The clustering into parties is not perfect, and it is interesting to investigate differences within the party blocks, as well as between candidates that don't follow party lines. Even though the clustering did not place One City next to the COPE-Greens-Vision block we can still see the strong correlation. Some independent candidates also show correlation with that block, in particular Sarah Blyth and Shauna Sylvester and to a weaker extent Adrian Crook, Taqdir Kaur Bhandal, and Wade Grant, who cluster close to One City, but also correlate with the COPE-Greens-Vision block. NPA anti-correlating with everyone else points to lots of full-slate votes with the few votes there are to spare spreading out. Erin Shum seems also correlates with these particular independent candidates, but also with the Coalition Vancouver block but not the COPE-Greens-Vision or One City block that these other independent candidates clustered around.


## The new urban/preservationist scale
The [Cambie Report](https://cambiereport.ca) introduced the urbanist/preservationist axis of Vancouver municipal politics, next to the usual Left/Right social-economic axis. It's an interesting new way to look at things, [Nathan has a good rundown](https://homefreesociology.com/2018/10/10/a-very-imby-election/). The Camie Report crowd-sourced the scoring of the parties and major independent mayoral candidates [and relased the data](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4LHNGSjT5S5vx-TYFdZev1MuupM4QrdrvGxXO9sPrUQK7f4zW0bWWFVj1QMauWc4I7FITauJgV_JS/pubhtml?gid=428148822&single=true). That makes it easy for us to use this for analysis.

Unfortunately, we don't have data for the independent candidates, which means that there is a lot of missing data in the analysis in this section Moreover, candidates within each party may also scatter a bit around the average party position, which we won't be able to pick up on. Maybe someone will collect scores for the independent candidates and even individualize party scores.

This means we are filtering the voting data down to only the ones that the Cambie Report has scored, that is party candidates as well as the two major independent mayoral candidates, Shauna Sylvester and Kennedy Stewart. Fortunately this covers all people on council right now, so it is maybe not as bad as it seems.

While we now have scores for each individual candidate, it is not clear how to aggregate up the votes on a ballot to assign scores to each ballot. We will fill this with some heuristics:

1. Votes for mayoral candidates carry double weight, votes for unscored mayoral candidates are discarded.
2. Scores for party-affiliated council candidates are added up and scaled up as if there were 10 votes.

In total this scheme gives the sum of 12 scores if the ballot also had a vote for a scored mayoral candidate or 10 otherwise, so we normalize the result by dividing by 12 or 10. Alternative ways would be to count the absence of votes with a negative weight, but it is not clear how much sense that makes as we can't distinguish e.g. a candidate that just missed the first 10 that fit on a ballot or if the candidate got left off a ballot because the voter had a strong aversion.






<img src="/posts/2019-02-04-vancouver-election-individual-ballots_files/figure-html/unnamed-chunk-9-1.png" width="768" />

Using the methods we chose it does not appear that there is a strong urbanist cluster visible in the data. Partially that is due to the urbanist vote spanning across several parties that also strongly correlate with preservationist parties. And looking at recent council votes, it does not seem that councils vote in block on these issues. Taking the Broadway subway extension vote, squarely an "urbanist" issue, the (only) COPE councillor together with one NPA councillors voted against, whereas all three Green councillors voted in favour - a move that was [at least partially attributed to Greens recognizing the shifting makup of their base](https://www.theglobeandmail.com/canada/british-columbia/article-vancouver-green-party-councillors-embrace-skytrain-expansion/?utm_medium=Referrer:+Social+Network+/+Media&utm_campaign=Shared+Web+Article+Links). It will take more time to observe if the crowd-sourced scores still hold after the election, and if having just one score for e.g. NPA candidates is appropriate.


Given our methods we still have a fairly high correlation  of urbanist/preservationist and  Liberal/Conservative scores of ballots (coefficient of 0.7) as is also evident from the graph.


## Next steps
There are plenty of ways to refine this. One can look into Park Board votes or ballot questions, or analyse data by voting place or voting type (general voting, advanced voting, mail, ...). Refining  the Cambie Report scores would certainly be interesting. For those interested in expanding on the analysis, or folding in new data, or looking at some of the lower-ranking candidates that got dropped off the list, the code is [available on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2019-02-04-vancouver-election-individual-ballots.Rmarkdown) as usual.

