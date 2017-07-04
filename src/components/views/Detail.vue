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
                :value="data[field.name]"
                :fieldname="field.name"
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
  props: ['fields', 'table', 'backUrl'],
  methods: {
    update (field) {
      if (!this.changes) {
        this.changes = {}
      }
      this.changes[field.fieldName] = field.value
      // console.log('update', field, this.changes)
    },
    cancel () {
      this.back()
    },
    save () {
      if (this.changes && this.$props.table) {
        let full = {}
        console.log('save', this, this.data, this.changes)
        this.$props.fields.forEach((field) => {
          console.log('save 1', field, this.changes[field.name], this.data[field.name])

          full[field.name] = (this.changes[field.name])
            ? this.changes[field.name]
            : this.data[field.name]
        })
        let dispatch = (this.$route.params.id !== 'create')
          ? 'updateEntity'
          : 'createEntity'

        console.log('save', full, dispatch, this.$route.params.id)
        this.$store.dispatch(
          dispatch,
          {
            table: this.$props.table,
            id: this.$route.params.id,
            changes: this.changes,
            full: full
          }
        ).then(
          result => this.back(),
          error => console.error('error', error)
        )
      } else {
        this.back()
      }
    },
    back () {
      if (this.$props.backUrl !== undefined) {
        this.$router.push({name: this.$props.backUrl})
      }
    }
  },
  data () {
    return {
      data: this.data
    }
  },
  created () {
    // this.data = this.$props.fields
    // this.fields = []
    this.data = {}
    let self = this
    this.$store.getters.detail(this.$props.table, this.$route.params.id).then((data) => {
      console.log('detail data', data)
      self.data = data
    })
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
