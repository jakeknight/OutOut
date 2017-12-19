export const setPlaces = (state, data) => {
  state.places = []
  state.places.push(...data)
}

export const setActivePlace = (state, id) => {
  state.activePlace = []
  const activePlace = state.places.filter((obj) => {
    return obj.id === id
  })
  state.activePlace.push(...activePlace)
}

export const setLocation = (state, coordinates) => {
  state.userLocation.lng = coordinates.lng
  state.userLocation.lat = coordinates.lat
}

export const setDistance = (state, distance) => {
  state.distance = distance.elements[0].duration.text
}

export const setReviews = (state, reviews) => {
  state.reviewData = []
  state.reviewData.data.push(...reviews)
}

export const togglePopUp = (state) => {
  state.popUpActive = !state.popUpActive
}
