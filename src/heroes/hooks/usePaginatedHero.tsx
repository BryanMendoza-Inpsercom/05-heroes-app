import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from "../actions/get-hero-by-page";

interface Props {
  page: number;
  limit: number;
  category: string;
}
export const usePaginatedHero = ({ page, limit, category = "all" }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPage(+page, +limit, category),
    staleTime: 100 * 60 * 5,
  });
};
