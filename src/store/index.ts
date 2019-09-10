import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import messageModule from '@/store/message.module';

Vue.use(Vuex);

// tslint:disable-next-line:no-empty-interface
export interface RootState {}

const store: StoreOptions<RootState> = {
  modules: {
    messageModule,
  },
};

export default new Vuex.Store(store);
