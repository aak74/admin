import api from '../api'

export default {
  settings: (state) => {
    console.log('getters state', state.data)
    return state.data
    // return state.data || {
    //   'address': 'Москва',
    //   'schedule': 'с 9:00',
    //   'phone': '+7 (495)',
    //   'phoneText': 'для'
    // }
  },

  list: (state, getters) => (table) => {
    console.log('getters list', table)
    return new Promise((resolve, reject) => {
      if (state.data[table]) {
        resolve(state.data[table])
      }
      api.request('get', table)
        .then((response) => {
          state.data[table] = response.data
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  detail: (state, getters) => (table, id) => {
    console.log('getters detail', table, id)
    return getters.list(table).then((data) => {
      let index = data.findIndex(item => item.id === +id)
      console.log('getters detail then', table, data, index)
      if (index >= 0) {
        return data[index]
      }
      return {}
    })
    // return {
    //   'id': -1,
    //   'type': '',
    //   'name': '',
    //   'price': ''
    // }
  }
}
