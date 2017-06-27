<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-body" v-if="fields" v-for="field in fields">
              <my-control
                v-if="field.title"
                :title="field.title"
                :icon="field.icon"
                :value="field.value"
                :fn="field.name"
                v-on:inputUpdate="update"
              ></my-control>
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

export default {
  name: 'Detail',
  props: ['fields', 'backUrl', 'commit'],
  methods: {
    update (field) {
      if (!this.changes) {
        this.changes = {}
      }
      this.changes[field.fieldName] = field.value
    },
    cancel () {
      // this.data = this.initialData
      this.back()
    },
    save () {
      if (this.changes) {
        for (var changeIndex in this.changes) {
          if (this.changes.hasOwnProperty(changeIndex)) {
            this.dataStore[changeIndex] = this.changes[changeIndex]
          }
        }
      }
      // console.log('save', this.dataStore)
      if (this.$props.commit) {
        this.$store.commit(this.$props.commit, this.dataStore)
      }
      this.back()
    },
    back () {
      // console.log('back', this.$props.backUrl, this.$props)
      if (this.$props.backUrl !== undefined) {
        // console.log('back2')
        this.$router.push({name: this.$props.backUrl})
      }
    }
  },
  mounted () {
    // console.log('mounted', this, this.$route.params.id)
    this.dataStore = {}
    this.$props.fields.forEach((field) => {
      this.dataStore[field.name] = field.value
    })
    this.data = this.$props.fields
    // console.log('mounted', this.data, this.dataStore)
    // this.service = this.$store.getters.service(this.$route.params.id)
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
