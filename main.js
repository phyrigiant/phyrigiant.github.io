const inputUser = document.querySelector('.inputUser');
const button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

const API_Key="8791ee38d7649f2cd806072d2fccd9d8";

button.addEventListener('click', ()=>{
    const cityInput = inputUser.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    .then(x => x.json())
    .then(y => {
        showData.innerHTML = `
                                <ul>
                                    <li class="desc">${y.weather[0].description}</li>
                                    <li class="city">${y.name}, ${y.sys.country} </li>
                                    <li class="temp">${y.main.temp}°c</li>
                                </ul>
                                <h5>openweathermap.org API &#10084;</h5>`;
    });
    inputUser.value = null;
});