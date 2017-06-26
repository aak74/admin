import api from '../api'

export const getData = (store) => {
  console.log('getData', store)
  api.getData(data => {
    // console.log('getData', this, $route.params)

    store.commit('SET_DATA', data)
    // store.commit('SWITCH_SERVICE', data.services[0])
  })
}

export const switchService = (store, currentService) => {
  console.log('switchService', currentService)
  store.commit('SWITCH_SERVICE', currentService)
}

export const saveService = (store, currentService) => {
  console.log('save', currentService)
  // store.commit('SWITCH_SERVICE', currentService)
}
