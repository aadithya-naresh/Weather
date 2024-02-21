# Weather


[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10674624.svg)](https://doi.org/10.5281/zenodo.10674624) 
![Github](https://img.shields.io/badge/logo-javascript-blue?logo=javascript) <br>

[![GitHub issues](https://img.shields.io/github/issues/aadithya-naresh/Weather)](https://github.com/aadithya-naresh/Weather/issues)

<a href="https://github.com/aadithya-naresh/Weather/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/aadithya-naresh/Weather"></a>
<a href="https://github.com/aadithya-naresh/Weather/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/aadithya-naresh/Weather"></a>

A simple web application to check the weather status of any location worldwide. Uses data from Matbox.com and OpenWeatherMap.

# Setup Instructions
1. Access the Github repository from your computer. 
 - First, pre-install [git](https://git-scm.com/) on  your machine. 
 - Then, clone the repo using the following command:
 ```
 git clone https://github.com/aadithya-naresh/Weather
```

2. Install the packages using ```npm install --save```. 
- This project uses JavaScript, so make sure that [NodeJS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is preinstalled.
- Install the packages.
```
npm install --save
```

3. Start the NodeJS Server.
- Change the directory in the terminal to the current directory and run the server using the following command
```
node src/app.js
```

5. Once the server is running, open your internet browser and type ```http://localhost:3000/``` into the search bar.

# Sample Application Screenshots
![WeatherPage](https://github.com/aadithya-naresh/Weather/assets/49028800/3c058663-9a3a-43c7-9b5c-001a90834f47)
*The Main Page*

![help](https://github.com/aadithya-naresh/Weather/assets/49028800/227adbea-2599-46ae-bf41-5026781fa1d4)
*Help Page*

![about](https://github.com/aadithya-naresh/Weather/assets/49028800/ddde0a7b-4ffd-4c35-933c-049ffc4c0294)
*About Page*

# API Usage Instructions

This web app's API can also be used standalone in other web applications.

1. Run the application using the above steps in Setup.
2. Use the following link, and mention the name of the location at the end.
```
http://aadi-weather-app.herokuapp.com/weather?address=
```
3. Examples
```
http://aadi-weather-app.herokuapp.com/weather?address=los angeles
```
```
http://aadi-weather-app.herokuapp.com/weather?address=chennai
```
