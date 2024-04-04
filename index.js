
import { SimpleBarChart } from '@carbon/charts'
import options from './options.js'
import data from './data.js'
import '@carbon/charts/styles.css'

const chartHolder = document.getElementById('app')
new SimpleBarChart(chartHolder, {
	data,
	options
})
