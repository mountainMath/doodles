---
title: Secondary Suites and Taxes
author: Jens von Bergmann
date: 2016-10-04
categories:
  - Vancouver
  - taxes
slug: secondary-suites-and-taxes
author: Jens von Bergmann
tags: []
description: 'The tax implications of RS zoning.'
featured: 'secondary_suites.png'
images: ["https://doodles.mountainmath.ca/images/secondary_suites.png"]
featuredalt: ""
featuredpath: "/images"
linktitle: ''
type: "post"
---

A couple of weeks ago I started thinking about secondary suites, laneway houses and taxes in the City of Vancouver. The number
of secondary suites and laneway houses has been continuously growing. Rental income
is probably one of the main reasons people choose to activate a secondary suite. What are the tax implications?

<!-- more -->

## Secondary Suites
How many secondary suites are out there? Nobody really knows, but we have some estimates. Comparing single family properties
from the assessment roll to census counts provides one estimate. This is likely a lower bound as the census is prone to
undercount suites. Using this method, we arrive at a lower bound of 30,000 single family properties with a suite in 2011,
up from about 27000 in 2006. The [above map](https://censusmapper.ca/maps/519#12/49.2597/-123.1243) gives a rough idea
of their location, although it also includes the roughly 2000 stratified duplex properties.

Of these we estimate that 7,000 had more than one suite in 2011, with a similar number in 2006. The number of laneway houses was
quite small in 2011, likely less than 400. But by now the number has grown to over 2,000.

In total that adds up to an estimated around 37,000 suites in the city of Vancouver in 2011. Probably more in the
recent 5 years, maybe fewer in the years between 2006 and 2011. Most of these will be operated as suites, with the main
unit serving as a principal residence of the property owner. But this also includes investment properties where each
unit, including the main unit in the house, are rented out.

For this post we will focus entirely on the suites. We might expand on this analysis at some later point and separate
out owner-occupied homes from investment properties. Moreover we will use the more conservative estimate of 30,000
suites. Feel free to adjust that estimate in the interactive at the bottom see how this effects the estimates we make.

## Income Tax
Secondary suite rental income needs to be recorded on
[CRA form T776](http://www.cra-arc.gc.ca/E/pbg/tf/t776/t776-15e.pdf) and, after claiming deductions, taxed.

Estimating the average suite rental income at $1,000, claiming $200 in deductions leaves us with $800 or $9,600 in
monthly taxable income. With single family homeowners generally above the median income we use a marginal tax rate of 35%
to estimate $3,360 of taxes per secondary suite, so cumulative $100,800,000 in income taxes payed on secondary suite
rental income in the City of Vancouver.


## Capital Gains Tax
Assessing the capital gains implications is more complex. The capital gains exemption applies to a *housing unit*. If a
property with several housing units is sold, only the capital gains attributed to the unit used as principal residence
is exempt from taxation. Typically the portion of taxable gains is determined by the relative areas of the rented and
principal residence parts of the home.

So the question whether the portion of a house taken up by a secondary suites is exempt from capital gains essentially
boils down to the question whether or not the secondary suite counts as a "self–contained domestic establishment
for earning rental income" or as "one or more rooms in the home". I have asked the CRA to clarify how this would apply
to someone converting a portion to a house to secondary suite or building a laneway house, to which I got the following
response.

> The conversion of a portion of a house that otherwise is the taxpayer’s principal residence for the purpose of earning income or the creation of a separate building or structure on land that forms part of the taxpayer’s principal residence for the purpose of earning income are examples of structural changes that would result in a deemed disposition and reacquisition of a portion of the property.

Similarly, when a homeowner deactivate a suite and absorbes it into their main residence that would trigger another
["deemed disposition (and reacquisition) thereof at fair market value"](http://www.cra-arc.gc.ca/tx/tchncl/ncmtx/fls/s1/f3/s1-f3-c2-eng.html#N10BCD).
Which then would trigger a "taxable capital
gain attributable to the period of use of such portion of the property for income–producing purposes", just like it
would at a sale of the property.

In the case when the homeowner rents out their entire home and later moves back in again, the homeowner can, under
certain circumstances, make an election that he can maintain the primary residence status for most recent 4 years during
which the home was rented out. I have asked the CRA to clarify if a similar election could be made for a secondary suite,
when for example after four years of renting the suite is deactivated and again absorbed in the main house and the response
was that "such an election cannot be made where there is only a partial change in use of the property."


Based on this I am fairly convinced that the portion of a home used as a secondary suite or laneway house is not exempt
from capital gains tax. Despite my best efforts I might still be reading this wrong, in which case I would love to have
an expert weight in on this.
 
###Estimating Capital Gains Generated by Suites 
To estimate the amount of capital gains tax based on secondary suites expected to accrue annually in the City of Vancouver
we use the inflation-adjusted land value gain of a home as a
proxy for the portion of the appreciation of the property that is not due to improvements the owner made to the home, i.e.
the portion that would be subject to capital gains tax if this wasn't a primary residence. 

To compute the taxable gains for an individual property we take the difference between the current land value and the
(inflation-adjusted) present land value at the time the property was bought. To simplify things a little we will consider the
current average (over SFH with suite) land value, the average holding period (years between buy and sell), and the
average inflation-adjusted land value gains. This can be refined, but should suffice for our purposes.

Going back to our estimate, the current (July 2015) average land value of single family homes was $1,640,000. Suites skew toward
the east, where average land value was $1,080,000. We roughly average these and take $1,300,000 as our base value. As
average holing period we take 10 years, and we compute the average inflation-adjusted land value gain between 2005
and 2015 at 10.4% (9.7% on east side). So let's use 10%.

That gives an estimate of the annual land value gain of $850,000 over 10 years, or $85,000 on average per year. 
As a sanity check, this is in line with estimates of average annual land value gain for single family properties 
[we have done before](http://doodles.mountainmath.ca/blog/2016/01/24/work-vs-twiddling-thumbs/), although these weren't
inflation-adjusted.

Roughly estimating that on
average a secondary suite takes up about a quarter of the area of a
house, we attribute $21,250 of the $85,000 annual land value gains to the secondary suite for tax purposes.

Of course capital gains tax are only payable when the property sells, but the yearly average gains accumulate and eventually
properties will sell. In which case we expect capital gains taxes to be payed on $21,250 per year the suite was rented.
So if a person sells a home with a suite that was rented for the last 10 years, the person will have to pay capital gains
taxes on $212,500. On average, we expect $21,250 of taxable capital gains income per house with suite per year.

The way capital gains tax works is that half of the gains are taxed at the marginal tax rate. As these tend to be large
sums of money at a time, it is safe to assume that the the effective tax rate on the gains is relatively high, say 35% or
more. Some of the taxes could be deferred by e.g. transferring the gains into RRSPs and later taxed at a lower rate. But
we will ignore this, it has the effect of lowering the effective tax rate on the gains and move the tax payments into the future,
but will not effect the overall amount of capital gains declared.

Assuming an effective tax rate of 35% on the gains we expect on average $3,700 of taxes payed per home with suite per
year through this mechanism. With
conservatively estimated 30,000 secondary suites in Vancouver that adds up to a tidy sum of $111,000,000 for capital gains
taxes paid due to secondary suites in the City of Vancouver. Per year.

##To Rent or Not to Rent Out a Suite
In the case of rental suites with owner-occupied main portion the suite incurs both income and capital gains tax obligations.
This begs the question what minimum rent is required
to offset the capital gains obligations in a particular year. Typically homeowners don't know the annual value value gains
ahead of time, so this is more of an academic exercise than a practical questions. The important takeaway is that the
capital gains exemption has the effect of dramatically lowering the cap rate for converting part of a principal residence
into a rental unit.

The math is quite simple, we need to compare the net rental income (rent minus deductions) to the capital gains taxes 
payable due to the rental. A more comprehensive way to look at this is to look at the
CAP rate based on land value investment, in this case the net rental income (after-tax rental income minus deductions)
per land value attributed to the suite. With our standard assumptions this sits at 1.9%.

This we can compare to the effective tax rate on the capital gains, which is given by multiplying half of the tax rate
(as only half the gains are taxed at that rate) with the rate of land value rise, which comes in at 1.75% with our standard assumptions.

To conclude this calculation we define the net cap rate as the difference between the cap rate and the effective tax rate
on the capital gains. If this is positive, it is the advantageous to rent. If it is negative, leaving the property vacant
will yield higher returns.

More specifically if we want to understand if it was advantageous to rent out a suite in a particular year for a particular
property we can adjust the assumptions in the interactive at the bottom accordingly. For example, in the year 2015 we
saw an average land value gain of about 20%. Adjusting the rate in the interactive, and setting the holding period to 1 year,
we get a net CAP rate of -1.6%. The break-even rent, above which it is advantageous to rent out the suite, was $1,820.
  
## Taxes Collected
It would be interesting to compare these estimates with actual taxes collected. But this won't be easy without internal
CRA data. The census for example does not break out rental income. But it does break out capital gains income. Not all
capital gains income stems from selling homes with secondary suites of course and again, the census does not break out
the sources of the capital gains income. But capital gains income is rare enough, especially on the suite-heavy east side,
to yield some information.

<a href="https://censusmapper.ca/maps/480#11/49.2360/-123.1361" target="_blank"><img  src="/images/capital_gains.png" style="width:50%;float:left;margin-right:10px;"></a> 
In the City of Vancouver, a total of
$830 million of net capital gains and losses was reported to the CRA in 2010,
most of which was claimed by people living on the west side. When comparing
to 2010 taxes we should adjust our calculation to the average east side single family land value of $620,000 in 2010 and
might want to assume a very conservative inflation-adjusted land value gain of 5% per year (I have no data before 2005,
but one could use sales data to estimate this better). This would yield an expected taxable annual capital gains of $10,000
per suite in each area (with expected annual taxes generated of $1,750 per suite), adding up to over one third of all
capital gains reported in the City of Vancouver that year. And that's not counting taxable capital gains from selling
investment properties that were not used as principal residence at all and where all the gains are taxable. Or any other
source of capital gains income.

[Eyeballing the total capital gains reported](https://censusmapper.ca/maps/480)  suggests that tax compliance could be improved. It seems that the
changes in requiring the reporting of a sale of a principal residence that were announced yesterday will do just that. 


## Interactive
For people interested in adjusting the assumptions made for these estimates I made a quick interactive to facilitate this.
Adjust to fit your own assumptions.
 
### Assumptions
<table style="border-spacing:1em 0;border-collapse:separate;margin-bottom:20px;">
<tr><td>Secondary Suites</td><td><input type="range" id="suite"></td><td id="suiteValue"></td></tr>
<tr><td>Average Portion of House Taken by Suite</td><td> <input type="range" id="area"></td><td id="areaValue"></td></tr>
<tr><td>Average Rent</td><td> <input type="range" id="rent"></td><td id="rentValue"></td></tr>
<tr><td>Average Rent Deductions</td><td> <input type="range" id="deductions"></td><td id="deductionsValue"></td></tr>
<tr><td>Average Marginal Tax Rate</td><td><input type="range" id="tax"></td><td id="taxValue"></td></tr>
<tr><td>Average SFH Land Value</td><td><input type="range" id="land"></td><td id="landValue"></td></tr>
<tr><td>Average SFH Holding Period</td><td><input type="range" id="years"></td><td id="yearsValue"></td></tr>
<tr><td>Average Inflation-Adjusted Land Value Gain</td><td><input type="range" id="gain"></td><td id="gainValue"></td></tr>
</table>

### Computed Quantities of Interest
<table style="border-spacing:1em 0;border-collapse:separate;margin-bottom:20px;">
<tr><td>CAP Rate</td><td id="cap_rate"></td></tr>
<tr><td>Effective Cap Gains Tax Rate</td><td id="effective_tax_rate"></td></tr>
<tr><td>Net CAP Rate</td><td id="net_cap_rate"></td></tr>
<tr><td>Break-Even Rent</td><td id="minimal_rent"></td></tr>
</table>

### Annual Taxes Generated
<table style="border-spacing:1em 0;border-collapse:separate;margin-bottom:20px;">
<tr><td>Annual Income Tax Generated</td><td id="income_tax"></td></tr>
<!--tr style="display:none;"><td>Average Annual Adjusted Total Land Value Gain</td><td id="av_lv_gain"></td></tr-->
<tr><td>Annual Cap Gains Tax Generated</td><td id="cap_gains_tax"></td></tr>
<tr><td>Annual Total Tax Generated</td><td id="total_tax"></td></tr>
</table>

<script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/lib/jquery.min.js" charset="utf-8"></script>
<script>
var percentageFormatter=d3.format(".1%");
var currencyFormatter=d3.format("$,.3r");
var numberFormatter=d3.format(",.0f");

var suiteValue=30000,
    rentValue=1000,
    deductionsValue=0.2,
    landValue=1300000,
    gainValue=0.1,
    yearsValue=10.0,
    areaValue=0.25,
    minimalRentValue=1000,
    taxValue=0.35;
document.getElementById('suite').value=(suiteValue-20000.0)/400.0;
document.getElementById('rent').value=(rentValue-500)/20;
document.getElementById('deductions').value=deductionsValue*100;
document.getElementById('area').value=areaValue*100;
document.getElementById('tax').value=taxValue*100;
document.getElementById('gain').value=(gainValue+0.1)/0.6*100;
document.getElementById('land').value=(landValue-200000)/20000;
document.getElementById('years').value=(yearsValue-1)*5;

function updateResults(){
   $('#suiteValue').html(numberFormatter(suiteValue));
   $('#rentValue').html(currencyFormatter(rentValue));
   $('#deductionsValue').html(percentageFormatter(deductionsValue));
   $('#areaValue').html(percentageFormatter(areaValue));
   $('#taxValue').html(percentageFormatter(taxValue));
   $('#landValue').html(currencyFormatter(landValue));
   $('#gainValue').html(percentageFormatter(gainValue));
   $('#yearsValue').html(numberFormatter(yearsValue));

   var value1=suiteValue*rentValue*(1-deductionsValue)*taxValue*12.0;
   $('#income_tax').html(currencyFormatter(value1));
   var lvGain=landValue*(1-Math.pow(1-gainValue,yearsValue))/yearsValue;
   var value2=suiteValue*taxValue*areaValue*lvGain/2.0;
   $('#av_lv_gain').html(currencyFormatter(lvGain));
   $('#cap_gains_tax').html(currencyFormatter(value2));
   $('#total_tax').html(currencyFormatter(value1+value2));
   var minimalRent=landValue*areaValue*gainValue/2*taxValue/(1-taxValue)/(1-deductionsValue)/12.0;
   $('#minimal_rent').html(currencyFormatter(minimalRent));
   var capRate=rentValue*12*(1-deductionsValue)*(1-taxValue)/(landValue*areaValue);
   $('#cap_rate').html(percentageFormatter(capRate));
   var effectiveRate=taxValue/2.0*gainValue;
   $('#effective_tax_rate').html(percentageFormatter(effectiveRate));
   $('#net_cap_rate').html(percentageFormatter(capRate-effectiveRate));
}

$('#suite').on('change',function(){
    suiteValue=parseFloat(this.value)*400.0+20000.0;
    updateResults();
});
$('#area').on('change',function(){
    areaValue=parseFloat(this.value)/100.0;
    updateResults();
});
$('#rent').on('change',function(){
    rentValue=parseFloat(this.value)*20+500;
    updateResults();
});
$('#land').on('change',function(){
    landValue=parseFloat(this.value)*20000+200000;
    updateResults();
});
$('#deductions').on('change',function(){
    deductionsValue=parseFloat(this.value)/100.0;
    updateResults();
});
$('#gain').on('change',function(){
    gainValue=parseFloat(this.value)/100.0*0.6-0.1;
    updateResults();
});
$('#years').on('change',function(){
    yearsValue=Math.round(parseFloat(this.value)/5.0 + 1.0);
    document.getElementById('years').value=(yearsValue-1)*5;
    updateResults();
});
$('#tax').on('change',function(){
    taxValue=parseFloat(this.value)/100.0;
    updateResults();
});

updateResults();
</script>
