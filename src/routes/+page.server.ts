import type { Project } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/api/projects');
	const projects: Project[] = await response.json();

	// Return only projects with priority values for the carousel
	const carouselProjects = projects.filter(project => 
		project.priority !== null && project.priority !== undefined
	);

	return {
		projects: carouselProjects
	};
}
