import "./EmissionScale.css";
import { useTranslation } from "react-i18next";

const EmissionScale = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p className="info-text">{t("info_text")}</p>
        <div className="scale">
          <div className="arrow left"></div>
          <div className="horizontal-line"></div>
          <div className="arrow right"></div>
        </div>
      </div>
    </>
  );
};

export default EmissionScale;
