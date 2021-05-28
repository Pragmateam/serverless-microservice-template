import { Context } from 'aws-lambda';
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
  defaultMeta: { service: process.env.SERVICE_NAME },
});

export const setLoggerMetadata = (context: Context): void => {
  logger.defaultMeta = {
    ...logger.defaultMeta,
    requestId: context.awsRequestId,
  };
};

export default logger;
