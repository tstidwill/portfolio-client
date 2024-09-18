import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Reading from "./components/Reading/Reading";

function App() {
  return (
    <main className="main">
      <div className="main__landing">
        <Header />
        <Hero />
      </div>
      <Portfolio />
      <Reading />
      <Footer />
    </main>
  );
}

export default App;
