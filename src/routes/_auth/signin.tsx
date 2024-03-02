import { createFileRoute } from '@tanstack/react-router';
import { Box, Button, Form, InputText, Text, useForm, InputPassword } from '../../shared/components';
import { ValidationSchema } from '../../shared/components/Form/interfaces';
import { FormEvent, useState } from 'react';

interface SignInForm {
    emailUsername: string;
    password: string;
}

export const Route = createFileRoute('/_auth/signin')({
    component: SignIn,
});

const initialState = {
    emailUsername: '',
    password: ''
};

const validationSchema: ValidationSchema = {
    emailUsername: {
        required: true
    },
    password: {
        required: true
    }
};

function SignIn() {

    const [isLoading, setIsLoading] = useState(false);

    const { emailUsername, password, onChange, isRequired, validateRequiredFields } = useForm<SignInForm>({initialState, validationSchema});

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const isFormValid = validateRequiredFields();
        
        if (!isFormValid) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                console.log({ emailUsername, password });
            }, 1500);
        }
        
    }

    return (
        <Box className="w-[360px] bg-secondary-dark px-5 py-7 rounded-md shadow-md flex flex-col gap-4">
            <header className="flex flex-col justify-start items-start mb-2">
                <h2 className="text-white text-4xl font-medium">
                    Sign <span className="text-primary">In</span>
                </h2>
                <Text className="text-white font-normal text-base leading-4">Keep up to date with all your tasks</Text>
            </header>
            <Box className="h-auto w-full">
                <Form className="gap-4"
                    initialState={initialState}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <InputText
                        type="text"
                        label="Username or email adderss"
                        name="emailUsername"
                        value={emailUsername}
                        onChange={onChange}
                        directives={['notBlank']}
                        validations={{ isRequired: isRequired?.emailUsername, requiredMsg: 'Username or email adderss is a required field'}}
                    />
                    <InputPassword
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        directives={['notBlank']}
                        validations={{ isRequired: isRequired?.password, requiredMsg: 'Password is a required field'}}
                    />
                    <a className="text-primary hover:underline hover:cursor-pointer w-full ">Forgot password?</a>
                    <Button className="px-4 py-2 bg-primary hover:bg-primary-low rounded-md w-full"
                        type="submit"
                        isLoading={isLoading}
                    >
                        Sign In
                    </Button>
                    <hr className="w-full my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
                    <Button className="px-4 py-2 bg-white/10 bg-opacity-30 hover:bg-white/25 border rounded-md w-full text-white-low"
                        type="button"
                    >
                        Sign Up
                    </Button>
                </Form>
            </Box>
        </Box>
    );
}
