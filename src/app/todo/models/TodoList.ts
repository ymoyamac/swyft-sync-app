import { Todo } from './Todo';

export interface TodoList {
    todoListId: string;
    listName: string;
    isActive: boolean;
    todos: Todo[];
    // owner: User
}