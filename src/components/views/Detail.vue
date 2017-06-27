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
  props: ['fields', 'backUrl', 'commit', 'primaryKey'],
  methods: {
    update (field) {
      if (!this.changes) {
        this.changes = {}
      }
      this.changes[field.fieldName] = field.value
    },
    cancel () {
      this.back()
    },
    save () {
      if (this.changes && this.$props.commit) {
        this.$store.commit(
          this.$props.commit,
          {
            id: this.$props.primaryKey,
            changes: this.changes
          }
        )
      }
      this.back()
    },
    back () {
      if (this.$props.backUrl !== undefined) {
        this.$router.push({name: this.$props.backUrl})
      }
    }
  },
  mounted () {
    this.data = this.$props.fields
  },
  components: {
    MyControl
  }

}
</script>

<style>
</style>
