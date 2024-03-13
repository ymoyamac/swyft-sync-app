import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Sidebar } from '../app/components/Sidebar';

export const Route = createRootRoute({
    component: () => (
        <>
            <aside className="w-[20%] h-[100vh]">
                <Sidebar />
            </aside>
            <main className="w-[80%] h-[100vh] bg-secondary-dark">
                <Outlet />
                <TanStackRouterDevtools />
            </main>
        </>
    ),
})