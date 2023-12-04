import { useNavigate } from "react-router-dom";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/gamepage");
  }
  return (
    <div className="home-container home-page">
      <section >
        <h1 className="heading">Welcome to Card Game</h1>
        <h1 className="heading">Play and Learn about products impact to environment!</h1>
        <button className="start-button" onClick={handleNavigation}>Let start</button>
        <Link to="/instructions">
          <p className="instruction-text" >CHECKOUT INSTRUCTIONS</p>
        </Link>
        <Footer />
      </section>
    </div>
  )
}

export default Home;