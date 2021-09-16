import { request } from 'umi';
import type { CurrentUser, ListItemDataType, UpdateInfo } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}


export async function updateAvatar(userId: string, avatar: File) {
  return request<{ data: any }>("/api/updateAvatar", {
    method: "POST",
    requestType: "form",
    data:{userId,avatar}
  })
}


export async function updateInfo(body: UpdateInfo) {
  return request<API.IResponse>("/api/userInfo", {
    method: "PUT",
    data:body
  })
}
