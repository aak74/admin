<template>
  <my-list
    :fields="fields"
    :data="data"
    :detail-prefix="'services'"
    :primary-key="'id'"
  ></my-list>
</template>
<script>

import MyList from './List.vue'
import api from '../../api'

export default {
  data () {
    return {
      // data: this.$store.state.data.services,
      data: this.data,
      fields: [
        {title: 'id', name: 'id'},
        {title: 'Тип', name: 'type'},
        {title: 'Название', name: 'name'},
        {title: 'Цена', name: 'price'}
      ]
    }
  },
  components: {
    MyList
  },
  created () {
    this.data = []
    var self = this
    api.request('get', 'services')
      .then((response) => {
        self.$store.commit('SET_SERICES', response.data)
        self.data = response.data
      })
      .catch((error) => {
        console.log('get services error', error)
      })
  }
}
</script>
