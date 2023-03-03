import SearchHistory from "@/components/search/SearchHistory/SearchHistory";
import Trending from "@/components/search/Trending/Trending";
import SearchNav from "@/components/search/SearchNav/SearchNav";
import * as S from "./search.styled";

function SearchPage() {
  return (
    <S.Layout>
      <SearchNav />
      <SearchHistory />
      <Trending />
    </S.Layout>
  );
}

export default SearchPage;
