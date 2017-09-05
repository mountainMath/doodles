---
title: Street Networks
date: 2016-11-21
categories:
  - OSM
slug: street-networks
author: Jens von Bergmann
tags: []
draft: true
description: 'Stymied by Canadian OSM data quality.'
featured: ''
featuredalt: ""
featuredpath: ""
linktitle: ''
type: "post"
---

The other day I came across this [handy tool](https://github.com/gboeing/osmnx) built by
[Geoff Boeing](https://twitter.com/gboeing). Still jet-lagged, I decided to put my odd wake hours to use and played with
it.

Essentially, the tool greatly simplifies running some analysis on OSM data. So I took it for a quick test drive to compare
Vancouver and Surrey street and footpath networks.

<img  src="/images/vancouver_streets.png" style="width:40%;float:left;margin-right:10px;">
<img  src="/images/surrey_streets.png" style="width:40%;float:right;margin-left:10px;">

These networks look different to the eye, and we could produce some [Jane Jacobs like images](http://i1.wp.com/geoffboeing.com/wp-content/uploads/2016/10/gs.jpg).

But I am more of a numbers guy, so lets run some stats on this. Both have similar cumulative length of roads and footpath,
Vancouver comes in at 2,668,461 metres and Surrey slightly higher at 3,171,987. But how do they differ qualitatively?

Generally both citis have fairly straight streets, but Surrey slightly less so than Vancouver. Vancouver street segments
are 80m long on average, Surrey's are longer at 91m. Finally we can look at the types of intersections we have in both cities.

For Vancouver, we have

* Cul-de-sac: 1566
* T-intersection: 11631
* 4-way: 7463
* 5-way: 147
* 6-way: 8

And for Surrey:
* Cul-de-sac: 5365
* T-intersection: 14813
* 4-way: 4797
* 5-way: 71
* 6-way: 1
* 7-way: 1


'streets_per_node_counts': {0: 0, 1: 1566, 2: 1, 3: 11631, 4: 7463, 5: 147, 6: 8}



'streets_per_node_counts': {0: 0, 1: 5365, 2: 0, 3: 14813, 4: 4797, 5: 71, 6: 1, 7: 1}

{'street_length_total': 2668461.462377711, 'self_loop_proportion': 0, 'streets_per_node_avg': 3, 'streets_per_node_proportion': {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}, 'intersection_density_km': 140.61801597479257, 'circuity_avg': 1.0275645978799954, 'streets_per_node_counts': {0: 0, 1: 1566, 2: 1, 3: 11631, 4: 7463, 5: 147, 6: 8}, 'node_density_km': 152.05738288474194, 'm': 66938, 'n': 20816, 'edge_length_total': 5320606.5246330425, 'count_intersections': 19250, 'k_avg': 6, 'edge_density_km': 38866.13679358103, 'street_density_km': 19492.662677649212, 'street_segments_count': 33507, 'street_length_avg': 79.63892507170773, 'edge_length_avg': 79.48559151204162}
>>> stats2
{'street_length_total': 3171987.819937716, 'self_loop_proportion': 0, 'streets_per_node_avg': 2, 'streets_per_node_proportion': {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}, 'intersection_density_km': 53.959568183492514, 'circuity_avg': 1.0706442254788706, 'streets_per_node_counts': {0: 0, 1: 5365, 2: 0, 3: 14813, 4: 4797, 5: 71, 6: 1, 7: 1}, 'node_density_km': 68.66734054057413, 'm': 69186, 'n': 25048, 'edge_length_total': 6305845.631608428, 'count_intersections': 19683, 'k_avg': 5, 'edge_density_km': 17287.034868330713, 'street_density_km': 8695.782809893662, 'street_segments_count': 34722, 'street_length_avg': 91.35383387874303, 'edge_length_avg': 91.14337628434117}
