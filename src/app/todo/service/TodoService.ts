import axios from 'axios';
import { Todo } from '../models/Todo';
import { CreateTodoDto } from '../models/CreateTodoDto';


class TodoService {

    private readonly baseUrl: string = 'http://localhost:8080/todos';
    
    constructor() {
        
    }

    async getAllTodosByUserId(token: string): Promise<Todo[]> {
        return await axios.get<Todo[]>(`${this.baseUrl}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*/*',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.data);  
    }

    async createTodo(token: string, todo: CreateTodoDto): Promise<Todo> {
        return await axios.post<Todo>(`${this.baseUrl}`, todo, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*/*',
                'Authorization': `Bearer ${token}`
            },
            
        })
        .then(res => res.data);  
    }
}

export default TodoService;
