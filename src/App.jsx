import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      {/* cart section */}

          <Navbar />
          <main className="min-h-screen">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer />
          </footer>
    </>
  );
}

export default App;
