$(function () {
            function createChart(selector, seriesType, data, hasLegend) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    legend: hasLegend ? { element: "radialLegend" } : null,
                    title: "$$(Chart_title_temperature)",
                    subTitle: "$$(Chart_subtitle_temperature)",
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Time",
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        maximumValue: 95,
                        minimumValue: 75,
                        interval: 5,
                        radiusExtentScale: .6
                    }],
                    series: [{
                        name: "series1",
                        title: '$$(Chart_lbl_philadelphia)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "PhiladelphiaTemp",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: '$$(Chart_lbl_nyc)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "NewYorkCityTemp",
                        thickness: 5,
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRadialLine", "radialLine", data, false);
            createChart("#chartRadialColumn", "radialColumn", data, false);
            createChart("#chartRadialPie", "radialPie", data, false);
            createChart("#chartRadialArea", "radialArea", data, true);
        });