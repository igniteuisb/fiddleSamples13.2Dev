$(function () {

            mapHelper();

            $("#map").igMap({
                width: "700px",
                height: "500px",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://jp.dev.igniteui.local/13-2/images/samples/maps/world.png",
                panModifier: "control",
                backgroundContent: {
                    type: "bing",
                    key: bingData
                },
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "automatic",
                    shapeMemberPath: "points",
                    shapefileUri: "http://jp.dev.igniteui.local/13-2/data-files/shapes/world.shp",
                    databaseUri: "http://jp.dev.igniteui.local/13-2/data-files/shapes/world.dbf"
                }],
                windowRect: {
                    left: 0,
                    top: 0,
                    height: 0.7,
                    width: 0.7
                }
            });

        });