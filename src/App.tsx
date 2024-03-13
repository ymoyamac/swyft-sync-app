import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/global.css'
import { Box } from './shared/components';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const queryClient = new QueryClient();

export function App() {
    return (
        <Box className="flex flex-row items-center justify-center gap-2 h-[100vh] w-full m-auto bg-dark text-white">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </Box>
    );
}
