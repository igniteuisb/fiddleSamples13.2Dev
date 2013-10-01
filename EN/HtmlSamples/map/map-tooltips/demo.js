$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.225, top: 0.1, height: 0.6, width: 0.6 },
                verticalZoomable: true,
                horizontalZoomable: true,
                backgroundContent: {
                    type: "openStreet"
                },
                series: [{
                    type: "geographicSymbol",
                    name: "worldCities",
                    dataSource: data,
                    latitudeMemberPath: "Latitude",
                    longitudeMemberPath: "Longitude",
                    markerType: "automatic",
                    markerCollisionAvoidance: "fade",
                    markerBrush: "#1B559D",
                    markerOutline: "black",
                    showTooltip: true,
                    tooltipTemplate: "cityTemplate"
                }],
                
            });
        });