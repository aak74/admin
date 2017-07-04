<template>
  <detail :fields="fields" :back-url="'Услуги'" :table="'services'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  name: 'Service',
  components: {
    Detail
  },
  data () {
    return {
      fields: [
        {name: 'id'},
        {title: 'Тип', icon: 'home', name: 'type'},
        {title: 'Название', icon: 'clock-o', name: 'name'},
        {title: 'Цена', icon: 'rouble', name: 'price'}
      ]
    }
  }
}
</script>
