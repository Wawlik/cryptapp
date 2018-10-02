<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h1 class="col-md-3 main-section">Dashboard</h1>
      </div>
      <hr>
      <div class="row margin-bottom">
        <div class="col-md-6 col-xs-12 col-sm-12">
          <h2 class="col-md-12 dashboard-child">Stats</h2>
          <pie-chart class="margin-bottom" :chartData="gainLossData" :height="250" :options="pieChartOptions">
          </pie-chart>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12">
          <h2 class="col-md-12 dashboard-child">Actives</h2>
          <pie-chart class="" :chartData="activesData" :height="250" :options="pieChartOptions">
          </pie-chart>
        </div>
      </div>
      <div class="row ">
        <h1 class="col-md-3 main-section">Transactions</h1>
        <button type="button" class="btn btn-default col-md-2 ml-auto add-button" data-toggle="modal" data-target="#addTransactionOpen">ADD</button>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  №
                </th>
                <th>
                  Debit
                </th>
                <th>
                  Credit
                </th>
                <th>
                  Date
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="t in transactions">
                <td>{{t.id}}</td>
                <td>{{t.debit.account}} <small>{{t.debit.amount}}</small></td>
                <td>{{t.credit.account}} <small>{{t.credit.amount}}</small></td>
                <td>{{t.date}}</td>
                <td>
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#removeTransactionOpen" @click="setRemovalId(t.id)">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <add-transaction></add-transaction>
      <remove-transaction :id="this.removalId"></remove-transaction>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import pieChart from '../src/components/pieChart.vue'
import addTransaction from '../src/components/addTransaction.vue'
import removeTransaction from '../src/components/removeTransaction.vue'

export default {
  name: 'app',
  components: {
    pieChart,
    addTransaction,
    removeTransaction
  },
  created () {
    axios.get('http://coins.jdevelop.com/dashboard').then(function (result) {
      this.transactions = result.data.symbols
      this.gainLossData.data.push(result.data.total_return)
      this.gainLossData.data.push(result.data.total_spent)
    })
  },
  data () {
    return {
      removalId: 0,
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: 'top'
        }
      },
      activesData: {
        labels: ['ETC', 'BTC', 'DOGE', 'BTC Cash', 'USD', 'other'],
        datasets: [{
          backgroundColor: ['#85410F', '#0A0B9C', '#44920A', '#9C252D',
            '#FCD62C', '#411A92'
          ],
          data: [40, 20, 100, 200, 500, 10]
        }]
      },
      gainLossData: {
        labels: ['Spent', 'Return'],
        datasets: [{
          backgroundColor: ['#9C252D', '#44920A'],
          data: [100, 500]
        }]
      },
      transactions: [{
          id: 101,
          date: '2017-11-29 00:00',
          debit: { account: 'ETC', amount: 1.05 },
          credit: { account: 'BTC', amount: 0.05 }
        },
        {
          id: 102,
          date: '2017-11-29 00:00',
          debit: { account: 'USD', amount: 520.05 },
          credit: { account: 'ETC', amount: 1.01 }
        },
        {
          id: 103,
          date: '2017-11-29 00:00',
          debit: { account: 'ETC', amount: 1.05 },
          credit: { account: 'BTC', amount: 0.05 }
        },
        {
          id: 104,
          date: '2017-11-29 00:00',
          debit: { account: 'USD', amount: 520.05 },
          credit: { account: 'ETC', amount: 1.01 }
        },
        {
          id: 105,
          date: '2017-11-29 00:00',
          debit: { account: 'ETC', amount: 1.05 },
          credit: { account: 'BTC', amount: 0.05 }
        },
        {
          id: 106,
          date: '2017-11-29 00:00',
          debit: { account: 'USD', amount: 520.05 },
          credit: { account: 'ETC', amount: 1.01 }
        },
        {
          id: 107,
          date: '2017-11-29 00:00',
          debit: { account: 'ETC', amount: 1.05 },
          credit: { account: 'BTC', amount: 0.05 }
        },
        {
          id: 108,
          date: '2017-11-29 00:00',
          debit: { account: 'USD', amount: 520.05 },
          credit: { account: 'ETC', amount: 1.01 }
        },
        {
          id: 109,
          date: '2017-11-29 00:00',
          debit: { account: 'ETC', amount: 1.05 },
          credit: { account: 'BTC', amount: 0.05 }
        },
        {
          id: 110,
          date: '2017-11-29 00:00',
          debit: { account: 'USD', amount: 520.05 },
          credit: { account: 'ETC', amount: 1.01 }
        }
      ]
    }
  },
  methods: {
    setRemovalId: function(id) {
      this.removalId = id
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Gidugu|Montserrat:400,700');

h1,
h2 {
  color: #60A0A7;
  font: bold 36px 'Abril Fatface';
}

.opacity {
  background-color: rgba(0, 0, 0, .5);
  border: 3px solid rgba(0, 0, 0, .7);
}

.small {
  font: normal 20px verdana;
  color: #C6DFE2;
}

.stats-total {
  padding: 0;
  font: bold 48px sans-serif;
  color: #566263;
}

.main-section {
  font: bold 48px 'Montserrat';
  color: #ccc;
}

.margin-bottom {
  margin-bottom: 40px;
}

table th {
  color: #C6DFE2;
  font: normal 24px 'Abril Fatface', cursive;
}

table tr {
  color: #60A0A7;
  font: normal 24px 'Gidugu', sans-serif;
}

table tr small {
  color: #82D8E2;
  font-family: 'verdana';
}

table tr,
table th {
  text-align: center;
}

.add-button {
  color: #ccc;
  font: normal 30px 'Gidugu', sans-serif;
}
pie-chart {
  height: 50vw;
}
</style>
