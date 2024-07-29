import axios from 'axios';

export const getOficinas = async () => {
  try {
    const response = await axios.get(`http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Oficina?codigoAssociacao=601&cpfAssociado=`);
    console.log("Oficinas: ",response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar oficinas:', error);
    throw error;
  }
};
