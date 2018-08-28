function attachEvents() {
    $(".button").on("click", select);
    
    function select(event) {
        $(".button").removeClass("selected");
        $(event.target).addClass("selected");
    }
}
