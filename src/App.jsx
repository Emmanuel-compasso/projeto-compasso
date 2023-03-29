import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
