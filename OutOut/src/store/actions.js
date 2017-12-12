import axios from 'axios'

export const getPlaces = ({commit}, coordinates) => {
  axios.get(`http://localhost:8000/out/${coordinates.lat}/${coordinates.lng}`)
    .then((res) => {
      commit('setPlaces', res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const setActivePlace = ({ commit }, id) => {
  commit('setActivePlace', id)
}
