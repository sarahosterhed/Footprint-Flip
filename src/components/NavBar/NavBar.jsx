import { useLocation } from "react-router-dom";
import "./NavBar.css";
import BackButton from "../BackButton/BackButton";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const NavBar = () => {
  const location = useLocation();

  // Functions to determine the route
  const homePagePath = () => {
    return location.pathname === "/";
  };

  const instructionPagePath = () => {
    return location.pathname === "/instruction-page";
  };

  const gamePagePath = () => {
    return location.pathname === "/game-page";
  };

  // Function to determine the className based on the route
  const getNavBarClassName = () => {
    return location.pathname === "/" ? "flex-end" : "";
  };

  return (
    <>
      <nav className={getNavBarClassName()}>
        {homePagePath() && <LanguageSwitch />}
        {instructionPagePath() && (
          <>
            <BackButton />
            <LanguageSwitch />
          </>
        )}
        {gamePagePath() && <BackButton />}
      </nav>
    </>
  );
};

export default NavBar;
