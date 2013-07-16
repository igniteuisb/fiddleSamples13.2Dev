$(function () {
            function createScatterChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    title: "$$(Chart_title_us_fao)",
                    subTitle: "$$(Chart_subtitle_us_fao)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "$$(XAxis_title_us_fao)",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "$$(YAxis_title_us_fao)",
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$"+ rounded;
                        }
                    }],
                    series: [{
                        name: "scatter",
                        type: seriesType,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createBubbleChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    title: "$$(Chart_title_us_fao)",
                    subTitle: "$$(Chart_subtitle_us_fao)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "$$(XAxis_title_us_fao)",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "$$(YAxis_title_us_fao)",
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "bubble",
                        type: "bubble",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        radiusMemberPath: "Population",
                        fillMemberPath: "Population",
                        labelMemberPath: "Population",
                        markerType: "circle",
                        radiusScale: {
                            minimumValue: "2",
                            maximumValue: "12",
                            isLogarithmic: "true"
                        },
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                            minimumValue: 150,
                            maximumValue: 400
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = data;
            createScatterChart("#chartScatter", "scatter", dataSource);
            createScatterChart("#chartScatterLine", "scatterLine", dataSource);
            createBubbleChart("#chartBubble", dataSource);
            createScatterChart("#chartScatterSpline", "scatterSpline", dataSource);
        });