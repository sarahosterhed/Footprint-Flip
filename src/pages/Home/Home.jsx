import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// import Lottie from "lottie-react";
// import footprint from "../../animations/footprint_co2.json";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = () => {
    navigate("/game-page");
  };
  return (
    <>
      <section className="container">
        <main className="content">
          <h1>{t('welcome_message')}</h1>
          <h3>
            {t('play_learn')}
          </h3>
          <button className="button" onClick={handleNavigation}>
            {t('start')}
          </button>
          <Link to="/instruction-page">
            <p className="instructions-link" >{t('check_instruction')}</p>
          </Link>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Home;
