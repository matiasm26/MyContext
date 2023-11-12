import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./MyContext";
import Navbar from "./componentes/Navbar";
import Favoritos from "./views/Favoritos";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
        </Routes>
      </Provider>
    </div>
  );
};
export default App;
