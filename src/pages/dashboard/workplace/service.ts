import { request } from 'umi';
import type { NoticeType, ActivitiesType, AnalysisData } from './data';

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  return request('/api/project/notice');
}

export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  return request('/api/activities');
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/chartData');
}
