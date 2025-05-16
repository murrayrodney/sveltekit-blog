<script lang="ts">
	import Toggle from './toggle.svelte';
	import * as config from '$lib/config';
	let isMenuOpen = false;
</script>

<nav>
	<div class="nav-content">
		<a href="/" class="title">
			<b>{config.title}</b>
		</a>

		<button
			class="menu-button"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-label="Toggle menu"
		>
			<div class="hamburger" class:open={isMenuOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	</div>

	<ul class="links" class:open={isMenuOpen}>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li class="theme-toggle">
			<Toggle />
		</li>
	</ul>
</nav>

<style>
	nav {
		padding: var(--size-4);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		background-color: var(--surface-2);
		border-radius: 0 0 10px 10px;
		z-index: 100;
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menu-button {
		display: block;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--size-2);

		@media (min-width: 768px) {
			display: none;
		}
	}

	.hamburger {
		width: 24px;
		height: 20px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		height: 2px;
		width: 100%;
		background-color: var(--text-1);
		transition: all 0.3s ease;
	}

	.hamburger.open span:first-child {
		transform: translateY(9px) rotate(45deg);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:last-child {
		transform: translateY(-9px) rotate(-45deg);
	}

	.links {
		display: none;
		flex-direction: column;
		gap: var(--size-4);
		margin: 0;
		padding: var(--size-4) 0;
		list-style: none;

		&.open {
			display: flex;
		}

		@media (min-width: 768px) {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: var(--size-7);
			padding: 0;
		}
	}

	.theme-toggle {
		margin-left: 0;

		@media (min-width: 768px) {
			margin-left: var(--size-4);
		}
	}

	a {
		color: inherit;
		text-decoration: none;
		font-size: var(--font-size-2);

		&:hover {
			text-decoration: underline;
		}
	}

	@media (min-width: 768px) {
		nav {
			padding: var(--size-4) var(--size-7);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
