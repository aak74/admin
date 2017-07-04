<template>
  <detail :fields="fields" :back-url="'Заявки'" :table="'appointments'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  components: {
    Detail
  },
  data () {
    return {
      fields: [
        {name: 'id'},
        {title: 'Тип', icon: '', name: 'type'},
        {title: 'Название', icon: '', name: 'title'},
        {title: 'Имя клиента', icon: '', name: 'name'},
        {title: 'Телефон', icon: '', name: 'phone'}
      ]
    }
  }
}
</script>
