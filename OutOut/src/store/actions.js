import axios from 'axios'

export const getPlaces = ({commit}, coordinates) => {
  axios.get(`http://localhost:8000/out/${coordinates.lat}/${coordinates.lng}`)
    .then((res) => {
      commit('setPlaces', res.data)
      commit('setLocation', coordinates)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const goBack = ({commit}) => {
  commit('goBack')
}

export const setActivePlace = ({ commit }, id) => {
  commit('setActivePlace', id)
}

export const togglePopUp = ({ commit }) => {
  commit('togglePopUp')
}

export const getDistance = ({ commit }, locationData) => {
  axios.get(`http://localhost:8000/distance/${locationData.lat}/${locationData.lng}/${locationData.placeId}`)
    .then((res) => {
      commit('setDistance', ...res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getReview = ({ commit, state }) => {
  axios.get(`http://localhost:8000/reviews/${state.activePlace[0].place_id}`)
    .then((res) => {
      commit('setReviews', res.data.reviews)
    })
    .catch((err) => {
      console.log(err)
    })
}
