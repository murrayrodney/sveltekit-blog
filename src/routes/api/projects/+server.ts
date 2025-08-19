import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types';

async function getPosts() {
	let posts: Project[] = [];

	const paths = import.meta.glob('/src/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const post = { ...metadata, slug } satisfies Project;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) => {
		// Sort by priority first (if both have priority)
		if (first.priority !== null && first.priority !== undefined && 
		    second.priority !== null && second.priority !== undefined) {
			return first.priority - second.priority;
		}
		
		// If only one has priority, prioritize it
		if (first.priority !== null && first.priority !== undefined) return -1;
		if (second.priority !== null && second.priority !== undefined) return 1;
		
		// If neither has priority, sort by date (newest first)
		return new Date(second.date).getTime() - new Date(first.date).getTime();
	});

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
