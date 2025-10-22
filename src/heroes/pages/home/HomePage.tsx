import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomJunbotron } from "@/components/ui/custom/CustomJunbotron";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroStats } from "@/heroes/components/HeroStats";
import {
  Heart,
} from "lucide-react";
import { HeroGrid } from "../hero/HeroGrid";
import { CustomPagination } from "@/components/ui/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from "@/heroes/actions/get-hero-by-page";

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  /*   const rutas = [
      { label: 'Home', to: '/' },
      { label: 'Home1', to: '/' },
      { label: 'Home2', to: '/' },
      { label: 'Home3', to: '/' },
    ] */

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPage(),
    staleTime: 100 * 60 * 5,
  });

  /*   useEffect(() => {
      getHeroesByPage().then()
    }, []);
   */

  return (
    <>
      <>
        {/* Header */}
        <CustomJunbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra super héroes y villanos."
        />

        <CustomBreadcrumbs currentPage="Buscador de heroes" />
        {/* <CustomBreadcrumbs breadcrums={rutas} currentPage="Buscador de heroes" /> */}

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}


        {/* Advanced Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Advanced Filters</h3>
            <Button variant="ghost">Clear All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Team</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All teams
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All categories
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Universe</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All universes
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                All statuses
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">
              Minimum Strength: 0/10
            </label>
            <div className="relative flex w-full touch-none select-none items-center mt-2">
              <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                <div
                  className="absolute h-full bg-primary"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
              onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites"
              onClick={() => setActiveTab('favorites')} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes"
              onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains"
              onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Todos los personajes */}
            <HeroGrid Heroes={heroesResponse?.heroes}/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Favoritos*/}

          </TabsContent>
          <TabsContent value="heroes">
            {/* Heroes*/}

          </TabsContent>
          <TabsContent value="villains">
            {/* Villanos */}

          </TabsContent>
        </Tabs>



        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};