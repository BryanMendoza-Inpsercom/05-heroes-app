import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../breadcrumb"
import { Link } from "react-router";

interface Breacdcrumb {

    label: string;
    to: string;

}
interface Props {
    breadcrums?: Breacdcrumb[];
    currentPage: string;
}

export const CustomBreadcrumbs = ({ breadcrums, currentPage }: Props) => {
    return (

        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">
                            Inicio
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    breadcrums?.map((rutas) => (
                        <div className="flex items-center">
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={rutas.to}>
                                        {rutas.label}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>

                    ))
                }

                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black">{currentPage}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    )
}
