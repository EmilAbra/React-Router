import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import "./styles.css";
import { BookRoutes } from "./BookRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/books"}>Books</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
