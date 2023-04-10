import API from './axios';

const getAllPokemons = async () => {
	const { data } = await API.get('pokemon');
	// console.log(data);
	return data;
};

export const getPokemon = async (pokemonID:number|string) =>{
	const {data } = await API.get(`pokemon/${pokemonID}`)
		// console.log(data);
		return data
}

export default getAllPokemons;
