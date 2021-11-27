import { Crumb, NavItem, AnyObject } from './common';

export interface RootState {
  version: string;
  settings: AnyObject | null;
}

export interface MainState {
  crumbs: Crumb[];
  error: AnyObject[];
  navmenu: NavItem[];
  currentId: string;
}

export interface AuthState {
  currentUser: AnyObject | null;
  userSettings: {
    startPage: string;
  };
}
