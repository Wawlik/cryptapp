<template>
  <div id="addTransaction">
    <div class="modal fade" id="addTransactionOpen" tabindex="-1" role="dialog" aria-labelledby="addTransaction" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
                <div class="row">
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <div class="form-group">
                      <label for="debit.amount">Debit</label>
                      <input v-model="exchange.debit.amount" type="number" name="debit.amount" class="form-control" id="debit.amount">
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="form-group">
                      <label for="debit.account">Currency</label>
                      <select v-model="exchange.debit.account" id="debit.account" class="form-control">
                        <option v-for="c in currencies" :value="c">{{c}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <div class="form-group" >
                      <label for="credit.amount">Credit</label>
                      <input v-model="exchange.credit.amount"  type="number" name="credit.amount" class="form-control" id="credit.amount">
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="form-group">
                       <label for="credit.account">Currency</label>
                      <select v-model="exchange.credit.account" id="credit.account" class="form-control">
                        <option v-for="c in currencies" :value="c">{{c}}</option>
                      </select>
                    </div>
                  </div>
                </div>
                  <center>
                <div class="col-md-3 col-sm-3 col-xs-12">
                  <button :disabled="isLoading" class="btn btn-primary btn-block " @click="submit" type="button" data-dismiss="modal" aria-label="Close">
                    Create
                    <!-- <i v-show="isLoading" class="fa fa-spinner spinner"></i> -->
                  </button>
                </div>
                </center>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'

export default {
  name: 'addTransaction',
  data () {
    return {
      isLoading: false,
      currencies: ['ETC', 'BTC', 'DOGE', 'BTC Cash', 'USD'],
      exchange: {
        debit: {
          account: '',
          amount: 0
        },
        credit: {
          account: '',
          amount: 0
        },
        date: ''
      }
    }
  },
  methods: {
    submit: function () {
      this.exchange.date = moment().format('YYYY-MM-DD H:mm')
      console.log(this.exchange.date)
      console.log(JSON.stringify(this.exchange))
      axios.put('http://coins.jdevelop.com/transfer', this.makeData(this.exchange))
      .then(function (result) {
        console.log(result)
      })
    },
    makeData: function (data) {
      return JSON.stringify({
        debit: {
          account: data.debit.account,
          amount: data.debit.amount
        },
        credit: {
          account: data.credit.account,
          amount: data.credit.amount
        },
        date: data.date
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