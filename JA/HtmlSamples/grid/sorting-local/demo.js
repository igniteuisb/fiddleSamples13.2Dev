$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                columns: [
                    { headerText: "社員 ID", key: "EmployeeID", dataType: "number", width: "15%" },
                    { headerText: "名前", key: "FirstName", dataType: "string", width: "20%" },
                    { headerText: "名字", key: "LastName", dataType: "string", width: "20%" },
                    { headerText: "Birth Date", key: "BirthDate", dataType: "date", width: "15%" },
                    { headerText: "市", key: "City", dataType: "string", width: "15%" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "number", width: "15%" }
                ],
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "EmployeeID",
                                classes: "hidden-phone"
                            },
                            {
                                columnKey: "PostalCode",
                                classes: "hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    }
                ]
            });
        });