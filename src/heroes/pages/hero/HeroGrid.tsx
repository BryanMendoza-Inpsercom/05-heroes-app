import type { Hero } from "@/heroes/interfaces/hero.interface";
import { HeroGridCar } from "./components/HeroGridCar"

interface Prop {
    Heroes ?: Hero[];
}

export const HeroGrid = ({ Heroes = [] }: Prop) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {
                Heroes.map(heroe => (
                    <HeroGridCar key={heroe.id} Heroe={heroe} />
                ))
            }
        </div>
    )
}
