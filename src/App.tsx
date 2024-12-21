import { BrowserRouter, Route, Routes } from "react-router";

import Signin from "./pages/Signin";
import Repository from "./pages/Repository";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signin />} />
        <Route path="repositories" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};
