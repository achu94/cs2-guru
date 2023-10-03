import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Maps from "./pages/Maps";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
