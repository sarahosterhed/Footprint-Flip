import { useNavigate } from "react-router-dom";
import "./home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/gamepage");
  };

  const instructionsPage = () => {
    navigate("/instructions");
  };
  return (
    <div className="home-container home-page">
      <section>
        <h1 className="heading">Welcome to Card Game</h1>
        <h1 className="heading">
          Play and Learn about products impact to environment!
        </h1>
        <button className="start-button" onClick={handleNavigation}>
          Let start
        </button>
        <button onClick={instructionsPage}>Instructions</button>
        <p className="instruction-text" onClick={instructionsPage}>
          CHECKOUT INSTRUCTIONS
        </p>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
