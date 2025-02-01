import { useEffect, useRef, useState } from "react";
import PackageCard from "./components/PackageCard/PackageCard";
import PackagesHide from "./components/PackagesHide/PackagesHide";

export default function Packages() {
  const [cardIsHide, setCardIsHide] = useState<boolean>(true);
  const [nameButton, setNameButton] = useState<string>("VER MAIS");
  const refPackagesHide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scrolla a tela para baixo para que seja visivel os card novos
    if (!cardIsHide && refPackagesHide.current) {
      refPackagesHide.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [cardIsHide]);

  const onClickSetHide = () => {
    // Muda o estado para que assim os cards fiquem visiveis
    setCardIsHide((prevState) => !prevState);
    nameButton === "VER MAIS"
      ? setNameButton("VER MENOS")
      : setNameButton("VER MAIS");
  };

  return (
    <div className="w-full bg-blue-500">
      <div className="container mx-auto py-2">
        <div className="text-center w-full text-white text-3xl my-8">
          PACOTES TURISTICOS
        </div>
        <div
          className={`grid grid-rows-1 lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4 items-center justify-center`}
        >
          <PackageCard title="Title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe aliquam quae aut libero fugiat similique facilis doloremque
            sapiente corrupti.
          </PackageCard>
          <PackageCard title="Title 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe aliquam quae aut libero fugiat similique facilis doloremque
            sapiente corrupti.
          </PackageCard>
          <PackageCard title="Title 3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe aliquam quae aut libero fugiat similique facilis doloremque
            sapiente corrupti.
          </PackageCard>
        </div>
        <div ref={refPackagesHide}>
          <PackagesHide isHide={cardIsHide} />
        </div>
        <div className="flex w-full m-4">
          <button className="text-white text-2xl" onClick={onClickSetHide}>
            {nameButton}
          </button>
        </div>
      </div>
    </div>
  );
}
