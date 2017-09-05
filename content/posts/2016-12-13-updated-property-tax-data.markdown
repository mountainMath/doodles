---
title: Updated Property Tax Data
date: 2016-12-13
categories:
  - Vancouver
  - Assessment Data
  - taxes
  - density
slug: updated-property-tax-data
author: Jens von Bergmann
tags: []
description: 'Updaing our tax density visualizations.'
featured: 'pt_animated.gif'
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---
The property tax data for the City of Vancouver has been available for a while now, and with new assessment data becoming
available soon everyone's worried about what their property taxes will look like. The City just passed a 3.9% increase
in their budget, so on average everyone will pay 3.9% more taxes than they did last year.

The exact change in property taxes varies from property to property. There is a [nice overview](https://patrickjohnstone.ca/2013/01/on-assessments-and-mil-rates.html)
on how this works in general, for the City of Vancouver there is an added complication of land value averaging meant to
soften sudden land value increases, that effectively serves to lower taxes for single family homeowners in a rising market.

If that's all to abstract for you, keep reading.

<!-- more -->

<a href="https://mountainmath.ca/assessment_gl/map?zoom=15&lat=49.2672&lng=-123.1449" target="_blank"><img  src="/images/pt_animated.gif" style="width:50%;float:left;margin-right:10px;"></a>
To make the change in property taxes a little more transparent I have added a time slider to my
[Tax Density by Land Use Map](https://mountainmath.ca/assessment_gl/map?zoom=15&lat=49.2672&lng=-123.1449) that I have
[described previously](http://doodles.mountainmath.ca/blog/2016/03/02/property-taxes-and-land-use/). So now people can
go back in time and see how property taxes changed and compare it to their neighbours. At the same time I
have updated the data on my [regular assessment data maps]() to be based on the 2016 tax data, more background on the
tax data is in [this post](http://doodles.mountainmath.ca/blog/2015/05/31/density-in-vancouver/).

Check out the <a class='btn' href="https://mountainmath.ca/assessment_gl/map?zoom=14&lat=49.2814&lng=-123.1312" target="_blank">interactive map</a>.

This map also serves as a good reality check on the tax productivity of the land.

Some caveats: I am missing data for some years or some
properties, and this map aggregates property taxes for
all strata lots in a stratified property, you will have to dive into the data yourself if you want to see how it changed
on individual strata lots. Zoning and land use data stay at 2016 and don't animate back in time because of availability.

Special thanks to [Mapzen](https://mapzen.com) for making it so ridiculously easy to make these maps and for
[Vancouver Open Data](http://vancouver.ca/your-government/open-data-catalogue.aspx) and
[Metro Vancouver Open Data](http://www.metrovancouver.org/data) for making that data available.

<script>
function resetImages(){
    $('img').each(function(img){
        imgsrc = $(img).attr('src');
        if (imgsrc.slice(imgsrc.length-4)=='.gif') {
            $(img).attr('src', '');
            $(img).attr('src', imgsrc);

        }
    });
    setTimeout(function(){
        resetImages();
    },25000);
}
setTimeout(function(){
    resetImages();
},25000);
</script>
