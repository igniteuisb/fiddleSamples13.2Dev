$(function () {
            // Revert state from browser history
            window.History.Adapter.bind(window, 'statechange', function () {
                
            });

            (function loadInitialStateFromUrl() {

            })();

            $("#prev").click(function () { window.History.go(-1); });
            $("#next").click(function () { window.History.go(1); });
            $("#copy").click(function () { window.prompt("Use this URL and send it", window.location); });

            function pushToBrowserHistory(e, args) {
                var controlID = args.owner.element[0].id,
                    widgetName = args.owner.widgetName,
                    methodSignature = { controlID: controlID, widgetName: widgetName, args: [] };
                window.History.pushState(methodSignature, e.type, newUrl);
            }

            $("#grid").igGrid({
                primaryKey: "name",
                width: '100%',
                columns: [
                    { headerText: "Name", key: "name", dataType: "string", width: "12%" },
                    { headerText: "Team", key: "team", dataType: "string", width: "15%" },
                    { headerText: "Age", key: "age", dataType: "number", width: "7%" },
                    { headerText: "No.", key: "number", dataType: "number", width: "7%" },
                    { headerText: "Pos.", key: "position", dataType: "string", width: "8%" },
                    { headerText: "Goals", key: "goals", dataType: "number", width: "10%" },
                    { headerText: "Assists", key: "assists", dataType: "number", width: "10%" },
                    { headerText: "Yellow C.", key: "yellow", dataType: "number", width: "10%" },
                    { headerText: "Red C.", key: "red", dataType: "number", width: "7%" },
                    { headerText: "Salary", key: "salary", format: "currency", width: "8%" }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: dataSource,
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 10,
                        showPageSizeDropDown: false,
                        pageIndexChanged: function (e, args) {
                            pageIndex = args.pageIndex;
                            pushToBrowserHistory(e, args);
                        }
                    },
                    {
                        name: "Sorting",
                        type: "local",
                        columnSorted: function (e, args) {

                        }
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        dataFiltered: function (e, args) {

                        }
                    },
                    {
                        name: "Resizing",
                        columnResized: function (e, args) {

                        }
                    },
                    {
                        name: "Hiding",
                        columnHidden: function (e, args) {

                        },
                        columnShown: function (e, args) {

                        }
                    },
                    {
                        name: "GroupBy",
                        groupedColumnsChanged: function (e, args) {

                        }
                    },
                    {
                        name: "ColumnMoving",
                        columnMoved: function (e, args) {

                        }
                    },
                    {
                        name: "ColumnFixing",
                        columnFixed: function (e, args) {

                        },
                        columnUnfixed: function (e, args) {

                        }
                    }
                ],
                rendered: function (e, args) {
                    args.owner.element.find("tr td").css("text-align", "center");
                    args.owner.element.find("tr td:first-child").css("text-align", "left");
                    args.owner.element.find("tr td:last-child").css("text-align", "right");
                }
            });
        });