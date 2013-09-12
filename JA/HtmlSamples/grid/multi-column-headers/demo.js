$(function () {
            $("#grid1").igGrid({
                width: "100%",
                height: "500px",
                autoGenerateColumns: false,
                dataSource: nwCustomers,
                responseDataKey: "results",
                columns: [
                    { headerText: "顧客 ID", key: "CustomerID", dataType: "string", width: "100px" },
                    {
                        headerText: "会社情報",
                        group: [
                            { headerText: "会社名", key: "CompanyName", dataType: "string", width: "150px" },
                            { headerText: "名前", key: "ContactName", dataType: "string", width: "150px" },
                            { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "150px" }
                        ]
                    },
                    {
                        headerText: "アドレス情報",
                        group: [
                        {
                            headerText: "住所",
                            group: [
                                { headerText: "住所", key: "Address", dataType: "string", width: "150px" },
                                { headerText: "市", key: "City", dataType: "string", width: "100px" },
                                { headerText: "郵便番号", key: "PostalCode", dataType: "string", width: "100px" }
                            ]
                        }
                        ]
                    },
                    {
                        headerText: "電話情報",
                        group: [
                            { headerText: "電話", key: "Phone", dataType: "string", width: "150px" },
                            { headerText: "FAX", key: "Fax", dataType: "string", width: "150px" }
                        ]
                    }
                ],
                features: [
                    {
                        name: 'MultiColumnHeaders'
                    },
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'CustomerID',
                                classes: 'hidden-phone hidden-tablet'
                            },
                            {
                                columnKey: 'ContactTitle',
                                classes: 'hidden-phone hidden-tablet'
                            },
                            {
                                columnKey: 'PostalCode',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Phone',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Fax',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                ]
            });
        });