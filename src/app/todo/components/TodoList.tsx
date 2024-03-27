import { TodoItem } from './TodoItem';
import { InputSearch } from '../../../shared/components/Input';
import { useTodoList } from '../hooks/useTodoList';

interface SearchTodoForm {
    search: string;
}

const initialState: SearchTodoForm = {
    search: '',
};

export function TodoList() {

    const { search, searchTodos, onChange } = useTodoList<SearchTodoForm>({ initialState, key: 'search' });
    
    return (
        <div className="flex flex-col w-full h-full px-12 overflow-y-auto">
            <InputSearch
                className="my-4 border border-slate-300"
                type="text"
                name="search"
                value={search}
                onChange={onChange}
                placeholder="Search todo..."
            />
            <div className="flex flex-col gap-2">
                {searchTodos.length === 0 && (<span>No results</span>)}
                {searchTodos?.map(todo => (
                    <TodoItem key={todo.todoId}
                        { ...todo }
                    />
                ))}
            </div>
        </div>
    );
}
