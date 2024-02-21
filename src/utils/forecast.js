const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const API_KEY = 'bdcd493145ba86c907c75d6f04965f85'
    const forecast = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+API_KEY
    // const forecast='https://api.darksky.net/forecast/b829f39012c57bad3156143d69a8abfc/'+latitude+','+longitude+'?units=si'
   
    request({url:forecast, json:true},(error,response) => {
        if(error){
            callback('Unable to connect to the internet!',undefined)
        }else if(response.body.error){
            callback('Unable to find the location!',undefined)
        }else{
             callback(undefined,{
                forecast: " The temperature outside is "+ ( parseInt(response.body.main.temp)-273.15 ).toPrecision(2) +"°C "+" but feels like "+ ( parseInt(response.body.main.feels_like)-273.15 ).toPrecision(2) +"°C "+". The high today (in °C) is "+ ( parseInt(response.body.main.temp_max)-273.15 ).toPrecision(2) +" with a low of "+ ( parseInt(response.body.main.temp_min)-273.15 ).toPrecision(2) +". A description for the weather today: "+ ( response.body.weather[0].description )
        })
        }
    })
    
}
module.exports = forecast
