function initializeTable() {
    addCountry("Bulgaria", "Sofia");
    addCountry("Germany", "Berlin");
    addCountry("Russia", "Moscow");
    $("#createLink").on("click", createCountry);
    manageLinks();
    
    function addCountry(country, capital) {
        $("<tr>").appendTo($("#countriesTable"))
            .append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($("<td>")
                .append($(`<a href="#" id="createLink">[Up]</a>`)
                    .on("click", moveUp))
                .append($(`<a href="#" id="createLink">[Down]</a>`)
                    .on("click", moveDown))
                .append($(`<a href="#" id="createLink">[Delete]</a>`)
                    .on("click", deleteRow)));
        manageLinks();
    }
    
    function createCountry() {
        let country = $("#newCountryText");
        let capital = $("#newCapitalText");
        
        addCountry(country.val(), capital.val());
        country.val("");
        capital.val("");
        manageLinks();
    }
    
    function moveUp() {
        $(this).parent().parent().insertBefore($(this).parent().parent().prev());
        manageLinks();
    }
    
    function moveDown() {
        $(this).parent().parent().insertAfter($(this).parent().parent().next());
        manageLinks();
    }
    
    function deleteRow() {
        $(this).parent().parent().remove();
        manageLinks();
    }
    
    function manageLinks() {
        $("#countriesTable tr a").css("display", "inline");
        $("#countriesTable tr:eq(2) a:contains('Up')").css("display", "none");
        $("#countriesTable tr:last a:contains('Down')").css("display", "none");
    }
}
