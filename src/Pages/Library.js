import { Outlet } from "react-router-dom";

import ClubList from "../components/ClubList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { useAuth } from "../context/FakeAuthContext";

function Library() {
  const { logout } = useAuth();

  return (
    <main className="library">
      <NavBar />
      <div className="log-out">
        <button
          className="login-button"
          onClick={(e) => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
      <section>
        <div className="main">
          <div>
            <ClubList />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Library;
