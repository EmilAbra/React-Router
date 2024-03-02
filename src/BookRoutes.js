import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";

export function BookRoutes() {
  return (
    <Routes>
      <Route index element={<BookLayout />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
    </Routes>
  );
}
