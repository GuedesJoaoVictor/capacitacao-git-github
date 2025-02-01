import NavBar from "./components/NavBar/NavBar";
import airPlane from "./assets/airplane.jpg";
import AboutUs from "./components/AboutUs/AboutUs";
import Packages from "./components/Packages/Packages";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="w-full">
        <img
          src={airPlane}
          alt="airplane"
          className="w-full object-cover md:h-[30vw] h-[50vw]"
        />
      </div>
      <AboutUs />
      <Packages />
      <Services />
      <Contact />
    </div>
  );
}
