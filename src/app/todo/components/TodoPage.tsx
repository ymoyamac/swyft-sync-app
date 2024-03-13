import { createContext } from 'react';

import { Todo as SimpleTodo } from '../models';
import { useAuthStore } from '../../auth/store/auth.store';
import TodoService from '../service/TodoService';
import { TodoList } from './TodoList';
import { useFetchTodosByUserId } from '../hooks/useFetchTodosByUserId';

interface TodoPageContextState {
    todoService?: TodoService;
    todos?: SimpleTodo[];
    todoList?: string;
}

const todoService = new TodoService();

export const TodoPageContext = createContext<TodoPageContextState>({});

export function TodoPage() {

    const authUser = useAuthStore((state) => state.authUser);

    const { isError, isLoading, error, todos } = useFetchTodosByUserId({ todoService, authUser });

    if (isLoading) {
        return <span>Loading...</span>
    }
    
    if (isError) {
        return <span>Error: {`${error}`}</span>
    }

    return (
        <TodoPageContext.Provider value={{ todos, todoList: 'Today', todoService }}>
            <TodoList />
        </TodoPageContext.Provider>
    );
}
