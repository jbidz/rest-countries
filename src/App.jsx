import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Country from "./components/Country";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "/:name",
    element: <Country />,
    loader: async ({ request, params }) => {
      const res = await fetch(
        `https://restcountries.com/v2/name/${params.name}`,
        {
          signal: request.signal,
        }
      );
      return res;
    },
  },
]);

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <RouterProvider router={router} />
      </main>
    </React.Fragment>
  );
}

export default App;
