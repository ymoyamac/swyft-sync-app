import { create } from 'zustand';
import { AuthUser } from '../models';
import { persist } from 'zustand/middleware';
import { storeOptions } from './auth.persist';

export type State = {
    authUser: AuthUser;
}

type Action = {
    setAuthUser: (authUser: State['authUser']) => void;
}

export const useAuthStore = create<State & Action, any>(persist(
    (set) => ({
        authUser: {},
        setAuthUser: (authUser: AuthUser) => set(() => ({ authUser })),
    }),
    storeOptions
));
