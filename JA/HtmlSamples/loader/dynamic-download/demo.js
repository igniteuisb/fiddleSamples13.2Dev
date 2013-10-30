$(function () {
$.ig.loader({
            scriptPath: "http://jp.dev.igniteui.local/13-2/igniteui/js/",
            cssPath: "http://jp.dev.igniteui.local/13-2/igniteui/css/",
            resources: "igShared",
            ready: function () {
                //This button click triggers the tree to be created
                $('#transform').on("click", function() {
                        CreateTree();
                        $(this)[0].disabled = true;
                });
            }
        });

        //By targetting the existing UL and LI elements,
        //the tree is created using the attributes set on those elements
        function CreateTree() {

            $.ig.loader("igTree", function () {
                $('#tree').igTree();
            });
        }
});