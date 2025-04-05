import { Hono } from 'hono';
import { csrf } from 'hono/csrf';

const app = new Hono<{
	Bindings: Env;
}>()
	.use(csrf())

.get('/test', (c) => {
	return c.text('Hello World!');
})
// .notFound((c) => {
// 	return c.newResponse(null, { status: 404 });
// });


export type AppType = typeof app;

export default app;
