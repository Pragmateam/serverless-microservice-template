import { APIGatewayProxyEvent } from 'aws-lambda';
import { UnprocessableEntity } from 'http-errors';

/**
 * Checks if body is a valid JSON and converts it to object
 * @param event
 */
export const parseJsonPayload = (event: APIGatewayProxyEvent): void => {
  if (!event.headers || !event.body) return;

  const contentType = event.headers['Content-Type'] || event.headers['content-type'];

  if (contentType) {
    const isJson = /application\/json/gi.test(contentType);

    if (isJson) {
      try {
        event.body = JSON.parse(event.body);
      } catch (err) {
        throw new UnprocessableEntity('Content type defined as JSON but an invalid JSON was provided');
      }
    }
  }
};

/**
 * Sets queryStringParameters and pathParameters to {} by default
 * @param event
 */
export const setDefaultParams = (event: APIGatewayProxyEvent): void => {
  if (Object.prototype.hasOwnProperty.call(event, 'httpMethod')) {
    event.queryStringParameters = event.queryStringParameters || {};
    event.pathParameters = event.pathParameters || {};
  }
};
