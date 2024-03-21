import { create } from 'zustand';
import { AuthUser } from '../models';
import { persist } from 'zustand/middleware';
import { storeOptions } from './auth.persist';

export type State = {
    authUser: AuthUser;
    isAuthenticated: boolean;
}

type Action = {
    setAuthUser: (authUser: AuthUser) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<State & Action, any>(persist(
    (set) => ({
        authUser: {},
        isAuthenticated: false,
        setAuthUser: (authUser: AuthUser) => set(() => ({ authUser })),
        setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
    }),
    storeOptions
));
