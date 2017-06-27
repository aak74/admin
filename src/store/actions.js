import api from '../api'

export const getData = (store) => {
  console.log('getData', store)
  api.getData(data => {
    console.log('getData', this)

    store.commit('SET_DATA', data)
    // store.commit('SWITCH_SERVICE', data.services[0])
  })
}

export const switchService = (store, currentService) => {
  console.log('switchService', currentService)
  store.commit('SWITCH_SERVICE', currentService)
}

export const updateService = (store, payload) => {
  console.log('updateService', payload)
  setTimeout(() => {
    store.commit('UPDATE_SERVICE', payload)
  }, 1000)
}

export const updateSettings = (store, payload) => {
  console.log('updateSettings', payload)
  setTimeout(() => {
    store.commit('UPDATE_SETTINGS', payload)
  }, 1000)
}
