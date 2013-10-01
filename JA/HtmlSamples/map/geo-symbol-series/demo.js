$(function () {
             $("#map").igMap({
                 width: "700px",
                 height: "500px",
                 verticalZoomable: true,
                 horizontalZoomable: true,
                 overviewPlusDetailPaneVisibility: "visible",
                 overviewPlusDetailPaneBackgroundImageUri: "http://jp.dev.igniteui.local/13-2/images/samples/maps/world.png",
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
                 windowRect: {
                     left: 0.27,
                     top: 0.20,
                     height: 0.45,
                     width: 0.45
                 }
             });
         });