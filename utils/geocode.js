const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicnl1emFhbHlzeWFocHV0cmEiLCJhIjoiY2t4aGJ1NnR0MDBwdzJvcXR4cXB2NGU2NSJ9.iswR76hLoGWrVlHCFLozAg&limit=1`
    request({url:url, json:true}, (error, response) => {
        if(error){
            callback("Maaf internet harus nyala bang", undefined)
        }
        else if(response.body.features.length === 0 ){
            callback("Masukkan daerah yang diinginkan", undefined)
        } else{
            callback(undefined, {
                query : response.body.query[0],
                latidude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode