interface ContactInfoProps {
  image: string;
  text: string;
}

export default function ContactInfo({ image, text }: ContactInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <img src={image} alt="contact info" className="w-14" />
      <p className="text-white">{text}</p>
    </div>
  );
}
