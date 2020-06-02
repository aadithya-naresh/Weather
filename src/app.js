const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname,'../Templates/Views')
const partialsPath = path.join(__dirname,'../Templates/Partials')
//set handlebars and views
app.set('view engine' ,'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//set up static directory
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather',
        name:'Aadi'
    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        title:'About',
        name:'Aadi'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        help:'Search on the box provided to get weather!',
        title:'Help',
        name:'Aadi'
    })
})

app.get('/weather', (req,res) =>{

if(!req.query.address){
    return res.send({
        error:'Enter some address'
    })
}

    geocode(req.query.address,(error,{latitude,longitude,location} ={}) =>{
   
        if(error){
            return res.send({
                error:error
            })
        }else{
            forecast(latitude,longitude, (error,{forecast}) =>{
                if(error){
                   return res.send({
                       error:error
                   })
                }else{
                   res.send({
                       forecast,
                       location:location,
                       address:req.query.address
                   })
                }
             })
        }
    })
    })

app.get('/help/*',(req,res) =>{
    res.render('helpError',{
        title:'404',
        name:'Aadithya',
        message:'Help Page not found'
    })
})

app.get('*',(req,res) =>{
    res.render('error',{
        title:'404',
        name:'Aadithya',
        message:'Page not found'
    })
})

app.listen(port,() =>{
    console.log('Server is turned on 3000')
})