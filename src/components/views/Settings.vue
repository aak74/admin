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

import MyControl from './MyControl.vue'

export default {
  name: 'Settings',
  // data () {
  //   return {data: this.data}
  // },
  computed: {
    settings () {
      return this.$store.state.data
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  },
  mounted () {
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
