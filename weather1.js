let API_key = "2fa1f21f441a29946679e9e313810cff";


const cityElement = document.querySelector(".city");
const teperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distance");
const description = document.querySelector(".description-text");
const date = document.querySelector(".date");
const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");
const descriptionIcon = document.querySelector(".description i")


//let city = "bijnor"
const getData = async(city) => {
   try{	
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`);
const result = await response.json();
	console.log(result);
	console.log(result.main.temp);
	console.log(result.wind.speed);
	console.log(result.visibility);
	console.log(result.name);
	console.log(result.main.humidity);
	
	updateData(result);
}
catch(error){
console.log(error);
}
}

const updateData = (result) =>{
cityElement.innerText = result.name;
teperature.innerText = `${Math.floor(result.main.temp)}°`;
windSpeed.innerText =`${Math.floor(result.wind.speed)} km/h`
humidity.innerText = `${result.main.humidity}%`
visibility.innerText = `${result.visibility/1000}km `
description.innerText = result.weather[0].description;
const currentDate = new Date();
date.innerText = currentDate.toDateString();
  getWeatherIconName(result.weather[0].main);
descriptionIcon.innerHTML = ` <i class="material-icons">${getWeatherIconName(result.weather[0].main)}</i>`

return result;
}



formElement.addEventListener("submit" ,function(e){
	e.preventDefault();
 let city = inputElement.value;
getData(city);
inputElement.value = "";
})

function getWeatherIconName(weatherCondition){
	const iconMap = {
		Clear :"wb_sunny",
		Clouds :"wb_cloudy",
		Rain :"umbrealla",
		Thunderstorm :"flash_on",
		Drizzle :"grains",
		Snow :"ac_units",
		Mist :"clouds",
		Smoke :"clouds",
		Haze :"clouds",
		Fog :"clouds",
	}
	console.log(iconMap[weatherCondition]);
	return iconMap[weatherCondition] || "help";
	
};