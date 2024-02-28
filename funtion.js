const loc = document.querySelector('#location');
const wind = document.querySelector('#wind');
const visibility = document.querySelector('#visibility');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');
const day = document.querySelector('.day');
const weatherImage = document.querySelector('.weather-img');
const temp = document.querySelector('#temp');
const range = document.querySelector('#range');





function getLocation(){

    let searchLoc = document.getElementById('search-loc').value;

    let latLon = `http://api.openweathermap.org/geo/1.0/direct?q=${searchLoc}&limit=1&appid=3730bd2aa85b90c5acb53862ba59c9e7`;

    let lat;
    let lon;

    fetch(latLon)
    .then((res) =>{
        return res.json();
    })
    .then(data => {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        loc.innerHTML = `${data[0].name}`;

        let apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3730bd2aa85b90c5acb53862ba59c9e7`;

        fetch(apiWeather)
        .then((res) =>{
            return res.json();
        })
        .then(data => {
            console.log(data);

            wind.innerHTML = `Wind : ${data.wind.speed}km/h`;
            humidity.innerHTML = `Humidity : ${data.main.humidity}%`;
            pressure.innerHTML = `Pressure : ${data.main.pressure/1000}bar`;
            visibility.innerHTML = `Visibility: ${data.visibility}feet`;
            temp.innerHTML = `${Math.round(data.main.temp-273)}&deg C`
            range.innerHTML = `${Math.round(data.main.temp_min-273)}&deg C - ${Math.round(data.main.temp_max-273)}&deg C`
        })
    });

}

