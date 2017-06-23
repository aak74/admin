<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="data">
              <my-control :title="'Адрес'" :icon="'home'" :value="data.address"></my-control>
              <my-control :title="'Режим работы'" :icon="'clock-o'" :value="data.schedule"></my-control>
              <my-control :title="'Email администратора'" :icon="'envelope'" :value="data.email"></my-control>

              <!-- select examples -->
              <h4>Select Options</h4>
              <div class="form-group">
                <label>Select</label>
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label>Select Multiple</label>
                <select multiple="" class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>

              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
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
  name: 'Settings',
  data () {
    return {data: this.data}
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  },
  mounted () {
    // this.data = {address: '', phone: '', email: ''}
    // let self = this
    // console.log('r get', r.request('get', '/api/v1/main'))

    api.request('get', '/api/v1/main')
    // axios.get('http://beauty.gbdev.xyz/api/v1/main')
      .then(response => {
        console.log('Settings Response:', response)
        this.data = response.data
      })
      .catch(error => {
        // Request failed.
        console.log('error', error.response)
        this.error = error.response.statusText
      })
  },
  components: {
    MyControl
  }

}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
