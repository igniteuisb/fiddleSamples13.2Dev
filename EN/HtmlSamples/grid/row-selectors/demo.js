$(function () {           

            /*----------------- Instantiation -------------------------*/

            createDefaultSelectorsGrid();
            createCboxSelectorsGrid();
            createRowNumberingGrid();
        });



        function createDefaultSelectorsGrid() {            

            $("#defaultRowSelectors").igGrid({
                height: "360px",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number", width: "100px" },
                    { headerText: "Name", key: "Name", dataType: "string" },
                    { headerText: "Title", key: "Title", dataType: "string"},
                    { headerText: "Phone", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }                           
                        ]
                    },
                    {
                        name: "RowSelectors",
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection",                        
                    }
                ]
            });
        }

        function createCboxSelectorsGrid() {
  
            $("#cbRowSelectors").igGrid({
                height: "360px",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number", width: "100px" },
                    { headerText: "Name", key: "Name", dataType: "string"},
                    { headerText: "Title", key: "Title", dataType: "string" },
                    { headerText: "Phone", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: true,
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection",                        
                    }
                ]
            });
        }

        function createRowNumberingGrid() {

            $("#rowNumbering").igGrid({
                height: "360px",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [                    
                    { headerText: "Name", key: "Name", dataType: "string" },
                    { headerText: "Title", key: "Title", dataType: "string" },
                    { headerText: "Phone", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "RowSelectors",                        
                        enableRowNumbering: true,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection"
                    }                    
                ]
            });
        }