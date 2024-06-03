import App from '#routes/+app.svelte';

const element = document.querySelector('div');

new App({
	target: element!,
});
