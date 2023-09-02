import { getNodeHealth } from './service';
import type { Request, Response } from 'express';

export function getNodeHealthCheck(_req: Request, res: Response) {
  const nodeHealth = getNodeHealth();
  console.log(nodeHealth);
  res.json(nodeHealth);
}
