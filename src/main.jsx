// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About.jsx";
import Contect from "./component/Contect.jsx";
import Error from "./component/Error.jsx";
import Body from "./component/Body.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";
// import Grocery from "./utils/Grocery.jsx";
import { lazy, Suspense } from "react";
import Cart from "./component/Cart.jsx";

/**Chunking, dynamic import, lazy loding, on demand loading, code spillting */

const Grocery = lazy(() => import("./utils/Grocery.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
