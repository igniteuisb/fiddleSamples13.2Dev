$(function () {
            var headerTextValues = ["製品名", "単価", "在庫数", "入荷待ち"],
                imagesRoot = "http://jp.dev.igniteui.local/13-2/images/samples/templating-engine/rowTemplateWithConditionalCells";
            $('#resultGrid').igGrid({
                dataSource: northwindProducts,
                responseDataKey: "results",
                dataSourceType: "json",
                width: "100%",
                autoGenerateColumns: false,
                rowTemplate: "<tr> <td>${ProductName}</td><td>$ ${UnitPrice} {{if parseInt(${UnitPrice}) >= parseInt(${DeltaPrice}) }}" +
                        "<img width='10' height='15' src='" + imagesRoot + "/arrowUp.gif'/>" +
                        "{{else}}" +
                        "<img width='10' height='15' src='" + imagesRoot + "/arrowDown.gif'/>" +
                        "{{/if}}" +
                        "</td><td>${UnitsInStock}</td><td>${UnitsOnOrder}</td></tr>",
                columns: [
                    { headerText: headerTextValues[0], key: "ProductName", width: 300 },
                    { headerText: headerTextValues[1], key: "UnitPrice", type: 'number', width: 150 },
                    { headerText: headerTextValues[2], key: "UnitsInStock", width: 125 },
                    { headerText: headerTextValues[3], key: "UnitsOnOrder", width: 125 },
                    { headerText: " ", key: "DeltaPrice", hidden: true }
                ],
                dataBinding: function (evt, ui) {
                    var ds = ui.owner.options.dataSource.results;
                    $.each(ds, function (index, el) {
                        if (Math.random() > 0.5) {
                            el["DeltaPrice"] = parseFloat(el.UnitPrice) + 2.00;
                        } else {
                            el["DeltaPrice"] = parseFloat(el.UnitPrice) - 2.00;
                        }
                    });
                },
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 8
                    }
                ]
            });
        });