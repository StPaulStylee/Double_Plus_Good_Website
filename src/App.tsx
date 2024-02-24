import "./App.css";
import { Header } from "./Header/Header";
import { About } from "./About/About";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Games } from "./Games/Games";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<About />} />
        <Route path="/games" element={<Games />} />
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
