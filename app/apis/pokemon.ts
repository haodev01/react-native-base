import axiosClient from 'app/apis/axiosClient';

const pokemonApi = {
  getAll: () => {
    return axiosClient.get('/pokemon/ditto');
  },
};

export default pokemonApi;
