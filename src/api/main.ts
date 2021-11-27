import { ApiService } from '@utils/apiService';
import ReqRPC from '@utils/reqRPC';
import ReqRPCList from '@utils/reqRPClist';
import { Page, AnyObject } from '@models/common';

// ========== SECTION =========

/**
 * Get all data
 */
export const getAllData = async (): Promise<Page<AnyObject>> => {
  const {
    data: { result },
  } = await ApiService().post('/data.json', ReqRPC(null, 'readAll'));
  return result;
};

/**
 * Get specific data
 * @param id - data id
 */
export const getSpecificData = async (id: number): Promise<AnyObject> => {
  const {
    data: { result },
  } = await ApiService().post('/data.json', ReqRPC({ id }, 'read'));
  return result;
};

/**
 * Create new data object
 * @param params
 */
export const createDataUnit = async (params: AnyObject): Promise<AnyObject> => {
  const {
    data: { result },
  } = await ApiService().post('/data.json', ReqRPC(params, 'create'));
  return result;
};

/**
 * Create several data units with several requests
 *
 * @param params
 */
export const createBlobs = async (params: AnyObject[]): Promise<AnyObject> => {
  const {
    data: { result },
  } = await ApiService().post('player/blob.json', ReqRPCList(params, 'create'));

  return result;
};
