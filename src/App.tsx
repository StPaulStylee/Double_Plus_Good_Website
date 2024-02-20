import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { Contact } from "./Contact/Contact";
import { About } from "./About/About";
import {
  BrowserRouter,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Footer } from "./Footer/Footer";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default App;
