import { createFileRoute } from '@tanstack/react-router';
import { Box, Text } from '../../shared/components';
import { SignInForm } from '../../app/auth/components/SignInForm';

export const Route = createFileRoute('/_auth/signin')({
    component: SignIn,
});
function SignIn() {

    return (
        <Box className="w-[360px] bg-secondary-dark px-5 py-7 rounded-md shadow-md flex flex-col gap-4">
            <header className="flex flex-col justify-start items-start mb-2">
                <h2 className="text-white text-4xl font-medium">
                    Sign <span className="text-primary">In</span>
                </h2>
                <Text className="text-white font-normal text-base leading-4">Keep up to date with all your tasks</Text>
            </header>
            <Box className="h-auto w-full">
                <SignInForm />
            </Box>
        </Box>
    );
}
