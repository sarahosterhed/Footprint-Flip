import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { game } from "./reducers/game";
import Home from "./pages/Home/Home";
import GamePage from "./pages/GamePage/GamePage";
import InstructionsPage from "./pages/InstructionPage/InstructionPage";

import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gamePage" element={<GamePage />}></Route>
            <Route path="/instructionsPage" element={ <InstructionsPage /> }></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
