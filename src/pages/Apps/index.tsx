import image1 from "../../assets/app01.png";
import image2 from "../../assets/app02.png";
import image3 from "../../assets/app03.png";
import image1Mob from "../../assets/app01-mob.png";
import image2Mob from "../../assets/app02-mob.png";
import image3Mob from "../../assets/app03-mob.png";

function Apps() {
  return (
    <div className="w-full flex flex-col gap-4 px-4 text-blue-dark pt-6 items-center">
      <h1 className="text-6xl text-blue-dark mb-3">Nossos Apps</h1>
      <a
        href="https://hinovamobile.com.br/site/index.php/2021/11/18/app-associado/"
        className="cursor-pointer"
      >
        <div className="flex flex-row gap-3 justify-center">
          <img src={image1} alt="image" className="md:flex hidden" />
          <div className="gap-4 flex flex-col md:w-1/3 h-full items-center text-start">
            <div className="md:text-5xl text-2xl w-full flex flex-row">
              <img
                src={image1Mob}
                alt="image"
                className="md:hidden mr-4 w-1/2"
              />
              <div>App Associado</div>
            </div>
            <div className="text-lg">
              É um aplicativo destinado ao Associado das Associações de Proteção
              Veicular, com mais de 1,9 milhões de usuários em todo país e mais
              de 2 milhões de downloads.
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://hinovamobile.com.br/site/index.php/2021/11/18/app-consultor/"
        className="cursor-pointer"
      >
        <div className="flex flex-row gap-3 justify-center">
          <div className="gap-4 flex flex-col md:w-1/3 h-full items-center text-end">
            <div className="md:text-5xl text-2xl w-full flex flex-row">
              <div>App Consultor</div>
              <img
                src={image2Mob}
                alt="image"
                className="md:hidden ml-4 w-1/2"
              />
            </div>
            <div className="text-lg">
              É um aplicativo que surge com a premissa do ”Cadastramento Fácil
              em Tempo Real”. Desenvolvido especialmente para os consultores, o
              aplicativo otimiza o processo de adesão e cadastramento.
            </div>
          </div>
          <img src={image2} alt="image" className="md:flex hidden" />
        </div>
      </a>
      <a
        href="https://hinovamobile.com.br/site/index.php/2021/11/18/app-visto/"
        className="cursor-pointer"
      >
        <div className="flex flex-row gap-3 justify-center">
          <img src={image3} alt="image" className="md:flex hidden" />

          <div className="gap-4 flex flex-col md:w-1/3 h-full items-center text-start">
            <div className="md:text-5xl text-2xl w-full flex flex-row">
              <img
                src={image3Mob}
                alt="image"
                className="md:hidden mr-4 w-1/2"
              />
              <div>App Visto</div>
            </div>
            <div className="text-lg">
              Quer praticidade, comodidade e ainda permitir que o próprio
              associado realize a vistoria? Com o App Visto é possível. Conheça
              as facilidades do App Visto e tenha agilidade e total segurança na
              emissão de laudos de vistoria.
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Apps;
