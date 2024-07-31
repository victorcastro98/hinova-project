import React from "react";
import logo from "./assets/LOGO-HINOVA.svg";
import Carousel from "./components/Carousel";
import img1 from "./assets/carousel/img01-web.png";
import img2 from "./assets/carousel/img02-web.png";
import img1Mob from "./assets/carousel/img01-mob.png";
import img2Mob from "./assets/carousel/img02-mob.png";
import ServicesList from "./pages/ServicesList";
import Contact from "./pages/Contact";
import Apps from "./pages/Apps";
import Presentation from "./pages/Presentation";
import IndicationForm from "./components/IndicationForm/Index";
import { AlertProvider } from "./hooks/alertContext";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isOnTop, setIsOnTop] = React.useState(true as boolean);
  const servicesRef = React.useRef<HTMLDivElement | null>(null);
  const appRef = React.useRef<HTMLDivElement | null>(null);
  const contactRef = React.useRef<HTMLDivElement | null>(null);
  const isLargeScreen = window.innerWidth > 768;

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AlertProvider>
      <div className="w-full h-full bg-gradient-to-b from-background-start to-background-end flex flex-col">
      <div
        style={{ height: `${isOnTop ? "100px" : "80px"}` }}
        className="w-screen bg-white flex flex-col md:flex-row md:text-2xl text-blue-light 
        transition-all duration-300 fixed z-30 items-center"
      >
        <img
          style={{ height: `${isOnTop && isLargeScreen ? "90px" : "45px"}` }}
          className="transition-all duration-300"
          src={logo}
          alt="logo"
        />
        <div className="w-full flex flex-row justify-evenly">
          <button
            onClick={() => {
              servicesRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-blue-dark"
          >
            Serviços
          </button>
          <button
            onClick={() => {
              appRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-blue-dark"
          >
            Nossos Apps
          </button>
          <button
            onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-blue-dark"
          >
            Fale conosco
          </button>
        </div>
      </div>
      <div
        className="w-full transition-all duration-300"
        style={{ paddingTop: `${isOnTop ? "100px" : "50px"}` }}
      >
        <Carousel images={isLargeScreen ? [img1, img2] : [img1Mob, img2Mob]} />
      </div>
      <div className="w-full mt-4 ">
        <Presentation />
      </div>
      <div ref={servicesRef} className="w-full mt-4 ">
        <ServicesList />
      </div>
      <div ref={appRef} className="w-full mt-4 ">
        <Apps />
      </div>
      <div ref={contactRef} className="w-full mt-4 ">
        <Contact />
      </div>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="cursor-pointer hover:text-white text-blue-pop text-lg text-center pb-2 bg-blue-dark"
      >
        Quer indicar a Hinova para um amigo?
      </div>

      {isModalOpen ? <IndicationForm setIsOpen={setIsModalOpen} /> : null}
    </div>
    </AlertProvider>
    
  );
}

export default App;
