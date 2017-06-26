<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="settings">
              <my-control :title="'Адрес'" :icon="'home'" :value="settings.address"></my-control>
              <my-control :title="'Режим работы'" :icon="'clock-o'" :value="settings.schedule"></my-control>
              <my-control :title="'Email администратора'" :icon="'envelope'" :value="settings.email"></my-control>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

// import api from '@/api'
import MyControl from './MyControl.vue'
// import { mapGetters } from 'vuex'
//  import { mapState } from 'vuex'

export default {
  name: 'Settings',
  // data () {
  //   return {data: this.data}
  // },
  computed: {
    settings () {
      return this.$store.state.data
    }
    // ...mapState([
    //   'settings'
    // ])
    // ...mapGetters([
    //   'settings'
    // ])
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
/*
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
*/
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
