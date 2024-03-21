/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Todo as SimpleTodo } from '../models';
import { useForm } from '../../../shared/components';
import { TodoPageContext } from '../components/TodoPage';

interface UseTodoListProps<T> {
    initialState: T,
    key: string,
}

export function useTodoList<T>({ initialState, key }: UseTodoListProps<T>) {

    const { todos } = useContext(TodoPageContext);
    const { formData, onChange } = useForm({ initialState });
    const [ searchTodos, setSearchTodos ] = useState<SimpleTodo[]>([]);

    useEffect(() => {
        setSearchTodos(
            todos?.filter(
                todo => todo.title.trim()
                    .toLocaleLowerCase()
                    .includes((formData[key as keyof T] as string).trim().toLocaleLowerCase()) ||
                todo.description.trim()
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
