import axios from 'axios';
import { AuthResponse, SignIn } from '../models';

class AuthService {
    constructor() {
        
    }

    async signIn(signIn: SignIn): Promise<AuthResponse | void> {

        try {
            const res = await axios.post<AuthResponse>('http://localhost:8080/auth/sign-in', {
                email: signIn.email,
                password: signIn.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*/*',
                }
            });
    
            return res.data;   
        } catch (error) {
            console.log(error);
        }        
    }
}

export default AuthService;
