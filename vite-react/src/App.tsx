import { Outlet } from "react-router-dom";
import { BaseLayout } from "./components/layouts/BaseLayout";

function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default App;
