import { ProxyHandler, ProxyResult } from 'aws-lambda';
import { setLoggerMetadata } from '@/shared/Logger';
import { setDefaultParams } from '@/shared/Request';
import { Success } from '@/shared/Response';

const serviceName = String(process.env.SERVICE_NAME ?? '');

const handler: ProxyHandler = async (event, context): Promise<ProxyResult> => {
  setDefaultParams(event);
  setLoggerMetadata(context);

  console.log('Hello from AWS lambda:', serviceName);

  return Success(`Hello from AWS lambda: ${serviceName}`);
};

export default handler;
