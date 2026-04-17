import { useQuery } from '@tanstack/react-query';
import beerService from '@/services/beerService';

const keys = {
	random: 'random',
	id: 'id',
	beers: 'beers',
};

export const useRandomBeer = () => {
	return useQuery({
		queryKey: [keys.random],
		queryFn: () => beerService.getBeerRandom(),
	});
};

export const useBeerById = (id: number) => {
	return useQuery({
		queryKey: [keys.id, id],
		queryFn: () => beerService.getBeerById(id),
	});
};

export const useBeers = (params: { page: number; ids?: number[] }) => {
	return useQuery({
		queryKey: [keys.beers, params],
		queryFn: () => beerService.getBeers(params.page, params.ids),
	});
};
