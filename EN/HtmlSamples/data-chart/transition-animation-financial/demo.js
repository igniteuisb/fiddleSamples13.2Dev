$(function () {
           $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                dataSource: data,
                title: "Financial Indicator Chart",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    title: "Date"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "Price"
                }],
                series: [{
                    type: "absoluteVolumeOscillatorIndicator",
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    transitionInDuration: 1500,
                    transitionInMode: "accordionFromValueAxisMaximum"
                }]
            });
        

        function redrawChart() {
            transMode = $("#transitionInTypeSlider").val();
            transType = $("#transitionInSpeedTypeSlider").val();
            transEasingFunc = $("#transitionEasingFunctionSlider").val();
            seriesType = $("#seriesType").val();
            
            $("#chart").igDataChart("option", "series", [{name: "indicatorSeries",remove: true}]);

            if (seriesType == "ohlc" || seriesType == "candlestick") {
                $("#chart").igDataChart("option", "series", [{
                    type: "financial",
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    transitionInDuration: 1500,
                    transitionInMode: transMode,
                    transitionInType: transType,
                    transitionInEasingFunction: transEasingFunc,
                    displayType: seriesType
                }]);
            } else {
                $("#chart").igDataChart("option", "series", [{
                    type: seriesType,
                    isTransitionInEnabled: true,
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    transitionInDuration: 1500,
                    transitionInMode: transMode,
                    transitionInType: transType,
                    transitionInEasingFunction: transEasingFunc
                }]);
            }
        };
        
        $("#seriesType").change(function (e) {
            redrawChart();
        });
        
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