/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Todo } from '../models';
import { useForm } from '../../../shared/components';
import { useTodoStore } from '../store/todo.store';

interface UseTodoListProps<T> {
    initialState: T,
    key: string,
}

export function useTodoList<T>({ initialState, key }: UseTodoListProps<T>) {

    const { todos } = useTodoStore(state => state);
    const { formData, onChange } = useForm({ initialState });
    const [ searchTodos, setSearchTodos ] = useState<Todo[]>([]);

    useEffect(() => {
        setSearchTodos(todos);
    }, [todos]);    

    useEffect(() => {
        setSearchTodos(
            todos?.filter(
                todo => todo.title.trim()
                    .toLocaleLowerCase()
                    .includes((formData[key as keyof T] as string).trim().toLocaleLowerCase()) ||
                todo.description?.trim()
                    .toLocaleLowerCase()
                    .includes((formData[key as keyof T] as string).trim().toLocaleLowerCase())
            ) ?? []
        );
    }, [formData]);

    return {
        ...formData,
        searchTodos,
        onChange
    };
}
