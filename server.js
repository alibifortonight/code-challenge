import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

import app from './api/app.js';
import logger from './api/utils/log.js';
import mongoInit from './api/models/init.js';

const log = logger('server');
const server = http.createServer(app);

process.on('uncaughtException', (err) => {
  log.fatal({ err }, `Unhandled error ${err}`);
  server.close();
});

process.on('unhandledRejection', (reason) => {
  log.error(`Unhandled error (in promise): ${reason}`);
});

// Main entry point to the application
const main = async () => {
  await mongoInit();
  const port = parseInt(process.env.PORT) || 3000;
  log.info(`Listening on http://localhost:${port}/`);
  await server.listen(port);
};

main();
