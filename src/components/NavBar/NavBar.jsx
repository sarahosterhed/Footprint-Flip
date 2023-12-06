import { useState } from "react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import languageIcon from "../../assets/language.svg";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLang = () => {
    const newLang = i18n.language === "English" ? "Swedish" : "English";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };
  return (
    <>
      <nav>
        <div className="languages">
          <button className="lang_switcher" onClick={changeLang}>
            <img
              src={languageIcon}
              style={{ width: "20px" }}
              alt="langaugeIcon"
            />{" "}
            {lang}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
