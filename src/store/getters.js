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
  service: (state, getters) => (id) => {
    // console.log('service 1', state.data.services);
    if (state.data.services) {
      let index = state.data.services.findIndex(item => item.id === +id)
      // console.log('service 2', index);
      if (index >= 0) {
        return state.data.services[index]
      }
    }
    return {
      'id': 7,
      'type': 'qqКосметология',
      'name': 'qqКосметический массаж лица',
      'price': '75000'
    }
  }
}
