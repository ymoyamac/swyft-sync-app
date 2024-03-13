export interface Todo {
    todoId: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isActive: boolean;
    isPinned: boolean;
    creationAt: string;
    updateAt: string;
    userId: string;
    boardId: string;
    todoInteractionRoleId: number;
    todoStatusRoleId: number;
}