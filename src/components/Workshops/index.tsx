import React from "react";
import { getWorkshops } from "../../services/WorkshopsService";

const Workshops: React.FC = () => {
  type WorkShopType = {
    Id: number;
    Nome: string;
    Descricao: string;
    DescricaoCurta: string;
    Endereco: string;
    Latitude: string;
    Longitude: string;
    Foto: string;
    AvaliacaoUsuario: number;
    CodigoAssociacao: number;
    Email: string;
    Telefone1: string;
    Telefone2: string;
    Ativo: boolean;
  };
  const [workShops, setWorkshops] = React.useState<WorkShopType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false as boolean);
  const [errorMessage, setErrorMessage] = React.useState("" as string);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchWorkshops = async () => {
      try {
        const data = await getWorkshops();
        setWorkshops(data.ListaOficinas);
      } catch (error) {
        setErrorMessage(Error.toString());
      }
      setIsLoading(false);
    };

    fetchWorkshops();
  }, []);

  return (
    <div
      className="md:w-[920px] flex flex-col justify-center items-center 
    rounded-md bg-blue-dark p-2 mt-6"
    >
      <h1 className="text-6xl text-blue-pop">Oficinas</h1>
      {errorMessage && (
        <div className="text-white mt-4 w-full text-center">
          nenhuma oficina encontrada
        </div>
      )}
      {isLoading ? (
        <div className="text-white">loading...</div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 mt-6">
          {errorMessage
            ? null
            : workShops.map((item) => (
                <div
                  className="cursor-pointer rounded-md bg-white p-2 flex flex-col text-center
             text-blue-pop md:w-[200px] w-[120px] h-[150px] justify-center"
                >
                  <img
                    className="object-contain bg-blue-pop w-fit p-2 rounded"
                    src={`data:image/jpeg;base64,${item.Foto}`}
                    alt="image"
                  />
                  <div className="text-md">{item.Nome}</div>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Workshops;
