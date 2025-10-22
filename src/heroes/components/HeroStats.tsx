import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatsCard } from "./HeroStatsCard";

export const HeroStats = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatsCard
          title="Total de personajes"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">16</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              12 Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              2 Villains
            </Badge>
          </div>
        </HeroStatsCard>

        <HeroStatsCard
          title="Favorites"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">Superman</div>
          <p className="text-xs text-muted-foreground">Strength: 10/10</p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Fuerte"
          icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">Superman</div>
          <p className="text-xs text-muted-foreground">Strength: 10/10</p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Inteligente"
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">Batman</div>
          <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
        </HeroStatsCard>
      </div>
    </>
  );
};
