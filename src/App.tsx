import { Routes, Route } from "react-router-dom";

import MoviesSearchPage from "@/pages/MoviesSearchPage";
import NoMatch from "@/components/NoMatch";
import Layout from "@/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MoviesSearchPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
