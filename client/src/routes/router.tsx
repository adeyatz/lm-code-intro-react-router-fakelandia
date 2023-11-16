import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Confession from "../components/confession";
import Misdemeanour from "../components/misdemeanour";
import NotFound from "../components/not-found";
import Layout from "../components/layout";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
