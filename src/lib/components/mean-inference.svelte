<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let priorMean = $state(0);
	let priorStd = $state(1);
	let sampleSize = $state(10);
	let plotDiv: HTMLElement;
	let Plotly: any;

	function calcPosteriorVar(priorStd: number, sampleSize: number, sampleVar: number): number {
		return 1 / (1 / Math.pow(priorStd, 2) + sampleSize / sampleVar);
	}

	function calcPosteriorMean(
		priorMean: number,
		priorStd: number,
		sampleSize: number,
		sampleMean: number,
		sampleVar: number
	): number {
		const posteriorVar = calcPosteriorVar(priorStd, sampleSize, sampleVar);
		return (
			posteriorVar * (priorMean / Math.pow(priorStd, 2) + (sampleSize * sampleMean) / sampleVar)
		);
	}

	function generateSamples(trueMean = 2, trueStd = 1, sampleSize = 10) {
		return Array.from({ length: sampleSize }, () => {
			const u1 = Math.random();
			const u2 = Math.random();
			const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
			return z * trueStd + trueMean;
		});
	}

	let samples = $derived.by(() => {
		return generateSamples(2, 1, sampleSize);
	});

	// Calculate sample mean and variance
	const sampleMean = $derived.by(() => {
		return samples.reduce((a, b) => a + b, 0) / samples.length;
	});
	const sampleVar = $derived.by(() => {
		return samples.reduce((a, b) => a + Math.pow(b - sampleMean, 2), 0) / samples.length;
	});

	// Calculate posterior variance and mean
	const posteriorVar = $derived.by(() => {
		return calcPosteriorVar(priorStd, sampleSize, sampleVar);
	});
	const posteriorStd = $derived.by(() => {
		return Math.sqrt(posteriorVar);
	});
	const posteriorMean = $derived.by(() => {
		return calcPosteriorMean(priorMean, priorStd, sampleSize, sampleMean, sampleVar);
	});

	function normalPDF(x: number, mean: number, std: number) {
		return Math.exp(-0.5 * Math.pow((x - mean) / std, 2)) / (std * Math.sqrt(2 * Math.PI));
	}

	async function updatePlot(
		priorMean: number,
		priorStd: number,
		posteriorMean: number,
		posteriorStd: number
	) {
		if (!browser || !Plotly) return;

		const minX = Math.min(priorMean - 4 * priorStd, posteriorMean - 4 * posteriorStd);
		const maxX = Math.max(priorMean + 4 * priorStd, posteriorMean + 4 * posteriorStd);
		const nPlot = 500;
		const step = (maxX - minX) / nPlot;
		const x = Array.from({ length: nPlot }, (_, i) => minX + i * step);
		const priorPdf = x.map((val) => normalPDF(val, priorMean, priorStd));
		const posteriorPdf = x.map((val) => normalPDF(val, posteriorMean, posteriorStd));
		const yMax = Math.max(Math.max(...priorPdf), Math.max(...posteriorPdf));

		const trueMean = 2; // The true mean used in sample generation

		const data = [
			{
				x: x,
				y: priorPdf,
				type: 'scatter',
				name: 'Prior',
				line: { color: 'blue' }
			},
			{
				x: x,
				y: posteriorPdf,
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
			},
			{
				x: [trueMean, trueMean],
				y: [0, yMax],
				type: 'scatter',
				mode: 'lines',
				name: 'True Mean',
				line: { color: 'black', width: 2, dash: 'dash' }
			}
		];

		const layout = {
			title: 'Bayesian Inference for Mean',
			xaxis: { title: 'Value' },
			yaxis: { title: 'Density' },
			showlegend: true,
			legend: {
				orientation: 'h', // horizontal orientation
				y: -0.1, // position below the plot
				yanchor: 'top' // anchor to the top of the legend box
			}
		};

		Plotly.react(plotDiv, data, layout);
	}

	onMount(async () => {
		if (browser) {
			Plotly = await import('plotly.js-dist-min');
			updatePlot(priorMean, priorStd, posteriorMean, posteriorStd);
		}
	});

	$effect(() => {
		// Reference the variables to make them dependencies
		void priorMean;
		void priorStd;
		void posteriorMean;
		void posteriorStd;

		if (browser && plotDiv && Plotly) {
			updatePlot(priorMean, priorStd, posteriorMean, posteriorStd);
		}
	});
</script>

<div class="container">
	<div class="controls">
		<button on:click={() => (samples = generateSamples(2, 1, sampleSize))}>Generate Samples</button>

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
