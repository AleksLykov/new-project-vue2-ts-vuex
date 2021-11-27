import { ApiService } from '@utils/apiService';
import { AnyObject } from '@models/common';
import ReqRPC from '@utils/reqRPC';

/**
 * Get specific user
 * @param params id - specific user id
 */
export const getUserByID = async (params: { id: number | null }): Promise<AnyObject> => {
  const {
    data: { result },
  } = await ApiService().post(
    '/player/information-center.json',
    ReqRPC(params, 'readEmployeeInfoByInformationCenter'),
  );
  return result;
};

/**
 * Get current user
 */
export const getCurrentUser = async (): Promise<AnyObject> => {
  const { data } = await ApiService('userInfoUrl').get('');
  return data;
};
