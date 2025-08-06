import type { Project } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/api/projects');
	const projects: Project[] = await response.json();
	
	// Return only the first 5 projects for the carousel
	return { 
		projects: projects.slice(0, 5) 
	};
}
