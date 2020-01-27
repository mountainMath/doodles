---
title: Unoccupied dwellings data
author: Jens von Bergmann
date: '2020-01-26'
slug: unoccupied-dwellings-data
categories:
  - CensusMapper
  - Vancouver
  - Toronto
  - cancensus
  - Empty Homes
tags: []
description: "A publicly available xtab for Structural type by Document type."
featured: ''
images: ["https://doodles.mountainmath.ca/posts/2020-01-26-unoccupied-dwellings-data_files/figure-html/cov-unoccupied-dwellings-1.png"]
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---



Cities like Vancouver and Toronto talk a lot about unoccupied dwellings. We have [a whole category for empty homes themed posts](https://doodles.mountainmath.ca/categories/empty-homes/) on this blog. Do we need one more? Probably not, except that we were able to open up an empty-homes related cross-tabulation that we needed through current work for CMHC. Yay, and big thanks to CMHC for making this available to the general public. Open data FTW!

Possibly more useful is the classification of the entire building stock by structural type that this data contains, when in the past many have used the classification of the stock *occupied by usual residents* as a proxy that comes with the standard release census data.

Given how important housing has become, and how much interest unoccupied dwellings has been gathering across Canada, we want to quickly introduce the dataset, show how to access it via CensusMapper for mapping and via the CensusMapper APIs and through cancensus for analysis.

### What's the new data?
The dataset is a Canada-wide cross tabulation of *Structural type of dwelling* by *Document type*. *Structural type* is a common census variable that describes the type of structure a dwelling unit is in. *Document type* is less known, it classifies if the census determined the dwelling is

* occupied by usual residents (also known as a *household*),
* occupied by temporarily present persons, or
* unoccupied.

This data is available for census tracts, census subdivisions, census metropolitan areas, census divisions, provinces and territories and the whole country. For the census years 2001, 2006, 2011, and 2016. Others have similar cross tabulations, and we have worked with similar data before. But we have not seen an open data version that can be freely shared, nor a version that covers all of Canada for all these census years.

### How to access it [on CensusMapper](https://censusmapper.ca/)?
Just [start a new map](https://censusmapper.ca/maps/new), the cross-tab will appear below the regular census variables.

### How to access it [in the CensusMapper API](https://censusmapper.ca/api)?
Same way as for CensusMapper maps, the xtab variables can be selected from the variable list in the [CensusMapper API GUI helper](https://censusmapper.ca/api).

### How to access it using [cancensus](https://mountainmath.github.io/cancensus/index.html)?
The new xtabs have been added to the publicly available datasets via the [cancensus](https://mountainmath.github.io/cancensus/index.html) package. We will keep the code visible for this post instead of just [linking to it on GitHub](https://github.com/mountainMath/doodles/blob/master/content/posts/2020-01-26-unoccupied-dwellings-data.Rmarkdown).


```r
library(tidyverse)
library(cancensus)
list_census_datasets()
```

```
## # A tibble: 8 x 2
##   dataset description                                                         
##   <chr>   <chr>                                                               
## 1 CA01    2001 Canada Census                                                  
## 2 CA06    2006 Canada Census                                                  
## 3 CA11    2011 Canada Census and NHS                                          
## 4 CA16    2016 Canada Census                                                  
## 5 CA01xSD 2001 Canada Census xtab - Structural type by Document type, via CMHC
## 6 CA06xSD 2006 Canada Census xtab - Structural type by Document type, via CMHC
## 7 CA11xSD 2011 Canada Census xtab - Structural type by Document type, via CMHC
## 8 CA16xSD 2016 Canada Census xtab - Structural type by Document type, via CMHC
```

We can explore the variables as usual by listing or searching through them.


```r
unoccupied_vars <- search_census_vectors("Unoccupied","CA16xSD")
unoccupied_vars %>% select(vector,label)
```

```
## # A tibble: 9 x 2
##   vector       label                                                            
##   <chr>        <chr>                                                            
## 1 v_CA16xSD_28 Unoccupied                                                       
## 2 v_CA16xSD_29 Single-detached house -- Unoccupied                              
## 3 v_CA16xSD_30 Semi-detached house -- Unoccupied                                
## 4 v_CA16xSD_31 Row house -- Unoccupied                                          
## 5 v_CA16xSD_32 Apartment or flat in a duplex -- Unoccupied                      
## 6 v_CA16xSD_33 Apartment in a building that has fewer than five storeys -- Unoc…
## 7 v_CA16xSD_34 Apartment in a building that has five or more storeys -- Unoccup…
## 8 v_CA16xSD_35 Other single-attached house -- Unoccupied                        
## 9 v_CA16xSD_36 Movable dwelling -- Unoccupied
```

Let's look at two use cases of how to access the variables. 
#### City of Vancouver unoccupied dwellings by structural type


```r
vars <- set_names(unoccupied_vars$vector,unoccupied_vars$label %>% gsub(" -- Unoccupied","",.))
unoccupied_data <- get_census("CA16",regions=list(CSD="5915022"),vectors=vars) %>%
  pivot_longer(names(vars)) %>%
  filter(name != "Unoccupied")

base_vars <- list_census_vectors("CA16xSD") %>% filter(is.na(parent_vector))
vars2 <- set_names(base_vars$vector,base_vars$label)
dwelling_data <- get_census("CA16",regions=list(CSD="5915022"),vectors=vars2) %>%
  pivot_longer(names(vars2)) %>%
  filter(name != "Total dwellings")
```

Pulling in the data works as before. Note that we still use `CA16` as the base dataset. This is the dataset that indicates the geography underlying the data. We could have also specified `CA16xSD` in this case, but then we won't be able to access geographic variables.


```r
inner_join(dwelling_data %>% select(name,Total=value),
           unoccupied_data %>% select(name,Unoccupied=value),
           by="name") %>%
  filter(Total>50) %>%
  mutate(name=factor(name,levels=names(vars))) %>%
  ggplot(aes(x=name,y=Unoccupied/Total,fill=name)) +
  geom_bar(stat="identity") +
  unoccupied_theme +
  labs(title="Unoccupied dwellings in the City of Vancouver")
```

<img src="/posts/2020-01-26-unoccupied-dwellings-data_files/figure-html/cov-unoccupied-dwellings-1.png" width="768" />

Apartments in a duplex, in the City of Vancouver the vast majority of which are units in suited single family homes, stand out as the most empty form of housing in the City of Vancouver [as we have pointed out before using 2011 data](https://doodles.mountainmath.ca/blog/2018/01/25/empty-suites/). The prevalence of suited single family homes in the City of Vancouver skews the number of unoccupied units, with 31% of unoccupied units in the City of Vancouver counted in the 2016 census being in suited single family homes.

#### City of Vancouver unoccupied dwellings by census tract
To round this off we map how the geographic distribution of unoccupied dwellings has changed through the census years. Since the selection of variables was uniform across the four censuses we could keep the internal vector identifiers consistent. This simplifies the task of selecting the same variables across censuses.


```r
map_data <- seq(2001,2016,5) %>% lapply(function(year){
  dataset=paste0("CA",substr(as.character(year),3,4))
  get_census(dataset,regions=list(CSD="5915022"),level="CT",geo_format="sf",
                       vectors=c("Unoccupied"=paste0("v_",dataset,"xSD_28"), 
                                 "Total"=paste0("v_",dataset,"xSD_1"))) %>%
    select(Unoccupied,Total) %>%
    mutate(Year=year)
}) %>% 
  do.call(rbind,.)
  

ggplot(map_data) +
  geom_sf(aes(fill=Unoccupied/Total)) +
  map_theme +
  facet_wrap("Year") +
  labs(title="City of Vancouver share of unoccupied dwellings",fill=NULL)
```

<img src="/posts/2020-01-26-unoccupied-dwellings-data_files/figure-html/unnamed-chunk-4-1.png" width="768" />

This is probably a good time to remind everyone that [Joyce-Collingwood and Marine Gateway had large buildings complete just before census day, resulting in a large number of unoccupied units](https://doodles.mountainmath.ca/blog/2017/04/03/joyce-collingwood/), which has thrown the press for a loop when the Census data first came out.

And there are many reasons why units may register as unoccupied on census day, [some benign and others objectionable](https://doodles.mountainmath.ca/blog/2019/08/19/running-on-empties/), and it requires more work to understand the scope of undesirable vacancies.

## Upshot
That's it for today. The data does not add much new insight, but it does at least give more accurate accounting of the number of unoccupied units in each region. Maybe that will reduce the number of times people will use dwellings not occupied by usual residents as a proxy for unoccupied units, denying students and other that think of the main residence being elsewhere their place in this city.

More data on housing is generally a good thing, and hopefully opening this up will enable others to dive deeper into the issues. As always, there are numerous caveats to keep in mind when dealing with this data. In particular, the re-classification of dwellings 2001-2006 had a profound impact on overall estimates of unoccupied dwellings. In areas with secondary suites like Vancouver, this re-classification had ripple effects through the other census periods, somewhat muted in 2006-2011 but again clearly visible 2011-2016 as the census discovered more suites. This dataset makes it easier to tack down causes of changes in unoccupied dwellings, this is one of them.

Dwellings *occupied by foreign residents or temporarily present persons* is a category that is notoriously hard to track. These are people that think of their primary residence being elsewhere. We know that students make up an important constituency of these, in some areas like for example Waterloo with it's high student population and strong off-campus student housing market the impact can be significant. The 2006 census saw a jump in dwellings *occupied by foreign residents or temporarily present persons*, with a decline again in 2011. Caution is advised when interpreting these numbers.

These are just two bigger caveats to keep in mind, in general one will find more quirks to deeper one works with the data. Looking forward to seeing this data getting put to use.
