export interface AnyObject {
  [key: string]: any;
}

export interface UnknownObject {
  [key: string]: unknown;
}

export type AnyFunction = (...args: any[]) => any;

export interface Error {
  message?: string;
}

export interface Date {
  createdAt: string; // YYYY-MM-DDTHH-mm-ss.SSS
  updatedAt: string; // YYYY-MM-DDTHH-mm-ss.SSS
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface RqstPageable {
  pageNumber: number;
  pageSize: number;
  sort?: AnyObject;
}

export interface Page<T> {
  content: T[];
  pageable: null | Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: {
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  number: number;
  numberOfElements: number;
}

export interface ResponseRPC<T> {
  jsonrpc: string;
  id: number;
  result: T;
}

export interface ResponseRPCContent<T> {
  jsonrpc: string;
  id: number;
  result: Page<T>;
}

export interface RequestRPC<T> {
  jsonrpc: string;
  method: string;
  params: T;
  id: number;
}

export interface NavItem {
  name: string;
  path: string;
  permission?: string[];
}

export interface Crumb {
  id: string | number;
  title: string;
  path: string;
}
