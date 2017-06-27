<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="service">
              <my-control :title="'Тип'" :icon="'home'" :value="service.type" vm="type" v-on:inputUpdate="update"></my-control>
              <my-control :title="'Название'" :icon="'clock-o'" :value="service.name" vm="name" v-on:inputUpdate="update"></my-control>
              <my-control :title="'Цена'" :icon="'envelope'" :value="service.price" vm="price" v-on:inputUpdate="update"></my-control>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" name="submit" @click="save">Сохранить</button>
          <button type="cancel" class="btn btn-default" name="cancel" @click="cancel">Отменить</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import MyControl from './MyControl.vue'
// import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  name: 'Service',
  computed: {
    service () {
      this.initialData = this.$store.getters.service(this.$route.params.id)
      return this.$store.getters.service(this.$route.params.id)
    }
    // ...mapGetters([
    //   'service'
    // ])
  },
  methods: {
    update (field) {
      // console.log('inputUpdate', this, field)
      if (!this.changes) {
        this.changes = {}
      }
      this.changes[field.fieldName] = field.value
    },
    cancel () {
      this.data = this.initialData
      // console.log('cancel service', this, this.$props, this.$data)
      this.$router.push({name: 'Услуги'})
    },
    save () {
      // console.log('save service', this, this.data)
      if (this.changes) {
        for (var changeIndex in this.changes) {
          if (this.changes.hasOwnProperty(changeIndex)) {
            this.data[changeIndex] = this.changes[changeIndex]
          }
        }
      }
      this.$store.commit('UPDATE_SERVICE', this.data)
      this.$router.push({name: 'Услуги'})
    }
  },
  mounted () {
    console.log('mounted', this, this.$route.params.id)
    this.data = this.$store.getters.service(this.$route.params.id)
    // this.service = this.$store.getters.service(this.$route.params.id)
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
