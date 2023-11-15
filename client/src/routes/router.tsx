import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Confession from "../components/confession";
import Misdemeanour from "../components/misdemeanour";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/misdemeanour" element={<Misdemeanour />} />
    <Route path="/confession" element={<Confession />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
