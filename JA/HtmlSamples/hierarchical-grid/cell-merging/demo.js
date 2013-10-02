$(function () {
            /*----------------- Instantiation -------------------------*/
            createGrid();
        });
       

        function createGrid() {         
            $( "#grid1" ).igHierarchicalGrid( {
                height: "100%",
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "10%" },
                   { key: "LastName", headerText: "名前", dataType: "string", width: "15%" },
                   { key: "FirstName", headerText: "名字", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "役職", dataType: "string", width: "15%" },
                   { key: "Address", headerText: "住所", dataType: "string", width: "20%" },
                   { key: "City", headerText: "市", dataType: "string", width: "10%" },
                   { key: "Region", headerText: "領域", dataType: "string", width: "10%" },
                   { key: "Country", headerText: "国名", dataType: "string", width: "10%" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'EmployeeID',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Address',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Region',
                                classes: 'ui-hidden-phone'
                            }
                        ]
                    },
                    {
                        name: 'CellMerging',
                        inherit: true,
                        initialState: "merged"
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        inherit: true,
                        applySortedColumnCss: false
                    }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "10%" },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "20%" }
                        ],
                        features: [
                            {
                                name: 'Responsive',
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: 'OrderID',
                                        classes: 'ui-hidden-phone'
                                    },
                                    {
                                        columnKey: 'ShipName',
                                        classes: 'ui-hidden-phone'
                                    }
                                ]
                            },
                            {
                                name: "Paging",
                                pageSize: 5
                            }
                        ]
                    }
                ]
            });
        }