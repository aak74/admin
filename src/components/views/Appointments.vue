<template>
  <my-list
    :fields="fields"
    :data="data"
    :detail-prefix="'appointments'"
    :primary-key="'id'"
  ></my-list>
</template>
<script>

import MyList from './List.vue'
import api from '../../api'

export default {
  components: {
    MyList
  },
  data () {
    return {
      data: this.data,
      fields: [
        {title: 'id', name: 'id'},
        {title: 'Тип', name: 'type'},
        {title: 'Имя клиента', name: 'name'},
        {title: 'Телефон', name: 'phone'}
      ]
    }
  },
  created () {
    this.data = []
    var self = this
    api.request('get', 'appointments')
      .then((response) => {
        self.$store.commit('SET_APPOINTMENTS', response.data)
        self.data = response.data
      })
      .catch((error) => {
        console.log('get appointments error', error)
      })
  }
}
</script>
