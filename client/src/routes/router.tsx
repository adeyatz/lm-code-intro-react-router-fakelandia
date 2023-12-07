import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/home-page";
import ConfessionPage from "../components/pages/confession-page";
import MisdemeanourPage from "../components/pages/misdemeanour-page";
import NotFound from "../components/pages/not-found";
import Layout from "../components/layout/layout";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="misdemeanour" element={<MisdemeanourPage />} />
      <Route path="confession" element={<ConfessionPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
