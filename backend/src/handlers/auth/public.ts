import type { IHttpRes } from '../../interfaces/httpRes';

export const handler = (): IHttpRes => ({
  statusCode: 204,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});
