import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Registro from "./Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
