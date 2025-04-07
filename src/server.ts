import { Hono } from 'hono';
import { csrf } from 'hono/csrf';

const app = new Hono<{
	Bindings: Env;
}>()
	.use(csrf())

.get('/test', (c) => {
	return c.text('Hello World!');
})
.notFound((c) => {
	return c.env.ASSETS.fetch(c.req.raw)
});


export type AppType = typeof app;

export default app;
