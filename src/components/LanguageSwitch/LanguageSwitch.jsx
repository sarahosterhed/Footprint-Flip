import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        setLang(i18n.language === "English" ? "Swedish" : "English");
    }, [i18n.language]);

    const changeLang = () => {
        const newLang = i18n.language === "English" ? "Swedish" : "English";
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };

    return (
        <div className="languages">
            <button className="lang_switcher" onClick={changeLang}>
                {lang}
            </button>
        </div>
    )
}

export default LanguageSwitch