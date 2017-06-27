<template>
  <detail :fields="fields" :back-url="'Обзор'" :dispatch="'updateSettings'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  name: 'Service',
  computed: {
    fields () {
      let data = this.$store.state.data
      console.log('data', data)
      // return {}
      return [
        {value: data.id, name: 'id'},
        {title: 'Тип', icon: 'home', value: data.address, name: 'address'},
        {title: 'Название', icon: 'clock-o', value: data.schedule, name: 'schedule'},
        {title: 'Email', icon: 'envelope', value: data.email, name: 'email'}
      ]
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  },
  components: {
    Detail
  }
}
</script>
