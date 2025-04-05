import { createRouter } from 'sv-router';
import Home from './Home.svelte';
import Layout from './Layout.svelte';
import Todo from './Todo.svelte';

export const { p, navigate, isActive, route } = createRouter({
	'/todo': { '/': Todo, layout: Layout },
	'/': { '/': Home, layout: Layout },
	'*': Home
});
