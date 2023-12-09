import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Library from "./Pages/Library";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PlayerSrc from "./components/PlayerSrc";
import Player from "./components/Player";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="player-src" />} />
            <Route path="player-src" element={<PlayerSrc />} />
            <Route path="player-src/:id" element={<Player />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
