import { useQuery } from 'react-query';
import TodoService from '../service/TodoService';
import { AuthUser } from '../../auth/models';
import { Todo } from '../models';

interface Props {
    todoService: TodoService;
    authUser: AuthUser
}

export function useFetchTodosByUserId({ todoService, authUser }: Props) {
    
    const { data: todos = [], isLoading, isError, error } = useQuery<Todo[]>({
        queryKey: ['todos'],
        queryFn: async () => await todoService.getAllTodosByUserId(authUser?.token ?? ''),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5
    });

    return {
        isError,
        isLoading,
        error,
        todos
    };
}
