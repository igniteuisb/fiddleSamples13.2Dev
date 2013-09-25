$(function () {
            $("#grid").igGrid({
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "社員 ID", dataType: "number" },
                   { key: "LastName", headerText: "名前", dataType: "string" },
                   { key: "FirstName", headerText: "名字", dataType: "string" },
                   { key: "Title", headerText: "役職", dataType: "string" },
                   { key: "Address", headerText: "住所", dataType: "string" },
                   { key: "City", headerText: "市", dataType: "string" },
                   { key: "Region", headerText: "州", dataType: "string" },
                   { key: "Country", headerText: "国名", dataType: "string" },
                   { key: "PostalCode", headerText: "郵便番号", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'EmployeeID',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Address',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'LastName',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Region',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Country',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'PostalCode',
                                classes: 'visible-phone'
                            }
                        ]
                    },
                    {
                        name: 'CellMerging',
                        initialState: 'merged'
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        applySortedColumnCss: false
                    }
                ]
            });
        });