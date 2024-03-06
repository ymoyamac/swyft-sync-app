import { create } from 'zustand'
import { AuthResponse } from '../models'

type State = {
    authUser: AuthResponse | null;
}

type Action = {
    setAuthUser: (authResponse: State['authUser']) => void
}

export const useAuthStore = create<State & Action>((set) => ({
    authUser: null,
    setAuthUser: (authUser) => set(() => ({ authUser }))
}));
