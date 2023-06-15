import React from "react";
import { ROUTES } from "./routes";
import { Routes, Route } from "react-router-dom";

import { LoginPage, RegisterPage } from "./pages";
import { Layout, RequireAuth, NoRequireAuth } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<NoRequireAuth />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<RequireAuth />}>
          {ROUTES.map(({ path, Element, children }) =>
            !children ? (
              <Route key={path} path={path} element={<Element />} />
            ) : (
              <Route key={path} path={path}>
                <Route index element={<Element />} />
                {children.map(({ path, Element }) => (
                  <Route key={path} path={path} element={<Element />} />
                ))}
              </Route>
            )
          )}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

// https://levelup.gitconnected.com/implementing-a-dark-theme-toggle-with-react-redux-and-styled-components-e637c4d41e2f
// https://www.youtube.com/watch?v=VMF1i5I2imE
