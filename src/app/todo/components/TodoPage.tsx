/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';

import { Todo } from '../models';
import { useAuthStore } from '../../auth/store/auth.store';
import TodoService from '../service/TodoService';
import { TodoList } from './TodoList';
import { useFetchTodosByUserId } from '../hooks/useFetchTodosByUserId';
import { TodoControl } from './TodoControl';
import { Box, Button } from '../../../shared/components';
import { RefetchQuery, ViewsMode } from '../interfaces';
import { TodoListLoadingPage } from './TodoListLoadingPage';
import AddIcon from '@mui/icons-material/Add';
import { TodoModal } from './TodoModal';
import { useTodoStore } from '../store/todo.store';

interface TodoPageContextState {
    todoService?: TodoService;
    todos?: Todo[];
    todoList?: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onViewChange?: (view: ViewsMode) => void;
    refetch?: RefetchQuery<Todo[], unknown>;
}

const todoService = new TodoService();

export const TodoPageContext = createContext<TodoPageContextState>({
    open: false,
    setOpen: () => {}
});

export function TodoPage() {
    const { authUser } = useAuthStore(state => state);
    const { isError, isLoading, error, data, isSuccess } = useFetchTodosByUserId({ todoService, authUser });
    const [ view, setView ] = useState(ViewsMode.list);
    const [ open, setOpen ] = useState(false);
    const { updateTodos } = useTodoStore(state => state);

    useEffect(() => {
        if (data) {
            updateTodos(data);
        }
    }, [isSuccess]);

    function onViewChange(viewMode: ViewsMode) {
        setView(viewMode);
    }

    function onOpenModal() {
        setOpen(true);
    }

    if (isLoading) {
        return <TodoListLoadingPage />
    }
    
    if (isError) {
        return <span>Error: {`${error}`}</span>
    }

    return (
        <TodoPageContext.Provider value={{
            todoList: 'Today',
            todoService,
            open,
            setOpen,
            onViewChange,
        }}>
            <Box className="relative flex flex-col gap-2 py-12 w-full h-full rounded-md">
                <TodoControl />
                {view === ViewsMode.list && <TodoList />}
                <Box className="absolute flex justify-end items-end top-[calc(100%-10%)] right-14">
                    <Button
                        type="button"
                        className="rounded-full bg-primary hover:bg-secondary p-4"
                        onClick={onOpenModal}
                    >
                        <AddIcon />
                    </Button>
                </Box>
                <TodoModal isCreateTodo={true}/>
            </Box>
        </TodoPageContext.Provider>
    );
}
