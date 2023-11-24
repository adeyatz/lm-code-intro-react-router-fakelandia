import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home";
import Confession from "../components/pages/confession";
import Misdemeanour from "../components/pages/misdemeanour";
import NotFound from "../components/pages/not-found";
import Layout from "../components/layout/layout";

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
