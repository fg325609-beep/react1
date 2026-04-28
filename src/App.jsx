import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Sectionone from "./Components/sectionone/Sectionone";
import Sectiontwo from "./Components/sectiontwo/Sectiontwo"; // Agar fayl nomi Sectiontwo bo'lsa, S ni katta qiling
import Sectiontheare from "./Components/sectiontheare/Sectiontheare"; // "Sectiontheare" - bosh harfga e'tibor bering

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Sectiontheare />
    </>
  );
}

export default App;