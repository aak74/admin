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
  }
}
