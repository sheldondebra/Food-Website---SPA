import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categories />
      <Contact/>
      <Footer />

    </div>;
}

export default App;
