import type { IHttpRes } from '../interfaces/httpRes';

export const createAWSErr = (
  statusCode: number,
  message: string | string[]
): IHttpRes => {
  if (Array.isArray(message)) {
    logErrors(message);
    message = message.join('\n');
  } else {
    console.error(message);
  }

  return {
    statusCode,
    body: JSON.stringify({ statusCode, message }),
  };
};

const logErrors = (errors: string[]): void => {
  console.error('Errors:');
  errors.forEach((element, i) => console.error(`${i}) ${element}`));
};
