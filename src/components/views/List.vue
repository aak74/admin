<template>
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body">
              <div class="row">
                <div class="col-sm-12 table-responsive">
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
    </div>
  </section>
</template>

<script>

export default {
  name: 'Services',
  props: [
    'primaryKey',
    'detailPrefix',
    'fields',
    'data'
  ]
}
</script>

<style>
</style>
