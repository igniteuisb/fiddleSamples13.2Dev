$(function () {
            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                dataSource: data,
                legend: { element: "lineLegend" },
                title: "U.K. vs. France",
                subtitle: "A comparison of populations over time",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Date",
                    isInverted: true,
                    interval: 2,
                    title: "Year"
                },
                {
                    name: "yAxis",
                    type: "numericY",
                    title: "Population (Millions of People)"
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
                    tooltipTemplate: "tooltipTemplate1",
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
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: 5
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });

            $("#seriesType").change(function (e) {
                transMode = $("#transitionInTypeSlider").val();
                transType = $("#transitionInSpeedTypeSlider").val();
                transEasingFunc = $("#transitionEasingFunctionSlider").val();
                
                var thickness = 5,
                    seriesType = $(this).val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
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
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: thickness,
                    transitionInMode: transMode,
                    transitionInSpeedType: transType,
                    transitionEasingFunction: transEasingFunc
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
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: thickness,
                    transitionInMode: transMode,
                    transitionInSpeedType: transType,
                    transitionEasingFunction: transEasingFunc
                }]);
            });

            var redrawChart = function () {
                
                transMode = $("#transitionInTypeSlider").val();
                transType = $("#transitionInSpeedTypeSlider").val();
                transEasingFunc = $("#transitionEasingFunctionSlider").val();

                var thickness = 5,
                    seriesType = $("#seriesType").val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
                    seriesType == "stepArea") {
                    thickness = 1;
                }
                
                $("#chart").igDataChart("option", "series", [{ name: "ukPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{ name: "frPop", remove: true }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "ukPop",
                    title: "UK",
                    type: $("#seriesType").val(),
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    isHighlightingEnabled: true,
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: thickness,
                    transitionInMode: transMode,
                    transitionInSpeedType: transType,
                    transitionEasingFunction: transEasingFunc
                }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "frPop",
                    title: "France",
                    type: $("#seriesType").val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: thickness,
                    transitionInMode: transMode,
                    transitionInSpeedType: transType,
                    transitionEasingFunction: transEasingFunc
                }]);

            };
           
            $("#transitionInTypeSlider").change(function (e) {
                redrawChart();
            });

            $("#transitionInSpeedTypeSlider").change(function (e) {
                redrawChart();
            });

            $("#transitionEasingFunctionSlider").change(function (e) {
                redrawChart();
            });
        });