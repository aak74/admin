<template>
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-sm-12 table-responsive">
                <button type="button" class="btn btn-success" name="button" @click="add">Добавить</button>
                <table aria-describedby="services_info" role="grid" id="list-services" class="table table-bordered table-striped dataTable">
                  <thead>
                    <tr role="row">
                      <th v-for="field in fields">{{ field.title }}</th>
                    </tr>
                  </thead>
                  <tbody v-if="data">
                    <tr role="row" v-for="item in data">
                      <td v-for="field in fields">
                        <router-link :to="'/' + detailPrefix + '/' + item[primaryKey]">{{ item[field.name] }}</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyList',
  props: [
    'primaryKey',
    'detailPrefix',
    'fields',
    'table'
  ],
  data () {
    return {
      data: this.data
    }
  },
  created () {
    // this.fields = []
    let self = this
    this.$store.getters.list(this.$props.table).then((data) => {
      console.log('list data', data)
      self.data = data
    })
  },
  methods: {
    add () {
      console.log('add')
      this.$router.push('/' + this.$props.detailPrefix + '/create')
    }
  }
}
</script>

<style>
</style>
