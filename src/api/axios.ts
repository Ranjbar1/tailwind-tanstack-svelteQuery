import { env } from '$env/dynamic/public';
import axios from 'axios';

const API_KEY = env.PUBLIC_API_KEY || process.env.PUBLIC_API_KEY;
console.log(API_KEY);

const baseURL = 'https://pokeapi.co/api/v2/';

export default axios.create({
	baseURL
});

const headersList = {
	Accept: '*/*',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`
};

const reqOptions = {
	url: 'https://api.openai.com/v1/images/generations',
	headers: headersList
};
export const DALL_E_API = axios.create({
	baseURL: reqOptions.url,
	headers: headersList
});

export const fetchDallE = async (description = '', n = 1) => {
	try {
		const { data } = await DALL_E_API.post('', {
			prompt: description,
			n,
			size: '1024x1024'
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
