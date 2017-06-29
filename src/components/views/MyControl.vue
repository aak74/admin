<template>
  <div>
    <label>{{ title }}</label>
    <div class="input-group">
      <span class="input-group-addon">
        <i class="fa fa-fw" :class="'fa-' + icon" aria-hidden="true"></i>
      </span>
      <input
        class="form-control"
        ref="input"
        :placeholder="title"
        type="text"
        v-bind:value="value"
        :fieldname="fieldname"
        v-on:input="updateValue($event.target.value)"
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'icon', 'value', 'fieldname'],
    methods: {
      updateValue: function (value) {
        console.log('updateValue', value, this.$refs.input.attributes.fieldname.value)
        // this.$refs.input.value = value
        this.$emit(
          'inputUpdate',
          {
            fieldName: this.$refs.input.attributes.fieldname.value,
            value: value
          }
        )
      }
    }
  }
</script>

<style>
</style>
