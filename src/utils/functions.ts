import Vue from 'vue';
import { outError } from '@utils/transformResponse';
import { AnyFunction } from '@models/common';

/**
 * Processing api methods when they are called to show errors
 * @param cb - api method
 * @param throwErrors - to throw an error or not (throw)
 */
export const callApi = async <T>(cb: () => Promise<T>, throwErrors = false): Promise<T | null> => {
  try {
    return (await cb()) ?? ({} as T);
  } catch (error: any) {
    const e = error.response
      ? error.response.data.error || error.response
      : { message: error.message };
    if (throwErrors) throw e.data.errors;
    if (e.data && e.data.errors) e.data.errors.forEach((item) => Vue.$toast.error(outError(item)));
    else Vue.$toast.error(outError(e));
    return null;
  }
};

export const downloadFileByUrl = (url: string, filename: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Returns the debounce function
 * @param f - function
 * @param ms - delay
 */
export const debounce = (f: AnyFunction, ms: number): AnyFunction => {
  let isCooldown = false;
  return (): void => {
    if (isCooldown) return;
    f();
    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};
