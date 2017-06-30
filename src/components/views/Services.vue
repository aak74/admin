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

export default {
  name: 'Service',
  data () {
    return {
      data: this.$store.state.data.services,
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
