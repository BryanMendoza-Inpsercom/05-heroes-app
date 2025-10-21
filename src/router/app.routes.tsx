import { createBrowserRouter } from "react-router";
import { AdminLayouts } from "@/admin/layouts/AdminLayouts";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroLayouts } from "@/heroes/layouts/HeroLayouts";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

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
                index: true,
                element: <AdminPage />,
            },
        ]
    },
]);