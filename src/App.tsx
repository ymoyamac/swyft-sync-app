import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

import './styles/global.css'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {

    return (
        <div className="bg-dark text-white h-full">
            <RouterProvider router={router} />
        </div>
    );
}
