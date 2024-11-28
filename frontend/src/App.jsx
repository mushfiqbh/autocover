import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Builder from "./pages/builder";
import NotFound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
