import "./App.css";
import Hero from "../src/Components/Hero";
import Header from "./Components/Header";
import NewsLatter from "./Components/NewsLatter";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="">
        <Header></Header>
        <Hero></Hero>
        <NewsLatter></NewsLatter>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
