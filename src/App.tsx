import NavBar from "./components/NavBar/NavBar";
import airPlane from "./assets/viagem-programada-1-1.jpg";
import AboutUs from "./components/AboutUs/AboutUs";

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
    </div>
  );
}
