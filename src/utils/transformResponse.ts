import { Error } from '@models/common';

// ========= SECTION ============

export const outError = (error: Error): string => {
  if (error instanceof Object && error.message === 'Network Error')
    return 'Network error. No connection to the server';
  if (error instanceof Object && error.message === 'method not found')
    return 'The request method was not found on the server';
  if (!error.message) return 'Unidentified error';
  return error.message;
};

// ================= SECTION ====================
