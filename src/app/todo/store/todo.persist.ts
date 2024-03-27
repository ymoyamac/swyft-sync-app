import { StateStorage, createJSONStorage } from 'zustand/middleware'
import { Todo } from '../models';


export type LocalStorageItems = {
    todos: Todo[];
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
    name: 'todos-storage',
    storage: createJSONStorage<LocalStorageItems>(() => hashStorage),
}
