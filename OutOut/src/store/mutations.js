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

export const togglePopUp = (state) => {
  state.popUpActive = !state.popUpActive
}
