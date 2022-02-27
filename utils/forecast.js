const request = require('request')

const forecast = (langitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6e9311eabac1e42d4e82cf7000d27773&query=${langitude},${longitude}&units=f`
    request({url:url, json:true}, (error, response) => {
        if(error){
            callback("Maaf internet harus nyala bang", undefined)
        }
        else{
            callback({
                country : response.body.location.country,
            })
        }
    })
}

module.exports = forecast