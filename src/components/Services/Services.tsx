import ServicesGridItem from "./components/ServicesGridItem/ServicesGridItem";
import romaImage from "../../assets/roma.webp";
import shipImage from "../../assets/barco.jpg";
import parisImage from "../../assets/paris.jpg";
import bhImage from "../../assets/belo_horizonte.png";
import airplaneImage from "../../assets/airplane_3.jpg";

export default function Services() {
  return (
    <div className="w-full bg-gray-50">
      <div className="container max-w-5xl mx-auto py-2">
        <div className="text-center w-full text-sky-700 text-3xl my-8">
          SERVIÇOS
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
          <ServicesGridItem title="RESERVA DE HOTÉIS" image={romaImage} />
          <ServicesGridItem title="PACOTES DE VIAGEM" image={shipImage} />
          <ServicesGridItem // Imagem com espaçamento 2
            title="SEGURO VIAGEM"
            image={parisImage}
            gridRow="2"
          />
          <ServicesGridItem title="INTERCÂMBIOS" image={bhImage} />
          <ServicesGridItem title="PASSAGENS AÉREAS" image={airplaneImage} />
        </div>
      </div>
    </div>
  );
}
