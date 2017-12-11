const placesRoutes = require('./places_routes')

module.exports = function(app) {
  placesRoutes(app)
}