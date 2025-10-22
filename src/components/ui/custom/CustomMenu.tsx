import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return path === pathname;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/') && "bg-slate-200 ", "p-2 rounded-md")}>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/search') && "bg-slate-200 ", "p-2, rounded-md")}>
                        <Link to="/search">Search</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/heroes/1') && "bg-slate-200", "p-2, rounded-md")}>
                        <Link to="/heroes/1">Heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
