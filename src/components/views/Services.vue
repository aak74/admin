<template>
  <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body">
              <div class="row" v-if="data">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="services_info" role="grid" id="list-services" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th>Type</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" v-for="service in data">
                        <td>{{ service.type }}</td>
                        <td><router-link :to="'/services/' + service.id">{{ service.name }}</router-link></td>
                        <td>{{ service.price }}</td>
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
  computed: {
    data () {
      return this.$store.state.data.services
    }
  }
}
</script>

<style>
</style>
