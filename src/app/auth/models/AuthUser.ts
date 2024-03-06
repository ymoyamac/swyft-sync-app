import { Role } from './Role';

export interface AuthUser {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    backupEmail: string;
    phoneNumber: string;
    birthdate: string;
    roles: Role[];
}