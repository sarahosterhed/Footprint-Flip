import { useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
       navigate("/gamepage");
    }
  return (
    <div>
     <h1>Welcome</h1>
     <h1>Play and Learn about products impact to environment!</h1>
     <button onClick={handleNavigation}>Let start</button>
    </div>
  )
}

export default Home
