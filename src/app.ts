import App from '#routes/+app.svelte';

const element = document.querySelector('div');

if (!element) {
	throw new Error('No element found');
}

new App({
	target: element,
});
