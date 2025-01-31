import NavBarLink from "./components/NavBarLink";
import NavBarItensContainer from "./components/NavBarLinksContainer";
import airplaneLogo from "../../assets/logo.svg";

export default function NavBar() {
  return (
    <div className="w-full bg-gray-100">
      <div className="container max-w-5xl mx-auto p-4 h-24 flex items-center bg-gray-100">
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
