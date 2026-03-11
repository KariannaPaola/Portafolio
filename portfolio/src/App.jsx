import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPages";
import InicioPage from "./pages/InicioPage";
import NotFound from "./pages/NotFoundPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InicioPage/>} />
        <Route path="/inicio" element={<InicioPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;