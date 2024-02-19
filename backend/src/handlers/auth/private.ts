import type { APIGatewayEvent, Context } from 'aws-lambda';
import type { IHttpRes } from '../../interfaces/httpRes';

export const handler = (event: APIGatewayEvent, context: Context): IHttpRes => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    event,
    context,
  }),
});
