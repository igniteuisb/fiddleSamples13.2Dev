$(function () {
var canvas = document.getElementById('myCanvas');
            var context = canvas.getContext('2d');
            var centerX = 0;
            var centerY = 0;
            var radius = 50;
            // save state
            context.save();
            // translate context
            context.translate(canvas.width / 4, canvas.height / 2);
            // scale context horizontally
            context.scale(1, 1);
            // draw circle which will be stretched into an oval
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            // restore to original state
            context.restore();
            // apply styling
            context.fillStyle = 'red';
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = 'silver';
            context.stroke();
         
        $(function () {
            $("#lineargauge").igLinearGauge({
                height: "100px",
                width: "100%",
                fontBrush:"red",
                subtitle: "F",
                transitionDuration: 1000

            });

            $("#lineargaugef").igLinearGauge({
                height: "110px",
                width: "100%",
                subtitle: "F&deg",

                tickBrush: "white",
                minorTickBrush: "white",
                fontBrush: "white",

                minimumValue: -20,
                maximumValue: 120,
                interval: 10,

                minorTickCount: 10,
                minorTickStartExtent: 0.1,
                minorTickEndExtent: 0.3,
                minorTickStrokethickness: 0.5,

                tickStartExtent: 0,
                tickEndExtent: 0.3,

                scaleStartExtent: 0.064,
                scaleEndExtent: 0.938,

                backingInnerExtent: 0.25,
                backingOuterExtent: 0.75,

                backingBrush: "black",

                transitionDuration: 1000
            });

            $("#lineargaugec").igLinearGauge({
                height: "110px",
                width: "100%",
                subtitle: "C&deg",
                subtitleBrush: "white",
                tickBrush: "white",
                minorTickBrush: "white",
                fontBrush: "white",

                minimumValue: -30,
                maximumValue: 50,
                interval: 10,

                minorTickCount: 10,
                minorTickStartExtent: 0.5,
                minorTickEndExtent: 0.7,
                minorTickStrokethickness: 0.5,

                tickStartExtent: 0.5,
                tickEndExtent: 0.8,

                value: 30,

                needleBrush: "aqua",
                needleInnerExtent: 0.13,
                needleOuterExtent: 0.63,

                backingBrush: "transparent",
                backingOutline: "transparent",
                labelExtent: 0.8,

                transitionDuration: 1000
            });

            $("#lineargaugeBase").igLinearGauge({
                height: "110px",
                width: "100%",
                subtitle: "F&deg",
                 
                backingInnerExtent: 0.3,
                backingOuterExtent: 0.65,
                labelsPostInitial: 1,
                interval: 1,
                value: 39.4,
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
                subtitle: "F&deg",

                ticksPostInitial: 45,
                minimumValue: 34,
                maximumValue: 45,                              
                labelExtent: 0.8 ,                                  
                backingBrush: "transparent",
                scaleBrush: "transparent",
                background: "transparent",
                 
                subtitle: "C&#186;",
                interval: 1,
                backingOutline: "transparent",
                formatLabel: function (evt, ui) {
                    if (ui.value == 36)
                    {
                        ui.label = "ok";
                        return;
                    }
                    if (ui.value==34 ||ui.value== 39 )
                    {
                        ui.label = "sick";
                        return;
                    }
                    if (ui.value == 37)
                    {
                        ui.label = "feeling\n  bad";
                        return;
                    }             
                    if (ui.value == 41  )
                    {
                        ui.label = "very sick";
                        return;
                    }             
                    ui.label = "";                    
                }
                
            });
        });
});