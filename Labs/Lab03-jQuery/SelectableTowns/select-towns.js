function attachEvents() {
    $("#items li").on("click", select);
    $("#showTownsButton").on("click", showTowns);
    
    function select() {
        if ($(this).attr("data-selected")){
            $(this).removeAttr("data-selected")
                .css("background", "");
        } else {
            $(this).attr("data-selected", "true")
                .css("background", "#DDD");
        }
    }
    
    function showTowns() {
        let selectedTowns = $("#items li[data-selected=true]")
            .toArray().map(li => $(li).text());
        $("#selectedTowns").text(`Selected towns: ${selectedTowns.join(", ")}`);
    }
}
