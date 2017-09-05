function unoccupiedBarGraph(selector,url,transform,totalHeight) {


    var divWidth = $(selector).width();

    var margin = {top: 20, right: 10, bottom: 20, left: 70},
        width = divWidth - margin.left - margin.right,
        height = totalHeight - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], .1, .3);

    var x = d3.scale.linear()
        .range([0, width]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(8, "%");

    x.domain([0, 0.08]);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");


    var svg = d3.select(selector).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("overflow", "visible")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xa = svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")");
    var ya = svg.append("g")
        .attr("class", "y axis");

    xa.call(xAxis);

    var legend = d3.select(selector).append("div")
        .attr("class", "legend2");
    var link = legend.append("div").attr("class", "link").style("float", "left");
    var info = legend.append("div").attr("class", "info").style("float", "right");

    function tooltip(d) {
        info.text(d ? d3.format('.1%')(d.value) : '');
    }


    d3.json(url, function (error, json) {
        function updateData() {
            var data = transform(json);
            //x.domain([0, d3.max(data, function(d) { return d.value; })]);
            y.domain(data.map(function (d) {
                return d.name;
            }));
            ya.call(yAxis);
            //xa.call(xAxis);

            var barData = svg.selectAll(".bar.lu")
                .data(data);
            barData.exit().remove();

            barData.enter().append("rect")
                .attr("class", "bar lu")
                .attr("x", 0)
                .attr("y", function (d) {
                    return y(d.name);
                })
                .attr("height", y.rangeBand())
                .attr("width", 0)
                .on('click', tooltip)
                .on('mouseover', tooltip)
                .on('mouseout', function (d) {
                    tooltip()
                })
                .on('touch', tooltip)
                .style("fill", 'orange');

            barData
                .transition(1000)
                .attr("width", function (d) {
                    return x(d.value);
                });
        }


        updateData();
    });
}

var t1=function(json){
    return Object.keys(json).map(function(key){
        var values=json[key];
        return {name:key, value:values[0]/values[1]};
    })
};
var t2=function(json){
    return Object.keys(json).map(function(key){
        return {name:key, value:json[key]};
    })
};

unoccupiedBarGraph("#unoccupied_cma","/data/unoccupied_cma.json",t1,150);
//unoccupiedBarGraph("#unoccupied_csd","/data/unoccupied_csd.json",t2,200);