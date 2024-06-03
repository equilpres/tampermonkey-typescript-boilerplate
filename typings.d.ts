/// <reference types="node" />
/// <reference types="tampermonkey" />
/// <reference types="svelte" />

declare namespace svelteHTML {
	interface HTMLAttributes {}
}

declare const Meta: Pick<
	Readonly<import('./src/meta.d.ts').Meta>,
	'name' | 'description' | 'version' | 'author' | 'iconURL' | 'grant' | 'run-at' | 'updateURL' | 'downloadURL' | 'homepageURL' | 'supportURL'
>;
