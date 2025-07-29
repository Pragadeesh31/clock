function updateClock(){
    const now = new Date();

    let hours=now.getHours();
    let minutes=String(now.getMinutes()).padStart(2,'0');
    let seconds=String(now.getSeconds()).padStart(2,'0');
    

    let period="AM";
    if(hours>=12)
    {
        period="PM";
        if(hours>12)
            hours-=12;
    }
    hours=String(hours).padStart(2,'0');
    document.getElementById('clock').textContent=`${hours}:${minutes}:${seconds} ${period}`;
}
setInterval(updateClock,0);
updateClock();