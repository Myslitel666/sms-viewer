import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', //ability to connect to the server from a mobile device
		port: 5172 // Укажите другой порт
	}
});
