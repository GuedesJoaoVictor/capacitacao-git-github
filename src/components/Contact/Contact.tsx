import ContactInfo from "./ContactInfo/ContactInfo";
import whatsappSVG from "../../assets/whatsapp.svg";
import emailSVG from "../../assets/email.svg";
import locationSVG from "../../assets/location.svg";

export default function Contact() {
  return (
    <div className="w-full bg-sky-800">
      <div className="container mx-auto py-8 flex items-center justify-center flex-col">
        <div className="text-white text-3xl my-8 w-full text-center">
          CONTATO
        </div>
        <div className="flex md:max-w-4xl md:flex-row flex-col space-x-8 justify-center items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.913831689644!2d-53.720497223625934!3d-29.72225517508747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503b5e746b1eaeb%3A0x56e8d3ad477aa41!2sCol%C3%A9gio%20Polit%C3%A9cnico%20-%20UFSM!5e0!3m2!1spt-BR!2sbr!4v1738428688668!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              //   style="border:0;"
              //   allowfullscreen=""
              loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col space-y-4">
            <ContactInfo
              image={locationSVG}
              text="Rua dos Loucos, 794 - Centro Santa Maria - RS"
            />
            <ContactInfo image={whatsappSVG} text="Fone: (55)94002-8922" />
            <ContactInfo image={emailSVG} text="joaoguedes@email.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
