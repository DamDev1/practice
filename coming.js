
function countDown(){
    const deadline = new Date("june 31 2021, 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const gap = deadline - currentTime;

    var sec = 1000;
    var mins = sec * 60;
    var hours = mins * 60;
    var days = hours * 24;

    const distanceDay = Math.floor(gap / days);
    const distanceHours = Math.floor((gap % days) / hours);
    const distanceMins = Math.floor((gap % hours) / mins);
    const distanceSec = Math.floor((gap % mins) / sec);

    document.getElementById("day").innerText = distanceDay;
    document.getElementById("hours").innerText = distanceHours;
    document.getElementById("mins").innerText = distanceMins;
    document.getElementById("secs").innerText = distanceSec;

    if(deadline< 0){
        alert("end")
    }
}

setInterval(countDown, 1000);
