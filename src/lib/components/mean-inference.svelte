<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let priorMean = $state(0);
	let priorStd = $state(1);
	let sampleSize = $state(10);
	let samples: number[] = [];
	let plotDiv: HTMLElement;
	let Plotly: any;

	function generateSamples(trueMean = 2, trueStd = 1) {
		return Array.from({ length: sampleSize }, () => {
			const u1 = Math.random();
			const u2 = Math.random();
			const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
			return z * trueStd + trueMean;
		});
	}

	function normalPDF(x: number, mean: number, std: number) {
		return Math.exp(-0.5 * Math.pow((x - mean) / std, 2)) / (std * Math.sqrt(2 * Math.PI));
	}

	async function updatePlot(priorMean: number, priorStd: number, sampleSize: number) {
		if (!browser || !Plotly) return;

		samples = generateSamples();
		const sampleMean = samples.reduce((a, b) => a + b, 0) / samples.length;
		const sampleVar = samples.reduce((a, b) => a + Math.pow(b - sampleMean, 2), 0) / samples.length;

		const posteriorVar = 1 / (1 / Math.pow(priorStd, 2) + samples.length / sampleVar);
		const posteriorMean =
			posteriorVar *
			(priorMean / Math.pow(priorStd, 2) + (samples.length * sampleMean) / sampleVar);
		const posteriorStd = Math.sqrt(posteriorVar);

		const x = Array.from({ length: 500 }, (_, i) => -5 + i * 0.1);

		const data = [
			{
				x: x,
				y: x.map((val) => normalPDF(val, priorMean, priorStd)),
				type: 'scatter',
				name: 'Prior',
				line: { color: 'blue' }
			},
			{
				x: x,
				y: x.map((val) => normalPDF(val, posteriorMean, posteriorStd)),
				type: 'scatter',
				name: 'Posterior',
				line: { color: 'red' }
			},
			{
				x: samples,
				y: Array(samples.length).fill(0),
				type: 'scatter',
				mode: 'markers',
				name: 'Samples',
				marker: { color: 'green', size: 10 }
			}
		];

		const layout = {
			title: 'Bayesian Inference for Mean',
			xaxis: { title: 'Value' },
			yaxis: { title: 'Density' },
			showlegend: true
		};

		Plotly.react(plotDiv, data, layout);
	}

	onMount(async () => {
		if (browser) {
			Plotly = await import('plotly.js-dist-min');
			updatePlot(priorMean, priorStd, sampleSize);
		}
	});

	$effect(() => {
		console.log('Updating plot with new parameters:', priorMean, priorStd, sampleSize);

		if (browser && plotDiv && Plotly) {
			updatePlot(priorMean, priorStd, sampleSize);
		}
	});
</script>

<div class="container">
	<div class="controls">
		<div class="slider-group">
			<label>
				Prior Mean:
				<input type="range" bind:value={priorMean} min="-5" max="5" step="0.1" />
				<span>{priorMean.toFixed(1)}</span>
			</label>
		</div>

		<div class="slider-group">
			<label>
				Prior Standard Deviation:
				<input type="range" bind:value={priorStd} min="0.1" max="5" step="0.1" />
				<span>{priorStd.toFixed(1)}</span>
			</label>
		</div>

		<div class="slider-group">
			<label>
				Sample Size:
				<input type="range" bind:value={sampleSize} min="1" max="100" step="1" />
				<span>{sampleSize}</span>
			</label>
		</div>
	</div>

	<div bind:this={plotDiv} class="plot"></div>
</div>

<style>
	.container {
		padding: 1rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.controls {
		margin-bottom: 1rem;
	}

	.slider-group {
		margin: 1rem 0;
	}

	.slider-group label {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.slider-group input[type='range'] {
		flex: 1;
	}

	.plot {
		width: 100%;
		height: 500px;
	}
</style>
