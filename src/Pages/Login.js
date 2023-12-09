import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("petar@gmail.com");
  const [password, setPassword] = useState("1234");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/library", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className="login-page">
      <NavBar />
      <section>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <button className="login-button">Login</button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
