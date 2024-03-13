import { Role } from './Role';

export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    backupEmail: string;
    phoneNumber: string;
    birthdate: string;
    roles: Role[];
}