import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Error from "./pages/Error";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";

import { theme } from "./styles/Theme";
import "./index.css";
import AuthWrapper from "./components/AuthWrapper";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: (
      <AuthWrapper>
        <Layout />
      </AuthWrapper>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/chat", element: <Chat /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

