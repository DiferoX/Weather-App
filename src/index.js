let sw = 1;

function fetchWeather (city)
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=74db7abee25f0d2ac8d8844c4de0c219`, {mode: 'cors'})
  .then((res) => res.json())
  .then((data) => 
  {
    displayCity (data);
    background (data);
    //console.log (data);
  })
  //.catch(alert('Wrong city name'))
}

function background(info)
{
  let background = document.getElementById ('background');

  if (sw === 0)
  {
    if (info.weather[0].main === "Clouds")
    {
      background.src = "./images/cloud6.webp";
    }
    else if (info.weather[0].main === "Rain")
    {
      background.src = "./images/rain.jpg";
    }
    else if (info.weather[0].main === "Clear")
    {
      background.src = "./images/clear.jpg";
    }
    else if (info.weather[0].main === "Fog")
    {
      background.src = "./images/fog.jpg";
    }
  }
}

function displayCity (data)
{
  let cityName = document.getElementById ('cityName');
  cityName.textContent = `${data.name}, ${data.sys.country}`;

  let temp = document.getElementById ('temp');
  temp.textContent = `${data.main.temp} °C`;

  let tempMax = document.getElementById ('tempMax');
  tempMax.textContent = `${data.main.temp_max} °C`;

  let tempMin = document.getElementById ('tempMin');
  tempMin.textContent = `${data.main.temp_min} °C`;

  let weather = document.getElementById ('weather');
  weather.textContent = `${data.weather[0].main}`;

  let feelsLike = document.getElementById ('feelsLike');
  feelsLike.textContent = `${data.main.feels_like} °C`;

  let humidity = document.getElementById ('humidity');
  humidity.textContent = `${data.main.humidity} %`;

  let wind = document.getElementById ('wind');
  wind.textContent = `${data.wind.speed} Km/h`;
}

fetchWeather ("Medellin");


let inputSearch = document.getElementById ('inputSearch');
inputSearch.addEventListener ('change', function()
{
  sw = 0;
  fetchWeather(inputSearch.value);
  inputSearch.value = '';
});

let imgSearch = document.getElementById ('imgSearch');
imgSearch.addEventListener ('click', function()
{
  sw = 0;
  let inputSearch = document.getElementById ('inputSearch');
  fetchWeather(inputSearch.value);
});

let imgClose = document.getElementById ('imgClose');
imgClose.addEventListener ('click', function()
{
  inputSearch.value = '';
});

let city1 = document.getElementById ('city1');
city1.addEventListener ('click', function()
{
  sw = 1;
  let background = document.getElementById ('background');
  background.src = "./images/medellin5.webp";
  fetchWeather ("Medellin");
});

let city2 = document.getElementById ('city2');
city2.addEventListener ('click', function()
{
  sw = 1;
  let background = document.getElementById ('background');
  background.src = "./images/new-york.jpg";
  fetchWeather ("new york");
});

let city3 = document.getElementById ('city3');
city3.addEventListener ('click', function()
{
  sw = 1;
  let background = document.getElementById ('background');
  background.src = "./images/paris.jpg";
  fetchWeather ("paris");
});

let city4 = document.getElementById ('city4');
city4.addEventListener ('click', function()
{
  sw = 1;
  let background = document.getElementById ('background');
  background.src = "./images/tokio.jpg";
  fetchWeather ("tokio");
});

let city5 = document.getElementById ('city5');
city5.addEventListener ('click', function()
{
  sw = 1;
  let background = document.getElementById ('background');
  background.src = "./images/sydney.jpg";
  fetchWeather ("sydney");
});

/*
let cityX = document.getElementById ('cityX');
cityX.addEventListener ('click', function()
{
  let background = document.getElementById ('background');
  background.src = "./images/new-york.jpg";
  fetchWeather ("new york");
});
*/
