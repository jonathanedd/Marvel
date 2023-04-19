import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import ScreenCharacters from "./Screens/ScreenCharacters";
import Main from "./Components/Main";
import ScreenComics from "./Screens/ScreenComics";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/characters" element={<ScreenCharacters />} />
          <Route path="/comics" element={<ScreenComics />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
