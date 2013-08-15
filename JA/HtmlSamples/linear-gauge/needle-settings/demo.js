$(function () {
            $("#lineargaugeKMH1").igLinearGauge({
                height: "100px",
                width: "100%",
                minorTickCount: 1 ,                
                tickEndExtent: 0,
                tickStartExtent: .1,
                minorTickEndExtent: 0,
                minorTickStartExtent: .1,
                
                fontBrush: "white",
                interval:20,
                maximumValue:200,
                subtitle:"km/h",
                backingBrush: {
                    type: 'linearGradient',
                    startPoint: { x: 0, y: 0 },
                    endPoint: { x: 1, y: 1 },
                    colorStops: [
                     {
                         color: 'black',
                         offset: 0
                     },
                     {
                         color: 'silver',
                         offset: .25
                     },
                     {
                         color: 'black',
                         offset: .5
                     },
                     {
                         color: 'silver',
                         offset: .75
                     },
                     {
                         color: 'black',
                         offset: 1
                     },

                    ]
                },
            });

            $("#lineargaugeKMH2").igLinearGauge({
                height: "110px",
                width: "100%",
                backingBrush:"transparent",
                fontBrush:"white",
                minorTickCount:1 , 
                tickEndExtent:.6,
                tickStartExtent:.5,
                minorTickEndExtent:.6,
                minorTickStartExtent:.5,
                labelExtent:.7,
                interval:20,
                maximumValue:120 ,
                scaleEndExtent:.9,
                subtitle:"&#160;m/h",
                value:78,
                needleBrush:"red",
                needleShape:"needle",
            });

            $("#lineargaugeRPM").igLinearGauge({
                height: "110px",
                width: "100%",
                title:"RPM",
                subtitle:"1x1000",
                maximumValue: 8 ,
                interval: 1,
                value: 5.5,
                needleBrush: "red",
                needleShape: "Triangle",
                tickBrush:"white",
                fontBrush:"white",
                minorTickCount: 0,
                
                labelExtent: .55,
                tickStartExtent: .8,
                tickEndExtent: .9,
                ranges: [
                    {
                        name: "ok",
                        outerStartExtent: .3,
                        outerEndExtent: .3,
                        innerStartExtent: 0.2,
                        innerEndExtent: -.05,
                        startValue: 0,
                        endValue: 6,
                        brush: "green",

                    },
                    {
                        name: "change",
                        outerStartExtent: .3,
                        outerEndExtent: .3,
                        innerStartExtent: -.05,
                        innerEndExtent: -.15,
                        startValue: 6,
                        endValue: 8,
                        brush: "red",

                    }
                ],

                backingBrush: {
                    type: 'linearGradient',
                    startPoint: { x: 0, y: 0 },
                    endPoint: { x: 1, y: 1 },
                    colorStops: [
                     {
                         color: 'black',
                         offset: 0
                     },
                     {
                         color: 'silver',
                         offset: .25
                     },
                     {
                         color: 'black',
                         offset: .5
                     },
                     {
                         color: 'silver',
                         offset: .75
                     },
                     {
                         color: 'black',
                         offset: 1
                     },

                    ]
                },
            });

           
        });