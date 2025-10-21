import { Outlet } from "react-router"

export const HeroLayouts = () => {
    return (
        <div className="bg-red-500">
            <Outlet />
        </div>
    )
}
