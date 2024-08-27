import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
// import Contact from "./components/Contact";
import ResDetails from "./components/ResDetails";

import cartContext from "./contexts/cartContext";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const inCart = (item, cartItems) => {
      for (let i = 0; i < cartItems.length; i++) {
        if (item.id === cartItems[i].id) return true;
      }
      return false;
    };

    if (inCart(item, cartItems)) {
      setCartItems([...cartItems, { ...item }]);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  const deleteFromCart = (item) => {
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const updateCartItem = (item, type) => {
    setCartItems((cartItems) =>
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...item,
            count: type === "inc" ? item.count + 1 : item.count - 1,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <cartContext.Provider
      value={{
        total,
        cartItems,
        setTotal,
        addToCart,
        deleteFromCart,
        updateCartItem,
        clearCart,
      }}
    >
      <div>
        <Header />
        <Outlet />
      </div>
    </cartContext.Provider>
  );
};

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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
