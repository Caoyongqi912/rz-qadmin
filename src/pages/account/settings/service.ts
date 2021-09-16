import { request } from 'umi';
import type { CurrentUser } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/currentUser');
}


export async function query() {
  return request('/api/users');
}
