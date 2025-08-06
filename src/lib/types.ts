export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Project = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
	value_added?: string;
	skills_used?: string;
	image?: string;
};
