<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="project-meta">
		{#if data.meta.value_added}
			<div class="meta-item">
				<strong>Value Added:</strong> {data.meta.value_added}
			</div>
		{/if}
		
		{#if data.meta.skills_used}
			<div class="meta-item">
				<strong>Skills Used:</strong> {data.meta.skills_used}
			</div>
		{/if}
	</div>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">#{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		h1 {
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.project-meta {
			margin: var(--size-5) 0;
			padding: var(--size-4);
			background-color: var(--surface-4);
			border-radius: var(--radius-2);
		}

		.meta-item {
			margin-bottom: var(--size-2);
		}

		.meta-item:last-child {
			margin-bottom: 0;
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
			}
		}
	}
</style>
