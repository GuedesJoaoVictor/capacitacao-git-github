import NavBarLink from "./components/NavBarLink";
import NavBarItensContainer from "./components/NavBarLinksContainer";
import airplaneLogo from "../../assets/logo.svg";

export default function NavBar() {
  return (
    <div className="w-full h-44 md:h-24 bg-gray-50 m-4">
      <div className="container max-w-5xl mx-auto p-4 h-44 md:h-24 flex flex-col md:flex-row items-center bg-gray-50">
        <div className="font-black flex">
          <img src={airplaneLogo} alt="logo" />
        </div>
        <NavBarItensContainer>
          <NavBarLink>INICIO</NavBarLink>
          <NavBarLink>A EMPRESA</NavBarLink>
          <NavBarLink>PACOTES</NavBarLink>
          <NavBarLink>SERVIÇOS</NavBarLink>
          <NavBarLink>DICAS</NavBarLink>
          <NavBarLink>CONTATO</NavBarLink>
        </NavBarItensContainer>
      </div>
    </div>
  );
}
