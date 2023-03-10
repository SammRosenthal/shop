import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

function genericErrorHandler(error: unknown) {
  // TODO
  // Validate error shape and display toast message
  // if not a handled error display a fallback message
  console.error(error);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: genericErrorHandler,
    },
    mutations: {
      onError: genericErrorHandler,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <ProductList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

/** START PART OF MSW API MOCKING */
// import { setupWorker } from 'msw'
import { handlers } from "./mocks/handlers";
import { ProductList } from "./pages/ProductList";
if (process.env.NODE_ENV === "development") {
  const { setupWorker } = await import("msw");
  const worker = setupWorker(...handlers);
  worker.start();
}
/** END PART OF MSW API MOCKING */
