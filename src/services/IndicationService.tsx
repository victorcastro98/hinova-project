/* eslint-disable @typescript-eslint/no-explicit-any */

import api from './Api';

export const postInidcation = async (indicacaoData: any) => {
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
