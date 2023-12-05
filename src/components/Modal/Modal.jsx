import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, correctCount, totalCards }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Score</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            Your final score is: <span>{`${correctCount}/${totalCards}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
