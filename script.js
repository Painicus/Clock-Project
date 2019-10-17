// Following constnats use querySelector, trying to convert to that from "document.getElementById".  That method would still work, I bet.
const HOURARM = document.querySelector("#hour");
const MINUTEARM = document.querySelector("#minute");
const SECONDARM = document.querySelector("#second");

function clockMotion() {
    
    var date = new Date();

    // These "lets" allow me to split up the Date variable into the individual segments of time using date attributes.  Easier to assign to each hand.
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let haPosition = (hour*360/12) + (minute*(360/60)/12); // Only 12 segments for each hour, can't let mind slip to another "60".
    let maPosition = (minute*360/60) + (second*(360/60)/60);
    let saPosition = second*360/60; // Circle = 360 degrees, 60 seconds in a minute

    HOURARM.style.transform = "rotate(" + haPosition + "deg)";
    MINUTEARM.style.transform = "rotate(" + maPosition + "deg)";
    SECONDARM.style.transform = "rotate(" + saPosition + "deg)";
    
    console.log("Hour: " + hour + " Minute: " + minute + " Second: " + second); //Fun extra bit to watch the function refresh every second.  24-Hour clock.
}

var refreshClock = setInterval(clockMotion, 1000); //Interval runs the function "clockMotion" every second (1000 milli). No refresh button needed.