import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Sidebar } from '../app/components/Sidebar';
import { useAuthStore } from '../app/auth/store/auth.store';

export const Route = createRootRoute({
    component: Root,
});

function Root() {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    return (
        <>
            {isAuthenticated && <aside className="w-[20%] h-[100vh]">
                <Sidebar />
            </aside>}
            <main className={`w-full h-[100vh] bg-secondary-dark`}>
                <Outlet />
                <TanStackRouterDevtools />
            </main>
        </>
    );
}
