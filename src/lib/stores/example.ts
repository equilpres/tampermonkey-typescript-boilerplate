import { writable } from 'svelte/store';

export const exampleStore = writable({
	text: process.env['PUBLIC_EXAMPLE'],
	createdAt: new Date().toISOString(),
});
