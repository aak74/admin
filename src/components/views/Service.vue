<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="data">
              <my-control :title="'Тип'" :icon="'home'" :value="data.type"></my-control>
              <my-control :title="'Название'" :icon="'clock-o'" :value="data.name"></my-control>
              <my-control :title="'Цена'" :icon="'envelope'" :value="data.price"></my-control>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import api from '@/api'
import MyControl from './MyControl.vue'
// import axios from 'axios'

export default {
  name: 'Service',
  data () {
    return {data: this.data}
  },
  mounted () {
    let self = this
    api.request('get', '/api/v1/main')
      .then(response => {
        this.data = response.data.servicesAll.find(item => item.id === +self.$route.params.id)
      })
      .catch(error => {
        console.log('error', error.response)
        // this.error = 'error.response.statusText'
        this.error = error.response.statusText
      })
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
