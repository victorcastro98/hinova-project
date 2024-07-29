import React from "react";
import Oficinas from "../../services/Oficinas";

function ServicesList() {
  const [mouseIsIn, setMouseIsIn] = React.useState('none' as string)
  const list = [
    {
      title: "Assistência 24h",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Clube de Descontos",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Documentos",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Eventos",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Financeiro",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Furto e Roubo",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    },
    {
      title: "Rastreamento",
      text: "consectetur adipiscing elit",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;",
    }
  ];

  const mapedList = list.map((item) => {
    return (
      <div 
      onMouseEnter={()=>{setMouseIsIn(item.title)}} 
      onMouseLeave={()=>{setMouseIsIn("none")}}
      className="cursor-pointer rounded-md bg-blue-dark p-2 flex flex-col text-center
       text-blue-pop md:w-[300px] w-[150px] h-[150px] justify-center"
       >
        <div 
        className=" transition-all duration-500"
        style={{display: `${mouseIsIn === item.title ? "none" : ""}`}}
        >
          <div className="text-xl md:text-4xl">{item.title}</div>
          <div className="text-lg">{item.text}</div>
        </div>
        <div 
        className="md:text-xl transition-all duration-500"
        style={{display: `${mouseIsIn === item.title ? "" : "none"}`}}>{item.text2}</div>
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-6xl text-blue-dark">Serviços</div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-[10px] mt-6">{mapedList}</div>
      <Oficinas/>
    </div>
  );
}

export default ServicesList;
