<template>
  <div id="removeTransaction">
    <div class="modal fade" id="removeTransactionOpen" tabindex="-1" role="dialog" aria-labelledby="removeTransaction" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <center>       
            <h2 class="col-md-12">Are you sure you want to delete this transaction? {{id}}</h2>
            </center>
            <div class="row">
              <div class="col-md-3 ml-auto">
                <button :disabled="isLoading" class="btn btn-primary btn-block" type="button" data-dismiss="modal" aria-label="Close" @click="deleteTransaction">
                  OK
                  <!-- <i v-show="isLoading" class="fa fa-spinner spinner"></i> -->
                </button>
              </div>
              <div class="col-md-3 mr-auto">
                <button :disabled="isLoading" class="btn btn-default btn-block" type="button" data-dismiss="modal" aria-label="Close">
                  Cancel
                  <!-- <i v-show="isLoading" class="fa fa-spinner spinner"></i> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'removeTransaction',
    props: ['id'],
    data () {
      return {
        isLoading: false
      }
    },
    methods: {
      deleteTransaction: function () {
        axios.delete('http://coins.jdevelop.com/delete/' + this.id)
        .then(function (response) {
          console.log(response)
        })
      }
    }
  }
</script>
<style scoped>
  .form-control {
    line-height: 2;
  }
</style>