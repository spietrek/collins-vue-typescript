import { Module } from 'vuex';
import { RootState } from '@/store';

interface State {
  message: string | null;
}

const messageModule: Module<State, RootState> = {
  state: {
    message: 'Hello from Steves',
  },
  mutations: {
    updateMessage(state: State, payload: any) {
      state.message = payload;
    },
  },
  actions: {},
  getters: {
    message(state: State) {
      return state.message ? state.message.toUpperCase() : '';
    },
  },
};

export default messageModule;
