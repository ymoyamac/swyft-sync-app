import { useQuery } from 'react-query';
import TodoService from '../service/TodoService';
import { AuthUser } from '../../auth/models';
import { Todo } from '../models';

interface Props {
    todoService: TodoService;
    authUser: AuthUser
}

export function useFetchTodosByUserId({ todoService, authUser }: Props) {
    
    const { data , isLoading, isError, error, isSuccess, refetch } = useQuery<Todo[]>({
        queryKey: ['todos/user'],
        queryFn: () => todoService.getAllTodosByUserId(authUser?.token ?? '', authUser.user?.userId ?? ''),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });

    return {
        isError,
        isLoading,
        isSuccess,
        error,
        data,
        refetch
    };
}
