type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

// Function to manually process KaTeX on the client side after the component loads
export function processMathElements() {
	if (typeof document !== 'undefined') {
		// Import KaTeX only on the client side
		import('katex')
			.then((katex) => {
				// Wait for the DOM to be fully loaded
				setTimeout(() => {
					// Process code blocks with language-math class
					const mathCodeBlocks = document.querySelectorAll('.math-block');
					mathCodeBlocks.forEach((element) => {
						try {
							const mathText = element.textContent || '';
							element.innerHTML = katex.renderToString(mathText, {
								displayMode: true,
								throwOnError: false
							});
						} catch (e) {
							console.error('KaTeX rendering error:', e);
						}
					});

					// Process inline math
					const inlineMath = document.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6');
					inlineMath.forEach((element) => {
						processTextNodesForMath(element, katex.default || katex);
					});
				}, 100);
			})
			.catch((e) => console.error('Error loading KaTeX:', e));
	}
}

// Helper function to find and process text nodes that contain $ and $$ math
function processTextNodesForMath(element: Element, katex: any) {
	const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
	const textNodes: Text[] = [];
	let currentNode: Node | null;

	// Collect all text nodes
	while ((currentNode = walker.nextNode())) {
		textNodes.push(currentNode as Text);
	}

	// Process each text node for $ and $$ math
	textNodes.forEach((textNode) => {
		const text = textNode.nodeValue || '';

		// Check if node contains math delimiters
		if (text.includes('$') && !text.includes('\\$')) {
			// Process display math $$...$$ first
			if (text.includes('$$')) {
				const parts: string[] = [];
				let lastIndex = 0;
				let inMath = false;
				let mathStart = -1;

				// Find all $$ pairs
				for (let i = 0; i < text.length - 1; i++) {
					if (text[i] === '$' && text[i + 1] === '$') {
						if (!inMath) {
							// Start of display math
							parts.push(text.substring(lastIndex, i));
							mathStart = i;
							inMath = true;
							i++; // Skip the second $
						} else {
							// End of display math
							const mathContent = text.substring(mathStart + 2, i);
							parts.push('DISPLAY_MATH:' + mathContent);
							lastIndex = i + 2;
							inMath = false;
							i++; // Skip the second $
						}
					}
				}

				// Add remaining text
				if (lastIndex < text.length) {
					parts.push(text.substring(lastIndex));
				}

				if (parts.length > 1) {
					const fragment = document.createDocumentFragment();

					parts.forEach((part) => {
						if (part.startsWith('DISPLAY_MATH:')) {
							// Render display math
							const mathContent = part.substring('DISPLAY_MATH:'.length);
							const div = document.createElement('div');
							try {
								// Escape curly braces for Svelte
								const escapedMathContent = escapeCurlyBraces(mathContent);
								div.innerHTML = katex.renderToString(escapedMathContent, {
									displayMode: true,
									throwOnError: false
								});
								fragment.appendChild(div);
							} catch (e) {
								console.error('KaTeX rendering error:', e);
								fragment.appendChild(document.createTextNode('$$' + mathContent + '$$'));
							}
						} else if (part) {
							fragment.appendChild(document.createTextNode(part));
						}
					});

					textNode.parentNode?.replaceChild(fragment, textNode);
					return; // Done with this node after handling display math
				}
			}

			// Process inline math $...$
			const parts: string[] = [];
			let lastIndex = 0;
			let inMath = false;
			let mathStart = -1;

			// Find all $ pairs (not preceded by \)
			for (let i = 0; i < text.length; i++) {
				if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
					if (!inMath) {
						// Start of inline math
						parts.push(text.substring(lastIndex, i));
						mathStart = i;
						inMath = true;
					} else {
						// End of inline math
						const mathContent = text.substring(mathStart + 1, i);
						parts.push('INLINE_MATH:' + mathContent);
						lastIndex = i + 1;
						inMath = false;
					}
				}
			}

			// Add remaining text
			if (lastIndex < text.length) {
				parts.push(text.substring(lastIndex));
			}

			if (parts.length > 1) {
				const fragment = document.createDocumentFragment();

				parts.forEach((part) => {
					if (part.startsWith('INLINE_MATH:')) {
						// Render inline math
						const mathContent = part.substring('INLINE_MATH:'.length);
						const span = document.createElement('span');
						try {
							// Escape curly braces for Svelte
							const escapedMathContent = escapeCurlyBraces(mathContent);
							span.innerHTML = katex.renderToString(escapedMathContent, {
								displayMode: false,
								throwOnError: false
							});
							fragment.appendChild(span);
						} catch (e) {
							console.error('KaTeX rendering error:', e);
							fragment.appendChild(document.createTextNode('$' + mathContent + '$'));
						}
					} else if (part) {
						fragment.appendChild(document.createTextNode(part));
					}
				});

				textNode.parentNode?.replaceChild(fragment, textNode);
			}
		}
	});
}

// Helper function to escape curly braces for Svelte
function escapeCurlyBraces(text: string): string {
	// In client-side processing, we don't actually need to escape curly braces
	// since we're working with DOM nodes directly, not Svelte templates
	return text;
}
