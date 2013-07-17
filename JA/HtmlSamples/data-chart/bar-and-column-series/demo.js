$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "$$(Chart_title_energy_production)",
                subTitle: "$$(Chart_subtitle_energy_production)",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Year",
                    title: "$$(CategoryAxis_title_energy_production)"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "$$(NumericAxis_title_energy_production)",
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });

            $("#barChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "$$(Chart_title_energy_production)",
                subTitle: "$$(Chart_subtitle_energy_production)",
                legend: { element: "barLegend" },
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    title: "$$(NumericAxis_title_energy_production)"
                }, {
                    name: "yAxis",
                    type: "categoryY",
                    label: "Year",
                    title: "$$(CategoryAxis_title_energy_production)"
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                }, {
                    name: "series4",
                    title: "United States",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                }, {
                    name: "series5",
                    title: "China",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });
        });