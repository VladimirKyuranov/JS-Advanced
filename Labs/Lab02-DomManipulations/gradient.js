function attachGradientEvents() {
    let result = document.getElementById("result");
    let gradient = document.getElementById("gradient");

    gradient.addEventListener("mousemove", getResult);
    gradient.addEventListener("mouseout", clearResult);

    function getResult(event) {
        let x = event.offsetX;
        let width = this.clientWidth - 1;
        let percent = Math.trunc((x / width) * 100);
        result.textContent = percent + "%";
    }

    function clearResult() {
        result.textContent = "";
    }
}