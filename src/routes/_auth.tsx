import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Box } from '../shared/components';

export const Route = createFileRoute('/_auth')({
    component: AuthLayout,
});
function AuthLayout() {
    return (
        <Box>
            <Outlet />
        </Box>
    );
}
