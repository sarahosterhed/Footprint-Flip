import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import footprint from "../../animations/footprint_co2.json";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = () => {
    navigate("/gamepage");
  };

  const style = {
    height: 220,
  };
  return (
    <>
      <div>
        <div className="home-container home-page">
          <section className="title_container">
            <h1 className="title">{t('welcome_message')}</h1>
            <h1 className="title">
              {t('play_learn')}
            </h1>
            <div >
              <Lottie animationData={footprint} style={style} className="home-animation" />
            </div>
            <button className="start-button" onClick={handleNavigation}>
              {t('start')}
            </button>
            <Link to="/instructions" style={{ textDecoration: 'none' }}>
              <p className="instruction-info" >{t('check_instruction')}</p>
            </Link>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
