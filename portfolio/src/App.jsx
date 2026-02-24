import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Proyects";
import MainLayout from "./Layouts/MainLayout";


function App() {
  return (
    <>
     <MainLayout>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </MainLayout>
    </>
  );
}

export default App;