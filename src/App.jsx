import Home from "./components/home";
import Header from "./components/header";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
