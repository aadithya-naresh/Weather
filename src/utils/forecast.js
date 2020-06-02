const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const forecast='https://api.darksky.net/forecast/b829f39012c57bad3156143d69a8abfc/'+latitude+','+longitude+'?units=si'
   
    request({url:forecast, json:true},(error,response) => {
        if(error){
            callback('Unable to connect to the internet!',undefined)
        }else if(response.body.error){
            callback('Unable to find the location!',undefined)
        }else{
             callback(undefined,{
                forecast: response.body.daily.data[0].summary+" The temperature outside is "+response.body.currently.temperature+" degrees"+". There is a "+response.body.currently.precipProbability+"% chance  of raining"+".The high today (in °C) is "+response.body.daily.data[0].temperatureHigh+" with a low of "+response.body.daily.data[0].temperatureLow
        })
        }
    })
    
}
module.exports = forecast
