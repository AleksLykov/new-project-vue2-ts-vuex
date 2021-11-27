import { RequestRPC } from '@models/common';
import ReqRPC from '@utils/reqRPC';

const ReqRPCList = <T>(listParams: T[], method: string): RequestRPC<T>[] => listParams.map((item) => (ReqRPC(item, method)));

export default ReqRPCList;
