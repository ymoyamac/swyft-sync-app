import { Button, Form, InputPassword, InputText } from '../../../shared/components';
import { ValidationSchema } from '../../../shared/components/Form/interfaces';
import { useSignIn } from '../hooks/useSignIn';

const initialState = {
    email: 'yael.moya.mac@gmail.com',
    password: '!Passw0rd4'
};

const validationSchema: ValidationSchema = {
    email: {
        required: true
    },
    password: {
        required: true
    }
};

export function SignInForm() {

    const { email, password, isLogin, isRequired, onChange, onSubmit } = useSignIn({ initialState, validationSchema });

    return (
        <Form className="gap-4"
            initialState={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <InputText
                type="text"
                label="Username or email adderss"
                name="email"
                value={email}
                onChange={onChange}
                directives={['notBlank']}
                validations={{ isRequired: isRequired?.email, requiredMsg: 'Username or email adderss is a required field'}}
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
                isLoading={isLogin}
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
    );
}

