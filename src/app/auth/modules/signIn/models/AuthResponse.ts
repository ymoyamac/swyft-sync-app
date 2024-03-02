import { AuthUser } from './AuthUser';

export interface AuthResponse {
    token: string;
    authUser: AuthUser;
}
