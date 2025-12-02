import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

// Serve static files
app.use('/assets/*', serveStatic({ root: './build/client' }));

export default app;
