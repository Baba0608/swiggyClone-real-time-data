import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import ResDetails from "./components/ResDetails";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading the contact page...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <ResDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
