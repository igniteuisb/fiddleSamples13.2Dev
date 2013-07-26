$(function () {
            function createChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    title: "ニューヨーク市 vs. フィラデルフィア",
                    subTitle: "気温の比較",
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Time",
                        title: "$$(CategoryAxis_title_time)"
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        title: "$$(NumericAxis_title_temperature)",
                    }],
                    series: [{
                        name: "series1",
                        title: "$$(Chart_lbl_testSeries)",
                        type: seriesType,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "NewYorkCityTemp",
                        highMemberPath: "PhiladelphiaTemp",
                        showTooltip: true,
                        tooltipTemplate: "tooltipTemplate"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRangeArea", "rangeArea", data);
            createChart("#chartRangeColumn", "rangeColumn", data);
        });