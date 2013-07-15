$(function () {            

            $("#bulletgraph_task3").igBulletGraph({
                height: "60px",
                width: "100%",
                rangeTooltipTemplate: 'rangeTooltipTemplate1',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate1',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate1',
                ranges: [
                    {
                        brush: 'rgba(251, 23, 65, 0.57)',
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'white',
                actualValue: 85,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showTooltip: true,
                transitionDuration: 500
            });

            $("#bulletgraph_task2").igBulletGraph({
                height: "60px",
                width: "100%", 
                ranges: [
                    {
                        brush: 'rgba(251, 23, 65, 0.57)',
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'white',
                actualValue: 96,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showTooltip: true,
                transitionDuration: 500
            });

            $("#bulletgraph_task1").igBulletGraph({
                height: "60px",
                width: "100%",
                ranges: [
                    {
                        brush: 'rgba(251, 23, 65, 0.57)',
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'white',
                actualValue: 74,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showTooltip: true,
                transitionDuration: 500
            });

            $("#bulletGraph_backLogItem").igBulletGraph({
                height: "300px",
                width: "100%",
                orientation: "vertical",                
                rangeTooltipTemplate: 'rangeTooltipTemplate2',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate2',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate2',
                ranges: [
                    {
                        brush: 'rgba(251, 23, 65, 0.57)',
                        name: 'Task 1',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'Task 2',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'Task 3',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                actualValues: [
                   {
                       brush: 'red',
                       name: 'Steve',
                       startValue: 10,
                       value: 37
                   },
                   {
                       brush: 'orange',
                       name: 'Jim',
                       startValue: 37,
                       value: 66
                   },
                   {
                       brush: 'green',
                       name: 'Bob',
                       startValue: 66,
                       value: 83
                   }
                ],
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'white',
                actualValue: 20,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showTooltip: true,
                transitionDuration: 500
            });
        });