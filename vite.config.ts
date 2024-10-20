import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts']
	},
	resolve: {
		alias: {
			$snacks: path.resolve('./src')
		},
		conditions: process.env.VITEST ? ['browser'] : undefined
	}
});
