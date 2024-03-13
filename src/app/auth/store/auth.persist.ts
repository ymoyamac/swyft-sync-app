import { StateStorage, createJSONStorage } from "zustand/middleware"
import { AuthUser } from "../models";


export type LocalStorageItems = {
    authUser: AuthUser;
}  
  
export const hashStorage: StateStorage = {
    getItem: (key): string => {
        return JSON.parse(localStorage.getItem(key) as string);
    },
    setItem: (key, newValue): void => {
        localStorage.setItem(key, JSON.stringify(newValue));
    },
    removeItem: (): void => {},
}

export const storeOptions = {
    name: 'auth-user-storage',
    storage: createJSONStorage<LocalStorageItems>(() => hashStorage),
}



