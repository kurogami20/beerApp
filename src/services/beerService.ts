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
	async getBeers(page: number, ids: number[] | undefined) {
	

		if (!ids) {
		const response = await instance.get(
			`/beers?page=${page}`,
		);
		return response.data;
		}
		if (ids) {
		const response = await instance.get(
			`/beers?page=${page}&ids=${ids[0]},${ids[1]},${ids[2]}`,
			
		);
		
		return response.data;
	}
	},
};

export default beerService;
