const   clockContainer = document.querySelector(".js-clock"),
        clockTitle = clockContainer.querySelector("h1");


function getTimes(){
 
    const date = new Date();
    const   minutes = date.getMinutes(),
            hours = date.getHours();
            seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;




}

function init(){
    getTimes();
    setInterval(getTimes, 1000);
}

init();