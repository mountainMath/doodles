function setupGraphs() {


function horBarGraph(selector,selectionKeys) {

    var landUseOrder = [
        "S110",
        "S131",
        "S120",
        "S130",
        "S135",
        "S410",
        "S200",
        "S230",
        "S235",
        "S400",
        "A500",
        "S300",
        "R100",
        "S420",
        "W400",
        "U100",
        "M300",
        "S600",
        "S650",
        "F100",
        "S700",
        "S500"
    ];
    var landUseKeys=landUseOrder.filter(function(key){return !selectionKeys || selectionKeys.indexOf(key)!=-1});

    var desMap = {
        "R100": "Recreation, Open Space, Natural Areas",
        "M300": "Industrial – Extractive",
        "S120": "Residential – Rural",
        "S130": "Residential - Low-rise Apartment",
        "A500": "Agriculture",
        "S100": "Residential - Mobile Home Park",
        "S235": "Mixed Use - High-rise Apartment",
        "S131": "Residential – Townhouse",
        "S700": "Rail, Rapid Transit, Transpo., Util. and Commu.",
        "S230": "Mixed Use - Low-rise Apartment",
        "S600": "Port Metro Vancouver",
        "S420": "Cemetery",
        "S400": "Institutional",
        "U100": "Undeveloped and Unclassified",
        "S410": "Res - Instit and Non-Market Housing",
        "R200": "Lakes, Large Rivers and Other Water",
        "S500": "Road Right-of-Way",
        "S300": "Industrial",
        "S200": "Commercial",
        "W400": "Protected Watershed",
        "S110": "Residential - Single Detached & Duplex",
        "S135": "Residential - High-rise Apartment",
        "S650": "Airport/Airstrip",
        "F100": "Harvesting and Research"
    };

    var colorMap = {
        "R100": "#006400",
        "M300": "#8B4513",
        "S120": "#FFDAB9",
        "S130": "#fffd0a",
        "A500": "#A0522D",
        "S100": "#FFA07A",
        "S235": "#800000",
        "S131": "#b4d600",
        "S700": "#4d0000",
        "S230": "#DC143C",
        "S600": "#4d004d",
        "S420": "#008000",
        "S400": "#00BFFF",
        "U100": "#505050",
        "S410": "#40E0D0",
        "R200": "#0000CD",
        "S500": "#b29966",//"#f5f5dc",
        "S300": "#DEB887",
        "S200": "#FF0000",
        "W400": "#00008B",
        "S110": "#d8ff0a",
        "S135": "#FFA500",
        "S650": "#670067",
        "F100": "#FF1493"
    };

    var muniMap = {
        "GVA": "Metro Vancouver",
        "VA": "City of Vancouver",
        "SU": "City of Surrey",
        "BU": "City of Burnaby",
        "RI": "City of Richmond",
        "CNV": "City of North Vancouver",
        "DNV": "District of North Vancouver",
        "WV": "District of West Vancouver",
        "QT": "City of Coquitlam",
        "BI": "Bowen Island Municipality",
        "AN": "Village of Anmore",
        "MR": "City of Maple Ridge",
        "EA": "Electoral Area A - Barnston Island",
        "LB": "Village of Lions Bay",
        "LC": "City of Langley",
        "PO": "City of Port Coquitlam",
        "PT": "City of Pitt Meadows",
        "WR": "City of White Rock",
        "NW": "City of New Westminster",
        "PM": "City of Port Moody",
        "LT": "Township of Langley",
        "DT": "Corporation of Delta",
        "BE": "Village of Belcarra"
    };


    var divWidth = $(selector).width();

    var margin = {top: 20, right: 10, bottom: 20, left: 200},
        width = divWidth - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], 0.1, 0.3);

    var x = d3.scale.linear()
        .range([0, width]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(8, "%");

    x.domain([0, 0.5]);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var selectWrapper = d3.select(selector).append("div").text("Select Municipality: ");
    var select = selectWrapper
        .append('select')
        .attr('class', 'muni-select');


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


    d3.json("/data/land_use_breakdown.json", function (error, json) {
        function updateData(key) {
            var muniData = json[key];
            //if (key == 'GVA')
            //    link.html('<a href="https://mountainmath.ca/land_use/map" target="_blank">View ' + muniMap[key] + ' on map</a>');
            //else
            //    link.html('<a href="https://mountainmath.ca/land_use/map/mu_filter=[%22' + key + '%22]" target="_blank">View ' + muniMap[key] + ' on map</a>');
            var total=0;
            landUseKeys.forEach(function(key){total +=  muniData[key]});
            var data = landUseKeys.map(function (key) {
                return {key: key, name: desMap[key], value: muniData[key] / total};
            });
            data = data.filter(function (hash) {
                return hash[key] != 'Total';
            });
            //x.domain([0, d3.max(data, function(d) { return d.value; })]);
            y.domain(data.map(function (d) {
                return d.name;
            }));
            ya.call(yAxis);
//    xa.call(xAxis);

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
                    tooltip();
                })
                .on('touch', tooltip)
                .style("fill", function (d) {
                    return colorMap[d.key];
                });

            barData
                .transition(1000)
                .attr("width", function (d) {
                    return x(d.value);
                });
        }

        var options = select
            .selectAll('option')
            .data(Object.keys(muniMap));

        var defaultOptionName = 'VA';

        function onchange() {
            var si = select.property('selectedIndex'),
                s = options.filter(function (d, i) {
                    return i === si;
                }),
                data = s.datum();
            updateData(data);
        }

        select.on('change', onchange);

        options.enter()
            .append('option')
            .text(function (d) {
                return muniMap[d];
            })
            .property("selected", function (d) {
                return d === defaultOptionName;
            });
        options.exit().remove();

        updateData(defaultOptionName);
    });
}


var radvizComponent = function() {
    var config = {
        el: null,
        size: 400,
        margin: 50,
        colorScale: d3.scale.ordinal().range(['skyblue', 'orange', 'lime']),
        colorAccessor: null,
        dimensions: [],
        drawLinks: true,
        zoomFactor: 1,
        dotRadius: 6,
        useRepulsion: false,
        useTooltip: true,
        tooltipFormatter: function(d) {
            return d;
        }
    };

    var events = d3.dispatch('panelEnter', 'panelLeave', 'dotEnter', 'dotLeave');

    var force = d3.layout.force()
        .chargeDistance(0)
        .charge(-60)
        .friction(0.5);

    var render = function(data) {
        data = addNormalizedValues(data);
        var normalizeSuffix = '_normalized';
        var dimensionNamesNormalized = config.dimensions.map(function(d) {
            return d + normalizeSuffix;
        });
        var thetaScale = d3.scale.linear().domain([0, dimensionNamesNormalized.length]).range([0, Math.PI * 2]);

        var chartRadius = config.size / 2 - config.margin;
        var nodeCount = data.length;
        var panelSize = config.size - config.margin * 2;

        var dimensionNodes = config.dimensions.map(function(d, i) {
            var angle = thetaScale(i);
            var x = chartRadius + Math.cos(angle) * chartRadius * config.zoomFactor;
            var y = chartRadius + Math.sin(angle) * chartRadius * config.zoomFactor;
            return {
                index: nodeCount + i,
                x: x,
                y: y,
                fixed: true,
                name: d
            };
        });

        var linksData = [];
        data.forEach(function(d, i) {
            dimensionNamesNormalized.forEach(function(dB, iB) {
                linksData.push({
                    source: i,
                    target: nodeCount + iB,
                    value: d[dB]
                });
            });
        });

        force.size([panelSize, panelSize])
            .linkStrength(function(d) {
                return d.value;
            })
            .nodes(data.concat(dimensionNodes))
            .links(linksData)
            .start();

        // Basic structure
        var svg = d3.select(config.el)
            .append('svg')
            .attr({
                width: config.size,
                height: config.size
            });

        svg.append('rect')
            .classed('bg', true)
            .attr({
                width: config.size,
                height: config.size
            });

        var root = svg.append('g')
            .attr({
                transform: 'translate(' + [config.margin, config.margin] + ')'
            });

        var panel = root.append('circle')
            .classed('panel', true)
            .attr({
                r: chartRadius,
                cx: chartRadius,
                cy: chartRadius
            });

        if(config.useRepulsion) {
            root.on('mouseenter', function(d) {
                force.chargeDistance(80).alpha(0.2);
                events.panelEnter();
            });
            root.on('mouseleave', function(d) {
                force.chargeDistance(0).resume();
                events.panelLeave();
            });
        }

        // Links
        if(config.drawLinks) {
            var links = root.selectAll('.link')
                .data(linksData)
                .enter().append('line')
                .classed('link', true);
        }

        // Nodes
        var nodes = root.selectAll('circle.dot')
            .data(data)
            .enter().append('circle')
            .classed('dot', true)
            .attr({
                r: config.dotRadius,
                fill: function(d) {
                    return config.colorScale(config.colorAccessor(d));
                }
            })
            .on('mouseenter', function(d) {
                if(config.useTooltip) {
                    var mouse = d3.mouse(config.el);
                    tooltip.setText(config.tooltipFormatter(d)).setPosition(mouse[0], mouse[1]).show();
                }
                events.dotEnter(d);
                this.classList.add('active');
            })
            .on('mouseout', function(d) {
                if(config.useTooltip) {
                    tooltip.hide();
                }
                events.dotLeave(d);
                this.classList.remove('active');
            });

        // Labels
        var labelNodes = root.selectAll('circle.label-node')
            .data(dimensionNodes)
            .enter().append('circle')
            .classed('label-node', true)
            .attr({
                cx: function(d) {
                    return d.x;
                },
                cy: function(d) {
                    return d.y;
                },
                r: 4
            });

        var labels = root.selectAll('text.label')
            .data(dimensionNodes)
            .enter().append('text')
            .classed('label', true)
            .attr({
                x: function(d) {
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                'text-anchor': function(d) {
                    if(d.x > (panelSize * 0.4) && d.x < (panelSize * 0.6)) {
                        return 'middle';
                    } else {
                        return(d.x > panelSize / 2) ? 'start' : 'end';
                    }
                },
                'dominant-baseline': function(d) {
                    return(d.y > panelSize * 0.6) ? 'hanging' : 'auto';
                },
                dx: function(d) {
                    return(d.x > panelSize / 2) ? '6px' : '-6px';
                },
                dy: function(d) {
                    return(d.y > panelSize * 0.6) ? '6px' : '-6px';
                }
            })
            .text(function(d) {
                return d.name;
            });

        // Update force
        force.on('tick', function() {
            if(config.drawLinks) {
                links.attr({
                    x1: function(d) {
                        return d.source.x;
                    },
                    y1: function(d) {
                        return d.source.y;
                    },
                    x2: function(d) {
                        return d.target.x;
                    },
                    y2: function(d) {
                        return d.target.y;
                    }
                });
            }

            nodes.attr({
                cx: function(d) {
                    return d.x;
                },
                cy: function(d) {
                    return d.y;
                }
            });
        });

        var tooltipContainer = d3.select(config.el)
            .append('div')
            .attr({
                id: 'radviz-tooltip'
            });
        var tooltip = tooltipComponent(tooltipContainer.node());

        return this;
    };

    var setConfig = function(_config) {
        config = myutils.mergeAll(config, _config);
        return this;
    };

    var addNormalizedValues = function(data) {
        data.forEach(function(d) {
            config.dimensions.forEach(function(dimension) {
                d[dimension] = +d[dimension];
            });
        });

        var normalizationScales = {};
        config.dimensions.forEach(function(dimension) {
            normalizationScales[dimension] = d3.scale.linear().domain(d3.extent(data.map(function(d, i) {
                return d[dimension];
            }))).range([0, 1]);
        });

        data.forEach(function(d) {
            config.dimensions.forEach(function(dimension) {
                d[dimension + '_normalized'] = d[dimension];//normalizationScales[dimension](d[dimension]);
            });
        });

        return data;
    };

    var exports = {
        config: setConfig,
        render: render
    };

    d3.rebind(exports, events, 'on');

    return exports;
};

var myutils = {
    merge: function(obj1, obj2) {
        for(var p in obj2) {
            if(obj2[p] && obj2[p].constructor == Object) {
                if(obj1[p]) {
                    this.merge(obj1[p], obj2[p]);
                    continue;
                }
            }
            obj1[p] = obj2[p];
        }
    },

    mergeAll: function() {
        var newObj = {};
        var objs = arguments;
        for(var i = 0; i < objs.length; i++) {
            this.merge(newObj, objs[i]);
        }
        return newObj;
    },

    htmlToNode: function(htmlString, parent) {
        while(parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
        return this.appendHtmlToNode(htmlString, parent);
    },

    appendHtmlToNode: function(htmlString, parent) {
        return parent.appendChild(document.importNode(new DOMParser().parseFromString(htmlString, 'text/html').body.childNodes[0], true));
    }
};

var tooltipComponent = function(tooltipNode) {

    var root = d3.select(tooltipNode)
        .style({
            position: 'absolute',
            'pointer-events': 'none'
        });

    var setText = function(html) {
        root.html(html);
        return this;
    };
    var position = function(x, y) {
        root.style({
            left: x + 'px',
            top: y + 'px'
        });
        return this;
    };
    var show = function() {
        root.style({
            display: 'block'
        });
        return this;
    };
    var hide = function() {
        root.style({
            display: 'none'
        });
        return this;
    };

    return {
        setText: setText,
        setPosition: position,
        show: show,
        hide: hide
    };
};

var keyMap = {
    //"R100": "Recreation, Open Space, Natural Areas",
    //"M300": "Industrial – Extractive",
    "S120": "Residential – Rural",
    "S130": "Residential - Low-rise Apartment",
    //"A500": "Agriculture",
    "S100": "Residential - Mobile Home Park",
    "S235": "Mixed Use - High-rise Apartment",
    "S131": "Residential – Townhouse",
    "S700": "Rail, Rapid Transit, Transpo., Util. and Commu.",
    "S230": "Mixed Use - Low-rise Apartment",
    "S600": "Port Metro Vancouver",
    //"S420": "Cemetery",
    "S400": "Institutional",
    //"U100": "Undeveloped and Unclassified",
    "S410": "Res - Instit and Non-Market Housing",
    //"R200": "Lakes, Large Rivers and Other Water",
    "S500": "Road Right-of-Way",
    "S300": "Industrial",
    "S200": "Commercial",
    //"W400": "Protected Watershed",
    "S110": "Residential - Single Detached & Duplex",
    "S135": "Residential - High-rise Apartment",
    //"S650": "Airport/Airstrip",
    ///"F100": "Harvesting and Research"
};



var muniList = {
    "GVA": "Metro Vancouver",
    "VA": "City of Vancouver",
    "SU": "City of Surrey",
    "BU": "City of Burnaby",
    "RI": "City of Richmond",
    "CNV": "City of North Vancouver",
    "DNV": "District of North Vancouver",
    "WV": "District of West Vancouver",
    "QT": "City of Coquitlam",
    "BI": "Bowen Island Municipality",
    "AN": "Village of Anmore",
    "MR": "City of Maple Ridge",
    "EA": "Electoral Area A - Barnston Island",
    "LB": "Village of Lions Bay",
    "LC": "City of Langley",
    "PO": "City of Port Coquitlam",
    "PT": "City of Pitt Meadows",
    "WR": "City of White Rock",
    "NW": "City of New Westminster",
    "PM": "City of Port Moody",
    "LT": "Township of Langley",
    "DT": "Corporation of Delta",
    "BE": "Village of Belcarra"
};




var landUseForViz = [
    "S110",
    "S131",
    "S120",
    "S130",
    "S135",
    "S410",
    "S200",
    "S230",
    "S235",
    "S400",
    "A500",
    "S300",
    "R100",
    "S420",
    "W400",
    "U100",
    "M300",
    "S600",
    "S650",
    "F100",
    "S700",
    "S500"
];




var radvizMap = {
    "Rural Residential": ["S120","S100"],
    "Recreation": ["R100","S420","W400"],
    "SFH + Duplex": ["S110"],
    "Roads/Transport": ["S500","S700"],
    "Undeveloped": ["U100"],
    "Commercial": ["S200"],
    "Industrial": ["S300","S600","S650","M300"],
    "Agriculture": ["A500","F100"],
    "Apartments": ["S135","S410","S130","S131"],
    "Institutional":["S400"],
    "Mixed Use": ["S230","S235"]
};

var dimensions=Object.keys(radvizMap);

var renderList = function(datum) {
    d3.select('.muni').text(muniList[datum.muni]);

    var list = d3.select('.list')
        .selectAll('div.item')
        .data(dimensions);
    list.enter().append('div').classed('item', true);
    list.transition().style({
            width: function(d) {
                return datum[d] *200 + 'px';
            }
        })
        .text(function(d) {
            return d + ': ' + d3.format('.1%')(datum[d]);
        });
    list.exit().remove();
};

var radviz = radvizComponent()
    .config({
        el: document.querySelector('#radviz'),
        colorAccessor: function(d){ return d.muni; },
        dimensions: dimensions,
        size: 450,
        margin: 100,
        useRepulsion: true,
        useTooltip: true,
        drawLinks: true,
        tooltipFormatter: function(d){
            return '<h1>' + muniList[d.muni]
                + '</h1>' +dimensions.map(function(dB){
                    return dB + ': ' + d[dB]; }).join('<br />');
        }
    })
    .on('dotEnter', function(d) {
        renderList(d);
        // mouse entered a dot
    })
    .on('dotLeave', function(d) {
        // mouse left a dot
    });



horBarGraph('#land_use_breakdown');
horBarGraph('#land_use_breakdown2',Object.keys(keyMap));
if (true) d3.json('/data/land_use_breakdown.json', function(error, jsonData){
  if (error) throw error;
  try{
    var keys=Object.keys(jsonData);
    var allMuniData=keys.map(function(key){
        var muniData=jsonData[key];
        var total=0;
        dimensions.forEach(function(k) {
            radvizMap[k].forEach(function (kk) {
                total += muniData[kk];
            });
        });
        var hash={'muni': key};
        dimensions.forEach(function (k) {
            var value=0;
            radvizMap[k].forEach(function (kk) {value+=muniData[kk]});
            hash[k]=value/total;
        });
        return hash;
    });
    radviz.render(allMuniData);
    var gva=allMuniData.filter(function(d){return d.muni=='GVA'})[0];
    renderList(gva);
  }
  catch (e){
    console.log(e);
  }
});
}

setTimeout(function() {
try{
  setupGraphs();
}
catch(e){
  console.log(e);
}
}, 500);

