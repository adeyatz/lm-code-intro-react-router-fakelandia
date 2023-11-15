import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Confession from "../components/confession";
import Misdemeanour from "../components/misdemeanour";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/misdemeanour" element={<Misdemeanour />} />
    <Route path="/confession" element={<Confession />} />
  </Routes>
);

export default Router;
