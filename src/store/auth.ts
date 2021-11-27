/* eslint-disable no-shadow */
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import Vue from 'vue';
import { AuthState, RootState } from '@models/store';
import { AnyObject } from '@models/common';
import { getCurrentUser } from '@api/auth';

const state: AuthState = {
  currentUser: null,
  userSettings: {
    startPage: '',
  },
};

export const getters: GetterTree<AuthState, RootState> = {
  authenticated(state) {
    return state.currentUser !== null;
  },
};

export const actions: ActionTree<AuthState, RootState> = {
  async getUser({ commit }): Promise<void> {
    try {
      const payload = await getCurrentUser();
      commit('userLoaded', payload);
    } catch (error: any) {
      Vue.$toast.error(error.message);
    }
  },
};

export const mutations: MutationTree<AuthState> = {
  userLoaded(state, payload: AnyObject) {
    state.currentUser = payload;
  },
  setUserStartPage(state, page: string) {
    state.userSettings.startPage = page;
  },
};

const namespaced = true;

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
