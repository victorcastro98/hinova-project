import React, { useState } from "react";
import { postInidcation } from "../../services/IndicationService";

const IndicationForm: React.FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    Indicacao: {
      CodigoAssociacao: 601,
      DataCriacao: "",
      CpfAssociado: "",
      EmailAssociado: "",
      NomeAssociado: "",
      TelefoneAssociado: "",
      PlacaVeiculoAssociado: "",
      NomeAmigo: "",
      TelefoneAmigo: "",
      EmailAmigo: "",
      Observacao: "",
    },
    Remetente: "",
    Copias: [],
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      Indicacao: {
        ...prevState.Indicacao,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await postInidcation(formData);
      setMensagem(response.Sucesso || "Indicação enviada com sucesso!");
    } catch (error) {
      setMensagem("Erro ao enviar a indicação. Tente novamente.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full 
    w-full bg-gray-900 bg-opacity-90 fixed z-40"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-blue-light text-white text-start p-6 rounded-xl gap-3"
      >
        <div className="w-full flex justify-end">
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-blue-pop rounded-full w-8 h-8 flex justify-center 
            items-center cursor-pointer hover:bg-blue-dark"
          >
            X
          </div>
        </div>
        <h1 className="text-xl">Formulário de Indicação de Amigo</h1>
        <div className="flex flex-row gap-2">
          <div>
            <div className="flex flex-col gap-2">
              <label>Data de Criação:</label>
              <input
                className="w-full text-blue-dark"
                type="date"
                name="DataCriacao"
                value={formData.Indicacao.DataCriacao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>CPF do Associado:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="CpfAssociado"
                value={formData.Indicacao.CpfAssociado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email do Associado:</label>
              <input
                className="w-full text-blue-dark"
                type="email"
                name="EmailAssociado"
                value={formData.Indicacao.EmailAssociado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Nome do Associado:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="NomeAssociado"
                value={formData.Indicacao.NomeAssociado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Telefone do Associado:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="TelefoneAssociado"
                value={formData.Indicacao.TelefoneAssociado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Placa do Veículo do Associado:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="PlacaVeiculoAssociado"
                value={formData.Indicacao.PlacaVeiculoAssociado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Nome do Amigo:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="NomeAmigo"
                value={formData.Indicacao.NomeAmigo}
                onChange={handleChange}
                required
              />
            </div>
            
          </div>
          <div>
          <div className="flex flex-col gap-2">
              <label>Telefone do Amigo:</label>
              <input
                className="w-full text-blue-dark"
                type="text"
                name="TelefoneAmigo"
                value={formData.Indicacao.TelefoneAmigo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email do Amigo:</label>
              <input
                className="w-full text-blue-dark"
                type="email"
                name="EmailAmigo"
                value={formData.Indicacao.EmailAmigo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Remetente:</label>
              <input
                className="w-full text-blue-dark"
                type="email"
                name="Remetente"
                value={formData.Remetente}
                onChange={(e) =>
                  setFormData({ ...formData, Remetente: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2 h-[40%]">
              <label>Observação:</label>
              <textarea
              className="h-full text-blue-dark"
                name="Observacao"
                value={formData.Indicacao.Observacao}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <button className="bg-blue-dark rounded text-white" type="submit">Enviar Indicação</button>
        {mensagem && <p>{mensagem}</p>}
      </form>
    </div>
  );
};

export default IndicationForm;
