import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import ScreenCharacters from "./Screens/ScreenCharacters";
import Main from "./Components/Main";
import ScreenComics from "./Screens/ScreenComics";

import ScreenSeries from "./Screens/ScreenSeries";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/characters" element={<ScreenCharacters />} />
          <Route path="/comics" element={<ScreenComics />} />
          <Route path="/series" element={<ScreenSeries />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
