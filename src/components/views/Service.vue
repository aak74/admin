<template>
  <detail :fields="fields" :back-url="'Услуги'" :dispatch="'updateService'" :primary-key="id"></detail>
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
      id: this.$route.params.id,
      fields: this.fields
    }
  },
  created () {
    this.fields = []
    this.$store.getters.detail('services', this.$route.params.id).then((data) => {
      console.log('Appointment data', data)
      this.fields = [
        {value: data.id, name: 'id'},
        {title: 'Тип', icon: 'home', value: data.type, name: 'type'},
        {title: 'Название', icon: 'clock-o', value: data.name, name: 'name'},
        {title: 'Цена', icon: 'rouble', value: data.price, name: 'price'}
      ]
    })
  }
}
</script>
