import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { use } from "react";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";
import { useHeroSummary } from "../hooks/useHeroSummary";
import { HeroStatsCard } from "./HeroStatsCard";

export const HeroStats = () => {
  /*  const { data: summary } = useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutos
  }); */
  const { favoriteCount } = use(FavoriteHeroContext);

  const { data: summary } = useHeroSummary();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatsCard
          title="Total de personajes"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              {summary?.heroCount} Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {summary?.villainCount} Villains
            </Badge>
          </div>
        </HeroStatsCard>

        <HeroStatsCard
          title="Favorites"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">{favoriteCount}</div>
          <p className="text-xs text-muted-foreground">
            {summary?.totalHeroes &&
              ((favoriteCount / summary.totalHeroes) * 100).toFixed(2)}
            % of total
          </p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Fuerte"
          icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">{summary?.strongestHero.name}</div>
          <p className="text-xs text-muted-foreground">
            Strength: {summary?.strongestHero.strength}/10
          </p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Inteligente"
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">{summary?.smartestHero.name}</div>
          <p className="text-xs text-muted-foreground">
            Intelligence: {summary?.smartestHero.intelligence}/10
          </p>
        </HeroStatsCard>
      </div>
    </>
  );
};
