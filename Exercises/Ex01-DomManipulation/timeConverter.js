function attachEventsListeners() {
    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");
    let daysButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minutesButton = document.getElementById("minutesBtn");
    let secondsButton = document.getElementById("secondsBtn");
    let days;
    let hours;
    let minutes;
    let seconds;

    daysButton.addEventListener("click", convertDays);
    hoursButton.addEventListener("click", convertHours);
    minutesButton.addEventListener("click", convertMinutes);
    secondsButton.addEventListener("click", convertSeconds);

    function convertDays() {
        days = Number(daysElement.value);
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        fillInputs();
    }
    
    function convertHours() {
        hours = hoursElement.value;
        days = hours / 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        fillInputs();
    }

    function convertMinutes() {
        minutes = minutesElement.value;
        hours = minutes / 60;
        days = hours / 24;
        seconds = minutes * 60;

        fillInputs();
    }

    function convertSeconds() {
        seconds = secondsElement.value;
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;

        fillInputs();
    }

    function fillInputs() {
        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}
