import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Name from "./components/name";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Navbar />
      <Name />
      <About />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
