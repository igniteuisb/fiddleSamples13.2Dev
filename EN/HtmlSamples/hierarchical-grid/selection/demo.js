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
                  { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%", hidden: true },
                  { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                  { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                  { headerText: "City", key: "City", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
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
                  { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%", hidden: true },
                  { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                  { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                  { headerText: "City", key: "City", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
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