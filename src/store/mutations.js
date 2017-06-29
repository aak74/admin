let updateData = (obj, changes) => {
  for (var field in changes) {
    if (changes.hasOwnProperty(field)) {
      console.log('updateData', field)
      obj[field] = changes[field]
    }
  }
}

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
    updateData(state.data.services[index], payload.changes)
  },
  UPDATE_SETTINGS (state, payload) {
    console.log('UPDATE_SETTINGS', state, payload)
    updateData(state.data, payload.changes)
  },
  SET_SETTINGS (state, payload) {
    console.log('SET_SETTINGS', state, payload)
    updateData(state.data, payload)
  },
  SWITCH_SERVICE (state, service) {
    state.service = service
  },
  SET_DATA (state, data) {
    state.data = data
  }
}
