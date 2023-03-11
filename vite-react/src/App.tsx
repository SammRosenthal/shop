import { useUserApi } from "./hooks/api/userUserApi";

function App() {
  const { userQuery } = useUserApi();

  console.log(userQuery.data);

  return <div className="text-3xl bg-red-500">hello</div>;
}

export default App;
