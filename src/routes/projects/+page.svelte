<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects - {config.title}</title>
</svelte:head>

<main>
	<h1>Projects</h1>
	<div class="projects">
		{#each data.posts as project}
			<div class="project-card">
				<a href="/projects/{project.slug}" class="title">{project.title}</a>
				<p class="date">{formatDate(project.date)}</p>
				<p class="description">{project.description}</p>
				
				{#if project.value_added}
					<div class="value-added">
						<strong>Value Added:</strong> {project.value_added}
					</div>
				{/if}
				
				{#if project.skills_used}
					<div class="skills">
						<strong>Skills:</strong> {project.skills_used}
					</div>
				{/if}
				
				{#if project.categories && project.categories.length > 0}
					<div class="tags">
						{#each project.categories as category}
							<span class="tag">#{category}</span>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</main>

<style>
	h1 {
		font-size: var(--font-size-fluid-3);
		margin-bottom: var(--size-7);
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--size-7);
	}

	.project-card {
		border: 2px solid var(--border);
		border-radius: 15px;
		padding: var(--size-5);
		background-color: var(--surface-4);
		transition: transform 0.2s ease;
	}

	.project-card:hover {
		transform: translateY(-2px);
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
		text-decoration: none;
		color: var(--primary);
		font-weight: bold;
	}

	.title:hover {
		text-decoration: underline;
	}

	.date {
		color: var(--text-2);
		margin: var(--size-2) 0;
		font-size: var(--font-size-1);
	}

	.description {
		margin: var(--size-3) 0;
		line-height: 1.6;
	}

	.value-added, .skills {
		margin: var(--size-2) 0;
		font-size: var(--font-size-1);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		margin-top: var(--size-3);
	}

	.tag {
		padding: var(--size-1) var(--size-2);
		background-color: var(--surface-2);
		border-radius: var(--radius-round);
		font-size: var(--font-size-0);
		color: var(--text-2);
	}
</style>
