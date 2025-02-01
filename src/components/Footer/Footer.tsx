import luvSVG from "../../assets/love.svg";

export default function Footer() {
  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto py-4 flex items-center justify-center">
        Made With Luv <img src={luvSVG} alt="Love" className="w-4 m-2" /> By
        GuedesJoaoVictor
      </div>
    </div>
  );
}
