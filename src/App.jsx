import React from "react";
import "./styles/index.scss";
import "./styles/variables.scss";
import Main from "./components/pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorization from "./components/pages/Authorization";
import { useContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store"
import Registration from "./components/pages/Registration";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Posts",
      element: <Main />,
    },
    {
      path: "/",
      element: <Authorization />,
    },
    {
      path:'/signup',
      element: <Registration/>
    }
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
