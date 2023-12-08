import EmissionScale from "./EmissionScale/EmissionScale";
import './TopSection.css'
import { useTranslation } from "react-i18next";
import ScoreCounter from "./ScoreCounter/ScoreCounter";


const TopSection = () => {

    const { t } = useTranslation();
    return (
        <div className="top-section">
            <div className='space-between'>
                <p className="top-item item-color">{t("low_emission")}</p>
                <ScoreCounter />
                <p className="top-item item-color">{t("high_emission")}</p>
            </div>
            <EmissionScale />
        </div>
    )
}

export default TopSection;