import { RequestRPC } from '@models/common';

const ReqRPC = <T>(params: T, method: string): RequestRPC<T> => ({
  jsonrpc: '2.0', method, params, id: Math.round(Math.random() * 10000),
});

export default ReqRPC;
