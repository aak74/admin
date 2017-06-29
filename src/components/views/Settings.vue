<template>
  <detail :fields="fields" :backurl="'Обзор'" :dispatch="'updateSettings'"></detail>
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
        {title: 'Адрес', icon: 'home', value: data.address, name: 'address'},
        {title: 'Режим работы', icon: 'clock-o', value: data.schedule, name: 'schedule'},
        {title: 'Телефон', icon: 'phone', value: data.phone, name: 'phone'},
        {title: 'Подпись под телефоном', icon: 'info', value: data.phoneText, name: 'phoneText'},
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
