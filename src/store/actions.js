import api from '../api'

export const getData = (store) => {
  console.log('getData', store)
  api.getData(data => {
    // console.log('getData', store)

    store.commit('SET_DATA', data)
  })
}

export const switchService = ({ commit }, payload) => {
  commit('SWITCH_SERVICE', payload)
}
