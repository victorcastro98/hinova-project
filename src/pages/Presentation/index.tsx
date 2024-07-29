
import React from 'react';
import image from "../../assets/hinova-big.svg";
import useOnScreen from "../../hooks/useOnScreen";

function Presentation() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const isLargeScreen = window.innerWidth > 768
  return (
    <div ref={ref} className="w-full flex flex-col md:flex-row justify-between text-white pt-12">
      <div 
      className="md:w-1/3 p-2 text-4xl transition-all duration-500 z-30"
      style={{
        opacity: `${isVisible || !isLargeScreen ? "1" : "0"}`
      }}
      >
      Sobre o grupo Hinova
      <div 
      style={{width: `${isVisible || !isLargeScreen ? "90%" : "0%"}`}}
      className="h-[5px] mt-2 bg-white transition-all duration-500"
      />
      </div>
      <img src={image} alt="image" className="animate-spin-slow w-2/3 p-2 absolute md:static md:w-1/3" />
      <div 
      ref={ref}
      style={{opacity: `${isVisible || !isLargeScreen ? "1" : "0"}`}}
      className="flex flex-col md:w-1/3 p-2 text-end justify-evenly 
      gap-6 text-xl transition-all duration-500 z-30">
        <div>
          Da universidade para o mundo, nascemos em 2007 a partir da amizade
          entre três estudantes, que se uniram para solucionar demandas do
          mercado de informática e tecnologia e fazer a diferença na vida das
          empresas.
        </div>
        <div>
          De lá para cá, o que era apenas um sonho se tornou referência em
          soluções digitais e serviços, oferecendo softwares e ferramentas sob
          medida para cada cliente.
        </div>
        <div>
          Nossa sede está localizada em Belo Horizonte e contamos hoje com uma
          equipe de quase 300 profissionais altamente qualificados e experientes
          na capital mineira e em Goiânia, onde está localizada uma de nossas
          empresas. Estamos prontos para dar todo o suporte que o seu negócio
          precisa!
        </div>
      </div>
    </div>
  );
}

export default Presentation;
