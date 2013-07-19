$(function () {
            $("#priceChart").igDataChart({
                width: "500px",
                height: "400px",
                dataSource: data,
                title: "$$(Chart_title_msft_stock)",
                subTitle: "$$(Chart_subtitle_msft_stock)",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    interval: 10,
                    title: "$$(CategoryAxis_title_date)"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "$$(NumericAxis_title_price)"
                }],
                series: [{
                    type: "financial",
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "priceSeries",
                    title: "Price Data"
                }]
            });

            $("#indicatorChart").igDataChart({
                width: "500px",
                height: "400px",
                dataSource: data,
                title: "$$(Chart_title_financial_indicators)",
                axes: [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    interval: 10,
                    title: "$$(CategoryAxis_title_date)"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    title: "$$(NumericAxis_title_price)"
                }],
                series: [{
                    type: "moneyFlowIndexIndicator",
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    openMemberPath: "Open",
                    volumeMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data"
                }]
            });

            $("#cbxIndicator").igCombo({
                width: "380px",
                enableClearButton: false,
                mode: "dropdown",
                dataSource: indicators,
                textKey: "text",
                valueKey: "key",
                selectedItems: [{ index: 17 }],
                selectionChanged: function (evt, ui) {
                    if (ui.items && ui.items[0]) {
                        changeIndicator(ui.items[0].value);
                    }
                }
            });

        });

        function changeIndicator(newIndicator) {
            $("#indicatorChart").igDataChart("option", "series", [{
                name: "indicatorSeries",
                remove: true
            }]);

            $("#indicatorChart").igDataChart("option", "series", [{
                type: newIndicator,
                name: "indicatorSeries",
                title: "Financial Indicator Data",
                xAxis: "xAxis",
                yAxis: "yAxis",
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                openMemberPath: "Open",
                volumeMemberPath: "Volume"
            }]);
        };