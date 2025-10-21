import { AdminLayouts } from "@/admin/layouts/AdminLayouts";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroLayouts } from "@/heroes/layouts/HeroLayouts";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroLayouts />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/heroes/1',
                element: <HeroPage />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayouts />,
        children: [
            {
                path: '/admin',
                element: <AdminPage />,
            },
        ]
    },
]);