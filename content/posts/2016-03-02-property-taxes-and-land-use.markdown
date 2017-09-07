---
title: Property Taxes and Land Use
date: 2016-03-02
categories:
  - Vancouver
  - Mapzen
  - taxes
  - zoning
  - land use
slug: property-taxes-and-land-use
author: Jens von Bergmann
tags: []
description: 'Visualizing tax density and land use.'
featured: 'tax_density.png'
images: ["https://doodles.mountainmath.ca/images/tax_density.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---
Since I started thinking about [tax density](http://doodles.mountainmath.ca/blog/2015/05/31/density-in-vancouver/),
the amount of property taxes collected per area, I always felt that the data presentation in the map fell short.

Property taxes are somewhat insulated from the ups and downs of the real estate market as they are need-based and the mill
rate changes to flatten out the crazyness of the market. But what they lack in interesting patterns over time they more than
makes up for in interesting patterns in space.

To recognize these spacial patterns, one needs to switch layers in my
[assessment maps](https://mountainmath.ca/map/assessment?zoom=14&lat=49.2741&lng=-123.1321&layer=10) and that's
a little awkward and most people won't do this.

I can't remember where I first saw some 3D data visualization around something like this, maybe in
[this excellent Strong Towns post](http://www.strongtowns.org/journal/2015/11/18/mapping-the-effects-of-parking-minimums) that
explores tax density and parking.
When I was chatting with [Darren Proulx](https://twitter.com/dnproulx) about this I realized this is the perfect case
to rev up [Mapzen's awesone 3D map engine](https://mapzen.com) for data visualization. Previously I had tried out the 3D
mapping capabilities to map 
[the physical form of Vancouver's buildings obtained from LIDAR data](https://mountainmath.ca/vancouver_lidar/map),
now it was time to map abstract data in 3D.
<!-- more -->

## 3D Tax Density Maps
<a href="https://mountainmath.ca/assessment_gl/map?zoom=14&lat=49.2814&lng=-123.1312" target="_blank"><img  src="/images/tax_density.png" style="width:50%;float:left;margin-right:10px;"></a> 
The spacial patterns of tax density are closely related to zoning, so the obvious thing to do is to map both at the same
time. Tax density as the height and the zoning as the colour. But the relation between tax density and zoning is indirect,
it is given through land use. So when I 
[folded the Metro Vancouver land use dataset into the asessment data](http://doodles.mountainmath.ca/blog/2016/01/31/land-use/)
I added another option to colour the map by land use. And the visualization works pretty well to show the relationship
between the variables.
Check out the <a class='btn' href="https://mountainmath.ca/assessment_gl/map?zoom=14&lat=49.2814&lng=-123.1312" target="_blank">interactive map</a>. 

## Some Quick Observations
When comparing this to the [Strong Towns post](http://www.strongtowns.org/journal/2015/11/18/mapping-the-effects-of-parking-minimums)
mentioned above it is interesting to note that the "tax contribution of bare pavement" is actually quite high relative to
many other commercial properties. For example, the giant parking lot around Safeway on 10th near UBC can't be discerned
from the map. Similarly, Oakridge Mall does not stand out as a low tax area. That's basically because in today's property
market the value of the property is dictated by the land value and few properties, even few commercial properties outside
of downtown, have building values in the same order of magnitude as the land value.

And that keeps the pressure on to redevelop the low building value commercial stock, typically replacing it with mixed use.
One example is the Safeway on Granville and 70th, that went from parking lot to mixed use. The high land values make this
kind of redevelopment attractive. Typically this redevelopment process will raise commercial rents, lower commercial
property taxes, add housing supply and increase tax density.

<a href="https://mountainmath.ca/assessment_gl/map?zoom=16&lat=49.2433&lng=-123.151" target="_blank"><img  src="/images/triangle.png" style="width:50%;float:right;margin-left:10px;"></a> 
Another interesting area is the 
<a href="https://mountainmath.ca/assessment_gl/map?zoom=16&lat=49.2433&lng=-123.151" target="_blank">condo/apartment triangle at Arbutus and 33rd</a>. 
These condos/apartments abut Quilchena Park, have a grocery store in proximity but otherwise sit in a see of single family housing.
I would like to highlight two alternative development models. One is the single family housing that surrounds this area,
the other is one where one takes the condo/apartment complex and throws in the adjacent Quilchena Park. The park does not
house any people and does not generate tax revenue but provides great recreational value. Overall, the tax density, that is the
amount of taxes collected per area, of those two models are the same. So the condo complex together with the entire park
collects the same amount of taxes per area as single family housing. On the other hand, the condo complex plus park houses
3 to 4 times as many people per (combined) area as the surrounding single family housing. 

Presenting these as alternative
development models one can ask how many people would prefer condo (and one dedicated rental building) plus park over
single family housing without park. 
Condo values range between $448k to $2.6m with median of $745k. 56% of all units have 2 bedrooms, 9% with 3 bedrooms.
The surrounding single family housing start at
around $2.5m for a teardown. My guess is that there are more people interested in the condo plus park model than the
current Vancouver market offers.

## More Detailed Analysis
Now let's take the tax density information and measure it against city services rendered. In other words, let's see who
pays their "fair share" of property taxes. Well, that's where I ran out of juice. There is lots of
work involved to do it right, too much to fit into my evening side project time budget. 

Some have done some
[really amazing work](http://mapstoryblog.thenittygritty.org/costofstreets/) trying to understand the give and take of
property taxes and services rendered, to the bar is pretty high.

Vancouver's situation, with the commercial property tax 5x the residential rate, has it's own quirks to add to the
complexity.  

If someone is interested in spending the time to sieve through the city budget and process the data I would be happy to help out
with graphing and mapping. As long as the data is clean enough that it stays under my "one evening side project time budget". :-)

## Looking Forward
General public awareness about taxes, zoning and fairness seem to be rising. Recently a
[class action alleging discrimination in New York's property tax code](http://www.capitalnewyork.com/article/city-hall/2014/02/8540903/lawsuit-claims-discrimination-real-estate-taxes)
was launched. An interesting precedent, and it will be interesting to watch the outcome. 
And to see how this could apply to the tax and services balance
of low density vs high density. Or exclusionary zoning policies as the motor of unequal tax density.
Or minimum parking requirements which [disproportionally hurt poor people](https://www.washingtonpost.com/news/in-theory/wp/2016/03/03/how-parking-requirements-hurt-the-poor/).

As this kind of data becomes more publicly accessible and better visualizations make this complex issue more
accessible I expect these kind of questions to gain more traction.

<hr>
### I can't view the 3D map!
Sorry. Welcome to the world of modern web technology. (WebGL in this case.) If you try to look at the interactive map and don't see anything like the image above, then that's probably because
you either have and old (windows?) computer and/or an old (Internet Explorer) browser. If switching to Chrome or Firefox does
not fix this for you your best option is to cramp that map into your phone screen. Your phone is probably newer and supports
modern web technology much better than your computer. Or you can always view the 2D maps linked above. 
