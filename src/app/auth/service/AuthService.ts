import axios from 'axios';
import { AuthUser, SignIn } from '../models';

class AuthService {

    private readonly baseUrl: string = 'http://localhost:8080/auth';
    
    constructor() {
        
    }

    async signIn({ email, password }: SignIn): Promise<AuthUser> {
        return await axios.post<AuthUser>(`${this.baseUrl}/sign-in`, {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*/*',
            }
        }).then(res => res.data);  
    }
}

export default AuthService;
