interface ServicesGridItemProps {
  title: string;
  image: string;
  gridRow?: true;
}

export default function ServicesGridItem({
  title,
  image,
  gridRow,
}: ServicesGridItemProps) {
  return (
    <div className={`relative ${gridRow && "row-span-2"}`}>
      <div className="absolute top-0 right-0 pr-4 pt-4 text-white text-2xl font-mono z-20">
        {title}
      </div>
      <img
        src={image}
        alt="Image Grid"
        className="w-full md:h-full h-72 object-cover"
      />
    </div>
  );
}
