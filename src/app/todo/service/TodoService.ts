import axios from 'axios';
import { Todo } from '../models/Todo';


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
}

export default TodoService;
