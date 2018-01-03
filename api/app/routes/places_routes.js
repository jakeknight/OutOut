const axios = require('axios')

module.exports = function(app) {
    app.get('/status', (req, res) => {
        res.send('Online')
    });

    app.get('/out/:lat/:lng', (req, res) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.lng}&radius=400&type=bar&keyword=live_music&key=${process.env.GOOGLE_PLACES_KEY}`)
            .then((response) => {
                res.send(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    });
    
    app.get('/distance/:lat/:lng/:placeId', (req, res) => {
        axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${req.params.lat},${req.params.lng}&destinations=place_id:${req.params.placeId}&mode=walking&key=${process.env.GOOGLE_PLACES_KEY}`)
        .then((response) => {
            res.send(response.data.rows)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    app.get('/reviews/:placeId', (req, res) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.placeId}&key=${process.env.GOOGLE_PLACES_KEY}`)
        .then((response) => {
            res.send(response.data.result)
        })
        .catch((err) => {
            console.log(err)
        })       
    })
}