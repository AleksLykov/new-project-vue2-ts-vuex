/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState, MainState } from '@models/store';

const namespaced = true;

export const state: MainState = {
  crumbs: [],
  error: [],
  navmenu: [
    { name: 'Main', path: '/main' },
    { name: 'About', path: '/about' },
  ],
  currentId: '',
};

export const getters: GetterTree<MainState, RootState> = {};

export const actions: ActionTree<MainState, RootState> = {};

export const mutations: MutationTree<MainState> = {
  setId(state, id: string) {
    state.currentId = id;
  },
};

export const main: Module<MainState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
