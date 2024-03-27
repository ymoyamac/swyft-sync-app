import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Todo } from '../models'
import { storeOptions } from './todo.persist';

export type State = {
    todos: Todo[];
    todoSelected: Todo | undefined;
}

export type Action = {
    updateTodos: (todos: Todo[]) => void;
    updateTodoSelected: (todo: Todo) => void;
}

export const useTodoStore = create<State & Action, any>(persist(
    (set) => ({
        todos: [],
        todoSelected: undefined,
        updateTodos: (todos) => set(() => ({ todos: [...todos ] })),
        updateTodoSelected: (todoSelected) => set(() => ({ todoSelected })),
    }),
    storeOptions
));
