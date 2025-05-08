import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkMath],
	rehypePlugins: [
		[
			rehypeMathjax,
			{
				tex: {
					inlineMath: [['$', '$']],
					displayMath: [['$$', '$$']],
					processEscapes: true,
					processEnvironments: true
				},
				options: {
					skipHtmlTags: ['code', 'pre']
				}
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
