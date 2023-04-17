import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import ScreenCharacters from "./Screens/ScreenCharacters";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<ScreenCharacters />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
