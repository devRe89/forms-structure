import Header from "./components/ui/Header";
import Usuario from "./components/Usuario";
import Direccion from "./components/Direccion";

// router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Usuario />} />
        <Route exact path="/direccion" element={<Direccion />} />
      </Routes>
    </Router>
  );
}

export default App;
