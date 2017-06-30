<template>
  <detail :fields="fields" :backurl="'Заявки'" :dispatch="'updateAppointments'"></detail>
</template>
<script>

import Detail from './Detail.vue'

export default {
  components: {
    Detail
  },
  data () {
    return {
      fields: this.fields
    }
  },
  created () {
    this.fields = []
    this.$store.getters.detail('appointments', this.$route.params.id).then((data) => {
      console.log('Appointment data', data)
      this.fields = [
        {value: data.id, name: 'id'},
        {title: 'Тип', icon: '', value: data.type, name: 'type'},
        {title: 'Название', icon: '', value: data.title, name: 'title'},
        {title: 'Имя клиента', icon: '', value: data.name, name: 'name'},
        {title: 'Телефон', icon: '', value: data.phone, name: 'phone'}
      ]
    })
  }
}
</script>
