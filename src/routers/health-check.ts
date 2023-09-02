import express from 'express';
import { getNodeHealthCheck } from '../health-check';

const router = express.Router();

router.get('/_health', getNodeHealthCheck);

export default router;
