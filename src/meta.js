export const minify = true;
export const obfuscate = false;

/** @type {import('./meta.d.ts').Meta} */
export const meta = {
	name: '%package.name%',
	description: '%package.description%',
	version: '%package.version%',
	author: '%package.author%',

	iconURL: 'https://lolz.live/styles/brand/download/avatars/three_avatar.svg',

	match: ['*://example.com/*'],
	grant: ['none'],

	'run-at': 'document-end',
	noframes: true,

	updateURL: '%package.homepageURL%/raw/main/build/%package.name%.user.js',

	get downloadURL() {
		return this.updateURL;
	},

	homepageURL: '%package.homepageURL%',
	supportURL: '%package.homepageURL%/issues',

	// https://example.com/not-found
	webRequest: [
		{
			selector: '*://obj.ac.bcon.ecdns.net/*',
			action: {
				cancel: true,
			},
		},
	],
};
