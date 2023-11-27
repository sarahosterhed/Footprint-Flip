import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gamepage" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
