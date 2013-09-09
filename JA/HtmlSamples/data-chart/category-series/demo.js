$(function () {
            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                dataSource: data,
                legend: { element: "lineLegend" },
                title: "U.K. vs. フランス",
                subtitle: "人口の比較 (年)",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Date",
                    isInverted: true,
                    interval: 2,
                    tickLength: 5,
                    labelTopMargin: 5,
                    title: "年"
                },
                {
                    name: "yAxis",
                    type: "numericY",
                    title: "人口 (百万人単位)"
                }],
                series: [{
                    name: "ukPop",
                    type: "line",
                    title: "UK",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    showTooltip: true,
                    thickness: 5
                }, {
                    name: "frPop",
                    type: "line",
                    title: "France",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    showTooltip: true,
                    thickness: 5
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });

            $("#seriesType").change(function (e) {
                var thickness = 5,
                    seriesType = $(this).val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
                    seriesType == "waterfall" ||
                    seriesType == "stepArea") {
                    thickness = 1;
                }

                $("#chart").igDataChart("option", "series", [{ name: "ukPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{ name: "frPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "ukPop",
                    title: "UK",
                    type: $(this).val(),
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    thickness: thickness
                }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "frPop",
                    title: "France",
                    type: $(this).val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    showTooltip: true,
                    thickness: thickness
                }]);
            });
        });