import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		website: 'https://svelte.dev/tutorial',
		name: 'world'
	}
});

export default app;