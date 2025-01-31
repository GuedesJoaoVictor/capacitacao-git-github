import NavBar from "./components/navbar/NavBar";
import airPlane from "./assets/viagem-programada-1-1.jpg";

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
    </div>
  );
}
