<template>
  <detail :fields="fields" :back-url="'Обзор'" :entity="'Settings'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  computed: {
    fields () {
      let data = this.$store.state.data
      return [
        {value: data.id, name: 'id'},
        {title: 'Адрес', icon: 'home', value: data.address, name: 'address'},
        {title: 'Долгота', icon: 'map-marker', value: data.longitude, name: 'longitude'},
        {title: 'Широта', icon: 'map-marker', value: data.latitude, name: 'latitude'},
        {title: 'Режим работы', icon: 'clock-o', value: data.schedule, name: 'schedule'},
        {title: 'Телефон', icon: 'phone', value: data.phone, name: 'phone'},
        {title: 'Подпись под телефоном', icon: 'info', value: data.phoneText, name: 'phoneText'},
        {title: 'Email', icon: 'envelope', value: data.email, name: 'email'}
      ]
    }
  },
  components: {
    Detail
  }
}
</script>
