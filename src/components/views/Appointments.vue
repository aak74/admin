<template>
  <my-list
    :fields="fields"
    :table="'appointments'"
    :detail-prefix="'appointments'"
    :primary-key="'id'"
  ></my-list>
</template>
<script>

import MyList from './List.vue'

export default {
  components: {
    MyList
  },
  data () {
    return {
      fields: [
        {title: 'id', name: 'id'},
        {title: 'Тип', name: 'type'},
        {title: 'Имя клиента', name: 'name'},
        {title: 'Телефон', name: 'phone'}
      ]
    }
  }
}
</script>
