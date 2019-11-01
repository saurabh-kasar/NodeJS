const request = require('request')

const url = 'https://api.darksky.net/forecast/a74f14a2040952eb83b30b957e07cfa4/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})