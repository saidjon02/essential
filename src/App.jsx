import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "boxicons";
import Home from "./Home";
import Admin from "./Admin";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Helmet>
                  <title>Home - Essential Things</title>
                  <meta
                    name="description"
                    content="Discover the best apps and tools for your creativity and entertainment."
                  />
                  <link
                    rel="canonical"
                    href="https://smartessentials.netlify.app/"
                  />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <>
                <Helmet>
                  <title>Admin - Essential Things</title>
                  <meta
                    name="description"
                    content="This site is managed by Fazilov Saidjon, the admin of the Essential Things website."
                  />
                  <link
                    rel="canonical"
                    href="https://smartessentials.netlify.app/admin"
                  />
                </Helmet>
                <Admin />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
