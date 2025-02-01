interface ContactInfoProps {
  image: string;
  text: string;
}

export default function ContactInfo({ image, text }: ContactInfoProps) {
  return (
    <div className="flex md:flex-row flex-col items-center gap-8">
      <img src={image} alt="contact info" className="w-14" />
      <p className="text-white">{text}</p>
    </div>
  );
}
