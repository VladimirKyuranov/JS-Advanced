function timer() {
    let hoursSpan = $("#hours");
    let minutesSpan = $("#minutes");
    let secondsSpan = $("#seconds");
    $("#start-timer")
        .on("click", startTimer);
    $("#stop-timer")
        .on("click", stopTimer);
    let seconds = 0;
    let interval = null;
    
    function startTimer() {
        if (interval === null) {
            interval = setInterval(tick, 1000);
        }
        
        function tick() {
                seconds++;
                hoursSpan.text(`0${Math.floor(seconds / 60 / 60)}`.slice(-2));
                minutesSpan.text(`0${Math.floor(seconds / 60) % 60}`.slice(-2));
                secondsSpan.text(`0${Math.floor(seconds % 60)}`.slice(-2));
           
        }
    }
    
    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }
}
