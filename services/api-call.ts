import got from 'got';
import { IAPIResponse } from '../utils/api-response';

const options: any = {
  responseType: 'json',
  resolveBodyOnly: true,
  retry: {
    limit: 0,
  },
};

const get = async (config: any) => {
  const reqConfig: any = { ...options, method: 'GET', url: config.url };
  const result: any = await got(reqConfig);
  return result as IAPIResponse;
};

const post = async (config: any) => {
  try {
    const { url, data } = config;
    const reqConfig: any = { ...options, method: 'POST', url: url, json: data };
    
    const result: any = await got(reqConfig);
    return result as IAPIResponse;
  } catch (error) {
    throw error;
  }
};

export { get, post };
