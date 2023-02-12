import { useGetStoreList } from "@/api/queries/store";

function StoreListPage() {
  const { isLoading, isError, data } = useGetStoreList();

  if (isLoading) return <h1>Loading..</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div>
      {data.map(store => (
        <div key={store.id}>{store.name}</div>
      ))}
    </div>
  );
}

export default StoreListPage;
