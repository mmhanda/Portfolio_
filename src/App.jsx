import "./App.scss"
import Navbar from "./components/navbar/Navbar"
import SideBar from "./components/sideBar/SideBar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <SideBar />
    </section>
    <section id="Services">parallax</section>
    <section >services</section>
    <section id="Contact">parallax</section>
    <section>portfolio1</section>
    <section id="About">portfolio2</section>
    <section>portfolio3</section>
    <section >contact</section>
  </div>;
};

export default App;
