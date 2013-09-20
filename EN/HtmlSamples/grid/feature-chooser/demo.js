$(function () {
            $("#grid").igGrid({
                primaryKey: "EmployeeID",
                width: '100%',
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number", width: "15%" },
                    { headerText: "First Name", key: "FirstName", dataType: "string", width: "25%" },
                    { headerText: "Last Name", key: "LastName", dataType: "string", width: "25%"},
                    { headerText: "Title", key: "Title", dataType: "string", width: "35%" }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Sorting",
                        type: "local",
                        mode: "advanced"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        mode: "advanced"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "ColumnMoving"
                    },
                    {
                        name: "Summaries"
                    }
                ]
            });
        });