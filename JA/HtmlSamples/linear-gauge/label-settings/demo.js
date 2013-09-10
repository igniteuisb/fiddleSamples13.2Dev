$(function () {
            $("#lineargauge").igLinearGauge({
                height: "60px",
                width: "100%",
                fontBrush: "red",
                needleBrush: "red",
                value: 81,
                backingBrush: "#fafafa",
                backingOutline: "#ebebeb",
                transitionDuration: 1000

            });

            

            $("#lineargaugeBase").igLinearGauge({
                height: "110px",
                width: "100%", 
                 
                backingInnerExtent: 0.3,
                backingOuterExtent: 0.65,
                labelsPostInitial: 1,
                interval: 1,
                value: 39.4,
                needleBrush: "white",
                needleOutline: "darkred",
                
                needleInnerExtent: 0.1,
                needleOuterExtent: 0.5,
                minimumValue: 34,
                maximumValue: 45,

                backingBrush: "red",
                backingOutline: "silver",
                backingBrush: {
                    type: 'linearGradient',
                    startPoint: { x: 0, y: -2 },
                    endPoint: { x: 0, y: 1 },
                    colorStops: [
                     {
                         color: 'red',
                         offset: 0
                     },
                     {
                         color: 'white',
                         offset: .25
                     },
                     {
                         color: 'red',
                         offset: .5
                     },
                     {
                         color: 'white',
                         offset: .75
                     },
                     {
                         color: 'red',
                         offset: 1
                     },

                    ]
                },

            });

            $("#lineargaugeLabelsOnly").igLinearGauge({
                height: "110px",
                width: "100%", 

                ticksPostInitial: 45,
                minimumValue: 34,
                maximumValue: 45,                              
                labelExtent: 0.8,
                backingBrush: "#fafafa",
                backingOutline: "#ebebeb",
                interval: 1, 
                formatLabel: function (evt, ui) {
                    if (ui.value == 36)
                    {
                        ui.label = "元気";
                        return;
                    }
                    if (ui.value==34 ||ui.value== 39 )
                    {
                        ui.label = "病気";
                        return;
                    }
                    if (ui.value == 37)
                    {                        
                        ui.label = "気持ち悪い";
                        return;
                    }             
                    if (ui.value == 41  )
                    {
                        ui.label = "非常に病気";
                        return;
                    }             
                    ui.label = "";                    
                }                
            });


            $("#lineargaugef").igLinearGauge({
                height: "110px",
                width: "100%",

                tickBrush: "white",
                minorTickBrush: "white",
                fontBrush: "white",

                minimumValue: -20,
                maximumValue: 120,
                interval: 10,

                minorTickCount: 10,
                minorTickStartExtent: 0.1,
                minorTickEndExtent: 0.25,
                minorTickStrokethickness: 0.5,

                tickStartExtent: 0,
                tickEndExtent: 0.25,

                scaleStartExtent: 0.064,
                scaleEndExtent: 0.938,

                backingInnerExtent: 0.28,
                backingOuterExtent: 0.73,

                backingBrush: "black",

                transitionDuration: 1000
            });

            $("#lineargaugec").igLinearGauge({
                height: "110px",
                width: "100%",
                tickBrush: "white",
                minorTickBrush: "white",
                fontBrush: "white",

                minimumValue: -30,
                maximumValue: 50,
                interval: 10,

                minorTickCount: 10,
                minorTickStartExtent: 0.5,
                minorTickEndExtent: 0.65,
                minorTickStrokethickness: 0.5,

                tickStartExtent: 0.5,
                tickEndExtent: 0.75,

                value: 30,
                needleBrush: "#345F9C",
                needleOutline: "#37B0E4",
                needleInnerExtent: 0.2,
                needleOuterExtent: 0.43,

                backingBrush: "transparent",
                backingOutline: "transparent",
                labelExtent: 0.8,

                transitionDuration: 1000
            });
        });