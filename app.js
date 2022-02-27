const fs = require('fs')
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6e9311eabac1e42d4e82cf7000d27773&query=Indonesia&units=m'

request({ url : url, json : true}, (error, request) => {
    const temp = request.body.current
    console.log('Hari ini temparetur di Indonesia mencapai', temp.temperature,'tetapi rasanya suhunya seperti', temp.feelslike )

})

