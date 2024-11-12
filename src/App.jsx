import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Form from "./components/Form";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "album",
        element: <Form />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
