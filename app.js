let iconDisplay = document.querySelector(".icon") 
let temp = document.querySelector(".temp")
let cityNameDisplay = document.querySelector(".city")
let inputCity = document.getElementById("input-city")
let submitInput = document.getElementById("submit-input")
let container = document.querySelector(".container")

let errorMessage = "Please enter in a valid city name."
const api_key = "5f351532df42870edfc612ec0085742d"

//const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`

submitInput.addEventListener("click", function getInputValue (e) {
    e.preventDefault()
    let cityName = inputCity.value
    inputCity.value = " "
  
    async function getTemp() {
        //Fetch data from Openweather
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`, {mode: 'cors'})
        if (!response.ok) {
            cityNameDisplay.innerHTML = errorMessage
            temp.innerHTML = null
            iconDisplay.src = "sad-face-in-rounded-square.png"
            inputCity.value = " "
        }        
        const tempData = await response.json()
        const temperature = tempData.main.temp
        const name = tempData.name
        const weatherIcon = `https://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`
    
        //Display all of the information on the page
        iconDisplay.src = weatherIcon
        temp.innerHTML = Math.floor((( temperature - 273.15) * 9/5) + 32) + "°"
        cityNameDisplay.innerHTML = name
        
    }
    getTemp(); 
})
    
    







          
