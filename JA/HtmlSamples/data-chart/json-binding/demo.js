$(function () {

            var data = [
                { "CountryName": "China", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
                { "CountryName": "India", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
                { "CountryName": "United States", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
                { "CountryName": "Indonesia", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
                { "CountryName": "Brazil", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
            ];

            $("#chart").igDataChart({
                width: "100%",
                height: "200px",
                dataSource: data,
                axes: [
                    {
                        name: "NameAxis",
                        type: "categoryX",
                        label: "CountryName"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY"
                    }
                ],
                series: [
                    {
                        name: "1990Population",
                        type: "column",
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop1990"
                    }
                ]
            });

        });