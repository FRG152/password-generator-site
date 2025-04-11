import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator";
import Privacidad from "./pages/Privacity";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          Generador de Contraseñas
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/privacidad" className="text-gray-700 hover:text-blue-600">
            Privacidad
          </Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<PasswordGenerator />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
