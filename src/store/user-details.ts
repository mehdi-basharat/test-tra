import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import type { NUserDetailsData } from '@/model/user-details';

const INITIAL_USER = {
  id: '',
  first_name: '',
  last_name: '',
  phone: '',
  username: '',
  email: '',
  photo: '',
  dob: '',
  country: '',
  role_name: '',
  role_id: '',
  rating: '',
  review: '',
  gender: '',
  status: '',
};

type UserStore = {
  user: NUserDetailsData;
  actions: UserStoreAction;
};

type UserStoreAction = {
  setUser: (user: NUserDetailsData) => void;
};

const useUserStore = create<UserStore>(set => ({ user: INITIAL_USER, actions: { setUser: user => set({ user }) } }));

export default useUserStore;

export const useUserStoreActions = () => useUserStore(useShallow(state => state.actions));
