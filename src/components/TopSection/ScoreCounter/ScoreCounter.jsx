import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import flag from '../../../animations/flag.json'
import './ScoreCounter.css'


const ScoreCounter = () => {
    const correctCount = useSelector((state) => state.game.correctCount);
    const totalCards = useSelector((state) => state.game.totalCards);

    const { t } = useTranslation();

    return (
        <div className="top-item score-color score">
            {t("score")} <Lottie animationData={flag} className="flags" />{" "}
            <span className="total-score">{`${correctCount}/${totalCards - 2}`}</span>
        </div>
    )
}

export default ScoreCounter;