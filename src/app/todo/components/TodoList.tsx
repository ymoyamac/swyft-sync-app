import { useContext } from 'react';
import { Todo } from './Todo';
import { TodoPageContext } from './TodoPage';


export function TodoList() {

    const { todos, todoList } = useContext(TodoPageContext);
    
    return (
        <div className="flex flex-col w-full h-full p-12">
            <h2 className="text-3xl text-tertiary font-medium mb-3">{todoList}</h2>
            <div className="flex flex-col gap-2">
                {todos?.map(todo => (
                    <Todo key={todo.todoId}
                        { ...todo }
                    />
                ))}
            </div>
        </div>
    );
}
