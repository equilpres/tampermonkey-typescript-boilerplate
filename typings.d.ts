/// <reference types="node" />
/// <reference types="tampermonkey" />
/// <reference types="svelte" />

declare namespace svelteHTML {
	interface HTMLAttributes {
		'data-svelte-ignore'?: boolean;
	}
}

declare namespace NodeJS {
	interface ProcessEnv {
		EXAMPLE: string;
	}
}

declare const Meta: Exclude<Readonly<import('./src/meta.d.ts').Meta>, 'match' | 'grant' | 'noframes' | 'webRequest'>;
