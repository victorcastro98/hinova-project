/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { getWorkshops } from "../../services/WorkshopsService";

const Workshops: React.FC = () => {
  const [oficinas, setOficinas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false as boolean);
  const MOCK = [
    {
      Id: 1,
      Nome: "Oficina Gecar",
      Descricao:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados. \\n-Funilaria\\n-Pintura\\n-Limpeza geral do veículo\\n-Serviços de mecânica\\n-Revitalização de pintura (contratação à parte)",
      DescricaoCurta: "Lanternagem e Pintura",
      Endereco: "Rua Ignês Maria, 326 - Betim Industrial",
      Latitude: "-19.9622435",
      Longitude: "-44.175102",
      Foto: "kjayhsdoiuqwnalkdlkansdahlckhakldasd",
      AvaliacaoUsuario: 0,
      CodigoAssociacao: 601,
      Email: "contato@hinovamobile.com.br",
      Telefone1: "31-34193100",
      Telefone2: null,
      Ativo: true,
    },
    {
      Id: 1,
      Nome: "Oficina fake",
      Descricao:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados. \\n-Funilaria\\n-Pintura\\n-Limpeza geral do veículo\\n-Serviços de mecânica\\n-Revitalização de pintura (contratação à parte)",
      DescricaoCurta: "Lanternagem e Pintura",
      Endereco: "Rua Ignês Maria, 326 - Betim Industrial",
      Latitude: "-19.9622435",
      Longitude: "-44.175102",
      Foto: "kjayhsdoiuqwnalkdlkansdahlckhakldasd",
      AvaliacaoUsuario: 0,
      CodigoAssociacao: 601,
      Email: "contato@hinovamobile.com.br",
      Telefone1: "31-34193100",
      Telefone2: null,
      Ativo: true,
    },
    {
      Id: 1,
      Nome: "Oficina Mockada",
      Descricao:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados. \\n-Funilaria\\n-Pintura\\n-Limpeza geral do veículo\\n-Serviços de mecânica\\n-Revitalização de pintura (contratação à parte)",
      DescricaoCurta: "Lanternagem e Pintura",
      Endereco: "Rua Ignês Maria, 326 - Betim Industrial",
      Latitude: "-19.9622435",
      Longitude: "-44.175102",
      Foto: "kjayhsdoiuqwnalkdlkansdahlckhakldasd",
      AvaliacaoUsuario: 0,
      CodigoAssociacao: 601,
      Email: "contato@hinovamobile.com.br",
      Telefone1: "31-34193100",
      Telefone2: null,
      Ativo: true,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    const fetchOficinas = async () => {
      try {
        const data = await getWorkshops();
        setOficinas(data.ListaOficinas);
      } catch (error) {
        setOficinas(MOCK);
      }
      setIsLoading(false);
    };

    fetchOficinas();
  }, []);

  return (
    <div className="md:w-[920px] flex flex-col justify-center items-center 
    rounded-md bg-blue-dark p-2 mt-6">
      <h1 className="text-6xl text-blue-pop">Oficinas</h1>
      {isLoading ? (
        <>loading...</>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 mt-6">
          {oficinas.map((item) => (
            <div
              className="cursor-pointer rounded-md bg-white p-2 flex flex-col text-center
             text-blue-pop md:w-[200px] w-[150px] h-[150px] justify-center"
            >
              <div className=" transition-all duration-500" style={{}}>
                <img
                  className="w-[50px] object-cover rounded"
                  src={item.Foto}
                  alt="image"
                />
                <div className="text-xl">{item.Nome}</div>
                <div className="text-lg">{item.DescricaoCurta}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Workshops;
