import PackageCard from "../PackageCard/PackageCard";

interface PackagesHideProps {
  isHide: boolean;
}

export default function PackagesHide({ isHide }: PackagesHideProps) {
  return (
    <div
      className={`grid grid-rows-1 lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4 items-center justify-center mt-4 ${
        isHide ? "hidden" : "grid"
      }`}
    >
      <PackageCard title="Title 4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        saepe aliquam quae aut libero fugiat similique facilis doloremque
        sapiente corrupti.
      </PackageCard>
      <PackageCard title="Title 5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        saepe aliquam quae aut libero fugiat similique facilis doloremque
        sapiente corrupti.
      </PackageCard>
      <PackageCard title="Title 6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        saepe aliquam quae aut libero fugiat similique facilis doloremque
        sapiente corrupti.
      </PackageCard>
    </div>
  );
}
