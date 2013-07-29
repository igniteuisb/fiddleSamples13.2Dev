$(function () {
            // Revert state from browser history
            window.History.Adapter.bind(window, 'statechange', function () {
                
            });

            (function loadInitialStateFromUrl() {

            })();

            function pushToBrowserHistory() {
                var controlID = args.owner.element[0].id,
                    widgetName = args.owner.widgetName,
                    methodSignature = { controlID: controlID, widgetName: widgetName, args: [] };
                window.History.pushState(methodSignature, e.type, newUrl);
            }

            $("#grid").igGrid({
                primaryKey: "EmployeeID",
                height: '500px',
                width: '100%',
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "number", width: "15%" },
                    { headerText: "名前", key: "FirstName", dataType: "string", width: "20%" },
                    { headerText: "名字", key: "LastName", dataType: "string", width: "20%" },
                    { headerText: "役職", key: "Title", dataType: "string", width: "35%" }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 5,
                        showPageSizeDropDown: false,
                        pageIndexChanged: function (e, args) {
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
                ]
            });
        });