export interface IHttpRes {
  headers?: {
    'Access-Control-Allow-Origin': string;
    'Access-Control-Allow-Credentials': boolean;
  };
  statusCode: number;
  body?: string;
}
