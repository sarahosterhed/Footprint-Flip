import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/gamepage");
  };

  const instructionsPage = () => {
    navigate("/instructions");
  };
  return (
    <div>
      <h1>Welcome</h1>
      <h1>Play and Learn about products impact to environment!</h1>
      <button onClick={handleNavigation}>Let start</button>
      <button onClick={instructionsPage}>Instructions</button>
    </div>
  );
};

export default Home;
