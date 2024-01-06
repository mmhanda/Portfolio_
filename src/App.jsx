import "./App.scss"
import Navbar from "./chat/navbar/Navbar"
import SideBar from "./chat/sideBar/SideBar";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <SideBar />
    </section>
    <section>parallax</section>
    <section>services</section>
    <section>parallax</section>
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section>contact</section>
  </div>;
};

export default App;
