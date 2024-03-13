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
            <Box className="flex flex-row items-center justify-center w-[70%] m-auto">
                <Outlet />
            </Box>
        </AuthContext.Provider>
    );
}
