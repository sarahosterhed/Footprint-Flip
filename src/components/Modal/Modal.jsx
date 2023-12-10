import { useState, useEffect } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Confetti from "react-confetti";

const Modal = ({ setIsOpen, correctCount, totalCards }) => {
  const { t } = useTranslation();
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      setIsConfettiActive(false);
    }, 6000);

    return () => clearTimeout(confettiTimeout);
  }, []);

  let message = "";

  if (correctCount < 5) {
    message = "Not Bad ! 👍";
  } else if (correctCount >= 5 && correctCount < totalCards) {
    message = "Good job 👏";
  } else if (correctCount === totalCards) {
    message = " 🥳 Congratulations you won";
  }

  return (
    <>
      {isConfettiActive && (
        <div className="confetti-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
      )}
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading"> 🎉 {t("score")} 🎉</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            {t("score_text")} <span>{`${correctCount}/${totalCards}`}</span>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
