import store from '@/store';

const TOKEN_NAME = 'token';
const EXPIRES_AT_NAME = 'expiresAt';

interface TokenInfo {
  [TOKEN_NAME]: string | null;
  [EXPIRES_AT_NAME]: string | null;
}

function getTokenInfo(): TokenInfo {
  return {
    [TOKEN_NAME]: localStorage.getItem(TOKEN_NAME),
    [EXPIRES_AT_NAME]: localStorage.getItem(EXPIRES_AT_NAME),
  };
}

export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresAt');
  store.commit('auth/employeeLoaded', null);
};
