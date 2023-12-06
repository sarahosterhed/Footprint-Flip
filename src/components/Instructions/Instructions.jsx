import { useNavigate } from "react-router-dom";
import "./Instructions.css";
import { useTranslation } from 'react-i18next';

const Instructions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const playGame = () => {
    navigate("/gamepage");
  };
  return (
    <>
      <h1>{t('how_to_play')}</h1>
      <div className="instructions">
        <ol>
          <li>
           {t('step_1')}
          </li>
          <li>
          {t('step_2')}
          </li>
          <li>
          {t('step_3')}
          </li>
        </ol>

        <p>
        {t('note')}
        </p>
        <button className="start-button" onClick={playGame}>
        {t('play_button')}
        </button>
      </div>
    </>
  );
};

export default Instructions;
