<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="service">
              <my-control :title="'Тип'" :icon="'home'" :value="service.type" vm="type" v-model="service.type" v-on:inputUpdate="update"></my-control>
              <my-control :title="'Название'" :icon="'clock-o'" :value="service.name" vm="name" v-model="service.name" v-on:inputUpdate="update"></my-control>
              <my-control :title="'Цена'" :icon="'envelope'" :value="service.price" vm="price" v-model="service.price" v-on:inputUpdate="update"></my-control>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" name="submit" @click="save">Сохранить</button>
          <button type="button" class="btn btn-default" name="cancel" @click="cancel">Отменить</button>
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
      this.data[field.fieldName] = field.value
    },
    cancel () {
      this.$router.push({ path: '/services' })
    },
    save () {
      // console.log('save service', this, this.$props, this.$data)
      this.$store.commit('UPDATE_SERVICE', this.data)
      this.$router.push({ path: '/services' })
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
