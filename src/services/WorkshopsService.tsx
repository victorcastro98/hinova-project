import api from './Api';

export const getWorkshops = async () => {
  try {
    const response = await api.get('/Oficina', {
      params: {
        codigoAssociacao: 601,
        cpfAssociado: ''
      }
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Erro ao buscar oficinas:', error);
    throw error;
  }
};
