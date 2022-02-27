const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

// const masuk = 'los%20angles'
// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${masuk}.json?access_token=pk.eyJ1Ijoicnl1emFhbHlzeWFocHV0cmEiLCJhIjoiY2t4aGJ1NnR0MDBwdzJvcXR4cXB2NGU2NSJ9.iswR76hLoGWrVlHCFLozAg&limit=1`

// request({url:url , json:true}, (error, request) => {
//     if(masuk){
//         if(error) {
//             console.log('Maaf internet anda harus di nyalakan')
//         }
//         else{
//             const features = request.body.features[0]
//             console.log(request.body.query,'terletak pada koordinat', features.bbox[0], 'hingga',features.bbox[2], 'bujur timur dan', features.bbox[3], 'lintang utara hingga', features.bbox[1], 'lintang selatan')
//         }
//     }
//     else{
//         console.log("Maaf anda harus memasukkan nama daerah")
//     }

// })

// const geocode = (address, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicnl1emFhbHlzeWFocHV0cmEiLCJhIjoiY2t4aGJ1NnR0MDBwdzJvcXR4cXB2NGU2NSJ9.iswR76hLoGWrVlHCFLozAg&limit=1`
//     request({url:url, json:true}, (error, response) => {
//         if(error){
//             callback("Maaf internet harus nyala bang", undefined)
//         }
//         else if(response.body.features.length === 0 ){
//             callback("Masukkan daerah yang diinginkan", undefined)
//         } else{
//             callback(undefined, {
//                 timur : response.body.features[0].center[0],
//                 selatan : response.body.features[0].center[1]
//             })
//         }
//     })
// }


function jalan () {
    const masuk = process.argv[2]
    if(masuk){
        geocode(masuk, (error, data) => {
            if(error){
                return console.log(error)
            }
            console.log(data)
                forecast(data.longitude, data.latidude, (error, forecastData) => {
                    if(error){
                        return console.log(error)
                    }
                    console.log(data.location)
                    console.log(forecastData)
                })
        })
    }
    else{
        console.log("masukkan alamat yang diinginkan")
    }
}

jalan()
