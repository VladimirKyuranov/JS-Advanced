function addDestination() {
    let destinationElements = $(".inputData");
    let destination = Array.from(destinationElements)
        .map(d => d.value).join(", ");
    
    if ($(destinationElements[0]).val() !== "" && $(destinationElements[1]).val() !== "") {
        let season = $("#seasons").val();
        let seasonUpperCase = season.charAt(0).toUpperCase() + season.slice(1);
        let trip = $(`<tr><td>${destination}</td><td>${seasonUpperCase}</td></tr>`);
        $("#destinationsList").append(trip);
        let seasonElement = $(`#${season}`);
        let newValue = Number(seasonElement.val()) + 1;
        seasonElement.val(newValue);
    }
    
    for (let i = 0; i < 2; i++) {
        $(destinationElements[i]).val("");
    }
}