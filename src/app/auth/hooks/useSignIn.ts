import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from 'react-query';

import { AuthUser, SignIn as SignInDto } from '../models';
import { AuthContext } from '../../../routes/_auth';
import { useAuthStore } from '../store/auth.store';
import { useForm } from '../../../shared/components';
import { ValidationSchema } from '../../../shared/components/Form/interfaces';

interface SignInForm {
    email: string;
    password: string;
}

interface UseSignInProps<T extends SignInForm> {
    initialState: T,
    validationSchema: ValidationSchema
}

export function useSignIn<T extends SignInForm>({ initialState, validationSchema }: UseSignInProps<T>) {

    const { authService } = useContext(AuthContext);
    const [ isLogin, setIsLogin ] = useState(false);

    const navigate = useNavigate({ from: '/_auth/signin' });
    
    const mutation = useMutation('/auth/signin', {
        mutationFn: ({ email, password }: SignInDto) => authService.signIn({ email, password }),
        retry: 0,
    });

    const setAuthUser = useAuthStore((state) => state.setAuthUser);
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

    const { email, password, formData, isRequired, onChange, validateRequiredFields } = useForm<T>({ initialState, validationSchema });

    async function signIn() {
        setIsLogin(true);
        const isFormInvalid = validateRequiredFields();
        if (!isFormInvalid) {
            const authUser = await mutation.mutateAsync({ email, password }) as AuthUser;
            if (!mutation.error) {
                setAuthUser(authUser as AuthUser);
                setIsAuthenticated(true);
                navigate({ to: '/' });
                setIsLogin(false);
            }
            return;
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await signIn();
    }

    return {
        ...formData,
        isLogin,
        isRequired,
        onChange,
        onSubmit
    };
}

