import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/allRoutes";
import Home from "./pages/home/home";
import Login from "./pages/login/loginForm";
import Register from "./pages/register/registerForm";
import "./styles/index.scss";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
