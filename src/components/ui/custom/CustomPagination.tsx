import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../button"

interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

    const page = 2 as number;

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button disabled={page === 1} variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Anteriores
            </Button>

            {
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        variant={page === index + 1 ? 'default' : 'outline'} size="sm">
                        {index + 1}
                    </Button>
                ))
            }

            <Button
                disabled={page === totalPages}
                variant="outline" size="sm">
                Siguientes
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
