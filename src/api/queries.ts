import API from './axios';

const getAllPokemons = async () => {
	const { data } = await API.get('pokemon');
	console.log(data);

	return data;
};
export default getAllPokemons;
