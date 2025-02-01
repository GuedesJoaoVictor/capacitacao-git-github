interface ServicesGridItemProps {
  title: string;
  image: string;
  gridRow?: "1" | "2";
}

export default function ServicesGridItem({
  title,
  image,
  gridRow,
}: ServicesGridItemProps) {
  return (
    <div className={`relative ${gridRow ? `row-span-${gridRow}` : ""}`}>
      <div className="absolute top-0 right-0 pr-4 pt-4 text-white text-2xl font-mono z-20">
        {title}
      </div>
      <img src={image} alt="Image Grid" className="h-full object-cover" />
    </div>
  );
}
