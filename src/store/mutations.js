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
  UPDATE_SERVICE (state, service) {
    // state.service = service
    let index = state.data.services.findIndex(item => item.id === +service.id)
    state.data.services[index] = service
  },
  SWITCH_SERVICE (state, service) {
    state.service = service
  },
  SET_DATA (state, data) {
    state.data = data
  }
}
