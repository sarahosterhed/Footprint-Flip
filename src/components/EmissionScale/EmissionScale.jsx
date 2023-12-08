import './EmissionScale.css'
import { useTranslation } from "react-i18next";

const EmissionScale = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='space-between'>
                <p className="top-item item-color">{t("low_emission")}</p>
                <p className="top-item item-color">{t("high_emission")}</p>
            </div>
            <div className="scale">
                <div className="arrow left"></div>
                <div className="horizontal-line"></div>
                <div className="arrow right"></div>
            </div>
        </>
    )
}

export default EmissionScale;