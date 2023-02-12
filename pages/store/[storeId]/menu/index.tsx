import { useGetStore } from "@/api/queries/store";
import * as S from "./menu.styled";

function MenuPage() {
  const { data, isLoading, isError } = useGetStore({ storeId: 1 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <S.Container>
      <S.Text>Store Menu Page</S.Text>
      <div>
        <h2>{data.name}</h2>
        <p>당도: {data.rating}</p>
      </div>
    </S.Container>
  );
}

export default MenuPage;
