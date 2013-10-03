$(function () {           
            /*----------------- Instantiation -------------------------*/
            createCellSelectionGrid();
            createRowSelectionGrid();
        });

        function createCellSelectionGrid() {  
            $( "#cellSelectionGrid" ).igHierarchicalGrid( {
                height: "95%",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                loadOnDemand: false,
                responseDataKey: "results",
                dataSourceType: "json",
                features: [
                        {
                            name: 'Responsive',
                            enableVerticalRendering: false,
                            columnSettings: [
                                {
                                    columnKey: 'Title',
                                    classes: 'ui-hidden-phone'
                                },
                                {
                                    columnKey: 'Address',
                                    classes: 'ui-hidden-phone'
                                }
                            ]
                        }
                    ],
                columns: [
                  { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "5%", hidden: true },
                  { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                  { headerText: "住所", key: "Address", dataType: "string", width: "25%" },
                  { headerText: "市", key: "City", dataType: "string", width: "10%" }
                ],
                childrenDataProperty: "Orders",                
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        width: "100%",
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "5%", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "15%" }
                        ]
                    }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ShipAddress',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'ShipName',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "cell",
                        multipleSelection: false,
                        touchDragSelect: false, // this is true by default
                        multipleCellSelectOnClick: false
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            });
        }

        function createRowSelectionGrid()
        {
            $( "#rowSelectionGrid" ).igHierarchicalGrid( {
                height: "95%",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                loadOnDemand: false,
                responseDataKey: "results",
                dataSourceType: "json",
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'Title',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Address',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                ],
                columns: [
                  { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "5%", hidden: true },
                  { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                  { headerText: "住所", key: "Address", dataType: "string", width: "25%" },
                  { headerText: "市", key: "City", dataType: "string", width: "10%" }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        width: "100%",
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "5%", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "15%" }
                        ]
                    }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ShipAddress',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'ShipName',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            } );
        }