<template>
  <div>
    <label>{{ title }}</label>
    <div class="input-group">
      <span class="input-group-addon">
        <i class="fa fa-fw" :class="'fa-' + icon" aria-hidden="true"></i>
      </span>
      <input class="form-control" :placeholder="title" type="text" :value="value">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'icon', 'value']
  }
</script>

<style>
</style>
