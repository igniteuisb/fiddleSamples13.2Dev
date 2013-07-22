$(function () {
            var $bulletGraph1 = $("#bulletgraph1");

            $bulletGraph1.igBulletGraph({
                width: "100%",
                // The interval to use for the ticks. Default value is calculated, rather than predefined, to show 11 ticks based on the minimum and maximum values (in this case value would equal to 75)
                //interval: 75,
                // Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickStartExtent: 0.02,
                // Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickEndExtent: 0.2,
                // A value to start adding tickmarks, added to the scale's MinimumValue.
                ticksPostInitial: 0,
                // A value to stop adding tickmarks, subtracted from the scale's MaximumValue.
                ticksPreTerminal: 0,
                // Gets or sets the stroke thickness to use when rendering ticks.
                tickStrokeThickness: 2,
                // Gets or sets the brush to use for the major tickmarks.
                tickBrush: "black",
                // Gets or sets the number of minor tickmarks to place between major tickmarks.
                minorTickCount: 3,
                // Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickStartExtent: 0.06,
                // Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickEndExtent: 0.2,
                // Gets or sets the stroke thickness to use when rendering minor ticks.
                minorTickStrokeThickness: 1,
                // Gets or sets the brush to use for the minor tickmarks.
                minorTickBrush: "#EBEBEB",
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 500,
                        brush: '#DF8929'
                    },
                    {
                        name: 'range2',
                        startValue: 500,
                        endValue: 640,
                        brush: '#BF6716'
                    },
                    {
                        name: 'range3',
                        startValue: 640,
                        endValue: 750
                    }
                ],
                maximumValue: 750,
                targetValue: 550,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                //     labelInterval: 150,
                actualValue: 555,
                actualValueBrush: 'white',
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "K";
                },
                transitionDuration: 1000
            });

            var $bulletGraph2 = $("#bulletgraph2");
            
            $bulletGraph2.igBulletGraph({ 
                width: "100%",
                // The interval to use for the ticks.
                interval: 150,                 
                // Gets or sets the brush to use for the major tickmarks.
                tickBrush: "#F79646",
                // Gets or sets the stroke thickness to use when rendering ticks.
                tickStrokeThickness: 3,
                // Gets or sets the number of minor tickmarks to place between major tickmarks.
                minorTickCount: 3,                
                // Gets or sets the brush to use for the minor tickmarks.
                minorTickBrush: "red",
                // Gets or sets the stroke thickness to use when rendering minor ticks.
                minorTickStrokeThickness: 2,
                // Gets or sets the brush to use for the minor tickmarks.
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 500,
                        brush: '#DF8929'
                    },
                    {
                        name: 'range2',
                        startValue: 500,
                        endValue: 640,
                        brush: '#BF6716'
                    },
                    {
                        name: 'range3',
                        startValue: 640,
                        endValue: 750
                    }
                ],
                maximumValue: 750,
                targetValue: 550,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                labelInterval: 150,
                actualValue: 555,
                actualValueBrush: 'white',
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "K";
                },
                transitionDuration: 1000
            });

            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({ 
                width: "100%",
                interval: 150,
                tickBrush: "#F79646",
                // Gets or sets the position at which to start rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickStartExtent: 0.5,
                // Gets or sets the position at which to stop rendering the major tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                tickEndExtent: 0.1,              
                tickStrokeThickness: 3,                
                minorTickCount: 5,
                // Gets or sets the position at which to start rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickStartExtent: 1,
                // Gets or sets the position at which to stop rendering the minor tickmarks as a value from 0 to 1, measured from the front/bottom of the gauge.
                // Values further from zero than 1 can be used to make this extend further than the normal size of the gauge.
                minorTickEndExtent: 0.8,
                minorTickStrokeThickness: 2,
                minorTickBrush: "red",
                // A value to start adding tickmarks, added to the scale's MinimumValue.
                ticksPostInitial: 50,
                // A value to stop adding tickmarks, subtracted from the scale's MaximumValue.
                ticksPreTerminal: 200,
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 333,
                        brush: '#DF8929'
                    },
                    {
                        name: 'range2',
                        startValue: 333,
                        endValue: 567,
                        brush: '#BF6716'
                    },
                    {
                        name: 'range3',
                        startValue: 567,
                        endValue: 750
                    }
                ],
                maximumValue: 750,
                targetValue: 620,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                labelInterval: 100,
                actualValue: 650,
                actualValueBrush: 'white',
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "K";
                },
                transitionDuration: 1000
            });
        });