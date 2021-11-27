import Axios, { AxiosInstance } from 'axios';
import store from '@store/index';

export interface ApiAxios {
  (key?: string): AxiosInstance;
}
const headers = { 'Content-Type': 'application/json', Authorization: '' };

export const ApiService: ApiAxios = (key = 'baseUrl') =>
  Axios.create({
    baseURL: store.state.settings ? store.state.settings[key] : '',
    headers: headers.Authorization
      ? headers
      : { ...headers, Authorization: `Bearer ${localStorage.token}` },
  });
