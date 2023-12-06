import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = () => {
    navigate("/gamepage");
  };
  return (
    <div className="home-container home-page">
      <section>
        <h1 className="heading">{t('welcome_message')}</h1>
        <h1 className="heading">
         {t('play_learn')}
        </h1>
        <button className="start-button" onClick={handleNavigation}>
        {t('start')}
        </button>
        <Link to="/instructions">
          <p className="instruction-text"> {t('check_instruction')}</p>
        </Link>

        <Footer />
      </section>
    </div>
  );
};

export default Home;
