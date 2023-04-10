
/** @type {import('./$types').PageServerLoad} */

import { getPokemon } from '../../api/queries';

// console.log($query.data.results);
export function load({ params }) {
	const id = Number(params.pokemonID);
	const fetchdata = async (id: number) => {
		try {
			const res = await getPokemon(id);
			return res;
		} catch (error) {
			console.log(error);
		}
	};
	const data = fetchdata(id);
	return { data, id };
}
