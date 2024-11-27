import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Builder from "./pages/builder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
