<template>
  <my-list
    :fields="fields"
    :table="'services'"
    :entity="'Service'"
    :detail-prefix="'services'"
    :primary-key="'id'"
  ></my-list>
</template>
<script>

import MyList from './List.vue'

export default {
  data () {
    return {
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
  }
}
</script>
