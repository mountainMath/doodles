function boxplot(div,shiftAxis,domainFormatter,rangeFormatter,domainLabelFormatter){
    if (!domainFormatter) domainFormatter=d3.format("d");
    if (!rangeFormatter)
        rangeFormatter = function (y) {
            return y;
        };
    if (!domainLabelFormatter) domainLabelFormatter=domainFormatter;

    var margin = {top: 20, right: 20, bottom: 40, left: 70},
        width = parseInt(div.style("width")) - margin.left - margin.right,
        height = parseInt(div.style("height")) - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);


    var xAxis = d3.svg.axis()
        .scale(x)
        .tickFormat(domainFormatter)
        .orient("bottom");


    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(rangeFormatter)
        .ticks(5, rangeFormatter);

    var svg = div.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data_url=div[0][0].dataset.url;
    var legend=d3.select(div.node().parentNode).select('.legend');


    d3.json(data_url, function(error, json) {
        if (error) throw error;
        var graphData=json[0];
        var data=graphData.data;
        var color = graphData.color || 'steelblue';
        var domain=data.map(function(d){return d.x;});
        x.domain(domain);

        function graphValueId(){
            return graphData.class + '_'+ '_value'
        }

        var text=graphData.label;
        var html='<i style="background:' + color + '"></i> ' + text + ' <span style="float:right;margin-right:10px;" id="' + graphValueId() + '"></span>';
        legend.append('p').html(html);


        y.domain([0, d3.max(data, function(d) { return d3.max([d.quartiles[2], d.whiskers[1]]); })]);

        var domainTickValues=[];
        var skip=Math.round(40/x.rangeBand());
        if (skip<=0) skip=1;
        for (var i=0;i<x.domain().length;i++) {
            if (i % skip==0) domainTickValues.push(x.domain()[i]);
        }
        if (x.domain().length % 5 !=0) domainTickValues.push(x.domain()[x.domain().length-1]);
        xAxis.tickValues(domainTickValues);

        var xShift=shiftAxis ?  x.rangeBand()/2.0 * 1.1 : 0;

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + xShift + "," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
//    .append("text")
//      .attr("transform", "rotate(-90)")
//      .attr("y", 6)
//      .attr("dy", ".71em")
//      .style("text-anchor", "end")
//      .text("Probability");

        function updateTooltip(d,i){
                var value=d ? (domainLabelFormatter(d.x) + ': Median ' +rangeFormatter(d.quartiles[1]) + '.<br>(10, 25, 75, 90 Percentile: ' + rangeFormatter(d.whiskers[0]) + ', ' + rangeFormatter(d.quartiles[0]) + ', ' +rangeFormatter(d.quartiles[2]) + ', ' + rangeFormatter(d.whiskers[1])+')') : '';
                d3.select('#'+graphValueId()).html( value);
        }

        var year=svg.selectAll(".year")
            .data(data)
            .enter().append("g")
            .attr("class",graphData.class)
            .on('mouseover',updateTooltip)
            .on('click',updateTooltip)
            .on('touch',updateTooltip)
            .on('mouseout',function(){updateTooltip(null,i)});

        year.selectAll(".color-bar")
            .data(function(d){
                return [d];
            })
            .enter().append("rect")
            .attr("class", "color-bar")
            .attr("x", function(d) { return x(d.x); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.quartiles[2]); })
            .attr("height", function(d) { return Math.max(0, y(d.quartiles[0]) - y(d.quartiles[2])); })
            .attr("fill",graphData.color);

        year.selectAll(".color-line")
            .data(function(d) { return [d]; })
            .enter().append("line")
            .attr("class", "color-line")
            .attr("stroke", 'red')
            .attr("stroke-width", 2)
            .attr("x1", function(d) { return x(d.x); })
            .attr("x2", function(d) { return x(d.x)+x.rangeBand(); })
            .attr("y1", function(d) { return y(d.quartiles[1]); })
            .attr("y2", function(d) { return y(d.quartiles[1]); });

        year.selectAll(".whisker-low-line")
            .data(function(d) { return [d]; })
            .enter().append("line")
            .attr("class", "whisker-low-line")
            .attr("stroke", 'grey')
            .attr("x1", function(d) { return x(d.x); })
            .attr("x2", function(d) { return x(d.x)+x.rangeBand(); })
            .attr("y1", function(d) { return y(d.whiskers[0]); })
            .attr("y2", function(d) { return y(d.whiskers[0]); });
        year.selectAll(".whisker-low-dash")
            .data(function(d) { return [d]; })
            .enter().append("line")
            .attr("class", "whisker-low-dash")
            .attr("stroke", 'grey')
            .attr("stroke-dasharray", "3,3")
            .attr("x1", function(d) { return x(d.x)+x.rangeBand()/2.0; })
            .attr("x2", function(d) { return x(d.x)+x.rangeBand()/2.0; })
            .attr("y1", function(d) { return y(d.whiskers[0]); })
            .attr("y2", function(d) { return y(d.quartiles[0]); });
        year.selectAll(".whisker-high-line")
            .data(function(d) { return [d]; })
            .enter().append("line")
            .attr("class", "whisker-high-line")
            .attr("stroke", 'grey')
            .attr("x1", function(d) { return x(d.x); })
            .attr("x2", function(d) { return x(d.x)+x.rangeBand(); })
            .attr("y1", function(d) { return y(d.whiskers[1]); })
            .attr("y2", function(d) { return y(d.whiskers[1]); });
        year.selectAll(".whisker-high-dash")
            .data(function(d) { return [d]; })
            .enter().append("line")
            .attr("class", "whisker-high-dash")
            .attr("stroke", 'grey')
            .attr("stroke-dasharray", "3,3")
            .attr("x1", function(d) { return x(d.x)+x.rangeBand()/2.0; })
            .attr("x2", function(d) { return x(d.x)+x.rangeBand()/2.0; })
            .attr("y1", function(d) { return y(d.whiskers[1]); })
            .attr("y2", function(d) { return y(d.quartiles[2]); });


    });

}



var percentageFormatter=d3.format(".1%");
var yearFormatter=d3.format();
var meterF=d3.format(".0f");
var qubicMF=d3.format(".0f");
var meterFormatter=function(d){return meterF(d)+'m'};
var qubicMeterFormatter=function(d){return qubicMF(d)+'m^3'};
var ratioFormatter=d3.format(".2f");

boxplot(d3.select("#sfh_coverage"),true,yearFormatter,percentageFormatter,yearFormatter);
boxplot(d3.select("#sfh_height"),true,yearFormatter,meterFormatter,yearFormatter);
boxplot(d3.select("#sfh_volume"),true,yearFormatter,qubicMeterFormatter,yearFormatter);
boxplot(d3.select("#sfh_square"),true,yearFormatter,ratioFormatter,yearFormatter);
