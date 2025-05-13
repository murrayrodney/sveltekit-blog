<script lang="ts">
	import Toggle from './toggle.svelte';
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/bayesian-inference">Bayes Rules</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding: var(--size-7);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		background-color: var(--surface-2);
		border-radius: 10px;
		z-index: 100;

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		.links {
			/* margin-block: var(--size-7); */

			@media (min-width: 768px) {
				display: flex;
				gap: var(--size-7);
				margin-block: 0;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
