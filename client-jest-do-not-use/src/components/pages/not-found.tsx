import { useLocation } from "react-router-dom";
const NotFound: React.FC = () => {
  const url = useLocation();

  return <>[Error 404] Page Not Found: {url.pathname}</>;
};
export default NotFound;
