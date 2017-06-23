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
                        <th aria-label="Type: activate to sort column ascending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="list-services" tabindex="0" class="sorting_asc">Type</th>
                        <th aria-label="Услуга: activate to sort column descending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="list-services" tabindex="0" class="sorting">Name</th>
                        <th aria-label="Price: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="list-services" tabindex="0" class="sorting">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row" v-for="service in data">
                        <td class="sorting_1">{{ service.type }}</td>
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
import api from '@/api'
import $ from 'jquery'
// Require needed datatables modules
import 'datatables.net'
import 'datatables.net-bs'

export default {
  name: 'Services',
  data () {
    return {
      data: this.data
    }
  },
  mounted () {
    api.request('get', '/api/v1/main')
    // axios.get('http://beauty.gbdev.xyz/api/v1/main')
      .then(response => {
        console.log('Services Response:', response, response.data.servicesAll)
        this.data = response.data.servicesAll
      })
      .catch(error => {
        // Request failed.
        console.log('error', error.response)
        this.error = error.response.statusText
      })

    this.$nextTick(() => {
      $('#list-services').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>
