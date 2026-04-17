import { instance } from '@/utils/axios';

const beerService = {
	async getBeerRandom() {
		const response = await instance.get('/beers/random');
		return response.data;
	},
	async getBeerById(id: number) {
		const response = await instance.get(`/beers/${id}`);
		return response.data;
	},
	async getBeers(page: number|undefined, ids: number[] | undefined) {
		const response = await instance.get(
			`/beers?page=${page}${ids && '&'}`,
		);
		return response.data;
	},
};

export default beerService;
