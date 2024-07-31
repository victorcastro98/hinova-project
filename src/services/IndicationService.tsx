import api from './Api';

export interface Indication {
  CodigoAssociacao: number;
  DataCriacao: string;
  CpfAssociado: string;
  EmailAssociado: string;
  NomeAssociado: string;
  TelefoneAssociado: string;
  PlacaVeiculoAssociado: string;
  NomeAmigo: string;
  TelefoneAmigo: string;
  EmailAmigo: string;
  Observacao: string;
}

export interface IndicationData {
  Indicacao: Indication;
  Remetente: string;
  Copias: string[];
}

export const postInidcation = async (indicacaoData: IndicationData) => {
  try {
    const response = await api.post('/Indicacao', indicacaoData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = response.data;
    console.log("Resposta da Indicação:", data);
    return data;
  } catch (error) {
    console.error('Erro ao enviar indicação:', error);
    throw error;
  }
};
