import { CustomJunbotron } from "@/components/ui/custom/CustomJunbotron";
import { searchHeroesAction } from "@/heroes/actions/search-heros.action";
import { HeroStats } from "@/heroes/components/HeroStats";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { HeroGrid } from "../hero/HeroGrid";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  const team = searchParams.get("team") ?? "";
  const category = searchParams.get("category") ?? "";
  const universe = searchParams.get("universe") ?? "";
  const status = searchParams.get("status") ?? "";
  const strength = searchParams.get("strength") ?? "";

  const { data: superheroData } = useQuery({
    queryKey: ["search", name, team, category, universe, status, strength],
    queryFn: () =>
      searchHeroesAction({ name, team, category, universe, status, strength }),
    // staleTime: 100 * 60 * 5,
    enabled:
      !!name || !!team || !!category || !!universe || !!status || !!strength,
  });

  return (
    <>
      {/* Header */}
      <CustomJunbotron
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos."
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search and filter */}
      <SearchControl />

      <HeroGrid Heroes={superheroData} />
    </>
  );
};

export default SearchPage;
