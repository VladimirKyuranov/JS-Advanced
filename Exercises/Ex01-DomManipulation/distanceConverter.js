function attachEventsListeners() {
    let units = new Map();
    units.set("km", 1000);
    units.set("m", 1);
    units.set("cm", 0.01);
    units.set("mm", 0.001);
    units.set("mi", 1609.34);
    units.set("yrd", 0.9144);
    units.set("ft", 0.3048);
    units.set("in", 0.0254);

    let inputDistance = document.getElementById("inputDistance");
    let inputUnit = document.getElementById("inputUnits");
    let outputUnit = document.getElementById("outputUnits");
    let outputDistance = document.getElementById("outputDistance");
    let convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", convert);

    function convert() {
        let meters = Number(inputDistance.value) * units.get(inputUnit.value);
        console.log(meters);
        outputDistance.value = meters / units.get(outputUnit.value);
    }
}
