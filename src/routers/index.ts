import healthCheckRouter from './health-check';
import type { Express } from 'express';

function useRouters(app: Express) {
  app.use(healthCheckRouter);
}

export default useRouters;
