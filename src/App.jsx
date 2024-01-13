import "./App.css";
import SearchAppBar from "./assets/components/appBar";
import Home from "./assets/Pages/Home";
import Movies from "./assets/Pages/Movies";
import Series from "./assets/Pages/Series";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
