import { useLocation } from "react-router-dom";
const NotFound: React.FC = () => {
  const url = useLocation();

  return <>Error 404: {url.pathname} :Page Not Found!</>;
};
export default NotFound;
