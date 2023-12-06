import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { game } from "./reducers/game";
import Home from "./pages/Home/Home";
import GamePage from "./pages/GamePage/GamePage";
import Instructions from "./components/Instructions/Instructions";
import NavBar from "./components/NavBar/NavBar";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gamepage" element={<GamePage />}></Route>
            <Route path="/instructions" element={<Instructions />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
