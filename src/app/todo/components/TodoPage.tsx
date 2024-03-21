import { createContext, useState } from 'react';

import { Todo as SimpleTodo } from '../models';
import { useAuthStore } from '../../auth/store/auth.store';
import TodoService from '../service/TodoService';
import { TodoList } from './TodoList';
import { useFetchTodosByUserId } from '../hooks/useFetchTodosByUserId';
import { TodoControl } from './TodoControl';
import { Box, Button } from '../../../shared/components';
import { ViewsMode } from '../interfaces';
import { TodoListLoadingPage } from './TodoListLoadingPage';
import AddIcon from '@mui/icons-material/Add';
import { TodoModal } from './TodoModal';

interface TodoPageContextState {
    todoService?: TodoService;
    todos?: SimpleTodo[];
    todoList?: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onViewChange?: (view: ViewsMode) => void;
}

const todoService = new TodoService();

export const TodoPageContext = createContext<TodoPageContextState>({
    open: false,
    setOpen: () => {}
});

export function TodoPage() {

    const authUser = useAuthStore((state) => state.authUser);
    const [ view, setView ] = useState(ViewsMode.list);
    const [ open, setOpen ] = useState(false);

    const { isError, isLoading, error, todos } = useFetchTodosByUserId({ todoService, authUser });

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
            todos,
            todoList: 'Today',
            todoService,
            open,
            setOpen,
            onViewChange
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
