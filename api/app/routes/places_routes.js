const axios = require('axios')

module.exports = function(app) {
    app.get('/out/:lat/:lng', (req, res) => {
        console.log(req.params)
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.lng}&radius=800&type=bar&keyword=live_music&key=${process.env.GOOGLE_PLACES_KEY}`)
            .then((response) => {
                console.log(response)
                res.send(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    });
}