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
                    type: "column",
                    title: "UK",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "ukPopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    isCustomCategoryStyleAllowed: true,
                    assigningCategoryStyle: function (e, ui) {
                        var minOpacity = .3, opacity = 1.0, curr;
                        alert(ui.sumAllSeriesHighlightingProgress);
                        if (ui.sumAllSeriesHighlightingProgress > 0.0) {
                            var progress = 0;
                            if (ui.highlightingInfo !== null) {
                                progress = ui.highlightingInfo.progress;
                            }

                            progress = progress - ui.sumAllSeriesHighlightingProgress;

                            opacity = minOpacity + (1.0 + progress) * (1.0 - minOpacity);
                            ui.opacity = opacity;
                            ui.highlightingHandled = true;

                            for (var i = 0; i < series.length; i++) {
                                curr = series[i];
                                if (curr.name != ui.series.name) {
                                    $("#chart").igDataChart("notifyVisualPropertiesChanged", curr.name);
                                }
                            }
                        }
                    }
                }, {
                    name: "frPop",
                    type: "column",
                    title: "France",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "francePopulation",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    isCustomCategoryStyleAllowed: true,
                    assigningCategoryStyle: function (e, ui) {
                        var minOpacity = .3, opacity = 1.0, curr;
                        alert(ui.sumAllSeriesHighlightingProgress);
                        if (ui.sumAllSeriesHighlightingProgress > 0.0) {
                            var progress = 0;
                            if (ui.highlightingInfo !== null) {
                                progress = ui.highlightingInfo.progress;
                            }

                            progress = progress - ui.sumAllSeriesHighlightingProgress;

                            opacity = minOpacity + (1.0 + progress) * (1.0 - minOpacity);
                            ui.opacity = opacity;
                            ui.highlightingHandled = true;

                            for (var i = 0; i < series.length; i++) {
                                curr = series[i];
                                if (curr.name != ui.series.name) {
                                    $("#chart").igDataChart("notifyVisualPropertiesChanged", curr.name);
                                }
                            }
                        }
                    }
                }],
                
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });
            
            // Transiton Duration Slider
            $("#transitionDurationSlider").slider({
                min: 0,
                max: 5,
                step: 0.01,
                value: 2,
                slide: function (event, ui) {
                    $("#chart").igDataChart("option", "highlightingTransitionDuration", ui.value * 1000 );
                    $("#transitionDurationLabel").text(ui.value);
                }
            });
        });