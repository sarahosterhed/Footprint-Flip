import { useNavigate } from 'react-router-dom';
import backBtn from '../../assets/back-btn.svg';
import './BackButton.css'


const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className='back-btn'>
      <img src={backBtn} alt="Back Button" onClick={() => navigate('/')} />
    </div>
  )
}

export default BackButton;