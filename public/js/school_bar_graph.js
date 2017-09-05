function horBarGraph(selector,defaultOptionName) {

    var domain=[
        "0 to 4 years",
        "5 to 9 years",
        "10 to 14 years",
        "15 years",
        "16 years",
        "17 years",
        "18 years",
        "19 years"
    ];

    var colorMap = {};
    domain.forEach(function(d,i){colorMap[d]=colorbrewer.YlGnBu[8][i]});


    var divWidth = $(selector).width();

    var margin = {top: 20, right: 10, bottom: 20, left: 200},
        width = divWidth - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
        .domain(domain)
        .rangeRoundBands([0, height], .1, .3);

    var x = d3.scale.linear()
        .domain([0, 1500])
        .range([0, width]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(8, ".0f");


    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");


    var selectWrapper = d3.select(selector).append("div").text("Select School: ");
    var select = selectWrapper
        .append('select')
        .attr('class', '-select');


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
    ya.call(yAxis);

    var legend = d3.select(selector).append("div")
        .attr("class", "legend2");
    var link = legend.append("div").attr("class", "link").style("float", "left");
    var info = legend.append("div").attr("class", "info").style("float", "right");

    function tooltip(d) {
        info.text(d ? d3.format('.0f')(d.value) : '');
    }


    d3.csv("/data/e-schools.csv", function (error, csv) {
        function updateData(school) {
            var data=domain.map(function(d){return {key: d, value: school[d]};});

            var barData = svg.selectAll(".bar.lu")
                .data(data);
            barData.exit().remove();

            barData.enter().append("rect")
                .attr("class", "bar lu")
                .attr("x", 0)
                .attr("y", function (d) {
                    return y(d.key);
                })
                .attr("height", y.rangeBand())
                .attr("width", 0)
                .on('click', tooltip)
                .on('mouseover', tooltip)
                .on('mouseout', function (d) {
                    tooltip()
                })
                .on('touch', tooltip)
                .style("fill", function (d) {
                    return colorMap[d.key]
                });

            barData
                .transition(1000)
                .attr("width", function (d) {
                    return x(d.value);
                });
        }

        var options = select
            .selectAll('option')
            .data(csv);


        function onchange() {
            var si = select.property('selectedIndex'),
                s = options.filter(function (d, i) {
                    return i === si
                }),
                data = s.datum();
            updateData(data);
        }

        select.on('change', onchange);

        options.enter()
            .append('option')
            .text(function (d) {
                return d.NAME;
            })
            .property("selected", function (d) {
                return d.NAME === defaultOptionName;
            });
        options.exit().remove();

        updateData(csv.filter(function(d){return d.NAME==defaultOptionName})[0]);
    });
}



horBarGraph('#schools',"University Hill Elem.");



