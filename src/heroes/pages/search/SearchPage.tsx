import { CustomJunbotron } from "@/components/ui/custom/CustomJunbotron";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJunbotron
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos."
      />
      {/* Search and filter */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
