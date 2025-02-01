import PackageCard from "../PackageCard/PackageCard";

interface PackagesHideProps {
  isHide: boolean;
}

export default function PackagesHide({ isHide }: PackagesHideProps) {
  return (
    <div
      className={`grid-rows-1 grid-cols-3 grid-flow-row ${
        isHide ? "hidden" : "grid"
      }`}
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
      <PackageCard title="Title 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        saepe aliquam quae aut libero fugiat similique facilis doloremque
        sapiente corrupti.
      </PackageCard>
    </div>
  );
}
