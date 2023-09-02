import express from 'express';
import cors from 'cors';
import compression from 'compression';
import useRouters from '../routers';
import { appLogger } from '../logger';
import httpLogger from 'pino-http';

const app = express();

app.use(httpLogger());
app.use(compression());
app.use(cors());

useRouters(app);

app.set('PORT', process.env.APP_PORT || 3000);

app.listen(app.get('PORT'), () => {
  appLogger.info(`Start listening at port ${app.get('PORT')}`);
});

export default app;
