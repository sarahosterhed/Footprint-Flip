import { Link } from "react-router-dom";
import "../PageNotFound/PageNotFound.css";
import minion from "../../assets/minions.png";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Page Not Found. Error 404</h1>
      <img src={minion} alt="minion" loading="lazy"/>
      <Link to="/">Please Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;