import { useNavigate } from "react-router-dom";
import "./InstructionPage.css";
import { useTranslation } from "react-i18next";

const InstructionPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const playGame = () => {
    navigate("/game-page");
  };

  return (
    <>
      <section className="container">
        <div className="content">
          <h2>{t("instr")}</h2>
          <ol>
            <li>{t("step_1")}</li>
            <li>{t("step_2")}</li>
            <li>{t("step_3")}</li>
          </ol>
          <p className="note">{t("disclaimer")}</p>
          <button className="button" onClick={playGame}>
            {t("play_button")}
          </button>
        </div>
      </section>
    </>
  );
};

export default InstructionPage;
