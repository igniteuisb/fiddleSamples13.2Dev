$(function () {
         
            // load geo-locations from shapefile and simplify it
            var worldCities = [];
            var points = [];
            var shapeDataSource = new $.ig.ShapeDataSource({
                shapefileSource: "http://jp.dev.igniteui.local/13-2/data-files/shapes/world_cities.shp",
                databaseSource: "http://jp.dev.igniteui.local/13-2/data-files/shapes/world_cities.dbf",
                transformRecord: function (rec) {
                    var pointX = rec.points.item(0).item(0).x();
                    var pointY = rec.points.item(0).item(0).y();
                    var city = rec.fields.item("NAME");
                    var country = rec.fields.item("COUNTRY");
                    var population = rec.fields.item("POPULATION");
                    if (population > 0) {
                        points.push({
                            Latitude: pointY, Longitude: pointX,
                            City: city, Country: country,
                            Population: population
                        });
                    }
                },
                callback: function () {
                    worldCities = points;
                    createMap();
                }
            });
        shapeDataSource.dataBind();

        function createMap() {

            mapHelper();

            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://jp.dev.igniteui.local/13-2/images/samples/maps/world.png",
                verticalZoomable: true,
                horizontalZoomable: true,
                backgroundContent: {
                    type: "cloudMade",
                    key: cloudmadeData,
                    parameter: 2
                },
                series: [{
                    type: "geographicSymbol",
                    name: "worldCities",
                    dataSource: worldCities,
                    longitudeMemberPath: "Longitude",
                    latitudeMemberPath: "Latitude",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    // using custom template
                    markerType: "none",
                    markerTemplate: {
                        measure: function (measureInfo) {
                            measureInfo.width = 10;
                            measureInfo.height = 10;
                        },
                        render: function (renderInfo) {

                            var ctx = renderInfo.context;
                            var x = renderInfo.xPosition;
                            var y = renderInfo.yPosition;
                            if (renderInfo.isHitTestRender) 
                                ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
                            else 
                                ctx.fillStyle = "black";
                            
                            var size = 10;
                            var heightHalf = size / 2.0;
                            var widthHalf = size / 2.0;

                            if (renderInfo.isHitTestRender) {
                                ctx.fillRect(x - widthHalf, y - heightHalf, size, size);
                            } else {
                                
                                // color markers based on population of cities
                                var pop = renderInfo.data.item()["Population"];
                                if (pop > 0)
                                    ctx.fillStyle = "rgba(120,120,120,0.8)";
                                if (pop > 100000)
                                    ctx.fillStyle = "rgba(160,200,20,0.8)";
                                if (pop > 1000000)
                                    ctx.fillStyle = "rgba(210,155,20,0.8)";
                                if (pop > 5000000)
                                    ctx.fillStyle = "rgba(210,60,20,0.8)";
                                if (pop > 10000000)
                                    ctx.fillStyle = "rgba(155,20,20,0.8)";
                               
                                size = 3;
                                ctx.globalAlpha = 1;
                                ctx.strokeStyle = "rgba(20,20,20,0.36)";
                                ctx.beginPath();
                                ctx.arc(x, y, size, 0, 2.0 * Math.PI);
                                ctx.fill();
                                ctx.stroke();
                            }
                        }
                    }
                }],

            });
        };

    });