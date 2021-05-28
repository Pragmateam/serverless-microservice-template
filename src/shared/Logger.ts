/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Context } from 'aws-lambda';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.json(),
  transports: [new transports.Console()],
  defaultMeta: { service: process.env.SERVICE_NAME },
});

export const setLoggerMetadata = (context: Context): void => {
  logger.defaultMeta = {
    ...logger.defaultMeta,
    requestId: context.awsRequestId,
  };
};

export default logger;
