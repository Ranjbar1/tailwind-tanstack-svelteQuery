
/** @type {import('./$types').PageServerLoad} */

import { getPokemon } from '../../api/queries';

export function load({ params }) {
	const id = params.pokemonID;
	const fetchdata = async (id: number|string) => {
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
