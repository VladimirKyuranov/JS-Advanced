function search() {
    let text = $("#searchText").val();
    $("#towns li").css("font-weight", "");
    let targets = $(`#towns li:contains("${text}")`);
    targets.css("font-weight", "bold");
    $("#result").text(`${targets.length} matches found.`)
}
