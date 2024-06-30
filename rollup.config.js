import commonjs from '@rollup/plugin-commonjs';
import resolve, { DEFAULTS as resolveDefaults } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { obfuscator } from 'rollup-obfuscator';
import license from 'rollup-plugin-license';
import postcss from 'rollup-plugin-postcss';
import svelte from 'rollup-plugin-svelte';

import nextEnv from '@next/env';
import { stripIndents } from 'common-tags';

import pkg from './package.json' assert { type: 'json' };
import { meta, minify, obfuscate } from './src/meta.js';

const { combinedEnv } = nextEnv.loadEnvConfig(process.cwd());

const replacedMeta = {};

const adaptedMeta = f(meta, (entries) =>
	entries.map(([key, value]) => {
		if (typeof value !== 'string') {
			return [key, value];
		}

		const v = value
			.replaceAll('%package.name%', pkg.name)
			.replaceAll('%package.description%', pkg.description)
			.replaceAll('%package.version%', pkg.version)
			.replaceAll('%package.author%', `${pkg.author.name} (${pkg.author.username})`)
			.replaceAll('%package.homepageURL%', `${pkg.author.url}/${pkg.name}`);

		replacedMeta[`Meta.${key}`] = JSON.stringify(v);

		return [key, v];
	}),
);

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/app.ts',
	output: {
		file: `build/${pkg.name}.user.js`,
		format: 'es',
		sourcemap: false,
	},
	context: 'null',
	moduleContext: 'null',
	plugins: [
		svelte({
			include: 'src/**/*.svelte',
			preprocess: vitePreprocess(),
			emitCss: false,
		}),
		postcss(),
		typescript(),
		resolve({
			browser: true,
			exportConditions: ['default', 'module', 'import', 'svelte'],
			extensions: [...resolveDefaults.extensions, '.svelte'],
		}),
		commonjs({
			sourceMap: false,
			ignoreDynamicRequires: true,
		}),
		replace({
			preventAssignment: true,
			sourceMap: false,
			values: {
				...f(combinedEnv, (entries) =>
					entries
						.filter(([key]) => key.startsWith('PUBLIC_'))
						.map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)]),
				),

				...replacedMeta,
			},
		}),
		minify &&
			terser({
				maxWorkers: 4,
			}),
		obfuscate && obfuscator(obfuscatorOptions()),

		license({
			sourcemap: false,
			banner: {
				content: bannerContent(),
				commentStyle: 'none',
			},
		}),
	],
};

function bannerContent() {
	const contents = [];

	for (const [key, value] of Object.entries(adaptedMeta)) {
		if (!value) {
			continue;
		}

		const spaces = ' '.repeat(13 - key.length);

		let content = '';

		if (typeof value === 'string') {
			content = value;
		} else if (typeof value === 'object') {
			if (value.some((v) => typeof v === 'object')) {
				content = JSON.stringify(value);
			} else {
				for (const v of value) {
					contents.push(`// @${key}${spaces}${v}`);
				}

				continue;
			}
		} else if (typeof value === 'boolean') {
			if (value) {
				contents.push(`// @${key}`);
			}

			continue;
		}

		contents.push(`// @${key}${spaces}${content}`);
	}

	return stripIndents`
		// ==UserScript==
		${contents.join('\r\n')}
		// ==/UserScript==

		/* eslint-disable */`;
}

function obfuscatorOptions() {
	/** @type {import('javascript-obfuscator').ObfuscatorOptions} */
	const options = {
		compact: true,
		controlFlowFlattening: true,
		controlFlowFlatteningThreshold: 1,
		deadCodeInjection: true,
		deadCodeInjectionThreshold: 1,
		identifierNamesGenerator: 'hexadecimal',
		log: false,
		numbersToExpressions: true,
		renameGlobals: false,
		selfDefending: true,
		splitStrings: true,
		splitStringsChunkLength: 5,
		stringArray: true,
		stringArrayCallsTransform: true,
		stringArrayEncoding: ['rc4'],
		stringArrayIndexShift: true,
		stringArrayRotate: true,
		stringArrayShuffle: true,
		stringArrayWrappersCount: 5,
		stringArrayWrappersChainedCalls: true,
		stringArrayWrappersParametersMaxCount: 5,
		stringArrayWrappersType: 'function',
		stringArrayThreshold: 1,
		transformObjectKeys: true,
		unicodeEscapeSequence: true,
	};

	return options;
}

function f(value, adapt) {
	return Object.fromEntries(adapt(Object.entries(value)));
}
