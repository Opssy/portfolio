import About from "./components/aboutMe/About";
import Header from "./components/header/Header";
import Hero from "./components/heroPage/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
