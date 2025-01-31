import airplaneImage from "../../assets/avião-da-viagem-aérea-31660569.webp";

export default function AboutUs() {
  return (
    <div className="w-full">
      <div className="container md:max-w-4xl mx-auto flex md:flex-row flex-col space-x-8 items-center justify-center">
        <div className="m-4 text-center">
          <div className="text-2xl text-blue-600 font-mono">QUEM SOMOS</div>
          <p className="m-4 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut
            ratione consectetur. Fugit voluptatem, aperiam velit quisquam
            architecto tempore nisi accusantium reiciendis delectus laboriosam
            ipsam optio est consequatur facere quam?
          </p>
        </div>
        <div className="m-4">
          <img
            src={airplaneImage}
            alt="Airplane"
            className="w-[60vw] rounded"
          />
        </div>
      </div>
    </div>
  );
}
