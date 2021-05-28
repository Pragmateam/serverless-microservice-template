import { ProxyResult } from 'aws-lambda';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
};

/**
 * Builds a valid ApiGateway response based on returned value
 * redirects if response contains redirectUrl
 * @param response
 */
export const Success = (body?: unknown): ProxyResult => ({
  statusCode: 200,
  headers: DEFAULT_HEADERS,
  body: JSON.stringify(body ?? ''),
});

export const Created = (body?: unknown): ProxyResult => ({
  statusCode: 201,
  headers: DEFAULT_HEADERS,
  body: JSON.stringify(body ?? ''),
});

export const NoContent = (): ProxyResult => ({
  statusCode: 204,
  headers: DEFAULT_HEADERS,
  body: '',
});

export const Redirect = (url: string): ProxyResult => ({
  statusCode: 302,
  headers: {
    ...DEFAULT_HEADERS,
    Location: url,
  },
  body: '',
});

// /**
//  * Creates a public ServiceUnavailable error
//  * provides original error details if env "DEBUG" is set to true
//  * @param error
//  */
// const getServiceUnavailableError = (error: Error): HttpError => {
//   const httpError = createHttpError('ServiceUnavailable');
//   if (process.env.DEBUG === 'true') {
//     httpError.details = JSON.stringify(error);
//   }
//   return httpError;
// };

// /**
//  * Gets public error based on error type
//  * @param error
//  */
// const getPublicError = (error: Error): any => {
//   if (error instanceof HttpError) return error;

//   // if (error.name === 'ValidationError') {
//   //   const validationError = new JoiError(error as ValidationError);
//   //   return createError(422, validationError.message, { details: validationError.details });
//   // }

//   return getServiceUnavailableError(error);
// };

// /**
//  * Builds a valid ApiGateway error response based on error
//  * @param error
//  */
// export const ErrorResponse = (error: Error): ProxyResult => {
//   const httpError = getPublicError(error);

//   return {
//     statusCode: httpError.statusCode,
//     headers: DEFAULT_HEADERS,
//     body: JSON.stringify({
//       status: httpError.name,
//       statusCode: httpError.statusCode,
//       message: httpError.message,
//       details: httpError.details,
//     }),
//   };
// };
