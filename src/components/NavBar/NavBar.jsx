import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import languageIcon from "../../assets/language.svg";
import BackButton from "../BackButton/BackButton";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const location = useLocation();


  useEffect(() => {
    setLang(i18n.language === "English" ? "Swedish" : "English");
  }, [i18n.language]);

  const changeLang = () => {
    const newLang = i18n.language === "English" ? "Swedish" : "English";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  // Function to determine if BackButton should be displayed based on the route
  const hideOnHomePage = () => {
    return location.pathname !== "/";
  };

  // Function to determine the className based on the route
  const getNavBarClassName = () => {
    return location.pathname === "/" ? "flex-end" : "";
  };

  return (
    <>
      <nav className={getNavBarClassName()}>
        {hideOnHomePage() && <BackButton />}
        <div className="languages">
          <button className="lang_switcher" onClick={changeLang}>
            <img
              src={languageIcon}
              style={{ width: "20%", height: "50%" }}
              alt="language-Icon"
            />{" "}
            {lang}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
