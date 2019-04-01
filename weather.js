const coords = 'coords';
const API_KEY ="f4b5c7c8a388a0946f3b43ede01630ee";
const weather = document.querySelector(".js-weather");

function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const curLocation = json.name;
            weather.innerText = `${temperature} @ ${curLocation}`;
        });
}


function saveCoords(obj){
    localStorage.setItem("coords",JSON.stringify(obj));
}

function handleGeoLocation(position){
    const curLatitude = position.coords.latitude;
    const curLongitude = position.coords.longitude;
    const coordsObj = {
        latitude : curLatitude,
        Longitude : curLongitude
    };
    saveCoords(coordsObj);
    getWeather(curLatitude,curLongitude);

}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askforcoords(){
    navigator.geolocation.getCurrentPosition(handleGeoLocation,handleGeoError);
}

function loadCoords(){
    const loadedcoords = localStorage.getItem(coords)
    if(loadedcoords === null){
        askforcoords();
    }
    else{
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude,parseCoords.Longitude);
    }

}
function init(){
    loadCoords();
}

init();