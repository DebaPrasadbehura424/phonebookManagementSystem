import { Route, Routes } from "react-router-dom";
import ViewContact from "./pages/ViewContact";
import SaveContact from "./pages/SaveContact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewContact />} />
      <Route path="/save" element={<SaveContact />} />
    </Routes>
  );
}

export default App;
