<script lang="ts">
	import type { Project } from '$lib/types';
	import { formatDate } from '$lib/utils';

	interface Props {
		projects: Project[];
	}

	let { projects = [] }: Props = $props();

	let currentIndex = $state(0);
	let isAutoPlaying = $state(true);
	let intervalId: ReturnType<typeof setInterval> | undefined;

	// Auto-play functionality
	function startAutoPlay() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			if (isAutoPlaying) {
				nextSlide();
			}
		}, 4000);
	}

	function stopAutoPlay() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = undefined;
		}
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % projects.length;
	}

	function prevSlide() {
		currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	// Start auto-play when component mounts
	$effect(() => {
		if (projects.length > 1) {
			startAutoPlay();
		}

		return () => {
			stopAutoPlay();
		};
	});
</script>

{#if projects.length > 0}
	<!-- <h2 style="margin-top: 10px;">Featured Projects</h2> -->

	<div class="carousel-section">
		<h2>Featured Projects</h2>
		<div
			class="carousel-container"
			role="region"
			aria-label="Featured projects carousel"
			onmouseenter={() => {
				isAutoPlaying = false;
			}}
			onmouseleave={() => {
				isAutoPlaying = true;
			}}
		>
			<div class="carousel-wrapper">
				<div class="carousel-track" style="transform: translateX(-{currentIndex * 100}%)">
					{#each projects as project, index}
						<div class="carousel-slide">
							<div class="project-card">
								<div class="card-content">
									<h3>
										<a href="/projects/{project.slug}">{project.title}</a>
									</h3>
									<p class="date">{formatDate(project.date)}</p>
									<p class="description">{project.description}</p>

									<div class="meta-info">
										{#if project.value_added}
											<div class="meta-item">
												<strong>Value Added:</strong>
												{project.value_added}
											</div>
										{/if}

										{#if project.skills_used}
											<div class="meta-item">
												<strong>Skills:</strong>
												{project.skills_used}
											</div>
										{/if}
									</div>

									{#if project.categories && project.categories.length > 0}
										<div class="tags">
											{#each project.categories.slice(0, 3) as category}
												<span class="tag">#{category}</span>
											{/each}
										</div>
									{/if}

									<a href="/projects/{project.slug}" class="read-more"> Learn More → </a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			{#if projects.length > 1}
				<!-- Navigation buttons -->
				<button class="nav-button prev" onclick={prevSlide} aria-label="Previous project">
					←
				</button>
				<button class="nav-button next" onclick={nextSlide} aria-label="Next project"> → </button>

				<!-- Dots indicator -->
				<div class="dots-container">
					{#each projects as _, index}
						<button
							class="dot"
							class:active={index === currentIndex}
							onclick={() => goToSlide(index)}
							aria-label="Go to project {index + 1}"
						></button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.carousel-section {
		margin: var(--size-8) 0;
	}

	.carousel-section h2 {
		font-size: var(--font-size-fluid-2);
		margin-bottom: var(--size-6);
		border-top: none;
		padding-top: 0;
	}

	.carousel-container {
		position: relative;
		max-width: min(800px, 100%);
		margin: 0 auto;
	}

	.carousel-wrapper {
		overflow: hidden;
		border-radius: 15px;
	}

	.carousel-track {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.carousel-slide {
		min-width: 100%;
		flex-shrink: 0;
	}

	.project-card {
		background: var(--surface-4);
		border: 2px solid var(--border);
		border-radius: 15px;
		padding: var(--size-6);
		margin: 0 var(--size-2);
		min-height: 350px;
		display: flex;
		flex-direction: column;
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.project-card h3 {
		margin: 0 0 var(--size-2) 0;
		font-size: var(--font-size-fluid-1);
	}

	.project-card h3 a {
		color: var(--primary);
		text-decoration: none;
		text-transform: capitalize;
	}

	.project-card h3 a:hover {
		text-decoration: underline;
	}

	.date {
		color: var(--text-2);
		font-size: var(--font-size-1);
		margin: 0 0 var(--size-3) 0;
	}

	.description {
		line-height: 1.6;
		margin: 0 0 var(--size-4) 0;
		flex: 1;
	}

	.meta-info {
		margin: var(--size-3) 0;
	}

	.meta-item {
		margin-bottom: var(--size-2);
		font-size: var(--font-size-1);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		margin: var(--size-3) 0;
	}

	.tag {
		padding: var(--size-1) var(--size-2);
		background-color: var(--surface-2);
		border-radius: var(--radius-round);
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.read-more {
		margin-top: auto;
		align-self: flex-start;
		padding: var(--size-2) var(--size-4);
		background-color: var(--primary);
		color: var(--text-1);
		text-decoration: none;
		border-radius: var(--radius-2);
		font-weight: bold;
		transition: background-color 0.2s ease;
	}

	.read-more:hover {
		background-color: var(--primary-hover, var(--primary));
		transform: translateY(-1px);
	}

	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.7);
		color: white;
		border: none;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		font-size: 20px;
		cursor: pointer;
		transition: background-color 0.2s ease;
		z-index: 10;
	}

	.nav-button:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	.nav-button.prev {
		left: -60px;
	}

	.nav-button.next {
		right: -60px;
	}

	.dots-container {
		display: flex;
		justify-content: center;
		gap: var(--size-2);
		margin-top: var(--size-4);
	}

	.dot {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		border: none;
		background-color: var(--text-3);
		cursor: pointer;
		transition: background-color 0.2s ease;
		padding: 0;
		line-height: 1;
		display: inline-block;
	}

	.dot.active {
		background-color: var(--surface-1);
	}

	.dot:hover {
		background-color: var(--primary);
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.carousel-container {
			margin: 0 auto;
			padding: 0 var(--size-2);
		}

		.carousel-slide {
			padding: 0 var(--size-3);
		}

		.project-card {
			margin: 0;
			padding: var(--size-4);
			min-height: 300px;
		}

		.nav-button {
			width: 40px;
			height: 40px;
			font-size: 16px;
		}

		.nav-button.prev {
			left: -30px;
		}

		.nav-button.next {
			right: -30px;
		}
	}
</style>
