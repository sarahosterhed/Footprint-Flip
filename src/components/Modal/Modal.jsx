import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';


const Modal = ({ setIsOpen, correctCount, totalCards }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{t('score')}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
           {t('score_text')} <span>{`${correctCount}/${totalCards}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
