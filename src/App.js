import "./App.css";
import About from "./component/about";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Nav from "./component/nav";
import Projects from "./component/projects";
import Resume from "./component/resume";
import Testamony from "./component/testamony";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
