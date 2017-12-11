const axios = require('axios')

module.exports = function(app) {
    app.get('/out/:lat/:lng', (req, res) => {
        console.log(req.params)
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.lng}&radius=500&type=bar&key=${process.env.GOOGLE_PLACES_KEY}`)
            .then((response) => {
                res.send(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    });
}