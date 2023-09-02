import pino from 'pino';

const logger = pino();

export const appLogger = logger.child({ type: 'appLogger' });

export default logger;
