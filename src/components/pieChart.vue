<script>
	import { Pie, mixins } from 'vue-chartjs'

	export default{
  name: 'pieChart',
  extends: Pie,
  props: ['chartData', 'options'],
  mixins: [mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
	}
</script>