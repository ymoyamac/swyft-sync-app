import { AuthResponse, SignInDto } from '../models';

export class AuthService {
    constructor() {
        
    }

    signIn(signInDto: SignInDto): AuthResponse {

        console.log(signInDto);
        

        return {
            token: '',
            authUser: {
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                backupEmail: '',
                phoneNumber: '',
                birthdate: '',
                roles: []
            }
        }
    }
}