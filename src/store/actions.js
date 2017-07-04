import api from '../api'

export const getData = (store) => {
  console.log('getData', store)
  api.getData(data => {
    console.log('getData', this)

    store.commit('SET_DATA', data)
    // store.commit('SWITCH_SERVICE', data.services[0])
  })
}

export const getSettings = (store) => {
  api.request('get', 'settings')
    .then((response) => {
      store.commit('SET_SETTINGS', response.data)
    })
    .catch((error) => {
      console.log('getSettings error', error)
    })
}

export const getList = (store, entity) => {
  api.request('get', 'settings')
    .then((response) => {
      store.commit('SET_SETTINGS', response.data)
    })
    .catch((error) => {
      console.log('getSettings error', error)
    })
}

export const switchService = (store, currentService) => {
  console.log('switchService', currentService)
  store.commit('SWITCH_SERVICE', currentService)
}

export const updateEntity = (store, payload) => {
  console.log('updateEntity', payload)
  return new Promise((resolve, reject) => {
    api.request('put', payload.table + '/' + payload.id, payload.full)
      .then((response) => {
        store.commit('UPDATE_ENTITY', payload)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const createEntity = (store, payload) => {
  console.log('createEntity', payload)
  return new Promise((resolve, reject) => {
    api.request('post', payload.table, payload.full)
      .then((response) => {
        console.log('CREATE_ENTITY', payload)
        // store.commit('ADD_SERVICE', payload)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/*
export const updateSettings = (store, payload) => {
  console.log('updateSettings', payload)
  return new Promise((resolve, reject) => {
    api.request('post', 'settings', payload.full)
      .then((response) => {
        store.commit('UPDATE_SETTINGS', payload)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
*/
