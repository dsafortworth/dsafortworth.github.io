import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

export default {
	// Consult https://svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		adapter: adapter({
			// See https://kit.svelte.dev/docs/adapter-cloudflare for more information
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
            config: 'wrangler.jsonc'
		}),

		// Set the output directory to ./dist at the root of the project
		outDir: './dist',
		// Optional: if you want to manually set the directory that gets aliased as `$lib`
		alias: {
			$lib: './src/lib'
		}
	}
}