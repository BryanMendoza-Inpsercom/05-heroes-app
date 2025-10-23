import { createBrowserRouter, Navigate } from "react-router";
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
                path: '/heroes/:idSlug',
                element: <HeroPage />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" />
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