import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Skyblock Wiki',
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/Gapples-Anarchy-Server/GapplesWiki',
			},
			sidebar: [
				{
					label: 'Overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'World Generation',
					autogenerate: { directory: 'world-generation' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
				},
			],
		}),
	],
});
