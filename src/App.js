import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./views/Users";
import Login from "./views/Login";
import Count from "./views/Count";
import Home from "./views/Home";
import AppbarMui from "./components/AppbarMui";

const API_URL = "http://localhost:8000";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (data.isLogin) {
        setIsLogin(true);
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      return { isLogin: false, user: {} };
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      {/* Navbar se oculta solo en "/" gracias a la lógica interna del componente */}
      <AppbarMui user={user} logout={logout} />

      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/home" /> : <Login login={login} />}
        />
        <Route
          path="/home"
          element={isLogin ? <Home user={user} logout={logout} /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isLogin ? <Users /> : <Navigate to="/" />}
        />
        <Route
          path="/count"
          element={isLogin ? <Count /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;