import { createContext } from 'react';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Box } from '../shared/components';
import AuthService from '../app/auth/service/AuthService';

export interface AuthContextState {
    authService: AuthService
}

const authService = new AuthService();
export const AuthContext = createContext<AuthContextState>({
    authService
});

export const Route = createFileRoute('/_auth')({
    component: AuthLayout,
});
function AuthLayout() {
    return (
        <AuthContext.Provider value={{ authService }}>
            <Box>
                <Outlet />
            </Box>
        </AuthContext.Provider>
    );
}
