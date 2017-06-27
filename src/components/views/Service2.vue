<template>
  <detail :fields="fields" :back-url="'Услуги'" :commit="'UPDATE_SERVICE'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  name: 'Service',
  computed: {
    fields () {
      let data = this.$store.getters.service(this.$route.params.id)
      this.data = data
      console.log('dataa', data)
      // return {}
      return [
        {value: data.id, name: 'id'},
        {title: 'Тип', icon: 'home', value: data.type, name: 'type'},
        {title: 'Название', icon: 'clock-o', value: data.name, name: 'name'},
        {title: 'Цена', icon: 'rouble', value: data.price, name: 'price'}
      ]
    }
  },
  components: {
    Detail
  }
}
</script>
