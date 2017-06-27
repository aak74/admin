export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  UPDATE_SERVICE (state, payload) {
    console.log('UPDATE_SERVICE', state, payload)
    let index = state.data.services.findIndex(item => item.id === +payload.id)
    for (var field in payload.changes) {
      if (payload.changes.hasOwnProperty(field)) {
        console.log('UPDATE_SERVICE_1', field)
        state.data.services[index][field] = payload.changes[field]
      }
    }
  },
  UPDATE_SETTINGS (state, payload) {
    console.log('UPDATE_SERVICE', state, payload)
    for (var field in payload.changes) {
      if (payload.changes.hasOwnProperty(field)) {
        console.log('UPDATE_SERVICE_1', field)
        state.data[field] = payload.changes[field]
      }
    }
  },
  SWITCH_SERVICE (state, service) {
    state.service = service
  },
  SET_DATA (state, data) {
    state.data = data
  }
}
