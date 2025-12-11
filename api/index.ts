// Vercel serverless function for Express app
// This exports the Express app for Vercel to use
import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from '../server/routes';
import { serveStatic } from '../server/static';
import { createServer } from 'http';

const app = express();
const httpServer = createServer(app);

// Set up middleware (same as server/index.ts)
app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  }),
);
app.use(express.urlencoded({ extended: false }));

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
});

// Initialize routes and static serving
let initialized = false;

async function initialize() {
  if (initialized) return;
  
  await registerRoutes(httpServer, app);
  
  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    serveStatic(app);
  }
  
  initialized = true;
}

// Initialize on first request
app.use(async (req, res, next) => {
  await initialize();
  next();
});

// Export the app for Vercel
export default app;
